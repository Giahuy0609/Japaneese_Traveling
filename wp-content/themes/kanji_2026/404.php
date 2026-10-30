<?php
/**
 * The template for displaying 404 pages.
 *
 * @package Kanji_2026
 */

get_header();
?>
<main id="primary" class="site-main">
	<section class="error-404 not-found">
		<header class="page-header">
			<h1 class="page-title"><?php esc_html_e( 'Page not found', 'kanji-2026' ); ?></h1>
		</header>
		<div class="page-content">
			<p><?php esc_html_e( 'The page you are looking for may have been moved or is no longer available.', 'kanji-2026' ); ?></p>
			<?php get_search_form(); ?>
		</div>
	</section>
</main>
<?php
get_footer();