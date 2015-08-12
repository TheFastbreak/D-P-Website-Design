$(document).ready(function() {

	$(".panel1").hover(function() {
		$(this).css("width", '1146px');
		$(".panel2").hide("fast");
		$(".panel3").hide("fast");
		$("#simple").css("padding-top", "20px");
	}, function() {
		$(this).css("width", '350px');
		$(".panel2").show(3000);
		$(".panel3").show(3000);
		$("#simple").css("padding-top", "350px");
	});

	$(".panel2").hover(function() {
		$("#elegant").css("padding-top", "20px");
	}, function() {
		$("#elegant").css("padding-top", "350px");
	});

	$(".panel3").hover(function() {
		$(".panel1").hide("fast");
		$(".panel2").hide("fast");
		$(this).css("width", "1146");
		$("#response").css("padding-top", "20px");
	}, function() {
		$("#response").css("padding-top", "350px");
		$(".panel1").show(3000);
		$(".panel2").show(3000);
		$(this).css("width", "350")

	});

});

