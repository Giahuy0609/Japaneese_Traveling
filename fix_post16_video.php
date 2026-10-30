<?php
require_once __DIR__ . '/wp-load.php';

$video_url = home_url( '/wp-content/themes/kanji_2026/assets/img/sssx.io_1793089434529.mp4' );

$content_clean = '<!-- wp:paragraph -->
<p>To the samurai, the katana was far more than an instrument of warfare; it was revered as the very soul of the warrior (<em>"The sword is the soul of the samurai"</em>). Forged through folding sacred Tamahagane steel thousands of times, every katana represented supreme discipline, sacred patience, and unwavering honor.</p>
<!-- /wp:paragraph -->

<!-- wp:video -->
<figure class="wp-block-video"><video controls playsinline src="' . esc_url( $video_url ) . '"></video><figcaption class="wp-element-caption"><span style="color:#d4af37">▶ Archive Footage:</span> Visual reconstruction of the traditional Edo-period sword-forging craft and swordsmanship.</figcaption></figure>
<!-- /wp:video -->

<!-- wp:heading -->
<h3 class="wp-block-heading">The Mastery of Tamahagane Steel</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Crafting a true Japanese sword took master Tatara smiths weeks of relentless devotion. Raw iron sand was smelted at extreme temperatures, and the steel was repeatedly folded to expel impurities while balancing carbon content. The result was a weapon capable of maintaining a razor-sharp cutting edge while retaining structural resilience in combat.</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><p>"The blade is not drawn for reckless violence, but to defend righteousness and preserve peace."</p></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p>Centuries may have passed, but the Katana remains an immortal symbol of Japanese aesthetic brilliance, spiritual endurance, and devotion to craft.</p>
<!-- /wp:paragraph -->';

wp_update_post( array(
    'ID'           => 16,
    'post_content' => $content_clean,
) );
echo "Post 16 updated with standard WP Video Block.\n";

