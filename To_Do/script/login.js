document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    try {
      let username = document
        .getElementById("username")
        .value.trim()
        .toLowerCase();
      let password = document
        .getElementById("password")
        .value.trim()
        .toLowerCase();

      console.log(username);
      console.log(password);

      // check if username and password match or not
      let users =
        JSON.parse(localStorage.getItem("userList")) || [];

      let foundUser = users.find(
        (user) =>
          user.username === username &&
          user.password === password
      );

      if (!foundUser) {
        alert("Incorrect username or Password!");
        return;
      }

      localStorage.setItem("loggedIn", true);
      console.log(foundUser);
      localStorage.setItem("name", foundUser.username);

      alert("Login Successfull ! Redirecting to Dashboard");
      window.location.href = "index.html";
    } catch (e) {
      console.log(e);
    }
  });
});