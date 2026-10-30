<?php
/**
 * The template for displaying archive and category pages (Cinematic Samurai Blog Grid).
 *
 * @package Kanji_2026
 */

get_header();
?>

<div class="archive-hero-banner">
	<div class="archive-watermark-kanji">武士</div>
	<div class="container archive-hero-container">
		<div class="archive-badge">
			<span>SAMURAI CHRONICLES</span>
		</div>
		<h1 class="archive-page-title">
			<?php
			if ( is_category() ) {
				single_cat_title();
			} else {
				the_archive_title();
			}
			?>
		</h1>
		<div class="archive-page-desc">
			<?php
			$desc = get_the_archive_description();
			if ( $desc ) {
				echo wp_kses_post( $desc );
			} else {
				echo 'Explore the immortal legacy of the samurai, the profound philosophy of Bushido, and timeless Japanese historical chronicles.';
			}
			?>
		</div>
	</div>
</div>

<main id="primary" class="site-main container blog-grid-container">
	<?php if ( have_posts() ) : ?>
		<div class="blog-grid">
			<?php
			while ( have_posts() ) :
				the_post();
				?>
				<article id="post-<?php the_ID(); ?>" <?php post_class( 'blog-card' ); ?>>
					<div class="blog-card-media">
						<a href="<?php the_permalink(); ?>" class="blog-card-thumb-link" tabindex="-1" aria-hidden="true">
							<?php if ( has_post_thumbnail() ) : ?>
								<?php the_post_thumbnail( 'large', array( 'class' => 'blog-card-img' ) ); ?>
							<?php else : ?>
								<div class="blog-card-placeholder">
									<span class="kanji-icon">侍</span>
								</div>
							<?php endif; ?>
							<div class="blog-card-overlay"></div>
						</a>
						<span class="blog-card-tag">SAMURAI</span>
					</div>

					<div class="blog-card-body">
						<div class="blog-card-meta">
							<span class="meta-date">
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px; vertical-align: -1px;">
									<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
									<line x1="16" y1="2" x2="16" y2="6"></line>
									<line x1="8" y1="2" x2="8" y2="6"></line>
									<line x1="3" y1="10" x2="21" y2="10"></line>
								</svg>
								<?php echo esc_html( gmdate( 'M d, Y', strtotime( get_the_date( 'Y-m-d' ) ) ) ); ?>
							</span>
							<span class="meta-sep">•</span>
							<span class="meta-read">Documentary Essay</span>
						</div>

						<h2 class="blog-card-title">
							<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
						</h2>

						<div class="blog-card-excerpt">
							<?php echo wp_trim_words( get_the_excerpt(), 22, '...' ); ?>
						</div>

						<div class="blog-card-footer">
							<a href="<?php the_permalink(); ?>" class="blog-read-more-btn">
								<span>Read Article</span>
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<line x1="5" y1="12" x2="19" y2="12"></line>
									<polyline points="12 5 19 12 12 19"></polyline>
								</svg>
							</a>
						</div>
					</div>
				</article>
			<?php endwhile; ?>
		</div>

		<div class="blog-pagination">
			<?php the_posts_pagination( array(
				'prev_text' => '&larr; Previous',
				'next_text' => 'Next &rarr;',
			) ); ?>
		</div>

	<?php else : ?>
		<?php get_template_part( 'template-parts/content', 'none' ); ?>
	<?php endif; ?>
</main>

<?php
get_footer();
