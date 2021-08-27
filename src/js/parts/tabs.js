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