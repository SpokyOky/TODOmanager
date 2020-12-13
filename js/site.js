const form = document.forms[0];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const values = [...new FormData(form).values()];
    console.log(values);

    if (!checkIsNotNull(values[0])) return showMessage('error', 'Неврный логин');
    if (!checkEmail(values[1])) return showMessage('error', 'Неврная почта');
    if (!checkIsNotNull(values[2])) return showMessage('error', 'Неврный пароль');

    showMessage('success', 'Регистрация прошла успешно');
});

function checkIsNotNull(value) {
    return value !== '';
}

function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function showMessage(type, text) {
    Swal.fire({
        text: text,
        icon: type,
        showConfirmButton: false
    });
}