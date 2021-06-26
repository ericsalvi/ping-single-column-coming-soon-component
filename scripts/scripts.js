const emailAddress = document.querySelector('#emailAddress');
const form = document.querySelector('form');
const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const submit = document.querySelector('.success');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailAddress.value.length < 1) {
        setError(true, emailAddress, "Email address cannot be empty");
    } else if (emailValidation.test(emailAddress.value)) {
        setError(false, emailAddress);
        let inputs = document.querySelectorAll('input');
        inputs.forEach(input => input.value = '');
    } else {
        setError(true, emailAddress, "Please provide a valid email address");
    }
});

function setError(error, input, msg) {
    input.addEventListener('focus', () => {
        input.nextElementSibling.style.display = "none";
        input.parentElement.className = "";
    });
    if (error) {
        input.nextElementSibling.innerHTML = msg;
        input.nextElementSibling.style.display = "block";
        input.parentElement.className = "error";
    } else {
        input.nextElementSibling.style.display = "none";
        input.parentElement.className = "";
    }
};