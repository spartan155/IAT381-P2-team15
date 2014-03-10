$(document).ready( function() {

	/* 
		Here is some good jQuery code for debugging, takes
		whatever info you want and injects it into the title
	*/
	// var variable = "Debugging test";
	// $("title").html("Info: "+variable);

	/*
	$("a[href$='.html']").click( function(clickEvent) {
		
		clickEvent.preventDefault();
		
		var file = $(this).attr("href");
		// $("title").html("Info: "+file);
		
		$("section#main").load(file+" #content");
	});
	*/
	$("#vesselSpecs").hide();
	$("#reviews").hide();
	$("#addReview").hide();
	
	$("#toggleSpecs").click(function(){
		$("#vesselSpecs").slideToggle();

	});
	$("#toggleReviews").click(function(){
		$("#reviews").slideToggle();
	});
	
	$("#toggleAddReview").click(function(){
		$("#addReview").slideToggle();
	});
});