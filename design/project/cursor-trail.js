// Estela del cursor (adaptada de la plantilla Davies) — línea suave que sigue al ratón + onda al hacer clic.
(function () {
  window.initCursorTrail = function (canvas, opts) {
    if (!canvas || canvas.dataset.trailOn) return;
    if (window.matchMedia('(hover: none)').matches || window.innerWidth < 1200) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    canvas.dataset.trailOn = '1';

    var o = opts || {};
    var rgb = o.rgb || '217,45,32';
    var ease = o.ease || 0.11;          // cuanto más bajo, más suave y lento
    var fade = o.fade || 0.035;         // ritmo al que se recoge la cola
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = window.innerWidth, h = window.innerHeight;
    var target = null, head = null, points = [], ripples = [], raf, life = 0;

    function size() {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    window.addEventListener('resize', size);

    window.addEventListener('mousemove', function (e) {
      target = { x: e.clientX, y: e.clientY };
      if (!head) head = { x: e.clientX, y: e.clientY };
      life = 1;
    });

    window.addEventListener('mousedown', function (e) {
      ripples.push({ x: e.clientX, y: e.clientY, radius: 0, alpha: 0.9 });
    });

    function draw() {
      ctx.clearRect(0, 0, w, h);

      if (target && head) {
        head.x += (target.x - head.x) * ease;
        head.y += (target.y - head.y) * ease;
        points.push({ x: head.x, y: head.y });
        if (points.length > 26) points.shift();

        if (points.length > 3) {
          var first = points[0], last = points[points.length - 1];
          var grad = ctx.createLinearGradient(first.x, first.y, last.x, last.y);
          grad.addColorStop(0, 'rgba(' + rgb + ',0)');
          grad.addColorStop(1, 'rgba(' + rgb + ',' + (0.85 * life).toFixed(3) + ')');
          ctx.beginPath();
          ctx.moveTo(first.x, first.y);
          for (var i = 1; i < points.length - 1; i++) {
            var mx = (points[i].x + points[i + 1].x) / 2;
            var my = (points[i].y + points[i + 1].y) / 2;
            ctx.quadraticCurveTo(points[i].x, points[i].y, mx, my);
          }
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.shadowColor = 'rgba(' + rgb + ',.45)';
          ctx.shadowBlur = 12;
          ctx.stroke();
          ctx.shadowBlur = 0;

          ctx.beginPath();
          ctx.arc(last.x, last.y, 2.6, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(' + rgb + ',' + (0.95 * life).toFixed(3) + ')';
          ctx.fill();
        }

        // en reposo la cola se recoge poco a poco
        if (Math.abs(target.x - head.x) < 0.4 && Math.abs(target.y - head.y) < 0.4) {
          life = Math.max(life - fade, 0);
          if (points.length > 2) points.shift();
          if (life === 0) points.length = 0;
        }
      }

      for (var j = ripples.length - 1; j >= 0; j--) {
        var r = ripples[j];
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(' + rgb + ',' + Math.max(r.alpha, 0) + ')';
        ctx.lineWidth = 1.4;
        ctx.stroke();
        r.radius += 1.5;
        r.alpha -= 0.013;
        if (r.alpha <= 0) ripples.splice(j, 1);
      }

      raf = requestAnimationFrame(draw);
    }
    draw();

    return function stop() { cancelAnimationFrame(raf); };
  };
})();
