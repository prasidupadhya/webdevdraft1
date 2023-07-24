document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedback-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const thankYou = document.getElementById('thank-you');

    form.addEventListener('submit', function(event) {
        let hasError = false;
        if (nameInput.value === '') {
            hasError = true;
            nameError.style.display = 'block';
        } else {
            nameError.style.display = 'none';
        }

        if (emailInput.value === '' || !emailInput.validity.valid) {
            hasError = true;
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }

        if (hasError) {
            event.preventDefault();
        } else {
            event.preventDefault(); // Remove this line when you've implemented the server-side script
            form.reset();
            form.style.display = 'none';
            thankYou.style.display = 'block';
        }
    });
});
