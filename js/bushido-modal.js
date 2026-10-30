/* ==========================================================================
   BUSHIDO VIRTUE KANJI MODAL — Multilingual Stroke-by-Stroke Animation
   Supports JA, EN, VI switching via i18n system.
   ========================================================================== */

(function () {
  'use strict';

  /* ─── KanjiVG stroke data (109x109 viewBox) ─────────────────────────────── */
  const STROKE_DATA = {
    gi: [
      "M34.53,11.15c3.36,1.79,8.68,7.35,9.52,10.13",
      "M66.87,9.64c0.12,0.61,0.02,1.43-0.25,1.96c-1.75,3.4-4.38,6.51-8.92,10.68",
      "M31,26.78c2,0.47,4.55,0.36,6.51,0.17c8.24-0.79,26.18-2.79,34.75-3.39c1.96-0.14,4.78-0.35,6.71,0.07",
      "M53.1,27.44c0.79,0.79,1.11,1.93,1.11,3.31c0,3.37-0.18,9.12-0.18,14.49",
      "M34.86,37.2c2.01,0.42,4.43,0.06,6.4-0.16c7.81-0.87,20.85-2.51,27.87-2.95c1.84-0.12,3.76-0.27,5.58,0.12",
      "M24.75,47.52c2.44,0.77,5.61,0.4,8.12,0.15c9.29-0.91,31.49-2.93,44.01-3.79c2.98-0.2,6.17-0.32,9.11,0.24",
      "M43.76,50.91c-0.01,0.96-0.66,1.78-1.44,2.29c-3.69,2.42-8.81,4.42-17.76,7.66",
      "M17,68.51c4.25,0.74,7.82,0.35,11.52-0.15c13.73-1.86,37.73-4.61,54.74-5.77c3.52-0.24,7-0.19,10.5,0.44",
      "M39.77,58.78c0.79,0.79,1.26,2.09,1.26,3.17c0,9.02-0.01,30.62-0.01,33.68c0,7.86-5.21-0.07-6.71-0.84",
      "M17.02,85.17c0.98,0.69,2.06,0.85,3.77,0.23c1.48-0.54,21.29-8.68,27.59-11.27",
      "M59,49.25c1.35,1.1,2.38,2.66,2.69,5.02c2.56,19.48,11.56,35.48,25.68,44.49c4.99,3.18,4.55,0.47,3.87-4.4",
      "M80.72,68.71c-0.09,1.04-0.3,1.99-0.87,2.86C76.29,77,65.5,86.71,48.81,94.2",
      "M70.25,49.75c3.34,1.5,8.69,4.94,10.25,7.52"
    ],
    yu: [
      "M32.96,13.82c2.66,0.8,4.44,0.73,6.69,0.43c7.33-0.99,28.71-4.02,31.36-4.31c3.04-0.33,3.87,1.44,1.77,3.04c-1.53,1.17-11.28,8.52-17.56,13.3",
      "M44.87,22.77C49.25,24,54.88,26.5,58.4,30",
      "M26.5,32.54c0.98,0.98,1.32,2.37,1.52,3.44c0.86,4.61,2,13.46,2.92,20.78c0.16,1.25,0.3,2.46,0.44,3.59",
      "M29,34.44c15.38-1.94,41.38-4.63,50.81-4.95c3.32-0.11,4.69,1.76,4.16,4.42c-0.78,3.92-2.34,11.9-3.88,19.46c-0.24,1.17-0.47,2.33-0.71,3.46",
      "M54,34.91c0.86,0.86,1.26,1.97,1.26,3.34c0,6.97-0.06,14.71-0.06,16.67",
      "M30.73,46.17c8.02-0.92,43.15-4.17,50.55-4.46",
      "M32.37,58.14c14.63-1.27,30.76-2.39,46.39-3.29",
      "M24.63,71.17c2.38,0.64,4.6,0.39,7.01,0.15c10.88-1.09,34.74-3.44,43.86-4.32c4.37-0.42,6.1,1.62,4.94,6.12c-1.48,5.75-6.89,17.75-10.69,21.64c-3.37,3.45-7.12-0.88-9.25-2.5",
      "M54.66,60.59c0.09,0.84-0.02,2.18-0.44,3.39c-3.08,8.95-11.1,22.65-31.33,32.46"
    ],
    jin: [
      "M32.26,15.75c0.36,1.62,0.19,3.35-0.48,5.24C27.5,33.05,21.32,45.87,11.5,60.54",
      "M24.28,44.25c0.8,0.8,1.26,2.22,1.26,3.48c0,12.15,0.14,30.73,0.01,41.77c-0.03,2.58-0.05,4.73-0.05,6.25",
      "M49,36c1.88,0.5,3.97,0.52,5.62,0.34c6.32-0.67,19.78-1.91,27.12-2.55c1.93-0.17,4.13-0.1,6.01,0.36",
      "M36.5,77.83c2.6,0.93,5.92,0.75,8.62,0.48c9.77-0.97,32.2-2.55,45.38-3.15c2.69-0.12,5.61-0.03,8.25,0.53"
    ],
    rei: [
      "M29.08,14.12c3.93,2.24,8.13,6.21,11.5,10.12",
      "M15.36,39.25c1.04,0.45,3.14,0.91,4.93,0.7c5.75-0.69,20.57-4.37,22.55-4.95c2.59-0.75,4.09,1.26,2.51,3.5C39.91,46.25,26.38,64.38,14.5,74",
      "M35,54.86c0.88,0.88,1.52,2.27,1.52,4.14c0,8.67-0.01,23.85-0.02,31.75c0,2.35,0,4.05,0,4.75",
      "M39.2,56.5c3.71,2.41,7.69,6.03,10.88,10.25",
      "M67.24,17.37c1.01,1.01,1.49,2.88,1.49,4.43c0,8.19-0.13,49.14-0.13,54.7c0,9.88,2.15,12.03,12.96,12.03C93,88.53,94.89,87,94.89,78.9"
    ],
    makoto: [
      "M22.8,14.5c2.16,1.41,5.59,5.8,6.13,8",
      "M10.12,32.83c1.44,0.47,3.3,0.33,4.79,0.15c8.15-0.93,15.89-2.25,22.15-3.04c1.17-0.15,2.95-0.14,3.54-0.02",
      "M16.18,46.06c1.31,0.37,2.88,0.14,4.19-0.1c3.96-0.72,7.85-1.36,11.63-1.94c1.61-0.25,3.4-0.55,5.02-0.27",
      "M16.8,58.33c1.13,0.35,2.66,0.17,3.83,0.04c3.92-0.45,8.84-1.36,12.25-1.89c1.43-0.22,2.52-0.52,3.96-0.26",
      "M15.76,70.67c0.78,0.78,1.24,1.92,1.45,2.93c0.65,3.2,1.27,8.19,1.89,12.88c0.19,1.46,0.28,2.83,0.5,4.05",
      "M18.05,71.74c6.63-1.03,10.77-1.72,16.05-2.46c2.51-0.35,3.91,0.12,3.32,2.83c-0.76,3.49-1.37,7.32-2.8,13.04",
      "M20.63,87.94c3.91-0.39,7.28-1.05,12.12-1.68c1.15-0.15,2.35-0.3,3.63-0.44",
      "M48.15,33.75c0.86,0.86,1.26,2.25,1.26,3.49c0,18.01,0.09,39.76-9.35,55.97",
      "M49.43,35.2c1.03,0.54,2.93,0.39,3.96,0.29c8.07-0.79,27.37-3.35,33.24-4.03c1.83-0.21,4.01-0.48,5.8,0.08",
      "M50.35,56.51c3.9-0.76,10.62-2.16,12.01-2.27c1.61-0.12,3.18,0.93,2.94,3.42c-0.21,2.17-1.59,16-4.23,24.05c-1.57,4.79-3.62,4.99-6.08,1.17",
      "M65.99,9.5c1.22,1.87,1.67,2.39,1.98,6.42C70.38,46.75,79,79.75,94.27,94.14c4.53,4.26,4.12,0.8,3.51-7.5",
      "M88.84,44.14c0.41,1.11,0.44,2.51,0.1,4.17c-2.31,11.44-8.69,34.81-26.59,45.65",
      "M81.88,13.12c2.45,1.77,6.38,5.83,7.52,8.88"
    ],
    meiyo: {
      left: [
        "M54.2,12.64c0.3,1.61-0.07,2.99-0.69,4.24c-3.49,7.13-13.28,19.29-25.96,27.54",
        "M53.25,24.16c0.88,0.47,1.95,0.5,3.28,0.37c4.37-0.43,11.99-2.47,17.81-4.1c4.18-1.17,5.46,1.02,4.41,3.51C72.25,39.38,43.88,69.62,16,77.5",
        "M43.62,40.88c3.62,2,8,6,9.68,9.58",
        "M42,67.81c0.91,0.91,1.62,2.19,1.83,3.33c0.5,2.82,2.15,14.38,3.05,20.86c0.3,2.12,0.52,3.7,0.59,4.25",
        "M44.53,69.52c10.82-1.38,32.39-4.4,38.01-4.53c2.76-0.06,4.08,1.63,3.25,4.64c-1.13,4.06-3.52,14.04-4.64,20.36",
        "M47.99,93.99c7.26-0.61,19.65-1.61,29.54-2.37c2.19-0.17,4.24-0.28,6.04-0.31"
      ],
      right: [
        "M28,14.25c3.61,3.23,7.48,8.88,8,10.5",
        "M47.75,12c1.64,2,5.59,7.25,6.25,10.5",
        "M75.12,10.25c0.13,1.12,0,2.12-0.65,3.1c-2.88,4.29-7.97,10.02-11.22,13.15",
        "M12,33.2c3.69,1.32,8.94,0.57,12.76,0.11c13.49-1.65,39.74-3.93,56.87-5.1c3.56-0.24,7.61-0.17,11.12,0.59",
        "M40.48,34.39c0.08,0.71-0.1,2.44-0.66,3.35c-4.06,6.51-14.06,18.01-28,26.73",
        "M61.75,31c3.4,2.96,16.38,15.22,23.97,21.94c2.56,2.26,6.24,4.54,8.53,5.81",
        "M50.38,39.75c2.25,1.32,5.81,5.44,6.37,7.5",
        "M33.37,54.9c2.23,0.79,4.68,0.83,7,0.66c9.88-0.71,20.62-2.82,28.26-3.52c1.4-0.13,3.51-0.11,4.21,0.04",
        "M39.48,64.06c1.39,0.6,3.41,0.48,4.9,0.34c5.52-0.51,11.91-1.85,18.38-2.67c1.52-0.19,3.12-0.45,4.64-0.23",
        "M39.83,72.83c1.42,0.36,3.08,0.41,4.55,0.33c4.75-0.25,13.53-1.54,18.88-2.4c1.6-0.25,3.45-0.54,5.06-0.29",
        "M35.39,81.64c0.8,0.8,0.98,1.63,1.13,2.44c0.73,3.92,1.55,6.71,2.39,10.93c0.2,1.02,0.4,2.02,0.59,2.98",
        "M37.56,83.94c7.04-0.86,21.71-2.72,28.7-3.6c3.06-0.39,4.36,0.05,3.41,3.27c-0.84,2.88-1.44,4.62-2.75,9.47",
        "M40.47,96.42c3.9-0.36,16.46-1.27,24.29-1.97c1.81-0.16,3.36-0.19,4.65-0.19"
      ]
    },
    chugi: {
      left: [
        "M25.08,29.23c0.78,0.78,1.17,1.52,1.48,2.73c1.15,4.48,2.03,9.58,3.49,17.53c0.27,1.48,0.54,3.01,0.8,4.6",
        "M27.03,30.45c13.34-1.07,42.4-4.22,52.06-4.63c3.62-0.15,5.03,1.53,4.19,4.86c-2.02,7.96-2.77,11.58-3.8,15.65",
        "M31.57,51.11c9.41-0.95,29.41-2.28,44.2-3.33c2.08-0.15,4.07-0.29,5.93-0.41",
        "M53.06,13c1.03,1.03,1.18,2.5,1.18,3.66c0,4-0.08,27.32-0.11,38.97c-0.01,2.47-0.01,4.41-0.01,5.5",
        "M22.07,72.55c0.32,2.67-3.2,14.47-5.75,18.93",
        "M34.24,68.96C44,88.88,57.12,96.75,82.11,95.56c7.21-0.34,7.17-3.37,3.24-7.41",
        "M54.19,67.25c1.55,3.02,5.85,9.01,6.82,4.75",
        "M78.31,63.56c5.57,3.06,10.07,6.31,14.13,12.25"
      ],
      right: [
        "M34.53,11.15c3.36,1.79,8.68,7.35,9.52,10.13",
        "M66.87,9.64c0.12,0.61,0.02,1.43-0.25,1.96c-1.75,3.4-4.38,6.51-8.92,10.68",
        "M31,26.78c2,0.47,4.55,0.36,6.51,0.17c8.24-0.79,26.18-2.79,34.75-3.39c1.96-0.14,4.78-0.35,6.71,0.07",
        "M53.1,27.44c0.79,0.79,1.11,1.93,1.11,3.31c0,3.37-0.18,9.12-0.18,14.49",
        "M34.86,37.2c2.01,0.42,4.43,0.06,6.4-0.16c7.81-0.87,20.85-2.51,27.87-2.95c1.84-0.12,3.76-0.27,5.58,0.12",
        "M24.75,47.52c2.44,0.77,5.61,0.4,8.12,0.15c9.29-0.91,31.49-2.93,44.01-3.79c2.98-0.2,6.17-0.32,9.11,0.24",
        "M43.76,50.91c-0.01,0.96-0.66,1.78-1.44,2.29c-3.69,2.42-8.81,4.42-17.76,7.66",
        "M17,68.51c4.25,0.74,7.82,0.35,11.52-0.15c13.73-1.86,37.73-4.61,54.74-5.77c3.52-0.24,7-0.19,10.5,0.44",
        "M39.77,58.78c0.79,0.79,1.26,2.09,1.26,3.17c0,9.02-0.01,30.62-0.01,33.68c0,7.86-5.21-0.07-6.71-0.84",
        "M17.02,85.17c0.98,0.69,2.06,0.85,3.77,0.23c1.48-0.54,21.29-8.68,27.59-11.27",
        "M59,49.25c1.35,1.1,2.38,2.66,2.69,5.02c2.56,19.48,11.56,35.48,25.68,44.49c4.99,3.18,4.55,0.47,3.87-4.4",
        "M80.72,68.71c-0.09,1.04-0.3,1.99-0.87,2.86C76.29,77,65.5,86.71,48.81,94.2",
        "M70.25,49.75c3.34,1.5,8.69,4.94,10.25,7.52"
      ]
    }
  };

  /* ─── Geisha arts stroke data (KanjiVG chính thức, 109x109 viewBox) ─────── */
  const GEISHA_STROKE_DATA = {
    mai: [ // 舞 — dance
      "M38.19,10.95c0.11,1.1,0.1,1.73-0.54,2.66c-4.96,7.25-10.11,12.81-16.91,18.55",
      "M34.14,21.23c2.41-0.07,4.83-0.26,7.23-0.46c9.61-0.79,24.45-2.13,33.5-2.99c3.44-0.33,6.62-0.53,9.96-0.14",
      "M15,37.87c3.5,0.63,6.76,0.58,9.88,0.25c12.08-1.28,44.35-3.85,60.74-4.76c3.27-0.18,6.39-0.19,9.62,0.51",
      "M34.77,25.73c0.81,0.81,1.11,1.64,1.23,3.12c0.48,5.88,0.84,12.15,1.14,19.76",
      "M48.76,24.43c0.97,0.97,1.18,2.07,1.18,3.54c0,4.73-0.07,12.67-0.07,19.78",
      "M61.9,22.39c1.11,1.11,1,2.36,0.93,3.79C62.62,30.5,62.38,38.88,62.01,47",
      "M75.47,21.32c0.65,1.06,0.72,2.21,0.43,3.9c-1.14,6.88-1.07,7.96-3.22,21.28",
      "M20.05,50.02c3,1.07,6.48,0.45,9.57,0.21c10.9-0.81,34.21-2.38,49-3.09c3.25-0.16,6.37-0.38,9.57,0.31",
      "M32.21,56.39c0.16,0.98-0.11,1.82-0.43,2.5c-2.13,4.45-6.92,10.82-14.28,16.69",
      "M33.95,60.7c0.26,0.03,2.39,0.08,3.12-0.1c3.43-0.85,6-1.74,9.26-2.93c2.34-0.85,3.47,1.05,2.72,2.79C44.75,70.5,32.38,88.62,13.5,97.5",
      "M28.12,70c2.39,1.14,6.17,4.69,6.77,6.47",
      "M62.38,60.76c0.65,0.26,1.84,0.08,2.48,0.01c3.38-0.37,10.51-1.4,16.02-2.18c1.81-0.26,3.46-0.59,5.28-0.15",
      "M60.5,58.88c0.75,0.75,1.26,1.87,1.26,3.37c0,5.13,0.05,8.5,0.05,12.73",
      "M49.25,76.64c2.62,0.61,4.87,0.49,7.12,0.26c7.79-0.8,23.47-2.53,31.25-2.77c2.24-0.07,4.68-0.15,6.88,0.39",
      "M72.83,50.5c0.96,0.96,1.39,2.38,1.39,3.98c0,0.7,0.06,25.95-0.08,38.52c-0.03,2.87,0.01,5.28-0.02,6.25"
    ],
    so: [ // 装 — attire
      "M39.31,12.75c0.84,0.84,1.25,2.12,1.25,3.5c0,4.48-0.04,18.2-0.06,29.13c0,1.9,0,3.71,0,5.38",
      "M23.02,19.42c3.02,1.31,7.79,5.37,8.55,7.4",
      "M21,45.13c1.38,0.74,1.98,0.56,3.1-0.11c3.27-1.94,7.05-4.55,10.02-7.02",
      "M49.21,26.86c2.17,0.39,4.34,0.38,5.91,0.13c8.25-1.36,21.88-2.61,28.89-2.95c1.86-0.09,3.61-0.28,4.95,0",
      "M66.49,12.4c0.8,0.8,1.23,1.85,1.23,3c0,4.73,0.06,13.42,0.06,25.13",
      "M51.9,42.93c1.73,0.32,3.61,0.36,5.23,0.18c7.62-0.86,15.32-1.68,23.62-2.35c1.64-0.13,3.32-0.12,4.93,0.25",
      "M52.68,49.23c0.92,0.92,1.45,2.15,1.45,3.47c0,2.91-0.1,3.67-0.1,5.19",
      "M18.75,61.18c2.75,0.57,5.77,0.55,8.88,0.21c12.75-1.39,39.82-3.59,54.62-4.18c2.96-0.12,6.38-0.09,9,0.29",
      "M48.63,59.91c0,0.72-0.3,1.7-0.93,2.47C43,68.12,32.5,78.5,15.8,85.77",
      "M39.62,74.66c0.92,0.92,1.19,2.21,1.19,3.64c0,3.2-0.06,12.95-0.06,16.04c0,1.89,1.03,2.62,2.53,1.29C46,93.25,55.25,87,58.74,85.03",
      "M75.63,63.42c0,0.71-0.13,1.21-0.62,1.85c-2.07,2.75-4.64,4.98-9.21,8.22",
      "M52.25,68.25c3.25,0,21.38,14.38,31.58,21.81c1.57,1.15,3.92,2.56,6.42,3.43"
    ],
    oto: [ // 音 — sound
      "M52.97,12.5c0.77,0.77,1.62,2.12,1.62,3.64c0,3.86-0.09,4.61-0.09,9.17",
      "M29.12,28c1.5,0.5,2.75,0.62,4.61,0.42c11.39-1.29,25.05-3.48,38.89-4.79c2.63-0.25,5.63-0.25,7.38,0.12",
      "M37.12,35.38c4.15,3.73,5.01,7.31,5.6,9.93",
      "M67.79,27.5c0.46,0.9,0.57,2.02,0.23,3.14c-1.33,4.34-3.46,10.57-4.64,12.99",
      "M12.75,50.5c3.65,0.66,7.11,0.39,10.76-0.01c20.16-2.21,40.45-4.53,63.37-5.41c3.4-0.13,7.17-0.48,10.5,0.47",
      "M34.55,59.11c0.58,0.74,1.08,2.24,1.08,3.25c0,1.02,0.12,28.46,0.12,28.97c0,0.51,0,2.04,0,3.54",
      "M36.1,60.79c9.52-1.16,26.02-3.04,32.08-3.68c2.95-0.31,4.26,0.27,4.26,3.22c0,0.98-0.11,17.98-0.17,27.68c-0.02,3.04-0.03,5.36-0.03,6.25",
      "M36.69,74.75c5.44-0.5,29.72-2.64,34.74-2.85",
      "M37.11,90.41c6.58-0.27,25.43-2.25,33.94-2.6"
    ],
    kyaku: [ // 客 — guest
      "M51.73,10.45c0.91,0.91,1.4,1.93,1.4,3.1c0,2.95,0.18,4.72,0.17,7.41",
      "M27.02,22.18c0,3.2-3.07,11.99-4.46,14.13",
      "M27.98,25.01C43.5,22.75,67.25,20,80.39,19.8c10.89-0.16,1.12,6.36-0.34,7.02",
      "M46.38,29.25c0.05,0.66-0.17,2.06-0.63,2.91C42.5,38.25,38.12,46,26.2,56.49",
      "M45.14,38.9c1.21,0.22,2.42,0.23,3.62,0.05c3.64-0.47,8.82-1.91,13.56-2.91c2.56-0.54,3.59,1.51,2.68,3.31c-5,9.88-23.59,31.95-46.05,38.47",
      "M39.06,44.14C47,51,74.5,67.75,86.44,72.58c2.93,1.18,5.11,2.09,7.87,2.51",
      "M35.07,76.27c0.7,0.7,1.17,1.73,1.32,2.6c0.44,2.78,1.17,9.31,1.68,14.14c0.31,2.96,0.55,5.28,0.59,5.72",
      "M36.86,77.69c9.51-1.19,26.29-3.23,31.07-3.71c1.75-0.18,2.8,1.55,2.54,2.6c-1.03,4.32-2.49,10.38-4.03,16.36",
      "M40.35,96.06c4.74-0.46,16.4-1.21,24.54-1.95c1.49-0.13,2.87-0.27,4.06-0.4"
    ]
  };

  const GEISHA_KEY_MAP = ['mai', 'so', 'oto', 'kyaku'];

  /* Nội dung đa ngôn ngữ cho 4 kanji nghệ thuật Geisha */
  const GEISHA_CONTENT = {
    ja: {
      labels: {
        numberPrefix: '花街の芸 · 第',
        numberSuffix: '芸',
        calligraphyLabel: '書 · 筆順体験',
      },
      mai:      { kanji: '舞', romaji: 'MAI',   title: '舞 — 京舞の伝統', desc: '祇園甲部の井上流に代表される京舞。扇と袖の微細な動きで四季の移ろいを描き出す静謐な芸です。', quote: '「一瞬の所作に、一生分の稽古を。」' },
      so:       { kanji: '装', romaji: 'SŌ',    title: '装 — 着物と結髪', desc: '西陣織の着物、季節を映す帯、重さ数キロの日本髪と簪。装いは客への敬意として整えられます。', quote: '「装いは心を映す鏡なり。」' },
      oto:      { kanji: '音', romaji: 'OTO',   title: '音 — 三味線と箏', desc: '置屋に暮らす舞妓が日々磨く三味線と箏の調べ。技と心を写し取っていく修練の世界です。', quote: '「音なき音を聴くこそ、真の芸なり。」' },
      kyaku:    { kanji: '客', romaji: 'KYAKU', title: '客 — お座敷文化', desc: 'お茶屋が結ぶ、一期一会の一夜。お座敷の文化は花街美学の極致として今日に受け継がれます。', quote: '「一期一会、一生に一度のめぐり逢いを大切に。」' }
    },
    en: {
      labels: {
        numberPrefix: 'FLOWER DISTRICT ART · NO. ',
        numberSuffix: '',
        calligraphyLabel: 'Calligraphy · Stroke Order Experience',
      },
      mai:      { kanji: '舞', romaji: 'MAI',   title: 'Mai — The Art of Kyomai Dance', desc: 'The Kyoto dance of the Inoue school in Gion Kobu — minute movements of fan and sleeve portray the passing seasons.', quote: '"A lifetime of practice lives inside a single gesture."' },
      so:       { kanji: '装', romaji: 'SŌ',    title: 'Sō — Kimono & Coiffure', desc: 'Nishijin silk kimono, a seasonal obi and a weighted coiffure pinned with kanzashi — attire as a gesture of respect.', quote: '"Attire is the mirror that reflects the heart."' },
      oto:      { kanji: '音', romaji: 'OTO',   title: 'Oto — Shamisen & Koto', desc: 'The sound a maiko refines day after day in the okiya, learning technique and heart from her senior sister.', quote: '"To hear the sound within silence — that is true art."' },
      kyaku:    { kanji: '客', romaji: 'KYAKU', title: 'Kyaku — The Ozashiki Culture', desc: 'The tea houses bind one-night encounters that will never repeat — the summit of the flower district aesthetics.', quote: '"Ichigo ichie — treasure each meeting."' }
    },
    vi: {
      labels: {
        numberPrefix: 'NGHỆ THUẬT HOA PHỐ · ',
        numberSuffix: '',
        calligraphyLabel: 'Thư Pháp · Bút Thuận Hoa Phố',
      },
      mai:      { kanji: '舞', romaji: 'MAI',   title: 'Mai — Điệu Vũ Kyomai', desc: 'Điệu vũ Kyoto của trường phái Inoue tại Gion Kobu — quạt và tay áo khắc họa bốn mùa trong từng chuyển động nhỏ.', quote: '„Cả đời khổ luyện nằm trong một động tác ngắn ngủi.“' },
      so:       { kanji: '装', romaji: 'SŌ',    title: 'Sō — Kimono & Búi Tóc', desc: 'Kimono lụa Nishijin, đai obi theo mùa và búi tóc truyền thống cài trâm kanzashi — trang phục là sự kính trọng.', quote: '„Trang phục là tấm gương soi chiếu tâm hồn.“' },
      oto:      { kanji: '音', romaji: 'OTO',   title: 'Oto — Shamisen & Koto', desc: 'Âm thanh mà một maiko rèn luyện mỗi ngày trong okiya, học kỹ thuật lẫn tấm lòng từ người chị oneesan.', quote: '„Nghe được tiếng vang trong tĩnh lặng — đó mới là nghệ thuật chân chính.“' },
      kyaku:    { kanji: '客', romaji: 'KYAKU', title: 'Kyaku — Văn Hóa Ozashiki', desc: 'Những cuộc gặp gỡ một đêm không bao giờ lặp lại — đỉnh cao của mỹ học hoa phố.', quote: '„Ichigo ichie — trân trọng từng cuộc gặp.“' }
    }
  };

  /* ─── Multilingual Content Dictionary (JA, EN, VI) ────────────────────────── */
  const MULTILINGUAL_DATA = {
    ja: {
      labels: {
        numberPrefix: '武士道精神 · 第',
        numberSuffix: '徳',
        calligraphyLabel: '書 · 筆順体験',
        strokeDrawing: '筆順 · 第 {current} 画 / 全 {total} 画',
        strokeDone: '書 · 完遂（全 {total} 画）'
      },
      virtues: {
        gi: {
          kanji: '義',
          romaji: 'GI',
          title: '義 — 正義と道義',
          desc: '「義」とは武士道において最も厳格なる徳目であり、いかなる圧力や誘惑の下でも、躊躇なく正しき道を選択し決断する至高の気節です。損得を顧みず、道理に従って行動する精神の礎です。',
          quote: '「義を見てせざるは勇なきなり。人として踏むべき正しき道こそが、武士の魂である。」'
        },
        yu: {
          kanji: '勇',
          romaji: 'YU',
          title: '勇 — 勇気と果敢',
          desc: '「勇」とは単なる無謀な蛮勇ではなく、義のために恐怖を制し、冷静沈着に立ち向かう真の勇気です。死を恐れず、正義を貫くために命を賭して前進する精神の強さを意味します。',
          quote: '「真の勇気とは、生きるべき時に生き、死ぬべき時に覚悟をもって死ぬことにある。」'
        },
        jin: {
          kanji: '仁',
          romaji: 'JIN',
          title: '仁 — 慈悲と思いやり',
          desc: '「仁」とは弱者を憐れみ、他者を深く慈しむ崇高な心です。強大な武力を持つ武士だからこそ、驕ることなく慈悲の心を抱き、愛と寛容をもって人を守らねばなりません。',
          quote: '「武士の情け。武力は破壊にあらず、弱き者を慈しみ守るための盾である。」'
        },
        rei: {
          kanji: '礼',
          romaji: 'REI',
          title: '礼 — 礼節と敬意',
          desc: '「礼」とは単なる形式的な作法ではなく、他者に対する深い敬意と真心から溢れ出る自然な慎ましさです。日々の所作や立ち居振る舞いを通じて、心の清らかさを表現します。',
          quote: '「礼の極致は、他者を尊重し己を慎む心。形よりも真情を貴しとす。」'
        },
        makoto: {
          kanji: '誠',
          romaji: 'MAKOTO',
          title: '誠 — 誠実と至誠',
          desc: '「誠」とは言行一致の極み。武士の言葉には二言がなく、誓約書や証文を交わさずとも、口から出た一言は命よりも重いとされました。嘘や偽りを最も恥ずべき行為と戒めます。',
          quote: '「武士に二言なし。言葉は刃と同じく、一度放てば決して戻らぬものと心得よ。」'
        },
        meiyo: {
          kanji: '名誉',
          romaji: 'MEIYO',
          title: '名誉 — 名誉と誇り',
          desc: '「名誉」とは武士が命よりも尊いものとして守り抜いた魂の品格です。己の良心に恥じぬ誇り高き生き方を貫き、不名誉や屈辱を被るならば、死をもって己の尊厳を護る覚悟を持ちました。',
          quote: '「名は惜しむべし。肉体は滅びるとも、武士の誇りと高潔なる名声は永遠に残る。」'
        },
        chugi: {
          kanji: '忠義',
          romaji: 'CHUGI',
          title: '忠義 — 忠誠と献身',
          desc: '「忠義」とは主君や国、そして自らの掲げた信念に対して、私利私欲を捨てて全身全霊で尽くす至高の義務感です。生死を越えた強い絆と献身の精神を表します。',
          quote: '「私心を捨て、主君と道義のために己の生涯を捧ぐ。これぞ武士道の本懐なり。」'
        },
        mai: {
          kanji: '舞', romaji: 'MAI', title: '舞 — 京舞の伝統',
          desc: '「舞」とは祇園甲部の井上流に代表される京舞。扇と袖の微細な動きで四季の移ろいを描き出し、一振りの扇が月となり、川となり、風となる静謐な芸です。',
          quote: '「一瞬の所作に、一生分の稽古を。」'
        },
        so: {
          kanji: '装', romaji: 'SŌ', title: '装 — 着物と結髪',
          desc: '「装」とは西陣織の着物、季節を映す帯、重さ数キロの日本髪と簪。装いは自己表現ではなく、客への敬意と季節への応答として整えられます。',
          quote: '「装いは心を映す鏡なり。」'
        },
        oto: {
          kanji: '音', romaji: 'OTO', title: '音 — 三味線と箏',
          desc: '「音」とは置屋に暮らす舞妓が日々磨く三味線と箏の調べ。言葉遣い、座敷作法とともに技と心を写し取っていく修練の世界です。',
          quote: '「音なき音を聴くこそ、真の芸なり。」'
        },
        kyaku: {
          kanji: '客', romaji: 'KYAKU', title: '客 — お座敷文化',
          desc: '「客」とはお茶屋が結ぶ、一期一会の一夜。お座敷での稽古事的なもてなしの文化は、花街美学の極致として今日に受け継がれます。',
          quote: '「一期一会、一生に一度のめぐり逢いを大切に。」'
        }
      }
    },
    en: {
      labels: {
        numberPrefix: 'BUSHIDO VIRTUE · NO. ',
        numberSuffix: '',
        calligraphyLabel: 'Calligraphy · Stroke Practice',
        strokeDrawing: 'Stroke {current} / {total}',
        strokeDone: 'Complete ({total} Strokes)'
      },
      virtues: {
        gi: {
          kanji: '義',
          romaji: 'GI',
          title: 'Rectitude & Justice',
          desc: 'Gi is the most fundamental virtue of Bushido — the unwavering capacity to choose the right moral path without hesitation or compromise, even when facing death or immense personal loss.',
          quote: '"To know what is right and not do it is the lack of courage. Rectitude is the skeleton of the warrior\'s soul."'
        },
        yu: {
          kanji: '勇',
          romaji: 'YU',
          title: 'Courage & Valour',
          desc: 'Yu is not reckless bravado, but deliberate courage born of purpose and calm resolve. A true samurai embraces mortality, using calm fearlessness to stand firm for justice.',
          quote: '"Courage is not the absence of fear, but the triumph over it in pursuit of righteous duty."'
        },
        jin: {
          kanji: '仁',
          romaji: 'JIN',
          title: 'Benevolence & Compassion',
          desc: 'Jin balances the samurai’s formidable martial prowess with gentle mercy. The warrior who commands life and death must possess the deepest compassion to protect the vulnerable.',
          quote: '"Bushi no nasake — the tender mercy of the warrior. A sword wielded without love is mere brutality."'
        },
        rei: {
          kanji: '礼',
          romaji: 'REI',
          title: 'Respect & Courtesy',
          desc: 'Rei goes beyond mere social manners — it is the sincere reverence for the human dignity in every being. Through refined ritual and composure, the warrior honors friend and foe alike.',
          quote: '"Politeness is a virtue only when it springs from a heartfelt desire to honor others."'
        },
        makoto: {
          kanji: '誠',
          romaji: 'MAKOTO',
          title: 'Honesty & Sincerity',
          desc: 'Makoto demands that a warrior\'s word is as binding and unbreakable as folded Tamahagane steel. A samurai needed no written contracts — their spoken word was life itself.',
          quote: '"Bushi ni nigon nashi — a samurai never goes back on his word. Truthfulness is the armor of honor."'
        },
        meiyo: {
          kanji: '名誉',
          romaji: 'MEIYO',
          title: 'Honor & Dignity',
          desc: 'Meiyo is the supreme pride in personal moral reputation. A life without honor was considered meaningless; warriors cherished their dignity and spotless name far above survival.',
          quote: '"Honor is not pride, but the mirror of the conscience that reflects a warrior\'s true character."'
        },
        chugi: {
          kanji: '忠義',
          romaji: 'CHUGI',
          title: 'Loyalty & Devotion',
          desc: 'Chugi is absolute dedication and selfless devotion to one\'s master, family, and timeless principles, placing duty above personal desires and earthly attachments.',
          quote: '"True loyalty is unconditional. The warrior offers their service with boundless fidelity until the end."'
        },
        mai: {
          kanji: '舞', romaji: 'MAI', title: 'Mai — The Art of Kyomai Dance',
          desc: 'Mai is the Kyoto dance of the Inoue school in Gion Kobu. Through minute movements of fan and sleeve it portrays the passing seasons — a single folded fan becomes the moon, a river, a gust of wind.',
          quote: '"A lifetime of practice lives inside a single gesture."'
        },
        so: {
          kanji: '装', romaji: 'SŌ', title: 'Sō — Kimono & Coiffure',
          desc: 'Sō is the art of adornment: Nishijin silk kimono, an obi echoing the current season, and a weighted traditional coiffure pinned with kanzashi. Attire is not self-expression but a gesture of respect toward guests and the season.',
          quote: '"Attire is the mirror that reflects the heart."'
        },
        oto: {
          kanji: '音', romaji: 'OTO', title: 'Oto — Shamisen & Koto',
          desc: 'Oto is the sound of shamisen and koto that a maiko refines day after day in the okiya, mastering speech, seating etiquette and musicianship while learning technique and heart from her senior sister.',
          quote: '"To hear the sound within silence — that is true art."'
        },
        kyaku: {
          kanji: '客', romaji: 'KYAKU', title: 'Kyaku — The Ozashiki Culture',
          desc: 'Kyaku is the culture of the ozashiki, where the tea houses bind one-night encounters that will never repeat. This discipline of hospitality stands as the summit of the flower district aesthetics.',
          quote: '"Ichigo ichie — treasure each meeting, for it will never come again."'
        }
      }
    },
    vi: {
      labels: {
        numberPrefix: 'ĐẠO VÕ SĨ · PHẨM HẠNH THỨ ',
        numberSuffix: '',
        calligraphyLabel: 'Thư Pháp · Bút Thuận Bushido',
        strokeDrawing: 'Bút Thuận · Nét {current} / {total}',
        strokeDone: 'Hoàn Tất ({total} Nét)'
      },
      virtues: {
        gi: {
          kanji: '義',
          romaji: 'GI',
          title: 'Nghĩa — Chính Trực & Đạo Nghĩa',
          desc: '„Nghĩa“ là phẩm hạnh nghiêm cẩn và cốt lõi nhất của Võ Sĩ Đạo. Đó là dũng khí đưa ra quyết định đúng đắn theo lẽ phải mà không hề do dự, không màng danh lợi hay hiểm nguy đến tính mạng.',
          quote: '„Thấy việc nghĩa mà không làm là không có dũng khí. Chính trực là bộ khung xương sống của người võ sĩ.“'
        },
        yu: {
          kanji: '勇',
          romaji: 'YU',
          title: 'Dũng — Dũng Khí & Quả Cảm',
          desc: '„Dũng“ không phải là sự liều lĩnh mù quáng, mà là sự điềm tĩnh phi thường đối mặt với nỗi sợ và cái chết. Một chiến binh samurai chỉ vung gươm khi đạo nghĩa và bổn phận đòi hỏi.',
          quote: '„Dũng khí đích thực là biết sống khi cần sống, và dám bình thản đón nhận cái chết khi cần xả thân vì đại nghĩa.“'
        },
        jin: {
          kanji: '仁',
          romaji: 'JIN',
          title: 'Nhân — Lòng Trắc Ẩn & Nhân Ái',
          desc: '„Nhân“ là sự yêu thương, khoan dung và trắc ẩn đối với muôn loài. Nắm giữ sức mạnh có thể đoạt mạng kẻ khác, người võ sĩ chân chính càng phải biết dùng lòng nhân ái để chở che kẻ yếu.',
          quote: '„Bushi no nasake — lòng từ bi của võ sĩ. Kiếm thuật không có tình thương chỉ là công cụ tàn sát vô nghĩa.“'
        },
        rei: {
          kanji: '礼',
          romaji: 'REI',
          title: 'Lễ — Lễ Độ & Tôn Kính',
          desc: '„Lễ“ bắt nguồn từ sự tôn trọng chân thành đối với nhân phẩm người khác, chứ không phải thói xảo quyệt hay lễ nghi sáo rỗng. Lễ độ rèn giũa nên phong thái ung dung, điềm đạm của samurai.',
          quote: '„Lễ độ chân chính xuất phát từ tâm kính trọng sâu sắc, không vì ép buộc hay giả tạo với thế nhân.“'
        },
        makoto: {
          kanji: '誠',
          romaji: 'MAKOTO',
          title: 'Thành — Chân Thành & Trung Thực',
          desc: '„Thành“ là sự đồng nhất tuyệt đối giữa lời nói và hành động. Lời hứa của Samurai quý hơn vàng ngọc và nặng hơn tính mạng, không cần đến giấy trắng mực đen thề ước.',
          quote: '„Bushi ni nigon nashi — Võ sĩ không nói hai lời. Một lời đã thốt ra tựa nhát kiếm vung, vĩnh viễn không thu lại.“'
        },
        meiyo: {
          kanji: '名誉',
          romaji: 'MEIYO',
          title: 'Danh Dự — Danh Dự & Khí Tiết',
          desc: '„Danh Dự“ là tấm gương soi chiếu phẩm giá của người võ sĩ. Sống ô nhục còn đáng sợ hơn cái chết, do đó Samurai sẵn sàng hy sinh tất cả để giữ gìn thanh danh trong sạch.',
          quote: '„Thân xác rồi sẽ tan thành tro bụi, nhưng danh dự và khí tiết kiêu hãnh của võ sĩ sẽ lưu danh muôn đời.“'
        },
        chugi: {
          kanji: '忠義',
          romaji: 'CHUGI',
          title: 'Trung Nghĩa — Trung Thành & Tận Tụy',
          desc: '„Trung Nghĩa“ là lòng trung thành tận tụy, không mưu toan vụ lợi đối với chủ nhân, gia đình và lý tưởng. Tinh thần xả thân vì nghĩa lớn này đã tạo nên những thiên anh hùng ca bất hủ của nước Nhật.',
          quote: '„Quên mình vì đại nghĩa, một lòng tận tụy đến hơi thở cuối cùng — đó là chân lý tối thượng của đời samurai.“'
        },
        mai: {
          kanji: '舞', romaji: 'MAI', title: 'Mai — Điệu Vũ Kyomai',
          desc: '„Mai“ là điệu vũ Kyoto của trường phái Inoue tại Gion Kobu. Qua từng chuyển động nhỏ của quạt và tay áo, nó khắc họa bốn mùa — một chiếc quạt khép lại có thể hóa thành vầng trăng, dòng sông hay cơn gió.',
          quote: '„Cả đời khổ luyện nằm trong một động tác ngắn ngủi.“'
        },
        so: {
          kanji: '装', romaji: 'SŌ', title: 'Sō — Kimono & Búi Tóc',
          desc: '„Sō“ là nghệ thuật trang điểm diện mạo: kimono lụa Nishijin, đai obi phản chiếu mùa hiện tại, cùng búi tóc truyền thống nặng hàng kilôgam cài trâm kanzashi. Trang phục không phải để tự thể hiện, mà là sự kính trọng dành cho thực khách và cho mùa đang đến.',
          quote: '„Trang phục là tấm gương soi chiếu tâm hồn.“'
        },
        oto: {
          kanji: '音', romaji: 'OTO', title: 'Oto — Shamisen & Koto',
          desc: '„Oto“ là âm thanh của shamisen và koto mà một maiko rèn luyện mỗi ngày trong okiya — học lời ăn tiếng nói, phép tắc tiếp khách và nhạc lý, tự người chị oneesan để truyền lấy cả kỹ thuật lẫn tấm lòng.',
          quote: '„Nghe được tiếng vang trong tĩnh lặng — đó mới là nghệ thuật chân chính.“'
        },
        kyaku: {
          kanji: '客', romaji: 'KYAKU', title: 'Kyaku — Văn Hóa Ozashiki',
          desc: '„Kyaku“ là văn hóa ozashiki — nơi các quán trà gắn kết những cuộc gặp gỡ một đêm không bao giờ lặp lại. Kỷ luật của sự hiếu khách này được xem là đỉnh cao của mỹ học hoa phố.',
          quote: '„Ichigo ichie — trân trọng từng cuộc gặp, vì nó sẽ không bao giờ lặp lại.“'
        }
      }
    }
  };

  const CARD_KEY_MAP = ['gi', 'yu', 'jin', 'rei', 'makoto', 'meiyo', 'chugi'];
  const TWO_CHAR_KEYS = ['meiyo', 'chugi'];

  let activeAnimationTimers = [];
  let currentActiveKey = null;

  function clearActiveAnimation() {
    activeAnimationTimers.forEach(id => clearTimeout(id));
    activeAnimationTimers = [];
  }

  function getCurrentLang() {
    if (window.i18n && typeof window.i18n.getCurrentLanguage === 'function') {
      const l = window.i18n.getCurrentLanguage();
      if (MULTILINGUAL_DATA[l]) return l;
    }
    return 'ja';
  }

  /* ─── Build Modal HTML ───────────────────────────────────────────────────── */
  function buildModal() {
    let existing = document.getElementById('bushido-virtue-modal');
    if (existing) return existing;

    const modal = document.createElement('div');
    modal.id = 'bushido-virtue-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Bushido Virtue Detail');
    modal.innerHTML = `
      <div class="bvm-container">
        <button class="bvm-close-btn" id="bvm-close-btn" aria-label="Close">&#x2715;</button>
        <div class="bvm-canvas-panel">
          <div class="bvm-kanji-watermark" id="bvm-watermark"></div>
          <svg id="bvm-svg" viewBox="0 0 109 109" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"></svg>
          <div class="bvm-canvas-label" id="bvm-stroke-counter">書 · Calligraphy</div>

        </div>
        <div class="bvm-info-panel">
          <div class="bvm-virtue-number" id="bvm-number"></div>
          <div class="bvm-virtue-kanji-display" id="bvm-kanji-display"></div>
          <div class="bvm-virtue-romaji" id="bvm-romaji"></div>
          <h2 class="bvm-virtue-title" id="bvm-title"></h2>
          <div class="bvm-divider" id="bvm-divider"></div>
          <p class="bvm-virtue-desc" id="bvm-desc"></p>
          <blockquote class="bvm-virtue-quote" id="bvm-quote"></blockquote>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    return modal;
  }

  /* ─── Build SVG stroke paths for a single kanji ────────────────────────── */
  function buildSvgStrokes(svg, paths, transform) {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    if (transform) group.setAttribute('transform', transform);
    group.setAttribute('fill', 'none');
    group.setAttribute('stroke', '#f5f0e8');
    group.setAttribute('stroke-width', '4');
    group.setAttribute('stroke-linecap', 'round');
    group.setAttribute('stroke-linejoin', 'round');

    paths.forEach(d => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      const len = path.getTotalLength ? path.getTotalLength() : 80;
      path.style.strokeDasharray = `${len} ${len}`;
      path.style.strokeDashoffset = `${len}`;
      path.style.transition = 'none';
      path.dataset.len = len;
      group.appendChild(path);
    });
    svg.appendChild(group);
    return [...group.querySelectorAll('path')];
  }

  /* ─── Animate strokes one by one ────────────────────────────────────────── */
  function animateStrokes(allPaths, onDone) {
    clearActiveAnimation();
    const strokeDuration = 950;
    const strokeGap      = 380;
    let currentDelay = 0;
    const totalStrokes = allPaths.length;
    const counterLabel = document.getElementById('bvm-stroke-counter');
    const lang = getCurrentLang();
    const labels = MULTILINGUAL_DATA[lang].labels;

    allPaths.forEach((path, idx) => {
      const len = parseFloat(path.dataset.len || 80);
      const dur = Math.max(len * 7.5, strokeDuration);

      const t1 = setTimeout(() => {
        if (counterLabel) {
          counterLabel.innerHTML = labels.strokeDrawing
            .replace('{current}', `<strong>${idx + 1}</strong>`)
            .replace('{total}', totalStrokes);
        }

        if (window.japanAudio) {
          window.japanAudio.playBrushStroke(dur / 1000, 0.85);
        }

        path.style.transition = `stroke-dashoffset ${dur}ms cubic-bezier(0.25, 1, 0.5, 1)`;
        path.style.strokeDashoffset = '0';

        spawnBrushTip(path, dur);
      }, currentDelay);

      activeAnimationTimers.push(t1);
      currentDelay += dur + strokeGap;
    });

    const tEnd = setTimeout(() => {
      if (counterLabel) {
        counterLabel.innerHTML = labels.strokeDone.replace('{total}', totalStrokes);
      }
      if (window.japanAudio) window.japanAudio.playTaikoImpact(115);
      if (onDone) onDone();
    }, currentDelay);

    activeAnimationTimers.push(tEnd);
  }

  /* ─── Brush tip glow FX ─────────────────────────────────────────────────── */
  function spawnBrushTip(path, dur) {
    const svg = document.getElementById('bvm-svg');
    if (!svg) return;
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('r', '4');
    circle.setAttribute('fill', '#d4af37');
    circle.setAttribute('filter', 'url(#bvm-glow)');
    circle.style.opacity = '0.9';

    try {
      const len = path.getTotalLength();
      const ptStart = path.getPointAtLength(0);
      circle.setAttribute('cx', ptStart.x);
      circle.setAttribute('cy', ptStart.y);
      svg.appendChild(circle);

      const startT = performance.now();
      function followPath(now) {
        const p = Math.min((now - startT) / dur, 1);
        const curPt = path.getPointAtLength(p * len);
        circle.setAttribute('cx', curPt.x);
        circle.setAttribute('cy', curPt.y);
        if (p < 1) {
          requestAnimationFrame(followPath);
        } else {
          circle.style.transition = 'opacity 0.4s ease';
          circle.style.opacity = '0';
          setTimeout(() => circle.remove(), 450);
        }
      }
      requestAnimationFrame(followPath);
    } catch (e) {
      if (circle.parentNode) circle.remove();
    }
  }

  /* ─── Reset SVG ──────────────────────────────────────────────────────────── */
  function clearSvg(svg) {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
      <filter id="bvm-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    `;
    svg.appendChild(defs);
  }

  /* ─── Render text content according to current language ─────────────────── */
  function updateModalText(key) {
    if (!key) return;
    const lang = getCurrentLang();
    const langObj = MULTILINGUAL_DATA[lang] || MULTILINGUAL_DATA.ja;
    const isGeisha = GEISHA_KEY_MAP.includes(key);
    const item = isGeisha ? (GEISHA_CONTENT[lang] || GEISHA_CONTENT.ja)[key]
                          : langObj.virtues[key];
    const labels = isGeisha ? (GEISHA_CONTENT[lang] || GEISHA_CONTENT.ja).labels : langObj.labels;
    const idx = isGeisha ? GEISHA_KEY_MAP.indexOf(key) + 1 : CARD_KEY_MAP.indexOf(key) + 1;

    document.getElementById('bvm-watermark').textContent     = item.kanji;
    document.getElementById('bvm-kanji-display').textContent  = item.kanji;
    document.getElementById('bvm-romaji').textContent         = item.romaji;
    document.getElementById('bvm-title').textContent          = item.title;
    document.getElementById('bvm-number').textContent         = `${labels.numberPrefix}${idx}${labels.numberSuffix}`;
    document.getElementById('bvm-desc').textContent           = item.desc;
    document.getElementById('bvm-quote').textContent          = item.quote;
  }

  /* ─── Open Modal ─────────────────────────────────────────────────────────── */
  function openModal(modal, key) {
    currentActiveKey = key;
    updateModalText(key);

    const lang = getCurrentLang();
    const counterLabel = document.getElementById('bvm-stroke-counter');
    if (counterLabel) {
      counterLabel.textContent = (GEISHA_KEY_MAP.includes(key)
        ? (GEISHA_CONTENT[lang] || GEISHA_CONTENT.ja).labels.calligraphyLabel
        : MULTILINGUAL_DATA[lang].labels.calligraphyLabel);
    }

    // Dải 4 ảnh Geisha đã bị gỡ bỏ — không cần logic highlight nữa

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      const svg = document.getElementById('bvm-svg');
      clearSvg(svg);

      let allPaths = [];
      const sd = STROKE_DATA[key] || GEISHA_STROKE_DATA[key];
      const isTwoChar = TWO_CHAR_KEYS.includes(key);

      if (!isTwoChar) {
        allPaths = buildSvgStrokes(svg, sd, null);
      } else {
        const leftPaths  = buildSvgStrokes(svg, sd.left,  'scale(0.5,0.85) translate(2,8)');
        const rightPaths = buildSvgStrokes(svg, sd.right, 'scale(0.5,0.85) translate(112,8)');
        allPaths = [...leftPaths, ...rightPaths];
      }

      animateStrokes(allPaths, null);
    }, 350);
  }

  /* ─── Close Modal ────────────────────────────────────────────────────────── */
  function closeModal(modal) {
    clearActiveAnimation();
    currentActiveKey = null;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(() => clearSvg(document.getElementById('bvm-svg')), 400);
  }

  /* ─── Init ───────────────────────────────────────────────────────────────── */
  function init() {
    const modal = buildModal();
    document.getElementById('bvm-close-btn').addEventListener('click', () => closeModal(modal));
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(modal); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal(modal);
    });

    // Lắng nghe sự kiện đổi ngôn ngữ để cập nhật nội dung modal ngay lập tức
    document.addEventListener('languageChanged', function (e) {
      if (modal.classList.contains('is-open') && currentActiveKey) {
        updateModalText(currentActiveKey);
      }
    });

    document.querySelectorAll('.virtue-card').forEach((card, idx) => {
      const key = CARD_KEY_MAP[idx];
      if (!key) return;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');

      card.addEventListener('click', () => openModal(modal, key));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(modal, key);
        }
      });
    });

    // Geisha art cards — same stroke-drawing modal experience
    document.querySelectorAll('.geisha-art-card').forEach((card, idx) => {
      const key = GEISHA_KEY_MAP[idx];
      if (!key) return;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');

      card.addEventListener('click', () => openModal(modal, key));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(modal, key);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
