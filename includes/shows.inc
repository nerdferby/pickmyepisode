<?php

function get_show_info($show_id) {

//	$max_num_seasons = 1;
	$is_valid = false;

	$show_info = new stdClass();
	$show_info->number_of_seasons = 0;
	$show_info->id = $show_id;

//	$show_info = [
//		"number_of_seasons" => 0,
//		"id" => $show_id,
//		"name" => null
//	];

	switch($show_id) {
		case 2316: // The Office (US)
			$show_info->number_of_seasons = 10;
			$show_info->name = "The Office (US)";
			$show_info->preview_src = "../img/shows/the-office-us.jpg";
			break;
		case 1668: // Friends
			$show_info->number_of_seasons = 10;
			$show_info->name = "Friends";
			$show_info->preview_src = "../img/shows/friends.jpg";
			break;
		case 1100: // HIMYM
			$show_info->number_of_seasons = 9;
			$show_info->name = "How I Met Your Mother";
			$show_info->preview_src = "../img/shows/how-i-met-your-mother.jpg";
			break;
	}

	if($show_info->number_of_seasons != 0) {
		$is_valid = true;
	}

	if($is_valid) {
		return $show_info;
	}
	else {
		return false;
	}

}