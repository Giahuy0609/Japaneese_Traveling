<?php
/**
 * The front page template.
 *
 * @package Kanji_2026
 */

get_header();
?>
<section class="kanji-intro" data-kanji-intro aria-label="Kanji stroke animation">
	<div class="kanji-intro__composition">
		<p class="kanji-intro__eyebrow">KANJI STUDY <span>01 / 03</span></p>
		<svg class="kanji-intro__glyph" viewBox="0 0 320 320" role="img" aria-labelledby="kanji-glyph-title">
			<title id="kanji-glyph-title">山, mountain</title>
			<path class="kanji-intro__stroke" d="M159 49 C157 101 161 171 158 257" pathLength="1" />
			<path class="kanji-intro__stroke" d="M78 111 C77 151 78 202 80 244 C125 251 193 250 248 244" pathLength="1" />
			<path class="kanji-intro__stroke" d="M240 98 C239 142 240 198 241 245" pathLength="1" />
		</svg>
		<p class="kanji-intro__caption" lang="ja">一画ずつ、山を描く。</p>
	</div>
	<div class="kanji-intro__speech-scene" id="intro-speech-scene" aria-hidden="true">
		<div class="kanji-intro__slash-flash" id="intro-slash-flash"></div>
		<div class="kanji-intro__slash-beam" id="intro-slash-beam"></div>
		<img class="kanji-intro__speech-img" src="<?php echo esc_url( get_stylesheet_directory_uri() . '/assets/img/samurai-hero.jpg' ); ?>" alt="">
	</div>
	<audio id="intro-voice-over" src="<?php echo esc_url( get_stylesheet_directory_uri() . '/assets/audio/hayato-intro-voice.mp3' ); ?>" preload="auto"></audio>
	<button class="kanji-intro__skip" type="button" data-intro-skip>スキップ <span aria-hidden="true">→</span></button>
<audio id="intro-bg-music" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/audio/onecinematicstudio-the-last-samurai-_-epic-japanese-bushido-cinematic-music-529053.mp3" preload="auto" loop muted></audio>
<button id="audio-toggle-btn" class="audio-toggle-btn muted" aria-label="Toggle sound effects">
  <svg class="sound-wave-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"></path>
  </svg>
  <span class="audio-status-text">音声 OFF</span>
</button>
</section>
<noscript><style>.kanji-intro{display:none!important}</style></noscript>

<main id="primary" class="site-main kanji-home" tabindex="-1">
	<section class="kanji-home__hero" aria-labelledby="home-title" style="position:relative;overflow:hidden;min-height:85vh;display:flex;align-items:center;">
		<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/samurai-hero.jpg" alt="Samurai Warrior" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;filter:brightness(0.8) contrast(1.1);">
		<video autoplay muted loop playsinline preload="auto" poster="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/samurai-hero.jpg" style="position:absolute;top:50%;left:50%;min-width:100%;min-height:100%;width:auto;height:auto;transform:translate(-50%,-50%);object-fit:cover;z-index:1;filter:brightness(0.8) contrast(1.1);pointer-events:none;"></video>
    <!-- Blade flare spark that follows the katana -->
    <div id="samurai-blade-flare" class="samurai-blade-flare">
        <div class="blade-flare-core"></div>
    </div>
			<source src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/1792994888-4bcba1e8.mp4" type="video/mp4">
		</video>
		<audio id="katana-slash-audio" preload="auto">
			<source src="<?php echo get_stylesheet_directory_uri(); ?>/assets/audio/daviddumaisaudio-sword-slash-and-swing-185432.mp3" type="audio/mpeg">
		</audio>
		<div style="position:absolute;inset:0;background:radial-gradient(ellipse at center, transparent 30%, rgba(8,9,11,0.85) 100%), linear-gradient(180deg, rgba(8,9,11,0.6) 0%, transparent 40%, rgba(8,9,11,0.9) 100%);z-index:1;pointer-events:none;"></div>
		<div class="kanji-home__hero-copy" style="position:relative;z-index:2;">
			<p class="kanji-home__eyebrow"><span aria-hidden="true">01</span> 書の探求 / 日本</p>
			<h1 id="home-title">三画で描く、<br><em>ひとつの山。</em></h1>
			<p class="kanji-home__intro">一画ずつ丁寧に紡ぎ出される形。リズムと均整、そして余白の美学。</p>
			<a class="kanji-home__link" href="#study">詳しく見る <span aria-hidden="true">↓</span></a>
		</div>
		<div class="kanji-home__mark" aria-hidden="true" lang="ja" style="position:relative;z-index:2;">山</div>
		<p class="kanji-home__vertical-note" lang="ja" style="position:relative;z-index:2;">形は、線から生まれる</p>
	</section>

	<section class="kanji-home__study" id="study" aria-labelledby="study-title">
		<div class="kanji-home__study-heading">
			<p class="kanji-home__eyebrow"><span aria-hidden="true">解説 01</span></p>
			<h2 id="study-title"><span lang="ja">山</span> <span>やま</span></h2>
		</div>
		<p class="kanji-home__study-copy">三つの筆跡が描き出す風景：中央の頂、堅牢な基盤、そして立ち上がる稜線。</p>
		<a class="kanji-home__top-link" href="#page">最初に戻る <span aria-hidden="true">↑</span></a>
	</section>
</main>
<?php
get_footer();