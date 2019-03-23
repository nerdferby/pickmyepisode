<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    <?php include("components/site-head.tpl.php") ?>
    <title>Pick My Episode.</title>
</head>
<body>

	<header>

		<p class="site-name">
			Pick My <span>Ep</span>isode<span>.</span>
		</p>

	</header>

	<main>

		<?php include("components/episode-present.tpl.php") ?>

		<button class="pick-again">
			Pick again
		</button>

		<?php
		$show = get_show_info($show_id);
		?>

		<input type="hidden" id="show-id" value="<?php echo $show_id ?>" />
		<input type="hidden" id="number-of-seasons" value="<?php echo $show->number_of_seasons ?>" />

		<script src="../js/pick-episode-script.src.js"></script>

	</main>

	<footer>
		<?php include("components/footer.tpl.php") ?>
	</footer>

</body>
</html>