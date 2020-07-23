$(function () {
	'use strict';

	//===== Prealoder

	$('.preloader').delay(500).fadeOut(500);

	i18next.use(i18nextBrowserLanguageDetector).init(
		{
			detection: {
				order: ['navigator', 'cookie', 'htmlTag'],
			},
			fallbackLng: 'en',
			debug: false,
			interpolation: {
				escapeValue: false,
				escape: false,
			},
			resources: {
				// evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
				en: {
					translation: {
						title: 'Qalfy | A secured P2P browser in the cloud',
						nav: {
							home: 'Home',
							features: 'Features',
							about: 'About',
							pricing: 'Pricing',
							coming: 'COMING SOON',
						},
						body: {
							legend1: 'Extensible Cobrowsing Solution',
							legend2: 'A secured P2P browser in the cloud',
							legend3:
								'Share, debug, record and playback your sessions. Privacy first.',
							legend4:
								'A new way to explore <span> with others, together</span>',
							secure: 'Secure',
							'secure-content':
								'A Qalfy Session is ethereal as it self destroys upon each use. \
									A secure <a href="https://wikipedia.org/wiki/Peer-to-peer" target="_blank">P2P</a> \
									connection is established between you \
									and a non-persistent browser. Our servers don\'t track your activity nor your identity, \
									unless you explicitly allow that.',
							extensible: 'Extensible',
							'extensible-content':
								"Develop custom plugins to extract the most out of the browsing experience: for \
							data mining, task automation, quality assurance, development pipelines or anything \
							you'd like to do within any website.",
							effective: 'Cost Effective',
							'effective-content':
								'Using a regular browser, your bandwidth and processing power is compromised: there are \
							tons of resources that are being downloaded and run on the background. \
							Using our browsers in the cloud, you get the final picture. Leave the processing power \
							to us.',
							workflow:
								'Improve the workflow <span>by sharing a browser</span>',
							'workflow-content':
								'Setup a team and get the work done faster. Share the tabs, the clipboard, play your \
							demos and showcase your work, live. Let others contribute and interact with you and the \
							browser. Much better than screensharing: this is browser-sharing.',
							enterprise:
								'Enterprise security <span> using our gateway </span>',
							'enterprise-content':
								"A company's assets are in danger when users expose your network using a regular browser. \
							With Qalfy, the gateway to the Internet is delegated to our highly secured servers in the \
							cloud. File downloads, website blocking and time constraints are now under your control.",
							qa: 'Development and QA <span>in perfect synchronicity</span>',
							'qa-content':
								'Test your apps right within the same context as your QA analyst, live. Debug interactively \
							using a fully compliant DevTools integrated while your team mates or customers report an \
							issue. \
							Record, playback and export to popular testing frameworks: <b>Selenium</b>, <b>Jest</b>, \
							<b>Nightmare</b> and more!',
							subscribe: 'Subscribe <span>for launch date</span>',
							email: 'Enter email address',
							privacy:
								'We do not collect personal information from visitors unless it&apos;s explicitly \
							required with your consent. We don&apos;t spam visitors with promotions or newsletters.',
						},
						btn: {
							start: 'Get Started',
							learn: 'Learn More <i class="lni lni-chevron-right"></i>',
							try: 'Try it Free',
							enterprise: 'Go Enterprise',
							subscribe: 'Subscribe',
						},
						footer: {
							resources: 'Resources',
							contact: 'Contact Us',
							copyright:
								'Trademarks belong to their respective \
							owners &vert; All rights reserved',
						},
					},
				},
				es: {
					translation: {
						title: 'Qalfy | Un navegador P2P seguro en la nube',
						nav: {
							home: 'Inicio',
							features: 'Ventajas',
							about: 'Información',
							pricing: 'Precios',
							coming: 'DISPONIBLE PRONTO',
						},
						body: {
							legend1: 'Navegación Colaborativa Extensible',
							legend2: 'Un navegador P2P seguro en la nube',
							legend3:
								'Comparte, depura, graba y reproduce tus sesiones. Privacidad primero.',
							legend4:
								'Una nueva manera de explorar <span> con otras personas</span>',
							secure: 'Seguro',
							'secure-content':
								'Una sesión Qalfy es etérea ya que se autodestruye luego de cada uso. \
							Una conexión <a href="https://wikipedia.org/wiki/Peer-to-peer" target="_blank">P2P</a> \
							segura es establecida entre usted y un navegador no persistente. Nuestros servidores no registran su actividad ni su identidad, \
							al menos que usted lo permita explícitamente.',
							extensible: 'Extensible',
							'extensible-content':
								'Desarrolla complementos personalizados para obtener el mayor provecho \
								de la experiencia navegando: para minería de datos, automatización de tareas, \
								control de calidad, flujos de desarollo o cualquier otra cosa que necesites hacer en un sitio.',
							effective: 'Económico',
							'effective-content':
								'Usando un navegador común, el ancho de banda y poder de procesamiento están comprometidos: \
								hay gran cantidad de recursos que se descargan y ejecutan de fondo. \
								Usando nuestros navegadores en la nube, se obtiene la imágen final. Delega el poder de procesamiento a nosotros.',
							workflow:
								'Optimiza el flujo de trabajo <span>compartiendo un navegador</span>',
							'workflow-content':
								'Organiza tu propio equipo y termina el trabajo rápidamente. Comparte las pestañas, el portapapeles, \
								reproduce tus demos y expone tu trabajo, en vivo. Deja que otros contribuyan e interactuen contigo \
								y el navegador. Mucho mejor que compartir pantalla: esto es compartir un mismo navegador.',
							enterprise:
								'Seguridad corporativa <span> usando nuestro gateway</span>',
							'enterprise-content':
								'Los activos de una compañía estan en peligro cuando sus usuarios exponen su red usando \
								un navegador común y corriente. Con Qalfy, la entrada a Internet es delegada a nuestros servidores seguros \
								en la nube. Las descargas, el filtrado de sitios y el control de tiempo de navegación esta bajo su \
								completo control.',
							qa: 'Programación y QA  <span>en perfecta sincronía</span>',
							'qa-content':
								'Depura tus aplicaciones o sitios en el mismo contexto que tu analista de control de calidad, en vivo. \
								Depura de manera interactiva usando los DevTools integrados totalmente compatible mientras \
								tu equipo o clientes reportan un incidente. \
								Graba, reproduce y exporta a librerias de testing populares: <b>Selenium</b>, <b>Jest</b>, \
								<b>Nightmare</b> y más!',
							subscribe: 'Subscríbase <span>para el lanzamiento</span>',
							email: 'Ingresa correo electrónico',
							privacy:
								'No preservamos información personal de los visitantes al menos que sea \
							explícitamente requerida y con su consentimiento. No enviamos spam, promociones ni newsletters.',
						},
						btn: {
							start: 'Empieza Ahora',
							learn: 'Ver Detalles <i class="lni lni-chevron-right"></i>',
							try: 'Pruébalo Gratis',
							enterprise: 'Corporativo',
							subscribe: 'Subscríbase',
						},
						footer: {
							resources: 'Recursos',
							contact: 'Contáctese',
							copyright:
								'Las marcas pertenecen a sus respectivos propietarios &vert; Todos los derechos reservados.',
						},
					},
				},
			},
		},
		function (err, t) {
			// for options see
			// https://github.com/i18next/jquery-i18next#initialize-the-plugin
			jqueryI18next.init(i18next, $);

			// start localizing, details:
			// https://github.com/i18next/jquery-i18next#usage-of-selector-function
			$('body').localize();
			$('title').localize();
		}
	);

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
