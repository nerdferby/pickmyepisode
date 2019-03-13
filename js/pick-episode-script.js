let generateRandomNumber = (max, min) => {
	return Math.trunc(Math.random() * max) + min;
};

let pickEpisode = () => {

	$(".episode__description").removeClass("collapsed");
	$(".episode__expander").removeClass("visible");

	let pickedSeason = 0;

	do {
		pickedSeason = generateRandomNumber(9, 1);
	}
	while(lastSeasonPicked === pickedSeason);

	lastSeasonPicked = pickedSeason;

	let settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://api.themoviedb.org/3/tv/2316/season/" + pickedSeason + "?language=en-US&api_key=a1163947dd59db1c5cdfb268a90457a4",
		"method": "GET",
		"headers": {},
		"data": "{}"
	};

	$.ajax(settings).done(function(response) {

		let pickedEpisode = response.episodes[
			generateRandomNumber(response.episodes.length, 0)
			];

		console.log(pickedEpisode);

		$(".episode__title").text(pickedEpisode.name);

		$(".episode__number").text("Season " + response.season_number + ", episode " + pickedEpisode.episode_number);

		if(pickedEpisode.vote_average === 0) {
			$(".episode__rating").text("N/A");
		}

		else {
			$(".episode__rating").text(Math.round(pickedEpisode.vote_average * 10) / 10);
		}

		$(".episode__description").text(pickedEpisode.overview);

		if($(".episode__description").height() > 120) {
			$(".episode__description").addClass("collapsed");
			$(".episode__expander").addClass("visible");
		}

		else {
			$(".episode__description").removeClass("collapsed");
			$(".episode__expander").removeClass("visible");
		}

		// $(".episode__air-date").text(pickedEpisode.air_date);

		let airDate = new Date(pickedEpisode.air_date);
		let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

		$(".episode__air-date").text(airDate.getDate() + " " + months[airDate.getMonth()] + ", " + airDate.getFullYear());

		$(".episode__thumbnail").attr("src", "https://image.tmdb.org/t/p/w300" + pickedEpisode.still_path);

		$(document).scrollTop(0); // scroll to top of page only after data has been received and inputted

	});

};

let lastSeasonPicked = 0;

pickEpisode();

$(".pick-again").on("click", pickEpisode);

$(".episode__expander").on("click", e => {

	let desc = $(".episode__description");

	if(desc.hasClass("collapsed")) {
		desc.removeClass("collapsed");
		desc.addClass("expanded");
	}
	else if(desc.hasClass("expanded")) {
		desc.removeClass("expanded");
		desc.addClass("collapsed");
	}

});

// TODO add auto-scroller to top of the page when button is clicked