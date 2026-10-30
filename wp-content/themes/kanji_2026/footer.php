<?php
/**
 * The footer for the theme.
 *
 * @package Kanji_2026
 */
?>
	<!-- ========================================================================
	     MAIN SITE FOOTER (English Translation)
	     ======================================================================== -->
	<footer class="site-footer" role="contentinfo">
		<div class="footer-watermark-kanji">日本</div>
		<div class="container footer-container">
			<div class="footer-top-grid">
				<!-- Brand Column -->
				<div class="footer-brand-col">
					<div class="brand-logo">
						<div class="brand-emblem">
							<div class="brand-emblem-circle"></div>
						</div>
						<div class="brand-text">
							<span class="brand-name">JAPAN</span>
							<span class="brand-sub">Discover the Spirit of Japan</span>
						</div>
					</div>
					<p>
						A cinematic celebration of Japanese craftsmanship, historic samurai heritage, and extraordinary destinations across the land of the rising sun.
					</p>
				</div>

				<!-- Links Col 1 -->
				<div>
					<h4 class="footer-col-title">DESTINATIONS</h4>
					<ul class="footer-links">
						<li><a href="<?php echo esc_url( home_url( '/#destinations' ) ); ?>" class="footer-link">Kyoto — Ancient Elegance</a></li>
						<li><a href="<?php echo esc_url( home_url( '/#destinations' ) ); ?>" class="footer-link">Tokyo — Neon Energy</a></li>
						<li><a href="<?php echo esc_url( home_url( '/#destinations' ) ); ?>" class="footer-link">Mount Fuji — Sacred Peak</a></li>
						<li><a href="<?php echo esc_url( home_url( '/#destinations' ) ); ?>" class="footer-link">Nara & Kanazawa</a></li>
					</ul>
				</div>

				<!-- Links Col 2 -->
				<div>
					<h4 class="footer-col-title">CULTURE</h4>
					<ul class="footer-links">
						<li><a href="<?php echo esc_url( home_url( '/#culture' ) ); ?>" class="footer-link">The Way of Tea (Chado)</a></li>
						<li><a href="<?php echo esc_url( home_url( '/#culture' ) ); ?>" class="footer-link">Sakura & Mono no Aware</a></li>
						<li><a href="<?php echo esc_url( home_url( '/#samurai' ) ); ?>" class="footer-link">Bushido Philosophy</a></li>
						<li><a href="<?php echo esc_url( home_url( '/#brush-studio' ) ); ?>" class="footer-link">Calligraphy Studio</a></li>
					</ul>
				</div>

				<!-- Experience Col -->
				<div>
					<h4 class="footer-col-title">NAVIGATION</h4>
					<ul class="footer-links">
						<li><a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="footer-link">Home Page</a></li>
						<li><a href="#primary" class="footer-link">↑ Back to Top</a></li>
					</ul>
				</div>
			</div>

			<!-- Bottom Credits -->
			<div class="footer-bottom">
				<div>
					&copy; <?php echo esc_html( gmdate( 'Y' ) ); ?> Japan Travel Experience. Inspired by authentic Japanese culture & cinematic aesthetics.
				</div>
				<div class="text-muted">
					Crafted with refined design and modern web technologies.
				</div>
			</div>
		</div>
	</footer>
</div>
<?php wp_footer(); ?>
</body>
</html>
