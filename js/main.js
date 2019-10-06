$(function() {

	    /* fixed header */
	let header = $("#header");  
	let intro = $("#intro");
	let introH = intro.innerHeight();   // объявление переменной с высотой блока "intro"
	let scrollPos = $(window).scrollTop();    // считает сколько пикселей от верха страницы в данный момент
	let nav = $("#nav");
	let navToggle = $("#navToggle");

	cseckScroll(scrollPos, introH);    // будем вызывать данную функцию при загрузке страницы ( суть функции чтобы фиксированое меню появлялось сразу при обновлении страницы )

	$(window).on("scroll resize", function() {    // при скроле и обновлении страницы появляется класс "fixed (resize - класс "fixed не будет появлятся раньше при переходе с телефона на пк)"
		introH = intro.innerHeight();    // будем перезаписывать значение переменной при "resize"
		scrollPos = $(this).scrollTop();

		cseckScroll(scrollPos, introH);        // вызываем функцию отправляем ей позицию скрола и высоту "intro" блока

	});

	function cseckScroll(scrollPos, introH){
		if( scrollPos > introH ) {       // когда проскролили класс "header" то появляется класс "fixed"
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}


	/* smoth scroll */
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();                            // отменяет стандартное поведение ссылки ( чтобы не открывало в новой вкладке )

		let elementId = $(this).data('scroll');  // в переменной при клике хранится Id блока который нужно сролить
		let elementOffset =$(elementId).offset().top;   // позиция элемента от верха страницы (отступ от верха в пикселях)

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset - 65
		}, 700);
	})


	/* navToggle */
	navToggle.on("click", function(event){
		event.preventDefault();                          // если бы кнопка была в виде ссылки то это отменяет стандартное поведение ссылки ( чтобы не открывало в новой вкладке )         

		nav.toggleClass("show")     /* при нажатии на бургер меню добавляется класс "show" */
	});


	/* testimonials */     // https://kenwheeler.github.io/slick/
	let slider = $("#testimonialsSlider");

	slider.slick({
			infinite: true,     // бесконечная прокрутка
			slidesToShow: 1,    // сколько будет показано слайдов
			slidesToScroll: 1,  // сколько будет пролистано слайдов при клике на скрол
			fade: true,         // один отзыв исчезает другой появляется (затемнение)
			arrows: false,       // убирает стрелки слайдера
			dots: true 
	});

});