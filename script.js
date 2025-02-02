// script.js
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation
  if (name && email && message) {
    alert('Thank you for your message, ' + name + '! I will get back to you soon.');
    document.getElementById('contact-form').reset(); // Clear the form
  } else {
    alert('Please fill out all fields.');
  }
});