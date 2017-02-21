$(document).ready(function() {

	$(".interface .buttons .eyearctic").click(function() {
		$(".interface .buttons .eyejungle, .eyeocean").animate({
			opacity: 1
		}, 100, function() {
			$(".interface .buttons .eyearctic").delay(200).animate({
				opacity: 0
			});
		});
	});

	$(".interface .buttons .blindtwo").click(function(){
		$(".interface .buttons .eyearctic, .blindthree, .blindfour").animate({
			opacity: 1
		}, 100, function() {
			$(".interface .buttons .blindtwo").delay(200).animate({
				opacity: 0
			});
		});
	});

	$(".interface .buttons .blindthree").click(function(){
		$(".interface .buttons .eyearctic, .blindtwo, .blindfour").animate({
			opacity: 1
		}, 100, function() {
			$(".interface .buttons .blindthree").delay(200).animate({
				opacity: 0
			});
		});
	});
});
