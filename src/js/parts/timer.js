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