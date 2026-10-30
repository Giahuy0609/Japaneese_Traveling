/* ==========================================================================
   JAPAN SAMURAI — INTRO ORCHESTRATOR
   Calligraphy Stroke Drawing, Samurai Slash Transition, Particles, Controls
   ========================================================================== */

class JapanIntroController {
  constructor() {
    this.overlay = document.getElementById('intro-overlay');
    this.canvas = document.getElementById('intro-canvas');
    this.skipBtn = document.getElementById('skip-intro-btn');
    this.replayBtns = document.querySelectorAll('.replay-intro-btn');
    this.startSoundBtn = document.getElementById('btn-start-sound');
    this.startModal = document.getElementById('intro-start-modal');
    this.hanko = document.getElementById('intro-hanko');
    this.greetingJp = document.getElementById('greeting-japanese');
    this.greetingEn = document.getElementById('greeting-english');
    this.calligraphyWrapper = document.querySelector('.calligraphy-wrapper');
    this.samuraiContainer = document.getElementById('samurai-silhouette-container');
    this.samuraiBladeFlare = document.getElementById('samurai-blade-flare');
    this.samuraiEye = document.getElementById('samurai-eye-glint');
    this.swordBeam = document.getElementById('sword-slash-beam');
    this.flashScreen = document.getElementById('slash-flash-screen');
    this.splitWrapper = document.getElementById('split-screen-wrapper');
    this.heroVideo = document.getElementById('hero-bg-video');
    this.samuraiVideo = document.getElementById('samurai-hero-photo');
    this.quoteSub = document.getElementById('intro-quote-sub');
    this.quoteTimers = [];

    this.strokePaths = [];
    this.timeouts = [];
    this.animFrameId = null;
    this.isRunning = false;
    this.hasEnded = false;
    this.voiceStarted = false;

    // Atmospheric Particle System
    this.particles = [];
    this.ctx = null;
    this.canvasWidth = 0;
    this.canvasHeight = 0;

    this.init();
  }

  init() {
    if (!this.overlay) return;

    // Check prefers-reduced-motion
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. ALWAYS Setup Canvas for smoke and ink mist
    this.setupCanvas();

    // 2. ALWAYS Collect & Prepare Calligraphy Stroke Paths
    this.prepareStrokes();

    // 3. ALWAYS Bind Event Listeners so Skip & Replay work in all scenarios
    if (this.skipBtn) {
      this.skipBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // prevent bubble to overlay click handler
        this.skip();
      });
    }

    // Document-level delegation for Skip Intro button
    document.addEventListener('click', (e) => {
      const skip = e.target.closest('#skip-intro-btn, .skip-intro-btn');
      if (skip) {
        e.preventDefault();
        e.stopPropagation();
        this.skip();
      }
    });

    if (this.startSoundBtn) {
      this.startSoundBtn.addEventListener('click', () => {
        if (window.japanAudio) {
          window.japanAudio.ensureContext();
        }
        if (this.startModal) this.startModal.classList.add('hidden');
        this.playSequence();
      });
    }

    // Direct listener on all replay buttons
    this.replayBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.replay();
      });
    });

    // Global event delegation on document: any .replay-intro-btn clicked anywhere will work
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.replay-intro-btn');
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        this.replay();
      }
    });

    // Keyboard accessibility: Escape, Space, or Enter triggers Skip Intro
    window.addEventListener('keydown', (e) => {
      if (!this.hasEnded && (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter')) {
        if (!['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
          e.preventDefault();
          this.skip();
        }
      }
    });

    // Listen for video playing to fade in video over background image
    if (this.heroVideo) {
      this.heroVideo.addEventListener('playing', () => {
        this.heroVideo.classList.add('playing');
      });
      if (!this.heroVideo.paused && this.heroVideo.readyState >= 2) {
        this.heroVideo.classList.add('playing');
      }
    }

    // Samurai video: NEVER replay/loop; hold smoothly on final frame like game character pose
    if (this.samuraiVideo) {
      this.samuraiVideo.loop = false;
      this.samuraiVideo.addEventListener('timeupdate', () => {
        if (this.samuraiVideo.duration && this.samuraiVideo.currentTime >= this.samuraiVideo.duration - 0.08) {
          this.samuraiVideo.pause();
        }
      });
      this.samuraiVideo.addEventListener('ended', () => {
        this.samuraiVideo.pause();
      });
    }

    // Allow user to click anywhere on overlay to start with sound if modal active
    // Exclude clicks on the controls bar (Skip button, etc.)
    this.overlay.addEventListener('click', (e) => {
      if (this.isRunning || this.hasEnded) return;
      if (e.target.closest('.intro-controls-bar, #skip-intro-btn, .skip-intro-btn')) return; // let skip btn handle itself
      if (this.startModal && !this.startModal.classList.contains('hidden')) {
        if (window.japanAudio) {
          window.japanAudio.ensureContext();
        }
        this.startModal.classList.add('hidden');
        this.playSequence();
      }
    });

    // Check URL parameters: e.g. ?intro=1 or ?replay=1 resets sessionStorage to test fresh
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('intro') === '1' || urlParams.get('replay') === '1') {
      sessionStorage.removeItem('japan_intro_seen');
    }

    // Check SessionStorage: If already seen this session, skip automatically on initial load
    const hasSeenIntro = sessionStorage.getItem('japan_intro_seen');
    if (hasSeenIntro === 'true') {
      this.skipInstantly();
      return;
    }

    // Lock body scrolling during intro
    document.body.classList.add('intro-active');

    // Fallback: If user doesn't click within 2.8s, auto-start sequence silently
    const autoStartTimer = setTimeout(() => {
      if (!this.isRunning && !this.hasEnded) {
        if (this.startModal) this.startModal.classList.add('hidden');
        this.playSequence();
      }
    }, 2800);
    this.timeouts.push(autoStartTimer);
  }

  /* ------------------------------------------------------------------------
     Atmospheric Particle & Smoke System
     ------------------------------------------------------------------------ */
  setupCanvas() {
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    const resize = () => {
      this.canvasWidth = this.canvas.width = window.innerWidth;
      this.canvasHeight = this.canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Generate floating ink dust and mist particles
    const particleCount = 45;
    this.particles = [];
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvasWidth,
        y: Math.random() * this.canvasHeight,
        radius: Math.random() * 3.5 + 1.0,
        vx: (Math.random() - 0.5) * 0.45,
        vy: -Math.random() * 0.6 - 0.2, // drifting slowly upward like smoke
        alpha: Math.random() * 0.4 + 0.1,
        color: Math.random() > 0.85 ? 'rgba(184, 58, 50,' : 'rgba(245, 240, 232,'
      });
    }

    this.renderParticles();
  }

  renderParticles() {
    if (this.hasEnded || !this.ctx) return;
    // Guard: if another loop was already scheduled, don't double-spawn
    // animFrameId is updated below so concurrent calls are safe.

    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    for (let p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around
      if (p.y < -10) p.y = this.canvasHeight + 10;
      if (p.x < -10) p.x = this.canvasWidth + 10;
      if (p.x > this.canvasWidth + 10) p.x = -10;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `${p.color} ${p.alpha})`;
      this.ctx.fill();
    }

    this.animFrameId = requestAnimationFrame(() => this.renderParticles());
  }

  /* ------------------------------------------------------------------------
     Calligraphy Stroke Setup
     ------------------------------------------------------------------------ */
  prepareStrokes() {
    this.strokePaths = Array.from(document.querySelectorAll('.calligraphy-svg .brush-stroke'));
    this.strokePaths.forEach(path => {
      path.style.transition = 'none';
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length} ${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.dataset.length = length;
      void path.offsetWidth;
    });
  }

  /* ------------------------------------------------------------------------
     Sequence Director: Scene A -> Scene B -> Scene C -> Scene D
     ------------------------------------------------------------------------ */
  /* ------------------------------------------------------------------------
     Quote subtitles (vietsub): reveal lines one by one, synced with the
     voice-over duration (~15.2s). Lines come from the active site language
     via window.i18n — so the intro subtitle always matches the site language.
     ------------------------------------------------------------------------ */
  getQuoteLines() {
    // Resolve the active language reliably: i18n global, localStorage flag,
    // then <html lang>. Falls back to the Japanese original.
    let lang = null;
    if (window.i18n && window.i18n.getCurrentLanguage) {
      lang = window.i18n.getCurrentLanguage();
    }
    if (!lang) {
      try { lang = localStorage.getItem('site_lang'); } catch (e) { /* noop */ }
    }
    if (!lang) {
      lang = (document.documentElement.getAttribute('lang') || 'ja').slice(0, 2);
    }

    const all = window.i18n && window.i18n.getAllData ? window.i18n.getAllData() : null;
    const data = all && all[lang] ? all[lang] : (window.i18n && window.i18n.getData ? window.i18n.getData() : null);

    if (data && Array.isArray(data.introQuoteLines) && data.introQuoteLines.length) {
      return data.introQuoteLines;
    }
    // Fallback: Japanese original
    return [
      '千日の稽古を短とし、万日の稽古を廉とす。',
      'いかに実力があろうとも、うぬぼれてはならぬ。',
      '常に精進を重ねよ。',
      '真の成功に至るには、誰もが苦練を乗り越えねばならぬ。',
    ];
  }

  startQuoteSubtitles() {
    if (!this.quoteSub) return;
    this.stopQuoteSubtitles();

    // Re-render remaining lines in the new language if the user switches
    // language mid-intro.
    this._langChangeHandler = () => {
      if (!this.hasEnded && this.isRunning) {
        const elapsed = performance.now() - (this._subStartTime || 0);
        this.startQuoteSubtitlesFrom(elapsed);
      }
    };
    document.addEventListener('languageChanged', this._langChangeHandler);

    this._subStartTime = performance.now();
    this.startQuoteSubtitlesFrom(0);
  }

  startQuoteSubtitlesFrom(elapsedMs) {
    if (!this.quoteSub) return;
    // Clear only the line timers, keep the language listener
    this.quoteTimers.forEach(t => clearTimeout(t));
    this.quoteTimers = [];

    const lines = this.getQuoteLines();
    const voiceAudio = document.getElementById('intro-voice-over');
    let voiceDur = 15200;
    if (voiceAudio && isFinite(voiceAudio.duration) && voiceAudio.duration > 0) {
      voiceDur = voiceAudio.duration * 1000;
    }
    const startDelay = 800;
    const span = Math.max(voiceDur - startDelay - 800, lines.length * 1500);
    const step = span / lines.length;

    lines.forEach((line, i) => {
      const showAt = startDelay + i * step;
      const wait = showAt - elapsedMs;
      if (wait <= 0) {
        // This line's slot already passed — show the LAST such line now
        if (this.quoteSub) {
          this.quoteSub.textContent = line;
          this.quoteSub.classList.add('revealed');
        }
      } else {
        const t = setTimeout(() => {
          if (this.hasEnded) return;
          this.quoteSub.textContent = line;
          this.quoteSub.classList.add('revealed');
        }, wait);
        this.quoteTimers.push(t);
      }
    });
  }

  stopQuoteSubtitles() {
    this.quoteTimers.forEach(t => clearTimeout(t));
    this.quoteTimers = [];
    if (this._langChangeHandler) {
      document.removeEventListener('languageChanged', this._langChangeHandler);
      this._langChangeHandler = null;
    }
    if (this.quoteSub) {
      this.quoteSub.classList.remove('revealed');
      this.quoteSub.textContent = '';
    }
  }

  playSequence() {
    if (this.isRunning || this.hasEnded) return;
    this.isRunning = true;

    // Voice-over narration: starts right as the drawing begins and runs
    // straight through the slash and samurai reveal until skip/finish.
    // Never start audio while the tab is hidden.
    const voiceAudio = document.getElementById('intro-voice-over');
    if (voiceAudio && document.visibilityState === 'visible') {
      voiceAudio.currentTime = 0;
      voiceAudio.volume = 0.95;
      voiceAudio.play().catch(() => {});
    }

    // Quote subtitles: follow the site language, timed to the voice
    this.startQuoteSubtitles();

    // Background cinematic music — start immediately when intro begins,
    // but never while the tab is hidden (respects “don’t play in other tab”).
    const bgMusic = document.getElementById('intro-bg-music');
    if (bgMusic) {
      bgMusic.volume = 0.7;
      if (document.visibilityState === 'visible') {
        bgMusic.currentTime = 0;
        bgMusic.play().catch(e => console.warn('Background music blocked:', e));
      }
    }

    // Phase A: while drawing calligraphy strokes, keep subtitle at bottom
    if (this.quoteSub) {
      this.quoteSub.classList.add('intro-quote-sub--stroke');
      this.quoteSub.classList.remove('intro-quote-sub--samurai');
    }

    if (this.prefersReducedMotion) {
      this.finish();
      return;
    }

    // Scene A: The Atmospheric Pause (500ms)
    // Scene B: Stroke by Stroke Calligraphy Drawing
    let currentDelay = 600;

    // Stroke 1 to Stroke N
    this.strokePaths.forEach((path, index) => {
      const strokeLen = parseFloat(path.dataset.length || '300');
      // Longer strokes take slightly more time, authentic brush feel
      const strokeDuration = Math.min(Math.max(strokeLen * 1.5, 380), 750);

      const strokeTimer = setTimeout(() => {
        if (this.hasEnded) return;

        // Brush sound
        if (window.japanAudio) {
          window.japanAudio.playBrushStroke(strokeDuration / 1000, 0.9);
        }

        // Animate stroke draw
        path.style.transition = `stroke-dashoffset ${strokeDuration}ms cubic-bezier(0.25, 1, 0.5, 1)`;
        path.style.strokeDashoffset = '0';

        // Camera impact on key heavy strokes (e.g. 1st, 4th, 8th)
        if (index === 0 || index === 3 || index === 7) {
          this.triggerCameraShake();
        }
      }, currentDelay);

      this.timeouts.push(strokeTimer);
      // Natural calligrapher pause between brush lifts and ink dips
      currentDelay += strokeDuration + (index === 3 ? 350 : 180);
    });

    // Hanko Stamp Impact (Red Seal [日本之印])
    const stampTimer = setTimeout(() => {
      if (this.hasEnded) return;
      if (this.hanko) this.hanko.classList.add('stamped');
      if (window.japanAudio) window.japanAudio.playTaikoImpact(130);
      this.triggerCameraShake();
    }, currentDelay + 200);
    this.timeouts.push(stampTimer);
    currentDelay += 600;

    // Reveal Full Greeting Typography (「こんにちは、日本へようこそ」)
    const greetingTimer = setTimeout(() => {
      if (this.hasEnded) return;
      if (this.greetingJp) this.greetingJp.classList.add('revealed');
      if (this.greetingEn) this.greetingEn.classList.add('revealed');
      const splatters = document.querySelectorAll('.ink-splatter-group');
      splatters.forEach(s => s.classList.add('visible'));
    }, currentDelay);
    this.timeouts.push(greetingTimer);

    // Pause to admire the finished calligraphy (1.2 seconds)
    currentDelay += 1200;

    // Scene C: Katana Sword Slash cuts and REVEALS the Samurai Image!
    // Audio plays at exact same moment as visual slash (preloaded = no network delay)
    const slashTimer = setTimeout(() => {
      if (this.hasEnded) return;

      // Play preloaded slash audio instantly — but never while tab hidden
      const slashAudio = document.getElementById('katana-slash-audio');
      if (slashAudio && document.visibilityState === 'visible') {
        slashAudio.currentTime = 0;
        slashAudio.volume = 1;
        slashAudio.play().catch(err => console.error('Katana audio play error:', err));
      }
      // Activate Slash Trail & White Flash Screen
      if (this.swordBeam) this.swordBeam.classList.add('cutting');
      if (this.flashScreen) this.flashScreen.classList.add('flash');

      // Pre-load / start hero video so it buffers seamlessly in background
      if (this.heroVideo) {
        this.heroVideo.play().catch(() => {});
      }

      // Trigger Screen Split Wipe
      if (this.splitWrapper) {
        this.splitWrapper.classList.add('active');
        requestAnimationFrame(() => {
          setTimeout(() => {
            if (this.splitWrapper) this.splitWrapper.classList.add('slashed');
          }, 60);
        });
      }

      this.triggerCameraShake();

      // The katana slash cuts away calligraphy and REVEALS the Samurai Scene (Video)!
      if (this.calligraphyWrapper) this.calligraphyWrapper.classList.add('faded');
      if (this.samuraiContainer) this.samuraiContainer.classList.add('active');

      // Phase B: once samurai is visible, move subtitle up above the samurai title/button
      if (this.quoteSub) {
        this.quoteSub.classList.remove('intro-quote-sub--stroke');
        this.quoteSub.classList.add('intro-quote-sub--samurai');
      }

      if (this.samuraiVideo) {
        this.samuraiVideo.currentTime = 0;
        this.samuraiVideo.play().catch(() => {});
      }

      // Blade flare spark glints on katana
      setTimeout(() => {
        if (!this.hasEnded && this.samuraiBladeFlare) {
          this.samuraiBladeFlare.classList.add('spark');
        }
      }, 350);

      // ── HOLD STILL ("giữ im") ─────────────────────────────────────────────
      // We do NOT call finish() immediately!
      // The Samurai photo stays visible and the SKIP INTRO button is fully active.
      // The user can admire the artwork, and click SKIP INTRO or EXPLORE JAPAN whenever ready.
      // (Optional generous fallback of 45 seconds if tab is left unattended)
      const generousFallbackTimer = setTimeout(() => {
        if (!this.hasEnded && this.isRunning) {
          this.finish();
        }
      }, 45000);
      this.timeouts.push(generousFallbackTimer);

    }, currentDelay);
    this.timeouts.push(slashTimer);
  }

  triggerCameraShake() {
    const stage = document.querySelector('.intro-stage');
    if (!stage) return;
    stage.classList.remove('camera-shake');
    void stage.offsetWidth; // trigger reflow
    stage.classList.add('camera-shake');
  }

  finish() {
    if (this.hasEnded) return;
    this.hasEnded = true;
    this.isRunning = false;

    // Set SessionStorage so user doesn't see intro repeatedly on tab reload
    sessionStorage.setItem('japan_intro_seen', 'true');

    // Clear all pending timeouts
    this.timeouts.forEach(t => clearTimeout(t));
    this.timeouts = [];

    // Stop canvas render
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }

    if (this.startModal) this.startModal.classList.add('hidden');

    // Samurai photo container: deactivate
    if (this.samuraiContainer) {
      this.samuraiContainer.classList.remove('active');
      this.samuraiContainer.style.opacity = '0';
    }
    if (this.samuraiVideo) {
      this.samuraiVideo.pause();
    }
    if (this.samuraiBladeFlare) this.samuraiBladeFlare.classList.remove('spark');
    if (this.samuraiEye) this.samuraiEye.classList.remove('spark');
    if (this.swordBeam) this.swordBeam.classList.remove('cutting');

    // Overlay: mark finished and hide completely
    if (this.overlay) {
      this.overlay.classList.add('finished');
      this.overlay.style.transition = 'opacity 0.4s ease, visibility 0.4s ease';
      this.overlay.style.opacity = '0';
      this.overlay.style.pointerEvents = 'none';
      setTimeout(() => {
        if (this.hasEnded && this.overlay) {
          this.overlay.style.display = 'none';
        }
      }, 400);
    }

    // Re-enable document scrolling immediately — hero is now visible
    document.body.classList.remove('intro-active');

    // Hero video: ensure it's playing
    if (this.heroVideo) {
      this.heroVideo.play().catch(e => console.log('Video autoplay:', e));
    }

    // Stop voice-over narration
    const voiceAudio = document.getElementById('intro-voice-over');
    if (voiceAudio && !voiceAudio.paused) {
      voiceAudio.pause();
    }

    // Clear quote subtitles
    this.stopQuoteSubtitles();

    // Background cinematic music was already started in playSequence() if the
    // tab was visible. Here we only resume it if the tab becomes visible again
    // after being hidden during the intro (so music doesn't start late in
    // another tab).
    const bgMusic = document.getElementById('intro-bg-music');
    if (bgMusic && document.visibilityState === 'visible' && bgMusic.paused) {
      bgMusic.play().catch(e => console.warn('Background music blocked:', e));
    }

    // Stop ambient drone (replaced by cinematic music)
    // if (window.japanAudio && !window.japanAudio.isMuted) {
    //   window.japanAudio.startAmbientDrone();
    // }

    // Clean up split-wrapper
    if (this.splitWrapper) {
      setTimeout(() => {
        this.splitWrapper.classList.remove('active', 'slashed');
      }, 400);
    }

    // Trigger hero entrance animation in main app
    document.dispatchEvent(new CustomEvent('introFinished'));
  }

  skip() {
    if (this.hasEnded) return;
    
    // Clear timeouts immediately
    this.timeouts.forEach(t => clearTimeout(t));
    this.timeouts = [];

    if (this.startModal) this.startModal.classList.add('hidden');

    if (this.overlay) {
      this.overlay.style.transition = 'opacity 0.25s ease';
      this.overlay.style.opacity = '0';
      this.overlay.style.pointerEvents = 'none';
    }

    // Complete skip quickly
    setTimeout(() => {
      this.finish();
      if (this.overlay) {
        this.overlay.style.display = 'none';
      }
    }, 200);
  }

  skipInstantly() {
    this.hasEnded = true;
    this.stopQuoteSubtitles();
    if (this.overlay) {
      this.overlay.classList.add('finished');
      this.overlay.style.display = 'none';
    }
    document.body.classList.remove('intro-active');

    if (this.heroVideo) {
      this.heroVideo.play().catch(e => console.log('Video autoplay:', e));
    }

    document.dispatchEvent(new CustomEvent('introFinished'));
  }

  replay() {
    // ── 1. Reset all state flags ──────────────────────────────────────────────
    this.hasEnded = false;
    this.isRunning = false;
    this.voiceStarted = false;
    this.stopQuoteSubtitles();

    // Reset subtitle phase classes so a fresh replay starts at bottom again
    if (this.quoteSub) {
      this.quoteSub.classList.remove('intro-quote-sub--stroke', 'intro-quote-sub--samurai');
    }

    // ── 2. Cancel every pending timeout ──────────────────────────────────────
    this.timeouts.forEach(t => clearTimeout(t));
    this.timeouts = [];

    // ── 3. Stop particle loop so we can cleanly restart it ───────────────────
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }

    // ── 4. Scroll to top instantly ────────────────────────────────────────────
    window.scrollTo({ top: 0, behavior: 'instant' });

    // ── 5. Lock body scroll ───────────────────────────────────────────────────
    document.body.classList.add('intro-active');

    // ── 6. Stop ambient audio ─────────────────────────────────────────────────
    if (window.japanAudio) {
      window.japanAudio.ensureContext();
      window.japanAudio.stopAmbientDrone();
    }

    // Pause hero video while intro replays
    if (this.heroVideo) {
      this.heroVideo.pause();
    }
    if (this.samuraiVideo) {
      this.samuraiVideo.pause();
      this.samuraiVideo.currentTime = 0;
    }

    // ── 7. Force overlay fully visible — disable transition for instant snap ──
    if (this.overlay) {
      // Temporarily kill transition so it snaps to visible immediately
      this.overlay.style.transition = 'none';
      this.overlay.style.display = 'flex';
      this.overlay.style.opacity = '1';
      this.overlay.style.visibility = 'visible';
      this.overlay.style.pointerEvents = 'auto';
      this.overlay.classList.remove('finished');
      // Trigger reflow so the browser registers the snap before restoring transition
      void this.overlay.offsetWidth;
      // Re-enable transition for the eventual finish() fade-out
      this.overlay.style.transition = '';
    }

    // ── 8. Reset every animated element ──────────────────────────────────────
    if (this.startModal) this.startModal.classList.add('hidden');

    if (this.calligraphyWrapper) {
      this.calligraphyWrapper.style.transition = 'none';
      this.calligraphyWrapper.classList.remove('faded');
      this.calligraphyWrapper.style.opacity = '1';
      this.calligraphyWrapper.style.transform = 'scale(1)';
      this.calligraphyWrapper.style.filter = 'none';
      void this.calligraphyWrapper.offsetWidth;
      this.calligraphyWrapper.style.transition = '';
    }

    if (this.hanko) this.hanko.classList.remove('stamped');
    if (this.greetingJp) this.greetingJp.classList.remove('revealed');
    if (this.greetingEn) this.greetingEn.classList.remove('revealed');

    if (this.samuraiContainer) {
      this.samuraiContainer.style.transition = 'none';
      this.samuraiContainer.classList.remove('active');
      this.samuraiContainer.style.opacity = ''; // clear inline style set by finish()
      void this.samuraiContainer.offsetWidth;
      this.samuraiContainer.style.transition = '';
    }

    if (this.samuraiBladeFlare) this.samuraiBladeFlare.classList.remove('spark');
    if (this.samuraiEye) this.samuraiEye.classList.remove('spark');

    if (this.swordBeam) {
      this.swordBeam.classList.remove('cutting');
      const line = this.swordBeam.querySelector('.slash-path-line');
      if (line) {
        line.style.animation = 'none';
        void line.offsetWidth;
        line.style.animation = '';
      }
    }

    if (this.flashScreen) {
      this.flashScreen.style.transition = 'none';
      this.flashScreen.classList.remove('flash');
      void this.flashScreen.offsetWidth;
      this.flashScreen.style.transition = '';
    }

    if (this.splitWrapper) {
      this.splitWrapper.style.transition = 'none';
      this.splitWrapper.classList.remove('active', 'slashed');
      void this.splitWrapper.offsetWidth;
      this.splitWrapper.style.transition = '';
    }

    // Remove ink splatters
    document.querySelectorAll('.ink-splatter-group').forEach(s => s.classList.remove('visible'));

    // ── 9. Re-measure strokes (fresh dashoffset reset) ────────────────────────
    this.prepareStrokes();

    // ── 10. Restart particle canvas ───────────────────────────────────────────
    this.renderParticles();

    // ── 11. Pause one frame so browser paints the reset state, then play ──────
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.playSequence();
      });
    });
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.japanIntro = new JapanIntroController();
});
