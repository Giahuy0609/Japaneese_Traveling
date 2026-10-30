(function () {
	'use strict';

	    // Background music handling
    const bgMusic = document.getElementById('intro-bg-music');
    function startIntroMusic() {
        if (bgMusic) {
            const p = bgMusic.play();
            if (p !== undefined) {
                p.catch(err => console.warn('Background music playback failed:', err));
            }
        }
    }
    function toggleMusic() {
        if (!bgMusic) return;
        const isMuted = bgMusic.muted;
        bgMusic.muted = !isMuted;
        const btn = document.getElementById('audio-toggle-btn');
        const txt = btn?.querySelector('.audio-status-text');
        if (txt) {
            txt.textContent = isMuted ? '音声 ON' : '音声 OFF';
        }
        btn?.classList.toggle('muted', !bgMusic.muted);
    }
    // The audio toggle is handled by js/app.js (single source of truth).
    // Binding it here too made every click toggle mute twice, so the music
    // could never actually be turned off.
    // if (toggleBtn) toggleBtn.addEventListener('click', toggleMusic);
const CONFIG = Object.freeze({
		strokeDurationMs: 760,
		strokeGapMs: 190,
		holdDurationMs: 1050,
		fadeDurationMs: 950,
		playOncePerTab: true,
		storageKey: 'kanji-2026-intro-played',
	});

	function initializeKanjiIntro() {
		const overlay = document.querySelector('[data-kanji-intro]');

		if (!overlay) {
			return;
		}

		const skipButton = overlay.querySelector('[data-intro-skip]');
		const main = document.querySelector('.kanji-home');
		const pageRegions = document.querySelectorAll('.site-header, .kanji-home, .site-footer');
		const previousInertStates = Array.from(pageRegions, function (region) {
			return region.inert;
		});
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		function hasPlayedThisTab() {
			if (!CONFIG.playOncePerTab) {
				return false;
			}

			try {
				return window.sessionStorage.getItem(CONFIG.storageKey) === 'played';
			} catch (error) {
				return false;
			}
		}

		if (reducedMotion || hasPlayedThisTab()) {
			overlay.hidden = true;
        startIntroMusic();


			return;
		}

		const paths = Array.from(overlay.querySelectorAll('svg path'));
		const strokes = [];
		const timerIds = [];
		let isFinishing = false;

		paths.forEach(function (path) {
			try {
				const length = path.getTotalLength();

				if (!Number.isFinite(length) || length <= 0) {
					return;
				}

				path.style.strokeDasharray = String(length);
				path.style.strokeDashoffset = String(length);
				strokes.push(path);
			} catch (error) {
				return;
			}
		});

		if (strokes.length === 0) {
			overlay.hidden = true;
        startIntroMusic();


			return;
		}

		// ── Voice-over sync ────────────────────────────────────────────
		const voiceAudio = document.getElementById('intro-voice-over');
		const speechScene = document.getElementById('intro-speech-scene');
		const slashBeam = document.getElementById('intro-slash-beam');
		const slashFlash = document.getElementById('intro-slash-flash');
		const katanaAudio = document.getElementById('katana-slash-audio');
		// Total intro runtime (ms): strokes + gaps + hold ≈ 3×760 + 2×190 + 1050
		const INTRO_RUNTIME_MS = strokes.length * CONFIG.strokeDurationMs
			+ (strokes.length - 1) * CONFIG.strokeGapMs
			+ CONFIG.holdDurationMs;
		const VOICE_START_DELAY_MS = 400; // voice begins shortly after strokes begin

		function playVoiceOver() {
			if (!voiceAudio) return;
			voiceAudio.currentTime = 0;
			voiceAudio.volume = 0.95;
			const p = voiceAudio.play();
			if (p !== undefined) {
				p.catch(function () { /* autoplay blocked — silent start fallback */ });
			}
		}

		function stopVoiceOver() {
			if (voiceAudio && !voiceAudio.paused) {
				voiceAudio.pause();
			}
		}

		function showSpeechScene() {
			if (speechScene) {
				speechScene.classList.add('is-visible');
				speechScene.setAttribute('aria-hidden', 'false');
			}
		}

		// ── Tab visibility: pause every sound when the tab is hidden ──
		const pageAudios = [voiceAudio, katanaAudio].filter(Boolean);
		function pauseAllAudio() {
			if (bgMusic && !bgMusic.paused) bgMusic.pause();
			pageAudios.forEach(function (a) {
				if (!a.paused) a.pause();
			});
		}
		function resumeAudioOnVisible() {
			if (document.visibilityState !== 'visible') return;
			if (bgMusic && bgMusic.paused && !bgMusic.muted) {
				startIntroMusic();
			}
			// Resume voice/katana only if the intro is still running (not finished)
			if (!overlay.hidden) {
				pageAudios.forEach(function (a) {
					if (a === katanaAudio && a.currentTime >= a.duration - 0.05) return;
					if (a.currentTime > 0 && !a.ended && a.paused) {
						const p = a.play();
						if (p !== undefined) p.catch(function () {});
					}
				});
			}
		}
		document.addEventListener('visibilitychange', function () {
			if (document.visibilityState === 'hidden') {
				pauseAllAudio();
			} else {
				resumeAudioOnVisible();
			}
		});
		window.addEventListener('pagehide', pauseAllAudio);
		window.addEventListener('beforeunload', pauseAllAudio);
		// Restored from back/forward cache
		window.addEventListener('pageshow', function (e) {
			if (e.persisted) resumeAudioOnVisible();
		});

		// Katana slash: sound + beam sweep + white flash, then the samurai
		// image is revealed. Voice-over is NOT stopped here — it keeps
		// playing through the reveal until the user clicks SKIP.
		function playSlashReveal() {
			if (katanaAudio) {
				katanaAudio.currentTime = 0;
				katanaAudio.volume = 1;
				const p = katanaAudio.play();
				if (p !== undefined) {
					p.catch(function () {});
				}
			}
			if (slashBeam) {
				slashBeam.classList.add('is-cutting');
			}
			window.setTimeout(function () {
				if (slashFlash) {
					slashFlash.classList.add('is-flashing');
				}
			}, 260);
			window.setTimeout(function () {
				showSpeechScene();
				window.setTimeout(function () {
					if (slashBeam) {
						slashBeam.classList.remove('is-cutting');
					}
					if (slashFlash) {
						slashFlash.classList.remove('is-flashing');
					}
				}, 700);
			}, 300);
		}

		overlay.style.setProperty('--intro-fade-duration', CONFIG.fadeDurationMs + 'ms');
		document.body.classList.add('kanji-intro-active');
		pageRegions.forEach(function (region) {
			region.inert = true;
		});

		function finishIntro(){
			if (isFinishing) {
				return;
			}

			isFinishing = true;
			timerIds.forEach(window.clearTimeout);
			stopVoiceOver();
			if (slashBeam) {
				slashBeam.classList.remove('is-cutting');
			}
			if (slashFlash) {
				slashFlash.classList.remove('is-flashing');
			}
			overlay.classList.remove('is-drawing');
			overlay.classList.add('is-finishing');
			overlay.setAttribute('aria-hidden', 'true');
			if (skipButton) {
				skipButton.disabled = true;
			}

			const finishTimer = window.setTimeout(function () {
				document.body.classList.remove('kanji-intro-active');
				pageRegions.forEach(function (region, index) {
					region.inert = previousInertStates[index];
				});
				overlay.hidden = true;
        startIntroMusic();



				if (CONFIG.playOncePerTab) {
					try {
						window.sessionStorage.setItem(CONFIG.storageKey, 'played');
					} catch (error) {
						return;
					}
				}

				if (main && document.activeElement === skipButton) {
					main.focus({ preventScroll: true });
				}
			}, CONFIG.fadeDurationMs);

			timerIds.push(finishTimer);
		}

		if (skipButton) {
			skipButton.addEventListener('click', finishIntro, { once: true });
		}

		window.requestAnimationFrame(function () {
			overlay.classList.add('is-drawing');
			strokes.forEach(function (path, index) {
				const delay = index * (CONFIG.strokeDurationMs + CONFIG.strokeGapMs);
				const strokeTimer = window.setTimeout(function () {
					path.style.transition = 'stroke-dashoffset ' + CONFIG.strokeDurationMs + 'ms cubic-bezier(0.22, 0.61, 0.36, 1)';
					path.style.strokeDashoffset = '0';
				}, delay);
				timerIds.push(strokeTimer);
			});

			const voiceTimer = window.setTimeout(playVoiceOver, VOICE_START_DELAY_MS);
			timerIds.push(voiceTimer);

			// Katana slash cuts in, then the samurai image is revealed and
			// HOLDS. Voice-over keeps playing throughout until the user
			// clicks SKIP — no auto-finish timer.
			const revealTimer = window.setTimeout(playSlashReveal, INTRO_RUNTIME_MS);
			timerIds.push(revealTimer);
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initializeKanjiIntro, { once: true });
	} else {
		initializeKanjiIntro();
	}
})();