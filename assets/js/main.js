$(function () {
	'use strict';

	//===== Prealoder

	$('.preloader').delay(500).fadeOut(500);

	const particlesOptions = {
		particles: {
			number: {
				value: 24,
				density: {
					enable: true,
					value_area: 1362.9002517356944,
				},
			},
			color: {
				value: '#f26010',
			},
			shape: {
				type: 'circle',
				stroke: {
					width: 1,
					color: '#af6a2e',
				},
				polygon: {
					nb_sides: 4,
				},
				image: {
					src: 'img/github.svg',
					width: 100,
					height: 100,
				},
			},
			opacity: {
				value: 0.1763753266952075,
				random: true,
				anim: {
					enable: true,
					speed: 1,
					opacity_min: 0.21926084732136317,
					sync: false,
				},
			},
			size: {
				value: 92.19619349976756,
				random: true,
				anim: {
					enable: true,
					speed: 9.744926547616142,
					size_min: 24.362316369040354,
					sync: false,
				},
			},
			line_linked: {
				enable: true,
				distance: 224.4776885211732,
				color: '#f26010',
				opacity: 0.44093831673801875,
				width: 1.603412060865523,
			},
			move: {
				enable: true,
				speed: 3.206824121731046,
				direction: 'none',
				random: true,
				straight: false,
				out_mode: 'bounce',
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200,
				},
			},
		},
		interactivity: {
			detect_on: 'canvas',
			events: {
				onhover: {
					enable: false,
					mode: 'grab',
				},
				onclick: {
					enable: false,
					mode: 'push',
				},
				resize: true,
			},
			modes: {
				grab: {
					distance: 292.34779642848423,
					line_linked: {
						opacity: 0.1727513532189337,
					},
				},
				bubble: {
					distance: 645.6013837795693,
					size: 138.05312609122865,
					duration: 1.6241544246026902,
					opacity: 0.251743935813417,
					speed: 3,
				},
				repulse: {
					distance: 381.6762897816322,
					duration: 0.4,
				},
				push: {
					particles_nb: 4,
				},
				remove: {
					particles_nb: 2,
				},
			},
		},
		retina_detect: true,
	};

	//===== Sticky

	$(window).on('scroll', function (event) {
		var scroll = $(window).scrollTop();
		if (scroll < 20) {
			$('.navbar-area').removeClass('sticky');
			$('.navbar .navbar-brand img').attr('src', 'assets/images/logo.svg');
		} else {
			$('.navbar-area').addClass('sticky');
			$('.navbar .navbar-brand img').attr('src', 'assets/images/logo.svg');
		}
	});

	//===== Section Menu Active

	var scrollLink = $('.page-scroll');
	// Active link switching
	$(window).scroll(function () {
		var scrollbarLocation = $(this).scrollTop();

		scrollLink.each(function () {
			var sectionOffset = $(this.hash).offset().top - 73;

			if (sectionOffset <= scrollbarLocation) {
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		});
	});

	//===== close navbar-collapse when a  clicked

	$('.navbar-nav a').on('click', function () {
		$('.navbar-collapse').removeClass('show');
	});

	$('.navbar-toggler').on('click', function () {
		$(this).toggleClass('active');
	});

	$('.navbar-nav a').on('click', function () {
		$('.navbar-toggler').removeClass('active');
	});

	//===== Counter Up

	$('.counter').counterUp({
		delay: 10,
		time: 3000,
	});

	//===== Back to top

	// Show or hide the sticky footer button
	$(window).on('scroll', function (event) {
		if ($(this).scrollTop() > 600) {
			$('.back-to-top').fadeIn(200);
		} else {
			$('.back-to-top').fadeOut(200);
		}
	});

	//Animate the scroll to yop
	$('.back-to-top').on('click', function (event) {
		event.preventDefault();

		$('html, body').animate(
			{
				scrollTop: 0,
			},
			1500
		);
	});

	//=====  WOW active

	new WOW().init();

	//=====  particles

	if (document.getElementById('particles-1'))
		particlesJS('particles-1', particlesOptions);

	// if (document.getElementById('particles-2'))
	// 	particlesJS('particles-2', particlesOptions);
});
