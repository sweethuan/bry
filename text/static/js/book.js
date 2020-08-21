var swiper = new Swiper('.recommend_book .swiper-container', {
	slidesPerView: 7,
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