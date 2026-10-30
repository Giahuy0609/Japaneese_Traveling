/* ==========================================================================
   JAPAN SAMURAI — MAIN APPLICATION CONTROLLER
   Parallax, Scroll Observer, Header, Destination Modals, Accessibility
   ========================================================================== */

class JapanTravelApp {
  constructor() {
    this.header = document.querySelector('.site-header');
    this.audioBtn = document.getElementById('audio-toggle-btn');
    this.mobileToggle = document.getElementById('mobile-nav-toggle');
    this.navMenu = document.querySelector('.nav-desktop');
    this.modal = document.getElementById('destination-modal');
    this.modalClose = document.getElementById('modal-close-btn');

    this.destinationData = {
      kyoto: {
        title: '京都 — 千年の古都',
        subtitleJp: '千年の都・京都',
        region: '01 / 関西地方',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85',
        description: '日本の文化の中心地へ。千年以上もの間、都として栄えた京都。静謐な枯山水の禅寺、祇園の灯籠揺れる石畳、そして二千を超える寺社仏閣が、古き良き日本の優雅な精神を今に伝えています。',
        season: '3月下旬～4月（桜）/ 11月（紅葉）',
        duration: '推奨滞在：4～6日間',
        rituals: '大徳寺での座禅体験、宇治での本格茶道体験、夕暮れの八坂の塔散策。'
      },
      tokyo: {
        title: '東京 — 伝統と未来の躍動',
        subtitleJp: '伝統と未来・東京',
        region: '02 / 関東地方',
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=85',
        description: '超近代的なネオンの摩天楼と、時を超えた江戸の伝統が交錯する街。そびえ立つ建築群、世界最高峰の食文化、ビル群の懐に抱かれた静寂な神社の杜、そして疾走する新幹線が織りなす感動の体験。',
        season: '通年 / 春と秋が最適',
        duration: '推奨滞在：5～7日間',
        rituals: '築地・豊洲での朝の散策、夕暮れの渋谷スクランブル交差点、明治神宮の静寂な杜歩き。'
      },
      fuji: {
        title: '富士山 — 雲上の霊峰',
        subtitleJp: '霊峰・富士山',
        region: '03 / 中部地方',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
        description: '標高3,776メートル、天高くそびえる日本の美と信仰の象徴。古来より巡礼の地として、また芸術の源として崇められてきた美しい円錐形の姿は、富士五湖の静かな湖面にその神々しい影を映し出します。',
        season: '7月～9月上旬（登山適期）/ 10月～5月（冠雪の絶景）',
        duration: '推奨滞在：2～3日間',
        rituals: '新倉山浅間公園（忠霊塔）からの日の出、富士山を望む天然露天風呂、河口湖での遊覧船。'
      }
    };

    window.japanApp = this;
    this.init();
  }

  init() {
    this.initHeaderScroll();
    this.initAudioToggle();
    this.initAudioLifecycle();
    this.initMobileNav();
    this.initScrollReveal();
    this.initParallax();
    this.initDestinationModal();

    // Listen for custom event from intro completion
    document.addEventListener('introFinished', () => {
      this.triggerHeroEntrance();
    });
  }

  /* ------------------------------------------------------------------------
     Header Sticky State & Scroll Spy
     ------------------------------------------------------------------------ */
  initHeaderScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      // Header background blur
      if (scrollY > 40) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }

      // Scroll Spy
      let currentSectionId = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });

      if (currentSectionId) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${currentSectionId}`
          );
        });
      }
    }, { passive: true });
  }

  /* ------------------------------------------------------------------------
     Audio Toggle
     ------------------------------------------------------------------------ */
  initAudioToggle() {
    // Run once on a dedicated button (previously the header button was bound by
    // two modules, so each click toggled mute twice and the music could never be
    // switched off). Keep the single handler here as the source of truth.
    if (!this.audioBtn || this.audioBtn.dataset.bound === '1') return;
    this.audioBtn.dataset.bound = '1';
    this.audioBtn.addEventListener('click', () => {
      const bgMusic = document.getElementById('intro-bg-music');
      if (bgMusic) {
        bgMusic.muted = !bgMusic.muted;
        const isMuted = bgMusic.muted;
        this.audioBtn.setAttribute('aria-pressed', String(!isMuted));
        this.audioBtn.classList.toggle('muted', isMuted);
        const textSpan = this.audioBtn.querySelector('.audio-status-text');
        if (textSpan) {
          const i18nData = window.i18n ? window.i18n.getData() : null;
          if (i18nData) {
            textSpan.textContent = isMuted ? i18nData.audioOff : i18nData.audioOn;
          } else {
            textSpan.textContent = isMuted ? '音声 OFF' : '音声 ON';
          }
        }
      }
    });
  }

  /* ------------------------------------------------------------------------
     Background music: only audible while the tab is visible, and honour the
     mute button when the browser restores a bfcache page.
     ------------------------------------------------------------------------ */
  initAudioLifecycle() {
    const bgMusic = document.getElementById('intro-bg-music');
    if (!bgMusic) return;
    const voiceAudio = document.getElementById('intro-voice-over');

    const pauseAll = () => {
      bgMusic.pause();
      if (voiceAudio && !voiceAudio.paused) voiceAudio.pause();
    };

    const syncWithVisibility = () => {
      if (document.visibilityState === 'hidden') {
        pauseAll();
      } else if (!bgMusic.muted) {
        // Only resume music after the intro has finished (music belongs to the
        // post-intro experience). While the intro is still running there is
        // intentionally no background music, so returning to the tab must not
        // start it mid-intro.
        const introRunning = !document.body.classList.contains('intro-active')
          ? false
          : !document.getElementById('intro-overlay')?.classList.contains('finished');
        if (!introRunning) {
          bgMusic.play().catch(() => {});
        }
        // Resume voice-over mid-sentence where it left off
        if (voiceAudio && voiceAudio.currentTime > 0 && !voiceAudio.ended
            && !document.getElementById('intro-overlay')?.classList.contains('finished')) {
          voiceAudio.play().catch(() => {});
        }
      }
    };

    document.addEventListener('visibilitychange', syncWithVisibility);

    // Restored from back/forward cache: never resume music the user turned off.
    window.addEventListener('pageshow', (e) => {
      if (e.persisted) syncWithVisibility();
    });

    // Đóng tab / đóng trình duyệt / navigate away → dừng nhạc ngay để không
    // còn âm thanh "ma" phát tiếp sau khi trang đã bị hủy.
    const stopMusicOnExit = () => {
      try {
        bgMusic.pause();
        bgMusic.currentTime = 0;
        if (voiceAudio) voiceAudio.pause();
      } catch (e) { /* noop */ }
    };
    window.addEventListener('beforeunload', stopMusicOnExit);
    window.addEventListener('pagehide', stopMusicOnExit);
  }

  /* ------------------------------------------------------------------------
     Mobile Navigation Toggle
     ------------------------------------------------------------------------ */
  initMobileNav() {
    if (!this.mobileToggle || !this.navMenu) return;
    this.mobileToggle.addEventListener('click', () => {
      const isExpanded = this.mobileToggle.getAttribute('aria-expanded') === 'true';
      this.mobileToggle.setAttribute('aria-expanded', !isExpanded);
      this.navMenu.classList.toggle('mobile-open');
    });

    // Close menu when clicking link
    this.navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        this.navMenu.classList.remove('mobile-open');
        this.mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ------------------------------------------------------------------------
     Scroll-Triggered Reveals via IntersectionObserver
     ------------------------------------------------------------------------ */
  initScrollReveal() {
    const revealElements = document.querySelectorAll(
      '.section-header, .culture-row, .samurai-editorial, .virtue-card, .studio-container, .geisha-editorial, .geisha-portrait, .geisha-art-card'
    );

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(35px)';
      el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(el);
    });

    // Add inline style rule for in-view
    const style = document.createElement('style');
    style.textContent = `
      .in-view {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(style);
  }

  /* ------------------------------------------------------------------------
     Controlled Multi-Layer Parallax (Mouse & Scroll)
     ------------------------------------------------------------------------ */
  initParallax() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const samuraiDiorama = document.querySelector('.samurai-diorama');
    const moon = document.querySelector('.diorama-moon');
    const samuraiFig = document.querySelector('.diorama-samurai-figure');

    if (samuraiDiorama && moon && samuraiFig) {
      samuraiDiorama.addEventListener('mousemove', (e) => {
        const rect = samuraiDiorama.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        moon.style.transform = `translateX(calc(-50% + ${x * -25}px)) translateY(${y * -15}px)`;
        samuraiFig.style.transform = `translateX(calc(-50% + ${x * 18}px)) translateY(${y * 10}px)`;
      });

      samuraiDiorama.addEventListener('mouseleave', () => {
        moon.style.transform = 'translateX(-50%)';
        samuraiFig.style.transform = 'translateX(-50%)';
      });
    }

    // Hero background subtle scroll zoom
    const heroBg = document.querySelector('.hero-bg-image');
    if (heroBg) {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
          heroBg.style.transform = `scale(${1.05 + scrollY * 0.0003}) translateY(${scrollY * 0.15}px)`;
        }
      }, { passive: true });
    }
  }

  /* ------------------------------------------------------------------------
     Destination Detail Modal
     ------------------------------------------------------------------------ */
  initDestinationModal() {
    if (!this.modal) return;

    // NOTE: modal render bị chiếm quyền bởi js/destinations-pro.js (video flycam).
    // Listener cũ trên từng nút đã bị vô hiệu để tránh ghi đè modal.
    // const exploreBtns = document.querySelectorAll('[data-destination-trigger]');
    // exploreBtns.forEach(btn => {
    //   btn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     const destKey = btn.dataset.destinationTrigger;
    //     this.openDestinationModal(destKey);
    //   });
    // });

    if (this.modalClose) {
      this.modalClose.addEventListener('click', () => this.closeModal());
    }

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.closeModal();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('open')) {
        this.closeModal();
      }
    });
  }

  openDestinationModal(destKey) {
    const data = (window.getDestinationData ? window.getDestinationData(destKey) : null) || this.destinationData[destKey];
    if (!data) return;

    const imgEl = this.modal.querySelector('.modal-hero-image');
    const regionEl = this.modal.querySelector('.modal-meta');
    const titleEl = this.modal.querySelector('.modal-title');
    const subtitleEl = this.modal.querySelector('.modal-subtitle-jp');
    const descEl = this.modal.querySelector('.modal-text');
    const seasonEl = this.modal.querySelector('#modal-season-text');
    const durationEl = this.modal.querySelector('#modal-duration-text');
    const ritualsEl = this.modal.querySelector('#modal-rituals-text');

    if (imgEl) imgEl.src = data.image;
    if (regionEl) regionEl.textContent = data.region;
    if (titleEl) titleEl.textContent = data.title;
    if (subtitleEl) subtitleEl.textContent = data.subtitleJp;
    if (descEl) descEl.textContent = data.description;
    if (seasonEl) seasonEl.textContent = data.season;
    if (durationEl) durationEl.textContent = data.duration;
    if (ritualsEl) ritualsEl.textContent = data.rituals;

    this.modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    if (window.japanAudio) {
      window.japanAudio.playBrushStroke(0.3, 0.5);
    }
  }

  closeModal() {
    if (!this.modal) return;
    this.modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  triggerHeroEntrance() {
    const heroTitle = document.querySelector('.hero-title');
    const heroDesc = document.querySelector('.hero-description');
    const heroActions = document.querySelector('.hero-actions');

    [heroTitle, heroDesc, heroActions].forEach((el, idx) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = `opacity 0.8s ease ${idx * 0.15}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.15}s`;
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      }
    });
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.japanApp = new JapanTravelApp();
});
