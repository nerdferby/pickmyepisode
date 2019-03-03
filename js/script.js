let pickEpisode = () => {

	let pickedSeason = Math.trunc(Math.random() * 9) + 1;

	// TODO add check to avoid same season being picked twice

	let settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://api.themoviedb.org/3/tv/2316/season/" + pickedSeason + "?language=en-US&api_key=a1163947dd59db1c5cdfb268a90457a4",
		"method": "GET",
		"headers": {},
		"data": "{}"
	};

	$.ajax(settings).done(function (response) {

		let rng = Math.trunc(Math.random() * response.episodes.length);

		let pickedEpisode = response.episodes[rng];

		// console.log(pickedEpisode.name, pickedEpisode.overview, pickedSeason, rng+1)

		console.log(response);

		$(".episode__title").text(pickedEpisode.name);
		$(".episode__number").text("Season " + response.season_number + ", episode " + pickedEpisode.episode_number);
		$(".episode__rating").text(pickedEpisode.vote_average);
		$(".episode__description").text(pickedEpisode.overview);
		$(".episode__air-date").text(pickedEpisode.air_date);
		$(".episode__thumbnail").attr("src", "https://image.tmdb.org/t/p/w300" + pickedEpisode.still_path);

	});

};

pickEpisode();

$(".pick-again").on("click", pickEpisode);

// TODO add auto-scroller to top of the page when button is clicked