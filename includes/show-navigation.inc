<?php

function render_show_navigation_item($show_id, $current_show) {

	$show = get_show_info($show_id);

	if(!!$show && $show_id != $current_show) {

		include($_SERVER["DOCUMENT_ROOT"]."/templates/components/show-nav-present.tpl.php");

	}

}