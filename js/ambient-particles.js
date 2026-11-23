/**
 * De Portal Schools — Ambient Live Canvas Engine
 * Lightweight, high-performance 60fps dynamic background effects
 * Across all portals: Admin Login, Teacher Portal, CBT, and Dashboard.
 */

(function () {
  function initAmbientLiveCanvases() {
    const canvases = document.querySelectorAll('.ambient-live-canvas');
    canvases.forEach(canvas => {
      if (canvas._initialized) return;
      canvas._initialized = true;

      const ctx = canvas.getContext('2d');
      let width, height, dpr;
      let animId = null;

      function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = canvas.parentElement ? canvas.parentElement.offsetWidth : window.innerWidth;
        height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
      }
      window.addEventListener('resize', resize, { passive: true });
      resize();

      const theme = canvas.getAttribute('data-theme') || 'sky';
      const colors = theme === 'emerald'
        ? ['#10b981', '#34d399', '#059669', '#38bdf8']
        : (theme === 'purple'
            ? ['#a855f7', '#c084fc', '#38bdf8', '#fbbf24']
            : ['#38bdf8', '#0ea5e9', '#34d399', '#fbbf24']);

      const count = Math.min(Math.max(25, Math.floor((width * height) / 22000)), 50);
      const particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
          color: colors[i % colors.length],
          alpha: Math.random() * 0.45 + 0.25
        });
      }

      let inView = true;
      if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver(entries => {
          inView = entries[0].isIntersecting;
          if (inView && !animId) render();
        }, { threshold: 0.05 });
        obs.observe(canvas);
      }

      function render() {
        if (!inView) { animId = null; return; }
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 90) {
              ctx.strokeStyle = p.color;
              ctx.globalAlpha = (1 - dist / 90) * 0.18;
              ctx.lineWidth = 0.75;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
        ctx.globalAlpha = 1.0;
        animId = requestAnimationFrame(render);
      }
      render();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAmbientLiveCanvases);
  } else {
    initAmbientLiveCanvases();
  }
  window.initAmbientLiveCanvases = initAmbientLiveCanvases;
})();
