var swiper = new Swiper('.recommend_video .swiper-container', {
	slidesPerView: 5,
	spaceBetween: 46,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	autoplay: true,
	delay: 3000,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

var swiper1 = new Swiper('.bry_activity_focus_img .swiper-container', {
	loop: true,
	autoplay: true,
	delay: 3000,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
