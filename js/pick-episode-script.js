let generateRandomNumber = (max, min) => {
	return Math.trunc(Math.random() * max) + min;
};

let toggleDescription = override => {

	let desc = $(".episode__description");

	let toggleTo = "collapsed"; // the action that will be applied to the description

	if(override) { // allow the user to forcefully change the toggle
		toggleTo = override;
	}
	else { // if no override set, which should be normal

		if(desc.hasClass("expanded")) {
			toggleTo = "collapsed";
		}
		else if(desc.hasClass("collapsed")) {
			toggleTo = "expanded";
		}

	}

	if(toggleTo === "collapsed") {
		desc.removeClass("expanded");
		desc.addClass("collapsed");
	}
	else if(toggleTo === "expanded") {
		desc.removeClass("collapsed");
		desc.addClass("expanded");
	}

};

let pickEpisode = () => {

	// $(".episode__description").removeClass("collapsed");
	toggleDescription("expanded");
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

$(".episode__expander").on("click", toggleDescription());

// TODO add auto-scroller to top of the page when button is clicked