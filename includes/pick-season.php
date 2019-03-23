<?php

function pick_season($show_id) {

	$max_num_seasons = 1;
	$is_valid = false;

	switch($show_id) {
		case 2316: // The Office (US)
			$max_num_seasons = 9;
			$is_valid = true;
			break;
	}

	if($is_valid) {

		$picked_season = rand(1, $max_num_seasons);

		$curl = curl_init();

		curl_setopt_array($curl, array(
			CURLOPT_URL => "https://api.themoviedb.org/3/tv/".$show_id."/season/".$picked_season."?language=en-US&api_key=a1163947dd59db1c5cdfb268a90457a4",
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_ENCODING => "",
			CURLOPT_MAXREDIRS => 10,
			CURLOPT_TIMEOUT => 30,
			CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			CURLOPT_CUSTOMREQUEST => "GET",
			CURLOPT_POSTFIELDS => "{}",
		));

		$response = curl_exec($curl);
		$err = curl_error($curl);

		curl_close($curl);

		return $response;

	}

}