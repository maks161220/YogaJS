/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/***/ ((module) => {

function calc() {
    //Calc
    let people = document.querySelectorAll('.counter-block-input')[0],
        days = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        total = document.getElementById('total'),
        peopleSum = 0,
        daysSum = 0,
        totalSum = 0;

    total.innerHTML = 0;
    people.addEventListener('input', function(){
        peopleSum = +this.value;
        totalSum = (peopleSum*daysSum)*1000;

        if(this.value == '' || days.value == ''){
            total.innerHTML = 0;
        } else {
            total.innerHTML = totalSum;
        }
    });

    days.addEventListener('input', function(){
        daysSum = +this.value;
        totalSum = (peopleSum*daysSum)*1000;

        if(this.value == '' || people.value == '') {
            total.innerHTML = 0;
        } else {
            total.innerHTML = totalSum;
        }
    });

    place.addEventListener('change', function(){
        if (people.value != '' || days.value != '') {
            let a = totalSum;
            for (let i = 0; i < this.options.length; i++){
                if (this.options[i].selected === true) {
                    total.innerHTML = a * this.options[i].value;
                }
            }
        } else {
            total.innerHTML = 0;
        }
    });
}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/***/ ((module) => {

function myForm() {
    //Form
    let message = {
        loading: "Завантаження...",
        success: "Дякую! Скоро ми з вами зв'яжемося",
        fail: "Щось пішло не так!"
    };

    let form = document.querySelector('#form'),
        inputs = form.getElementsByTagName('input'),
        showMessage = document.createElement('div');

    showMessage.classList.add('status');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        form.appendChild(showMessage);


        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        let formData = new FormData(form);

        request.send(formData);
    
        request.addEventListener('readystatechange', function() {
                if (request.readyState < 4) {
                    showMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    showMessage.innerHTML = message.success;
                } else {
                    showMessage.innerHTML = message.fail;
                }
            });

            for (let i = 0; i < inputs.length; i++){
                inputs[i].value = '';
            }   
    });

    let formMain = document.querySelector('.main-form'),
        inputFormMain = document.getElementsByTagName('input');

    formMain.addEventListener('submit', function(e) {
        e.preventDefault();

        formMain.appendChild(showMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        let formDataMain = new FormData(formMain);

        request.send(formDataMain);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                showMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                showMessage.innerHTML = message.success;
            } else {
                showMessage.innerHTML = message.fail;
            }
        });

        for (let i = 0; i < inputFormMain.length; i++){
            inputFormMain[i].value = '';
        }
    });
}

module.exports = myForm;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/***/ ((module) => {

function modal() {
    //Modal
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let tabsBtn = document.querySelectorAll('.description-btn');

    for(let i = 0; i < tabsBtn.length; i++) {
        tabsBtn[i].addEventListener('click', function(){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    }

}

module.exports = modal;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/***/ ((module) => {

function slider() {
    //Slider
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrapper = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {
        if(n > slides.length) {
            slideIndex = 1;
        }

        if(n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlides(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', () => plusSlides(-1));

    next.addEventListener('click', () => plusSlides(1));

    dotsWrapper.addEventListener('click', function(e){
        for(let i = 0; i < dots.length + 1; i++) {
            if (e.target.classList.contains('dot') && e.target == dots[i -1 ]){
                currentSlides(i);
            }
        }
    });
}

module.exports = slider;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/***/ ((module) => {

function tabs() {
    //Tabs
    let tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        tabWrapper = document.querySelector('.info-header');

    
    //Функція, щоб сховати контент табів, які неактивні
    function hideTabContent(a) {       // аргумент а передається як таб, що відображається перед користувачем
        for (let i = a; i < tabContent.length; i++) {       // цикл починається з таба а
            tabContent[i].classList.remove('show');      //видаляємо клас show з усіх табів, які не відображаються
            tabContent[i].classList.add('hide');   //додаємо до цих же табів клас hide
        }
    }                      

    hideTabContent(1); // викликаємо ф-цію, як а передаємо перший таб (по замовчуванню)



    function showTabContent(b) {  // фунцкія показу таба, b - таб який відображається
        if (tabContent[b].classList.contains('hide')) {  //якщо контент табу, який вибрано скритий, то:
            tabContent[b].classList.remove('hide');     // видаляємо клас скритості
            tabContent[b].classList.add('show');  // додаємо клас видимості
        }
    }

    tabWrapper.addEventListener('click', function(e) {   // обробник подій для контейнера, що містить таби
        let target = e.target;

        if (target && target.classList.contains('info-header-tab')) {  // якщо ми клікнули на контейнер і поле, на яке ми клікнули містить клас табу
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {    // якщо клікнутий елемент дорівнює номеру таба, то:
                    hideTabContent(0);   // скриваємо всі елементи
                    showTabContent(i);   //робимо видимим контент табу, що дорівнює номеру цього табу
                }
            }
        }
    });
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/***/ ((module) => {

function timer() {
    //Timer

    let deadline = '2021-08-07';        //Створюємо змінну-дедлайн (з кінцевою датою)

    function getIntervalTime(endtime) {                     //ф-ція для розрахунку часу
        let t = Date.parse(endtime) - Date.parse(new Date()),    //змінна, в яку записується різниця між кінцевою датою і теперішньою
            seconds = Math.floor((t/1000) % 60),         //змінна, в яку записується кількість секунд
            minutes = Math.floor((t/1000/60) % 60),      //... хвилин
            hours = Math.floor((t/(1000*60*60)));        //... годин

        return {              //повертаємо об'єкт
            'timeAll': t,           //увесь час(в мілісекундах)
            'hours': hours,         //години
            'minutes': minutes,     //хвилини
            'seconds': seconds      //секунди
        };
    }

    function autoTimer(id, endtime) {               //функція автоматично підставляє отримані дані в код
        let timer = document.getElementById(id),            //змінна контейнер таймеру
            hours = document.querySelector('.hours'),       //години
            minutes = document.querySelector('.minutes'),   //хвилини
            seconds = document.querySelector('.seconds'),   //секунди
            timerInterval = setInterval(updateTimer, 1000); //оновлює таймер щосекунди

        function updateTimer() {                    //функція автоматичного оновлення таймера
            let t = getIntervalTime(endtime);   //в змінну записуємо виклик ф-ції для розрах. часу (аргумент - дедлайн)

            function addZero(num) {    //ф-ція підстановки 0, якщо число одинарне(1,2,3,4 і т.д.)
                if (num <=9 ) {     //
                    return '0' + num;   //
                } else {     
                    return num;     //
                }
            }

            hours.textContent = addZero(t.hours);           //показуємо на екрані години (з урахуванням 0)
            minutes.textContent = addZero(t.minutes);       //...хвилини...
            seconds.textContent = addZero(t.seconds);       //...секунди...

            if (t.timeAll <= 0) {                   //якщо кіл-сть мілісекунд, що залишилась до кінцевої дати 
                clearInterval(timerInterval);       //зупиняємо таймер
                hours.textContent = '00';           //в годинах показуємо значення 00
                minutes.textContent = '00';         //в хвилинах...
                seconds.textContent = '00';         //в секундах...
            }
        }
    }

    autoTimer('timer', deadline);                   //запуск ф-ції таймера (контейнер з таймером, кінцева дата)

}
module.exports = timer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener('DOMContentLoaded', function() {    //пишемо завжди

    'use strict';

    let calc = __webpack_require__(/*! ./parts/calc */ "./src/js/parts/calc.js"),
        form = __webpack_require__(/*! ./parts/form */ "./src/js/parts/form.js"),
        modal = __webpack_require__(/*! ./parts/modal */ "./src/js/parts/modal.js"),
        slider = __webpack_require__(/*! ./parts/slider */ "./src/js/parts/slider.js"),
        tabs = __webpack_require__(/*! ./parts/tabs */ "./src/js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer */ "./src/js/parts/timer.js");

        calc();
        form();
        modal();
        slider();
        tabs();
        timer();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map