
getCourses();
function getCourses() {

	var result = '';
	var arr = [
		{img:'_tmpimg/courses.jpg', text:'Программирование на C# для ребят от 11 до 17 лет', btn1:'', btn2:''},
		{img:'_tmpimg/courses.jpg', text:'Web - разработка. Возрастные ограничения от 16 лет', btn1:'', btn2:''},
		{img:'_tmpimg/courses.jpg', text:'Фотошоп', btn1:'', btn2:''},
		{img:'_tmpimg/courses.jpg', text:'3d моделирование для школьников от 14 лет для взрослых', btn1:'', btn2:''},
		{img:'_tmpimg/courses.jpg', text:'Еще какой-то курс', btn1:'', btn2:''}
	];

    for(var i=0; i<=arr.length-1; i++) {
        result += `
        	<div class="item">
				<div class="img" style="background-image: url(${arr[i].img});"></div>
				<div class="text">${arr[i].text}</div>
				<div class="buttons">
					<button class="btn-standart">Подробнее</button>
					<button class="btn-standart">Записаться на пробное бесплатное занятие</button>
				</div>
			</div>
        `;
    }

	$('.courses-container').html(result);
}


getTeachers();
function getTeachers() {

	var result = '';
	var arr = [
		{img:'_tmpimg/teachers.jpg', name:'Холуев Максим Александрович', text:'разработчик с 15-летним стажем, CRM-консультант, преподавал программирование в университете, также занимается маркетингом, активно выступает на различных конференциях как докладчик.'},
		{img:'_tmpimg/teachers.jpg', name:'Холуев Максим Александрович', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sed quis non? Iusto, nulla! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sed quis non?'},
		{img:'_tmpimg/teachers.jpg', name:'Холуев Максим Александрович', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sed quis non? Iusto, nulla! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sed quis non?'},
		{img:'_tmpimg/teachers.jpg', name:'Холуев Максим Александрович', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sed quis non? Iusto, nulla! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sed quis non?'}
	];

    for(var i=0; i<=arr.length-1; i++) {
        result += `
        	<div class="item">
        		<div class="name">${arr[i].name}</div>
				<div class="img" style="background-image: url(${arr[i].img});"></div>
				<div class="text">${arr[i].text}</div>
			</div>
        `;
    }

	$('.teachers-container').html(result);
}



getSteps();
function getSteps() {

	var result = '';
	var arr = [
		{img:'_tmpimg/step.png', text:'1,5-2 часа'},
		{img:'_tmpimg/step.png', text:'2 занятия в неделю'},
		{img:'_tmpimg/step.png', text:'Только практика'},
		{img:'_tmpimg/step.png', text:'- По будням вечером <br> - Весь день в выходные'},
		{img:'_tmpimg/step.png', text:'Видео и методичка по урокам для домашних работ'},
		{img:'_tmpimg/step.png', text:'Дарим подарки, выдаем сертификаты'}
	];

    for(var i=0; i<=arr.length-1; i++) {
        result += `
        	<div class="item">
        		<div class="img" style="background-image: url(${arr[i].img});"></div>
        		<div class="text">${arr[i].text}</div>
			</div>
        `;
    }

	$('.steps-container').html(result);
}




getReviews();
function getReviews() {

	var result = '';
	var arr = [
		{img:'_tmpimg/teachers.jpg', name:'Zoe Saldana', text:'Я записала своего сына мы попробовали и теперь он программист. Поступил в ПГУ. Хочет продолжать карьеру программиста.', link:'https://vk.com/'},
		{img:'_tmpimg/teachers.jpg', name:'Zoe Saldana', text:'Я записала своего сына мы попробовали и теперь он программист. Поступил в ПГУ. Хочет продолжать карьеру программиста.', link:'https://vk.com/'},
		{img:'_tmpimg/teachers.jpg', name:'Zoe Saldana', text:'Я записала своего сына мы попробовали и теперь он программист. Поступил в ПГУ. Хочет продолжать карьеру программиста.', link:'https://vk.com/'},
		{img:'_tmpimg/teachers.jpg', name:'Zoe Saldana', text:'Я записала своего сына мы попробовали и теперь он программист. Поступил в ПГУ. Хочет продолжать карьеру программиста.', link:'https://vk.com/'}
	];

    for(var i=0; i<=arr.length-1; i++) {
        result += `
        	<div class="item">
        		<div class="img" style="background-image: url(${arr[i].img});"></div>
        		<div class="wrapper">
					<div class="name">${arr[i].name}</div>
					<div class="text">${arr[i].text}</div>
					<a href="${arr[i].link}" target="_blank">Ссылка ВК</a>
        		</div>
			</div>
        `;
    }

	$('.reviews-container').html(result);
}



