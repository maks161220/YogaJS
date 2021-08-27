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