
const store = new Vuex.Store({
	state: {
		storeMenu: [
			{link:'#courses-scroll', name:'Курсы'},
			{link:'#teachers-scroll', name:'Преподаватели'},
			{link:'#steps-scroll', name:'Обучение'},
			{link:'#map-scroll', name:'Контакты'},
			{link:'#reviews-scroll', name:'Отзывы'}
		],
		storeCourses: [
			{color:'orange', img:'_tmpimg/courses.jpg', text:'Программирование на C# для ребят от 11 до 17 лет',       btn1:'', btn2:''},
			{color:'orange', img:'_tmpimg/courses.jpg', text:'Web - разработка. Возрастные ограничения от 16 лет',     btn1:'', btn2:''},
			{color:'orange', img:'_tmpimg/courses.jpg', text:'Фотошоп',                                                btn1:'', btn2:''},
			{color:'orange', img:'_tmpimg/courses.jpg', text:'3d моделирование для школьников от 14 лет для взрослых', btn1:'', btn2:''},
			{color:'orange', img:'_tmpimg/courses.jpg', text:'Еще какой-то курс',                                      btn1:'', btn2:''}
		],
		storeTeachers: [
			{img:'_tmpimg/teachers.jpg', name:'Холуев Максим Александрович', text:'разработчик с 15-летним стажем, CRM-консультант, преподавал программирование в университете, также занимается маркетингом, активно выступает на различных конференциях как докладчик.'},
			{img:'_tmpimg/teachers.jpg', name:'Холуев Максим Александрович', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sed quis non? Iusto, nulla! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sed quis non?'},
			{img:'_tmpimg/teachers.jpg', name:'Холуев Максим Александрович', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sed quis non? Iusto, nulla! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sed quis non?'},
			{img:'_tmpimg/teachers.jpg', name:'Холуев Максим Александрович', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sed quis non? Iusto, nulla! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sed quis non?'}
		],
		storeSteps: [
			{img:'_tmpimg/step.png', text:'1,5-2 часа'},
			{img:'_tmpimg/step.png', text:'2 занятия в неделю'},
			{img:'_tmpimg/step.png', text:'Только практика'},
			{img:'_tmpimg/step.png', text:'- По будням вечером - Весь день в выходные'},
			{img:'_tmpimg/step.png', text:'Видео и методичка по урокам для домашних работ'},
			{img:'_tmpimg/step.png', text:'Дарим подарки, выдаем сертификаты'}
		],
		storeReviews: [
			{img:'_tmpimg/teachers.jpg', name:'Zoe Saldana', text:'Я записала своего сына мы попробовали и теперь он программист. Поступил в ПГУ. Хочет продолжать карьеру программиста.', link:'https://vk.com/'},
			{img:'_tmpimg/teachers.jpg', name:'Zoe Saldana', text:'Я записала своего сына мы попробовали и теперь он программист. Поступил в ПГУ. Хочет продолжать карьеру программиста.', link:'https://vk.com/'},
			{img:'_tmpimg/teachers.jpg', name:'Zoe Saldana', text:'Я записала своего сына мы попробовали и теперь он программист. Поступил в ПГУ. Хочет продолжать карьеру программиста.', link:'https://vk.com/'},
			{img:'_tmpimg/teachers.jpg', name:'Zoe Saldana', text:'Я записала своего сына мы попробовали и теперь он программист. Поступил в ПГУ. Хочет продолжать карьеру программиста.', link:'https://vk.com/'}
		]
	},
	mutations: {
		// setEventsActive(state, payload) {
		// 	state.eventsTime[payload.num].active = payload.active
		// }
	}
})


var appMenu = new Vue({
	el: '#menu',
	store,
	computed: {
		storeMenu() { return store.state.storeMenu; }
	},
	methods: {
		clickMenu() {
			if($('.header-menu-touch').is(':visible')) {
				var headerMenu = '.header-menu';
				$(headerMenu).slideToggle();
				$(headerMenu+'-touch').toggleClass('open');	
			} 
		}
	}
});
var appCourses = new Vue({
	el: '#courses',
	store,
	computed: {
		storeCourses() { return store.state.storeCourses; }
	}
});
var appTeachers = new Vue({
	el: '#teachers',
	store,
	computed: {
		storeTeachers() { return store.state.storeTeachers; }
	}
});
var appSteps = new Vue({
	el: '#steps',
	store,
	computed: {
		storeSteps() { return store.state.storeSteps; }
	}
});
var appReviews = new Vue({
	el: '#reviews',
	store,
	computed: {
		storeReviews() { return store.state.storeReviews; }
	}
});


$('.reviews-container').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 2,
	responsive: [
		{breakpoint: 1200,  settings:  { slidesToShow: 1, slidesToScroll: 1 }}
	]
});





var headerMenu = '.header-menu';

$(headerMenu+'-touch').on('click', function() {
	$(headerMenu).slideToggle();
	$(this).toggleClass('open');
});

$(window).on('resize', function() {
	if($(headerMenu).is(':hidden')) {
		$(headerMenu).removeAttr('style');
	}
});



$(window).on('scroll', function() {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	
	var heightHeader = parseInt($('header').css('height'));

	if (scrolled > heightHeader) {
		$('.header-menu-container .btn-standart').css('opacity', '1');
	} else {
		$('.header-menu-container .btn-standart').css('opacity', '0');
	}
});

