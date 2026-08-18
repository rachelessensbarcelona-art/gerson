// Gerson — site runtime. Plain JS, no build step, no framework.
// Recreates (outside the Claude Design preview harness) the interactions the
// design specified: booking-link wiring, hover-style emulation, the pricing
// calculator, scroll reveals, the FAQ accordion and the scroll progress bar.
(function () {
  'use strict';

  // ── Booking link ───────────────────────────────────────────────────────
  // Single source of truth: change this once and every "Reservar…" link on
  // the page updates. Replace with the real Calendly/Cal.com link when
  // it's ready — every data-book-url anchor also ships a working default
  // href so the page still works with JS disabled.
  var BOOK_URL = 'https://cal.com/gerson';
  document.querySelectorAll('[data-book-url]').forEach(function (el) {
    el.href = BOOK_URL;
  });

  // ── Hover styles ───────────────────────────────────────────────────────
  // data-hover="<css declarations>" is applied on top of the element's base
  // inline style on mouseenter, and reverted on mouseleave.
  document.querySelectorAll('[data-hover]').forEach(function (el) {
    var base = el.getAttribute('style') || '';
    var hover = el.getAttribute('data-hover') || '';
    el.addEventListener('mouseenter', function () {
      el.setAttribute('style', base + ';' + hover);
    });
    el.addEventListener('mouseleave', function () {
      el.setAttribute('style', base);
    });
  });

  // ── Cursor trail + click ripple ───────────────────────────────────────
  var trail = document.querySelector('[data-trail]');
  if (trail && window.initCursorTrail) window.initCursorTrail(trail, { rgb: '217,45,32' });

  // ── Scroll progress bar ────────────────────────────────────────────────
  var prog = document.querySelector('[data-prog]');
  if (prog) {
    var onScroll = function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.transform = 'scaleX(' + (max > 0 ? window.scrollY / max : 0) + ')';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── FAQ accordion ──────────────────────────────────────────────────────
  document.querySelectorAll('[data-faq]').forEach(function (item) {
    var btn = item.querySelector('[data-faq-btn]');
    var panel = item.querySelector('[data-faq-panel]');
    var ic = item.querySelector('[data-faq-ic]');
    if (!btn || !panel) return;
    btn.addEventListener('click', function () {
      var open = panel.style.maxHeight && panel.style.maxHeight !== '0px';
      document.querySelectorAll('[data-faq-panel]').forEach(function (p) { p.style.maxHeight = '0px'; });
      document.querySelectorAll('[data-faq-ic]').forEach(function (i) {
        i.style.transform = 'none'; i.style.background = 'transparent';
      });
      if (!open) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        if (ic) { ic.style.transform = 'rotate(45deg)'; ic.style.background = 'rgba(217,45,32,.15)'; }
      }
    });
  });

  // ── Scroll reveals (fade/rise + line-draw + strike-through) ───────────
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) {
    var rv = Array.prototype.slice.call(document.querySelectorAll('[data-rv]'));
    rv.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(26px)';
      el.style.filter = 'blur(8px)';
      el.style.transition = 'opacity 1s cubic-bezier(.16,1,.3,1), transform 1s cubic-bezier(.16,1,.3,1), filter 1s cubic-bezier(.16,1,.3,1)';
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (!e.isIntersecting) return;
        setTimeout(function () {
          e.target.style.opacity = '1';
          e.target.style.transform = 'none';
          e.target.style.filter = 'none';
          e.target.querySelectorAll('[data-draw]').forEach(function (p) {
            p.style.animation = 'gdraw 2.2s cubic-bezier(.16,1,.3,1) .15s forwards';
          });
          if (e.target.hasAttribute('data-strike')) {
            var line = e.target.querySelector('[data-strike-l]');
            var txt = e.target.querySelector('[data-strike-t]');
            if (line && txt) line.style.width = (txt.offsetWidth + 4) + 'px';
          }
        }, i * 80);
        io.unobserve(e.target);
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -60px' });
    rv.forEach(function (el) { io.observe(el); });
  }

  // ── Pricing calculator ────────────────────────────────────────────────
  var BASE_PRICE = 40;
  var state = { qty: 4, unit: 10 };

  function setState(qty, unit) {
    if (qty != null) state.qty = qty;
    if (unit != null) state.unit = unit;
    render();
  }

  function render() {
    var videosCost = state.qty * state.unit;
    var total = BASE_PRICE + videosCost;
    document.querySelectorAll('[data-out="qty"]').forEach(function (el) { el.textContent = state.qty; });
    document.querySelectorAll('[data-out="unit"]').forEach(function (el) { el.textContent = state.unit; });
    document.querySelectorAll('[data-out="total"]').forEach(function (el) { el.textContent = total; });
    document.querySelectorAll('[data-out="videosCost"]').forEach(function (el) { el.textContent = videosCost; });

    document.querySelectorAll('[data-plan-btn]').forEach(function (btn) {
      var parts = btn.getAttribute('data-plan-btn').split(',');
      var glow = btn.querySelector('.opt-glow');
      if (glow) glow.classList.toggle('active', state.qty === +parts[0] && state.unit === +parts[1]);
    });
    document.querySelectorAll('[data-qty-btn]').forEach(function (btn) {
      var glow = btn.querySelector('.opt-glow');
      if (glow) glow.classList.toggle('active', state.qty === +btn.getAttribute('data-qty-btn'));
    });
    document.querySelectorAll('[data-unit-btn]').forEach(function (btn) {
      var glow = btn.querySelector('.opt-glow');
      if (glow) glow.classList.toggle('active', state.unit === +btn.getAttribute('data-unit-btn'));
    });
  }

  document.querySelectorAll('[data-plan-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var parts = btn.getAttribute('data-plan-btn').split(',');
      setState(+parts[0], +parts[1]);
    });
  });
  document.querySelectorAll('[data-qty-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () { setState(+btn.getAttribute('data-qty-btn'), null); });
  });
  document.querySelectorAll('[data-unit-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () { setState(null, +btn.getAttribute('data-unit-btn')); });
  });

  render();
})();
