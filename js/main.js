document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  var button = form.querySelector('button[type=submit]');
  var statusEl = document.getElementById('form-status');
  var defaultLabel = button.textContent;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    button.disabled = true;
    button.textContent = 'Sending…';
    statusEl.textContent = '';
    statusEl.classList.remove('is-error');

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
      .then(function (response) {
        if (response.ok) {
          button.textContent = 'Message sent, thank you';
          form.reset();
        } else {
          return response.json().then(function (data) {
            throw new Error((data && data.errors && data.errors.map(function (e) { return e.message; }).join(', ')) || 'Something went wrong');
          });
        }
      })
      .catch(function (error) {
        button.disabled = false;
        button.textContent = defaultLabel;
        statusEl.textContent = error.message || 'Something went wrong. Please try again or email us directly.';
        statusEl.classList.add('is-error');
      });
  });
});
