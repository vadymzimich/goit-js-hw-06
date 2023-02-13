const loginForm = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please, fill in all fields!");
  }
  const userValues = {
    email: email.value,
    password: password.value,
  };

  console.log(userValues);
  event.currentTarget.reset();
};

loginForm.addEventListener("submit", handleSubmit);
