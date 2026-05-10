// ── Mobile menu ──────────────────────────────────────────────────────────────
const toggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

toggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-times');
});

// ── Scroll-reveal ────────────────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Hero elements visible after short delay
setTimeout(() => {
  document.querySelectorAll('.hero-content .reveal').forEach(el => el.classList.add('visible'));
}, 150);
setTimeout(() => {
  document.querySelectorAll('.stats-bar .reveal').forEach(el => el.classList.add('visible'));
  startCounters();
}, 400);

// ── Counter animation ────────────────────────────────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const duration = 1200;
  const steps = 50;
  const increment = target / steps;
  let current = 0;
  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = prefix + Math.round(current) + suffix;
  }, duration / steps);
}

function startCounters() {
  document.querySelectorAll('.stat-number[data-target]').forEach(animateCounter);
}
    // Scroll reveal
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    setTimeout(() => document.querySelectorAll('.page-hero .reveal').forEach(el => el.classList.add('visible')), 100);
 
    // Counter
    function animateCounter(el) {
      const target = parseInt(el.dataset.target);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const steps = 50; let current = 0;
      const iv = setInterval(() => {
        current += target / steps;
        if(current >= target){ current = target; clearInterval(iv); }
        el.textContent = prefix + Math.round(current) + suffix;
      }, 1200 / steps);
    }
    const statsObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.querySelectorAll('[data-target]').forEach(animateCounter);
          statsObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    const statsEl = document.querySelector('.about-stats');
    if(statsEl) statsObs.observe(statsEl);


    // تفعيل الرابط النشط في النافبار (لكل من سطح المكتب والجوال)
(function() {
    // الحصول على مسار URL الحالي (بدون النطاق)
    let currentPath = window.location.pathname;
    // إذا كان المسار ينتهي بـ '/' أو كان فارغاً، نعتبره الصفحة الرئيسية
    if (currentPath === '/' || currentPath === '/index.html' || currentPath === '') {
        currentPath = '/index.html';
    }
    // اختيار جميع روابط النافبار (النسخة المكتبية والجوال)
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (!linkHref) return;
        if (linkHref === '#') return;
        let cleanLinkPath = linkHref;
        if (cleanLinkPath === '/') cleanLinkPath = '/index.html';
        if (cleanLinkPath === currentPath) {
            link.classList.add('active');
        }
        else if (currentPath === '/index.html' && (cleanLinkPath === '/' || cleanLinkPath === '/index.html')) {
            link.classList.add('active');
        }
        else if (currentPath.endsWith(cleanLinkPath) && cleanLinkPath !== '/') {
            link.classList.add('active');
        }
        else if (cleanLinkPath.length > 1 && currentPath.startsWith(cleanLinkPath) && !cleanLinkPath.includes('.')) {
            link.classList.add('active');
        }
    });
    if (typeof window.addEventListener === 'function') {
        window.addEventListener('popstate', function() {
            setTimeout(() => {
                location.reload();
            }, 50);
        });
    }
})();

// blog page
 // Filter
    const filterBtns=document.querySelectorAll('.filter-btn');
    const cards=document.querySelectorAll('.blog-card');
 
    filterBtns.forEach(btn=>{
      btn.addEventListener('click',function(){
        // Update active btn
        filterBtns.forEach(b=>b.classList.remove('active'));
        this.classList.add('active');

        const cat=this.dataset.cat;
        cards.forEach(card=>{
          if(cat==='all'||card.dataset.cat===cat){
            card.style.display='flex';
            setTimeout(()=>{card.style.opacity='1';card.style.transform='translateY(0)';},10);
          } else {
            card.style.opacity='0';
            card.style.transform='translateY(10px)';
            setTimeout(()=>{card.style.display='none';},300);
          }
        });
      });
    });
    // Newsletter
    document.querySelector('.newsletter-btn').addEventListener('click',function(){
      const input=document.querySelector('.newsletter-input');
      if(input.value&&input.value.includes('@')){
        this.textContent='تم الاشتراك! ✓';
        this.style.background='#111827';
        this.style.color='#C9A84C';
        input.value='';
        setTimeout(()=>{this.textContent='اشترك الآن';this.style.background='';this.style.color='';},3000);
      } else {
        input.style.boxShadow='0 0 0 3px rgba(239,68,68,.4)';
        setTimeout(()=>{input.style.boxShadow='';},2000);
      }
    });
