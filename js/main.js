/* The Shelter of Becoming — main.js */

// COMPARE SLIDERS — handles all .compare-wrap instances on the page
(function () {
  document.querySelectorAll('.compare-wrap').forEach(function (wrap) {
    const clip   = wrap.querySelector('.compare-clip');
    const handle = wrap.querySelector('.compare-handle');
    if (!clip || !handle) return;
    let active = false;

    function setPos(clientX) {
      const rect = wrap.getBoundingClientRect();
      const pct  = Math.min(Math.max((clientX - rect.left) / rect.width, 0.02), 0.98);
      const val  = (pct * 100).toFixed(2) + '%';
      clip.style.width  = val;
      handle.style.left = val;
    }

    handle.addEventListener('mousedown',  e => { active = true; e.preventDefault(); });
    window.addEventListener('mouseup',    () => { active = false; });
    window.addEventListener('mousemove',  e => { if (active) setPos(e.clientX); });
    handle.addEventListener('touchstart', () => { active = true; }, { passive: true });
    window.addEventListener('touchend',   () => { active = false; });
    window.addEventListener('touchmove',  e => { if (active) setPos(e.touches[0].clientX); }, { passive: true });
  });
})();

// NAV — solid glass background on scroll
(function () {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('solid', window.scrollY > 60);
  }, { passive: true });
})();

// NAV — mobile hamburger
(function () {
  const nav  = document.getElementById('nav');
  const hamb = document.getElementById('hamb');
  if (!nav || !hamb) return;

  function setOpen(open) {
    nav.classList.toggle('open', open);
    hamb.setAttribute('aria-expanded', String(open));
    hamb.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  hamb.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
  nav.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => setOpen(false));
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) setOpen(false);
  });
})();

// SCROLL REVEAL
(function () {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => obs.observe(el));
})();

// TABS
(function () {
  const btns   = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById('tab-' + btn.dataset.tab);
      if (panel) {
        panel.classList.add('active');
        panel.querySelectorAll('[data-reveal]:not(.revealed)').forEach(el => {
          setTimeout(() => el.classList.add('revealed'), 50);
        });
      }
    });
  });
})();

// MATERIAL LAB FILTERS
(function () {
  const btns  = document.querySelectorAll('.lab-btn');
  const items = document.querySelectorAll('.lab-item');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      items.forEach(item => {
        item.classList.toggle('hidden', cat !== 'all' && item.dataset.cat !== cat);
      });
    });
  });
})();

// MATERIAL LAB LIGHTBOX
(function () {
  const lb    = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbCls = document.getElementById('lightboxClose');
  if (!lb) return;

  document.querySelectorAll('.lab-item img').forEach(img => {
    img.addEventListener('click', e => {
      e.stopPropagation();
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  lb.addEventListener('click', close);
  lbCls.addEventListener('click', e => { e.stopPropagation(); close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();

// SMOOTH ANCHORS
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    });
  });
})();
