/* ==========================================================================
   DESTINATIONS PRO RENDERER & FLYCAM MODAL ENGINE
   Renders 10 destinations with flycam video modals, food & spots showcases.
   ========================================================================== */

(function () {
  'use strict';

  function getCurrentLang() {
    if (window.i18n && typeof window.i18n.getCurrentLanguage === 'function') {
      const l = window.i18n.getCurrentLanguage();
      if (window.DESTINATIONS_DATA_ENHANCED && window.DESTINATIONS_DATA_ENHANCED[l]) {
        return l;
      }
    }
    return 'ja';
  }

  function getLangData() {
    const l = getCurrentLang();
    return window.DESTINATIONS_DATA_ENHANCED[l] || window.DESTINATIONS_DATA_ENHANCED.ja;
  }

  /* ─── Render Carousel Slides ────────────────────────────────────────────── */
  function renderCarouselSlides() {
    const track = document.getElementById('destinations-track');
    if (!track) return;

    const data = getLangData();
    const destList = Object.values(data.destinations);
    const counterEl = document.querySelector('.slider-counter');

    if (counterEl) {
      counterEl.innerHTML = `<span class="current-num">01</span> / ${String(destList.length).padStart(2, '0')}`;
    }

    // Pagination dots must follow the real slide count (header is authored with 3)
    const paginationEl = document.querySelector('.slider-pagination');
    if (paginationEl) {
      paginationEl.innerHTML = destList.map((dest, i) =>
        `<button class="slider-dot${i === 0 ? ' active' : ''}" role="tab" aria-selected="${i === 0 ? 'true' : 'false'}" aria-label="${dest.title}"></button>`
      ).join('');
      if (window.japanSlider && window.japanSlider.initDots) window.japanSlider.initDots();
    }

    let slidesHtml = '';
    destList.forEach((dest, idx) => {
      slidesHtml += `
        <article class="destination-slide" id="slide-${dest.id}">
          <div class="slide-image-box">
            <span class="slide-flycam-badge">
              <span class="rec-dot"></span>
              <span>${data.flycamBadge}</span>
            </span>
            <img 
              src="${dest.heroImage}" 
              alt="${dest.title}" 
              class="slide-image"
              loading="lazy"
            >
            <div class="slide-image-overlay"></div>
            <div class="slide-kanji-watermark">${dest.kanji}</div>
          </div>

          <div class="slide-content-box">
            <div class="slide-location-meta">
              <span class="dot"></span>
              <span>${dest.region}</span>
            </div>
            <div class="slide-title-wrap">
              <h3 class="slide-title">${dest.title}</h3>
              <div class="slide-subtitle-jp">${dest.subtitleJp}</div>
            </div>
            <p class="slide-description">
              ${dest.desc}
            </p>
            <div class="slide-quick-tags">
              ${dest.highlights.map(h => `<span class="quick-tag">${h}</span>`).join('')}
            </div>
            <div class="slide-actions">
              <button class="btn-primary dest-explore-btn" data-destination-trigger="${dest.id}">
                <span>${data.exploreBtn}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </article>
      `;
    });

    track.innerHTML = slidesHtml;

    // Re-initialize or update slider instance if it exists
    if (window.japanSlider) {
      window.japanSlider.refresh();
      window.japanSlider.resetAutoplay();
    }
  }

  /* ─── YouTube URL Parser ─────────────────────────────────────────────────── */
  function getYouTubeEmbedUrl(url) {
    if (!url) return null;
    const regExp = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/|watch\?.+&v=))([\w-]{11})/;
    const match = url.match(regExp);
    if (match && match[1]) {
      return `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1&mute=1&loop=1&playlist=${match[1]}&enablejsapi=1`;
    }
    return null;
  }

  /* ─── Build / Enhance Destination Modal ─────────────────────────────────── */
  function getOrCreateModal() {
    let modal = document.getElementById('destination-modal');
    if (!modal) return null;

    modal.innerHTML = `
      <div class="modal-container dest-pro-modal">
        <button id="modal-close-btn" class="modal-close-btn" aria-label="Close">&times;</button>
        
        <!-- Flycam Video Header -->
        <div class="dest-modal-hero" id="dest-modal-hero">
          <video 
            id="dest-modal-video" 
            class="dest-modal-video" 
            controls 
            autoplay 
            muted 
            loop 
            playsinline
          ></video>
          <iframe 
            id="dest-modal-iframe" 
            class="dest-modal-iframe" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            style="display: none;"
          ></iframe>
          <img id="dest-modal-img" src="" alt="" class="dest-modal-img-fallback">
          <div class="dest-modal-hero-overlay"></div>
          <div class="dest-modal-flycam-tag">
            <span class="rec-dot" style="width:7px;height:7px;background:#ff3333;border-radius:50%;display:inline-block;"></span>
            <span id="dest-modal-flycam-label">4K DRONE FLYCAM & 360 PANORAMA</span>
          </div>
        </div>

        <!-- Details Body -->
        <div class="dest-modal-body">
          <div class="dest-modal-header">
            <div class="dest-modal-meta" id="dest-modal-region"></div>
            <h2 class="dest-modal-title" id="dest-modal-title"></h2>
            <div class="dest-modal-subtitle-jp" id="dest-modal-subtitle"></div>
            <p class="dest-modal-desc" id="dest-modal-desc"></p>
          </div>

          <!-- Section 1: Culinary Gems -->
          <div class="dest-section-block">
            <h3 class="dest-section-title" id="dest-modal-food-title">Renowned Regional Culinary Gems</h3>
            <div class="dest-cards-grid" id="dest-modal-food-grid"></div>
          </div>

          <!-- Section 2: Famous Attractions & Spots -->
          <div class="dest-section-block">
            <h3 class="dest-section-title" id="dest-modal-spots-title">Essential Landmarks & Scenic Wonders</h3>
            <div class="dest-cards-grid" id="dest-modal-spots-grid"></div>
          </div>

          <!-- Practical Travel Info Box -->
          <div class="dest-travel-info-box">
            <div class="dest-info-col">
              <h4 id="dest-modal-season-label">Optimal Season</h4>
              <p id="dest-modal-season"></p>
            </div>
            <div class="dest-info-col">
              <h4 id="dest-modal-duration-label">Recommended Stay</h4>
              <p id="dest-modal-duration"></p>
            </div>
          </div>
        </div>
      </div>
    `;

    // Re-bind close button
    const closeBtn = modal.querySelector('#modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeModal());
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    return modal;
  }

  function openDestinationModal(destId) {
    const modal = getOrCreateModal();
    if (!modal) return;

    const data = getLangData();
    const dest = data.destinations[destId];
    if (!dest) return;

    // Video & Hero Image
    const heroWrap = document.getElementById('dest-modal-hero');
    const videoEl = document.getElementById('dest-modal-video');
    const iframeEl = document.getElementById('dest-modal-iframe');
    const imgEl = document.getElementById('dest-modal-img');
    const flycamLabel = document.getElementById('dest-modal-flycam-label');

    if (flycamLabel) flycamLabel.textContent = data.flycamBadge + ' · ' + dest.subtitleJp;

    const ytEmbedUrl = getYouTubeEmbedUrl(dest.video);

    if (ytEmbedUrl) {
      heroWrap.classList.remove('no-video');
      if (videoEl) {
        videoEl.pause();
        videoEl.removeAttribute('src');
        videoEl.style.display = 'none';
      }
      if (imgEl) imgEl.style.display = 'none';
      if (iframeEl) {
        iframeEl.style.display = 'block';
        iframeEl.src = ytEmbedUrl;
      }
    } else if (dest.video) {
      heroWrap.classList.remove('no-video');
      if (iframeEl) {
        iframeEl.src = '';
        iframeEl.style.display = 'none';
      }
      if (imgEl) imgEl.style.display = 'none';
      if (videoEl) {
        videoEl.style.display = 'block';
        videoEl.src = dest.video;
        videoEl.load();
        videoEl.play().catch(() => {});
      }
    } else {
      heroWrap.classList.add('no-video');
      if (iframeEl) {
        iframeEl.src = '';
        iframeEl.style.display = 'none';
      }
      if (videoEl) {
        videoEl.pause();
        videoEl.removeAttribute('src');
        videoEl.style.display = 'none';
      }
      if (imgEl) {
        imgEl.style.display = 'block';
        imgEl.src = dest.heroImage;
      }
    }

    // Texts
    document.getElementById('dest-modal-region').textContent = dest.region;
    document.getElementById('dest-modal-title').textContent = dest.title;
    document.getElementById('dest-modal-subtitle').textContent = dest.subtitleJp;
    document.getElementById('dest-modal-desc').textContent = dest.desc;

    // Titles
    document.getElementById('dest-modal-food-title').textContent = data.foodTitle;
    document.getElementById('dest-modal-spots-title').textContent = data.attractionsTitle;
    document.getElementById('dest-modal-season-label').textContent = data.seasonLabel;
    document.getElementById('dest-modal-duration-label').textContent = data.durationLabel;

    document.getElementById('dest-modal-season').textContent = dest.season;
    document.getElementById('dest-modal-duration').textContent = dest.duration;

    // Food Grid
    const foodGrid = document.getElementById('dest-modal-food-grid');
    foodGrid.innerHTML = dest.food.map(f => `
      <div class="dest-feature-card">
        <div class="dest-card-thumb-wrap">
          <img src="${f.thumb}" alt="${f.name}" class="dest-card-thumb" loading="lazy">
          <span class="dest-card-badge">GOURMET</span>
        </div>
        <div class="dest-card-content">
          <h4 class="dest-card-name">${f.name}</h4>
          <p class="dest-card-desc">${f.desc}</p>
        </div>
      </div>
    `).join('');

    // Spots Grid
    const spotsGrid = document.getElementById('dest-modal-spots-grid');
    spotsGrid.innerHTML = dest.spots.map(s => `
      <div class="dest-feature-card">
        <div class="dest-card-thumb-wrap">
          <img src="${s.thumb}" alt="${s.name}" class="dest-card-thumb" loading="lazy">
          <span class="dest-card-badge">LANDMARK</span>
        </div>
        <div class="dest-card-content">
          <h4 class="dest-card-name">${s.name}</h4>
          <p class="dest-card-desc">${s.desc}</p>
        </div>
      </div>
    `).join('');

    modal.setAttribute('data-current-dest', destId);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Đưa scroll của modal về đầu trang khi mở
    const container = modal.querySelector('.modal-container');
    if (container) {
      container.scrollTop = 0;
    }

    if (window.japanAudio) {
      window.japanAudio.playBrushStroke(0.3, 0.5);
    }
  }

  function closeModal() {
    const modal = document.getElementById('destination-modal');
    if (!modal) return;
    const videoEl = document.getElementById('dest-modal-video');
    if (videoEl) {
      videoEl.pause();
      videoEl.removeAttribute('src');
      videoEl.load();
    }
    const iframeEl = document.getElementById('dest-modal-iframe');
    if (iframeEl) {
      iframeEl.src = '';
      iframeEl.style.display = 'none';
    }
    modal.classList.remove('open');
    modal.removeAttribute('data-current-dest');
    document.body.style.overflow = '';
  }

  /* ─── Delegation for explore buttons ────────────────────────────────────── */
  function initEvents() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-destination-trigger]');
      if (btn) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const destId = btn.getAttribute('data-destination-trigger');
        openDestinationModal(destId);
      }
    }, true);

    window.addEventListener('keydown', (e) => {
      const modal = document.getElementById('destination-modal');
      if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
        closeModal();
      }
    });

    document.addEventListener('languageChanged', () => {
      renderCarouselSlides();
      const modal = document.getElementById('destination-modal');
      if (modal && modal.classList.contains('open')) {
        // refresh modal text if open
        const curId = modal.getAttribute('data-current-dest');
        if (curId) openDestinationModal(curId);
      }
    });
  }

  /* ─── Start on DOM ready ─────────────────────────────────────────────────── */
  function init() {
    renderCarouselSlides();
    initEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.openDestinationModal = openDestinationModal;
})();

