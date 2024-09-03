document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting the default way

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple form validation
        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            form.reset(); // Reset form fields
        } else {
            alert('Please fill out all fields.');
        }
    });
});
