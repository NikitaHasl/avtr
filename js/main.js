$(function () {
	$('.design__slider').slick({
		slidesToShow: 4,
		variableWidth: true,
		prevArrow: '.arrow-left',
		nextArrow: '.arrow-right',
		responsive: [
			{
				breakpoint: 445,
				settings: {
					slidesToShow: 1,
					variableWidth: false,
				},
			},
		],
	});
});
