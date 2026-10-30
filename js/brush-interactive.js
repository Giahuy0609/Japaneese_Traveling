/* ==========================================================================
   JAPAN SAMURAI — INTERACTIVE CALLIGRAPHY STUDIO (BRUSH OF THE MASTER)
   Virtual Washi Paper with Dynamic Calligraphy Brush Physics & Audio Feedback
   ========================================================================== */

class InteractiveBrushStudio {
  constructor() {
    this.canvas = document.getElementById('calligraphy-canvas');
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.colorBtns = document.querySelectorAll('.ink-btn');
    this.presetBtns = document.querySelectorAll('.preset-btn');
    this.clearBtn = document.getElementById('btn-clear-canvas');
    this.splatterBtn = document.getElementById('btn-splatter-ink');

    this.currentColor = '#121314'; // Ink black default
    this.isDrawing = false;
    this.lastX = 0;
    this.lastY = 0;
    this.lastTime = 0;
    this.currentWidth = 14;

    this.soundThrottle = 0;

    this.init();
  }

  init() {
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    // Mouse events
    this.canvas.addEventListener('mousedown', (e) => this.startStroke(e));
    this.canvas.addEventListener('mousemove', (e) => this.drawStroke(e));
    window.addEventListener('mouseup', () => this.endStroke());

    // Touch events for mobile/tablet
    this.canvas.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      this.startStroke(touch);
    }, { passive: false });

    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      this.drawStroke(touch);
    }, { passive: false });

    window.addEventListener('touchend', () => this.endStroke());

    // Color Pickers
    this.colorBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.colorBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentColor = btn.dataset.color || '#121314';
      });
    });

    // Clear Canvas
    if (this.clearBtn) {
      this.clearBtn.addEventListener('click', () => {
        this.clear();
      });
    }

    // Splatter ink effect
    if (this.splatterBtn) {
      this.splatterBtn.addEventListener('click', () => {
        this.splatter();
        if (window.japanAudio) window.japanAudio.playBrushStroke(0.2, 0.7);
      });
    }

    // Kanji Presets
    this.presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const kanji = btn.dataset.kanji;
        this.drawKanjiPreset(kanji);
      });
    });
  }

  resizeCanvas() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    if (Math.abs(this.canvas.width - rect.width) < 2 && Math.abs(this.canvas.height - rect.height) < 2) return;

    let imgData = null;
    if (this.canvas.width > 0 && this.canvas.height > 0) {
      try {
        imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
      } catch (e) {}
    }

    this.canvas.width = rect.width;
    this.canvas.height = rect.height;

    if (imgData) {
      try {
        this.ctx.putImageData(imgData, 0, 0);
      } catch (e) {}
    }
  }

  startStroke(e) {
    this.isDrawing = true;
    const pos = this.getCanvasPos(e);
    this.lastX = pos.x;
    this.lastY = pos.y;
    this.lastTime = Date.now();
    this.currentWidth = 16;

    // Draw initial ink droplet
    this.ctx.beginPath();
    this.ctx.arc(this.lastX, this.lastY, this.currentWidth / 2, 0, Math.PI * 2);
    this.ctx.fillStyle = this.currentColor;
    this.ctx.fill();

    if (window.japanAudio) {
      window.japanAudio.playBrushStroke(0.3, 0.6);
    }
  }

  drawStroke(e) {
    if (!this.isDrawing) return;

    const pos = this.getCanvasPos(e);
    const now = Date.now();
    const dt = Math.max(now - this.lastTime, 1);
    const dist = Math.hypot(pos.x - this.lastX, pos.y - this.lastY);
    const speed = dist / dt;

    // Natural brush physics: Faster movement = thinner tapered stroke
    const targetWidth = Math.max(4, Math.min(26, 24 - speed * 4));
    this.currentWidth = this.currentWidth * 0.7 + targetWidth * 0.3;

    this.ctx.beginPath();
    this.ctx.moveTo(this.lastX, this.lastY);
    this.ctx.lineTo(pos.x, pos.y);
    this.ctx.strokeStyle = this.currentColor;
    this.ctx.lineWidth = this.currentWidth;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.stroke();

    // Occasional tiny organic bristle fiber splatters
    if (speed > 1.8 && Math.random() > 0.6) {
      this.ctx.beginPath();
      const ox = pos.x + (Math.random() - 0.5) * 20;
      const oy = pos.y + (Math.random() - 0.5) * 20;
      this.ctx.arc(ox, oy, Math.random() * 2 + 0.8, 0, Math.PI * 2);
      this.ctx.fillStyle = this.currentColor;
      this.ctx.fill();
    }

    // Play subtle audio whoosh periodically while drawing
    if (now - this.soundThrottle > 280) {
      if (window.japanAudio) {
        window.japanAudio.playBrushStroke(0.2, 0.45);
      }
      this.soundThrottle = now;
    }

    this.lastX = pos.x;
    this.lastY = pos.y;
    this.lastTime = now;
  }

  endStroke() {
    this.isDrawing = false;
  }

  getCanvasPos(e) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  splatter() {
    const cx = this.canvas.width / 2 + (Math.random() - 0.5) * 150;
    const cy = this.canvas.height / 2 + (Math.random() - 0.5) * 100;
    const count = 18 + Math.floor(Math.random() * 15);

    this.ctx.fillStyle = this.currentColor;
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 120 + 10;
      const px = cx + Math.cos(angle) * radius;
      const py = cy + Math.sin(angle) * radius;
      const dotSize = Math.random() * 5 + 1;

      this.ctx.beginPath();
      this.ctx.arc(px, py, dotSize, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  drawKanjiPreset(char) {
    this.clear();
    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2;

    this.ctx.save();
    this.ctx.font = `bold ${Math.min(this.canvas.width * 0.45, 220)}px "Noto Serif JP", serif`;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = this.currentColor;
    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
    this.ctx.shadowBlur = 10;
    this.ctx.fillText(char, cx, cy);
    this.ctx.restore();

    this.splatter();
    if (window.japanAudio) {
      window.japanAudio.playTaikoImpact(120);
    }
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.interactiveBrush = new InteractiveBrushStudio();
});
