$(document).ready( function() {
	/* 
		For this filter, I did some thinking after getting the slideToggle function working on the individual vessel page. It seemed possible to show/hide elements and filter them by class.
		
		To get the fade to work, I googled 'jquery fade hide' and followed the documentation at:
		http://api.jquery.com/fadeout/
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
	
	$("#vesselSpecs").hide();
	$("#reviews").hide();
	$("#addReview").hide();
	
	$("#toggleSpecs").click(function(){
		$("#vesselSpecs").slideToggle();

	});
	$("#toggleReviews").click(function(){
		$("#reviews").slideToggle();
	});
	*/
	
	
	$("#toggleFilter").click(function(){
		$("#vessel_filter").slideToggle();
	});
	
	/*Toggle for all FIGHTERS */
	$( "#fighterToggle" ).click(function() {
		if (this.checked){
			$(".fighter").fadeIn("medium", function() {
		
			// Animation complete.
			});
		}else{
			$(".fighter").fadeOut("medium", function() {
		
			// Animation complete.
			});
		}
	});
	
	/*Toggle for all SHUTTLES */
	$( "#shuttleToggle" ).click(function() {
		if (this.checked){
			$(".shuttle").fadeIn("medium", function() {
		
			// Animation complete.
			});
		}else{
			$(".shuttle").fadeOut("medium", function() {
		
			// Animation complete.
			});
		}
	});
	
	/*Toggle for all CAPITAL SHIPS */
	$( "#capitalShipToggle" ).click(function() {
		if (this.checked){
			$(".capitalShip").fadeIn("medium", function() {
		
			// Animation complete.
			});
		}else{
			$(".capitalShip").fadeOut("medium", function() {
		
			// Animation complete.
			});
		}
	});
	
	/*Toggle for all CRUISERS/CORVETTES */
	$( "#cruiserToggle" ).click(function() {
		if (this.checked){
			$(".cruiser").fadeIn("medium", function() {
		
			// Animation complete.
			});
		}else{
			$(".cruiser").fadeOut("medium", function() {
		
			// Animation complete.
			});
		}
	});
	
	/*Toggle for all BATTLESTATIONS */
	$( "#battlestationToggle" ).click(function() {
		if (this.checked){
			$(".battlestation").fadeIn("medium", function() {
		
			// Animation complete.
			});
		}else{
			$(".battlestation").fadeOut("medium", function() {
		
			// Animation complete.
			});
		}
	});
	
	/*Toggle for all WALKERS */
	$( "#walkerToggle" ).click(function() {
		if (this.checked){
			$(".walker").fadeIn("medium", function() {
		
			// Animation complete.
			});
		}else{
			$(".walker").fadeOut("medium", function() {
		
			// Animation complete.
			});
		}
	});
});