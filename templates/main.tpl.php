<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    <?php include("components/site-head.tpl.php") ?>
</head>
<body>

	<div class="javascript-disabled">
		<h1>Please enable your JavaScript</h1>
	</div>

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

		<script src="/js/pick-episode-script-20190313.min.js"></script>

	</main>

	<footer>
		<?php include("components/footer.tpl.php") ?>
	</footer>

</body>
</html>