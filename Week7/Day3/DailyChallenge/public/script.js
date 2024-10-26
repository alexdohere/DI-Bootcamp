const handleRegister = async (event) => {
  event.preventDefault();

  const formData = {
    email: event.target.email.value,
    username: event.target.username.value,
    first_name: event.target.firstName.value,
    last_name: event.target.lastName.value,
    password: event.target.password.value,
  };

  try {
    const response = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    const message = result.message
      ? result.message
      : "Registration failed. Please try again.";
    document.getElementById("message").textContent = message;
  } catch (error) {
    console.error(error);
    document.getElementById("message").textContent =
      "Registration failed. Please try again.";
  }
};

const handleLogin = async (event) => {
  event.preventDefault();

  const credentials = {
    username: event.target.username.value,
    password: event.target.password.value,
  };

  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const result = await response.json();
    const message = result.message
      ? result.message
      : "Login failed. Please check your username and password.";
    document.getElementById("message").textContent = message;
  } catch (error) {
    console.error(error);
    document.getElementById("message").textContent =
      "Login attempt failed. Please try again.";
  }
};
