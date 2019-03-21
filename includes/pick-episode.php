<?php

function pick_season() {

	$picked_season = rand(1, 9);

	$curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.themoviedb.org/3/tv/2316/season/" . $picked_season . "?language=en-US&api_key=a1163947dd59db1c5cdfb268a90457a4",
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

?>