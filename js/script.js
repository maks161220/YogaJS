window.addEventListener('DOMContentLoaded', function() {    //пишемо завжди

    'use strict';

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

});