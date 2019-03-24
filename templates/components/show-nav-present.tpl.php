<?php

//echo $show->name;
//echo $show->number_of_seasons;
//echo "<img src='".$show->preview_src."' />";
?>


<li class="nav__item nav__item--<?php echo explode("/", $show->page_url)[1] ?>">
	<a href="<?php echo $show->page_url ?>" >
		<span class="show-title">
			<?php echo $show->name ?>
		</span>
	</a>
</li>