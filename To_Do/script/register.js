import UserClass from "./user.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    try {
      let name = document
        .getElementById("name")
        .value.trim()
        .toLowerCase();
      let username = document
        .getElementById("username")
        .value.trim()
        .toLowerCase();
      let password = document
        .getElementById("password")
        .value.trim()
        .toLowerCase();
      let confirm_password = document
        .getElementById("confirm_password")
        .value.trim()
        .toLowerCase();

      // check if password and confirm_password match or not
      if (password !== confirm_password) {
        alert("Password do not match");
        return;
      }
      // check if username already exits or not
      let users =
        JSON.parse(localStorage.getItem("userList")) || [];

      let userExists = users.some(
        (user) => user.username === username
      );
      if (userExists) {
        alert(
          "Username already exits. Try another on or login"
        );
        return;
      }

      let newUser = new UserClass(username, password, name);

      users.push(newUser);

      localStorage.setItem(
        "userList",
        JSON.stringify(users)
      );

      alert(
        "Registeration Successfull ! Redirecting to Login Page"
      );
      window.location.href = "login.html";
    } catch (e) {
      console.log(e);
    }

    console.log(name, username, password, confirm_password);
  });
});