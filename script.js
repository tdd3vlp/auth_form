const form = {
  email: document.getElementById('email'),
  password: document.getElementById('password'),
  button: document.querySelector('.button'),
};

const handleInput = function (e, name) {
  const { value } = e.target;
  if (value) {
    form[name].classList.add('filled');
  } else {
    form[name].classList.remove('filled');
  }
};

form.email.oninput = (e) => handleInput(e, 'email');
form.password.oninput = (e) => handleInput(e, 'password');
