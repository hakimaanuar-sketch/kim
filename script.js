document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const form = event.target;
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }
 
  const modal = new bootstrap.Modal(document.getElementById('successModal'));
  modal.show();
  form.reset();
  form.classList.remove('was-validated');
});