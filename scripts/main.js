// jquery

$(document).ready(function () {
	var $header = $("header");
	$header.before($header.clone().addClass("sticky"));

	$(window).on("scroll", function () {
		var scrollFromTop = $(window).scrollTop();
		$("body").toggleClass("scroll", scrollFromTop > 350);
	});
});
