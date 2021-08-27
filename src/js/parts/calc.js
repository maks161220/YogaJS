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