// Handle the form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const contact = document.getElementById('contact').value;

    // Simple form validation
    if (name && email && message) {
        document.getElementById('response').textContent = 'Thank you for your message, ' + name + '! We will get back to you soon.';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('response').textContent = 'Please fill out all fields.';
    }
});
