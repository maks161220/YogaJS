window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        tabWrapper = document.querySelector('.info-header');

    
    //Функція, щоб сховати таби, коли вони неактивні
    function hideTabContent(a) {                           // аргумент а передається як таб, що відображається перед користувачем
        for (let i = a; i < tabContent.length; i++) {      // цикл починається з таба а
            tabContent[i].classList.remove('show');       //видаляємо клас show з усіх табів, які не відображаються
            tabContent[i].classList.add('hide');          //додаємо до цих же табів клас hide
        }
    }

    hideTabContent(1);      // викликаємо ф-цію, як а передаємо перший таб (по замовчуванню)



    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');    
            tabContent[b].classList.add('show'); 
        }
    }

    tabWrapper.addEventListener('click', function(e) {
        let target = e.target;

        if(target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }

    });

});