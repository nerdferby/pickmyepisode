<?php

include($_SERVER["DOCUMENT_ROOT"] . "/includes/pick-season.inc");

$picked_season = json_decode(pick_season($show_id));
$picked_episode = $picked_season->episodes[rand(0, count($picked_season->episodes) - 1)];

?>

<article class="episode">

	<div class="episode__header">

		<img src="https://image.tmdb.org/t/p/w300<?php echo $picked_episode->still_path ?>" alt="" class="episode__thumbnail" />

		<div class="wrapper">

			<h1 class="episode__title"><?php echo $picked_episode->name ?></h1>

			<?php
				$episode_number = "Season " . $picked_season->season_number . ", episode " . $picked_episode->episode_number
			?>

			<span class="episode__number"><?php echo $episode_number ?></span>

			<?php
				$episode_rating = round($picked_episode->vote_average * 10) / 10;
				$episode_rating = $episode_rating == 0 ? "N/A" : $episode_rating;
			?>

			<span class="episode__rating"><?php echo $episode_rating ?></span>

		</div>

	</div>

	<p class="episode__description expanded"><?php echo $picked_episode->overview ?></p>

	<a href="javascript:void(0)" class="episode__expander">Read more</a>

	<?php
		$air_date_exploded = explode("-", $picked_episode->air_date);
		$air_date = mktime(0, 0, 0, $air_date_exploded[1], $air_date_exploded[2], $air_date_exploded[0]);
	?>

	<span class="episode__air-date"><?php echo date("j F Y", $air_date) ?></span>

</article>