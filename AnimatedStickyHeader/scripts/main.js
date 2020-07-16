// jquery

$(document).ready(function () {
	var $header = $("header");
	var $sticky = $header.before($header.clone().addClass("sticky"));
	console.log("hello from javascript");
});
