<?php

function get_show_info($show_id) {

//	$max_num_seasons = 1;
	$is_valid = false;

	$show_info = new stdClass();
	$show_info->number_of_seasons = 0;
	$show_info->id = $show_id;

	switch($show_id) {
		case 2316: // The Office (US)
			$show_info->number_of_seasons = 10;
			$is_valid = true;
			break;
		case 1668: // Friends
			$show_info->number_of_seasons = 10;
			$is_valid = true;
			break;
	}

	if($is_valid) {
		return $show_info;
	}
	else {
		return false;
	}

}