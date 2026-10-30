/* ==========================================================================
   JAPAN SAMURAI — DESTINATIONS CAROUSEL / SLIDER
   Full Touch Gesture, Keyboard Navigation, Pagination, and Modal Details
   ========================================================================== */

// Must match the .destinations-track transition duration in css/components.css
const SLIDE_TRANSITION_MS = 700;
// Hard cap on how long the counter/dots wait for the track to land (fallback
// only: transitionend normally resolves it as soon as the slide stops).
const SLIDE_SETTLE_MAX_MS = 1200;

class DestinationSlider {
  constructor() {
    this.track = document.getElementById('destinations-track');
    this.slides = Array.from(document.querySelectorAll('.destination-slide'));
    this.prevBtn = document.getElementById('slider-prev-btn');
    this.nextBtn = document.getElementById('slider-next-btn');
    this.dots = Array.from(document.querySelectorAll('.slider-dot'));
    // The counter node must be re-queried: destinations-pro re-renders it on load/lang change
    this.getCounter = () =>
      document.querySelector('.slider-counter .current-num');

    this.currentIndex = 0;
    this.totalSlides = this.slides.length;
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.isDragging = false;
    this.autoplayInterval = null;
    this.transitionSyncTimer = null;
    this.pendingIndicatorSync = null;
    this.renderedIndex = undefined;

    this.init();
  }

  init() {
    if (!this.track || this.totalSlides === 0) return;

    // Autoplay only starts once the user has actually reached the carousel;
    // a slide must never advance unseen above the fold.
    this.bindAutoplayObserver();

    // Button controls
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        this.prev();
        this.resetAutoplay();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        this.next();
        this.resetAutoplay();
      });
    }

    // Dot controls
    this.initDots();

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      const rect = this.track.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (!isVisible) return;

      if (e.key === 'ArrowRight') {
        this.next();
        this.resetAutoplay();
      } else if (e.key === 'ArrowLeft') {
        this.prev();
        this.resetAutoplay();
      }
    });

    // Touch gesture support
    this.track.addEventListener('touchstart', (e) => {
      this.touchStartX = e.touches[0].clientX;
      this.isDragging = true;
    }, { passive: true });

    this.track.addEventListener('touchmove', (e) => {
      if (!this.isDragging) return;
      this.touchEndX = e.touches[0].clientX;
    }, { passive: true });

    this.track.addEventListener('touchend', () => {
      if (!this.isDragging) return;
      this.isDragging = false;
      const diff = this.touchStartX - this.touchEndX;
      const threshold = 45; // min swipe distance in px

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          this.next();
        } else {
          this.prev();
        }
        this.resetAutoplay();
      }
    });

    // Pause autoplay on mouse enter
    const wrapper = document.querySelector('.destinations-carousel-wrapper');
    if (wrapper) {
      wrapper.addEventListener('mouseenter', () => this.stopAutoplay());
      wrapper.addEventListener('mouseleave', () => this.startAutoplay());
    }

    // Keep the pixel offset correct when the viewport (slide width) changes
    window.addEventListener('resize', () => this.syncOffset());

    this.update();
  }

  bindAutoplayObserver() {
    const section = this.track.closest('section') || this.track;
    this.inView = false;
    if (!('IntersectionObserver' in window)) {
      this.inView = true;
      this.startAutoplay();
      return;
    }
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.inView = entry.isIntersecting;
        if (this.inView) this.startAutoplay();
        else this.stopAutoplay();
      });
    }, { threshold: 0.25 }).observe(section);
  }

  /* Bind click handlers to the current dots (they are re-rendered on language change) */
  initDots() {
    // Resolve the index at click time: the dot list is re-rendered with the same
    // count on language change, so a captured index would go stale.
    const bind = (dot) => {
      if (!dot || dot.dataset.bound === '1') return;
      dot.dataset.bound = '1';
      dot.addEventListener('click', (e) => {
        e.stopPropagation(); // the pagination delegate below is only a safety net
        this.goTo(this.dots.indexOf(dot));
        this.resetAutoplay();
      });
    };
    this.dots = Array.from(document.querySelectorAll('.slider-dot'));
    this.dots.forEach(bind);

    // Safety net for dots re-rendered after this point (no direct handler yet).
    // Delegated first, so it sees the click before any direct handler runs.
    if (!this.paginationBound) {
      const pagination = document.querySelector('.slider-pagination');
      if (pagination) {
        this.paginationBound = true;
        pagination.addEventListener('click', (e) => {
          const dot = e.target.closest('.slider-dot');
          if (!dot || dot.dataset.bound === '1') return;
          const index = this.dots.indexOf(dot);
          if (index < 0) return;
          this.goTo(index);
          this.resetAutoplay();
        });
      }
    }
    this.update();
  }

  goTo(index) {
    this.dots = Array.from(document.querySelectorAll('.slider-dot'));
    const next = this.normalizeIndex(index);
    if (next === this.currentIndex) return;
    this.currentIndex = next;
    this.update();
  }

  next() {
    this.goTo(this.currentIndex + 1);
  }

  prev() {
    this.goTo(this.currentIndex - 1);
  }

  /* Wrap an arbitrary index into 0..totalSlides-1. */
  normalizeIndex(index) {
    if (this.totalSlides === 0) return 0;
    if (!Number.isFinite(index)) return 0;
    return ((Math.trunc(index) % this.totalSlides) + this.totalSlides) % this.totalSlides;
  }

  update() {
    if (!this.track) return;
    // Never leave the track where a (now stale) re-render put it: a slide count
    // change invalidates any percentage based position.
    this.slides = Array.from(this.track.children);
    this.totalSlides = this.slides.length;
    this.currentIndex = this.normalizeIndex(this.currentIndex);

    this.renderedIndexBeforeUpdate = this.renderedIndex;
    const willAnimate = this.renderedIndex !== this.currentIndex;
    const offset = this.pixelOffsetFor(this.currentIndex);
    this.targetOffset = offset;
    this.targetTransform = offset === null
      ? `translateX(${-this.currentIndex * 100}cqw)`
      : `translateX(${offset}px)`;
    this.track.style.transform = this.targetTransform;
    this.renderedIndex = this.currentIndex;

    // Counter and dots follow the slide that is actually on screen. Swap them
    // only once the slide transition has finished, so the number never runs
    // ahead of the image mid-animation.
    const applyIndicators = () => {
      // A newer update() has taken over — this (stale) sync must not win
      if (this.targetIndex !== pendingIndex) return;

      const label = String(this.currentIndex + 1).padStart(2, '0');
      const counter = this.getCounter();
      if (counter) counter.textContent = label;

      this.dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === this.currentIndex);
        dot.setAttribute('aria-selected', idx === this.currentIndex ? 'true' : 'false');
      });
    };

    const pendingIndex = this.currentIndex;
    this.targetIndex = pendingIndex;

    // A jump of more than one slide (dot click, long autoplay catch-up) is shown
    // without the travel animation, so the indicators must not wait for it.
    const from = this.renderedIndexBeforeUpdate ?? pendingIndex;
    const distance = Math.abs(from - pendingIndex);
    const jumped = distance > 1 && distance < this.totalSlides - 1;

    if (willAnimate && !jumped && this.syncIndicatorsOnSettle()) {
      clearTimeout(this.transitionSyncTimer);
      this.pendingIndicatorSync = applyIndicators;
      // Fallback in case transitionend never fires (tab hidden, reduced motion…)
      this.transitionSyncTimer = setTimeout(
        () => this.flushIndicators(),
        SLIDE_TRANSITION_MS,
      );
    } else {
      applyIndicators();
    }

    // Accessible aria attributes
    this.slides.forEach((slide, idx) => {
      slide.setAttribute('aria-hidden', idx !== this.currentIndex ? 'true' : 'false');
    });
  }

  /*
   * Swap the counter/dots once the track has really arrived. The transitionend
   * event can fire before the final position is painted (or not fire at all on
   * long, throttled transitions), so keep re-checking the slide that is actually
   * at the carousel's left edge until it is the one we asked for. Bounded by
   * SLIDE_SETTLE_MAX_MS so a skipped transition can never leave it stuck.
   */
  flushIndicators() {
    clearTimeout(this.transitionSyncTimer);
    const fn = this.pendingIndicatorSync;
    if (!fn) return;

    const pendingIndex = this.targetIndex;
    const arrived = () => this.computeVisibleIndex() === pendingIndex;

    const deadline = performance.now() + SLIDE_SETTLE_MAX_MS;
    const wait = () => {
      if (arrived() || performance.now() > deadline) {
        this.pendingIndicatorSync = null;
        fn();
        return;
      }
      this.transitionSyncTimer = setTimeout(wait, 16);
    };
    wait();
  }

  /* Wait for the CSS slide transition before swapping counter/dot labels. */
  syncIndicatorsOnSettle() {
    if (this.reducedMotion === undefined) {
      this.reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce), (update: fast)',
      ).matches;
    }
    if (this.reducedMotion) return false;

    if (!this.transitionBound) {
      this.transitionBound = true;
      const track = this.track;
      // offsetFor() depends on the container width: re-measure silently on resize
      if (typeof ResizeObserver !== 'undefined') {
        new ResizeObserver(() => this.syncOffset()).observe(track.parentElement || track);
      }
      const fire = (e) => {
        // Ignore transform transitions bubbled from child elements (hover scale etc.)
        if (e && (e.target !== track || e.propertyName !== 'transform')) return;
        this.flushIndicators();
      };
      track.addEventListener('transitionend', fire);
      track.addEventListener('transitioncancel', fire);
    }
    return true;
  }

  /* Re-read slides/dots after the carousel markup is re-rendered (language switch). */
  refresh() {
    this.pendingIndicatorSync = null;
    clearTimeout(this.transitionSyncTimer);
    if (!this.track) return;
    // Rebuild dots first: that update() also re-applies the offset for the new
    // markup, so the position and the indicators are consistent again.
    this.initDots();
  }

  /* Re-measure without animating and without touching the indicators. */
  syncOffset() {
    if (!this.track) return;
    this.slides = Array.from(this.track.children);
    this.totalSlides = this.slides.length;
    this.currentIndex = this.normalizeIndex(this.currentIndex);
    const offset = this.pixelOffsetFor(this.currentIndex);
    this.targetOffset = offset;
    this.track.style.transform = this.offsetFor(this.currentIndex);
    this.renderedIndex = this.currentIndex;
  }

  pixelOffsetFor(index) {
    const container = this.track.parentElement || this.track;
    const slideWidth = container.getBoundingClientRect().width;
    return slideWidth ? -index * slideWidth : null;
  }

  offsetFor(index) {
    const offset = this.pixelOffsetFor(index);
    return offset === null ? `translateX(${-index * 100}cqw)` : `translateX(${offset}px)`;
  }

  startAutoplay() {
    this.stopAutoplay();
    if (this.inView === false) return;
    this.autoplayInterval = setInterval(() => {
      // Always move forward, never land on the slide already shown
      this.goTo(this.currentIndex + 1);
    }, 7000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  resetAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.japanSlider = new DestinationSlider();
});

