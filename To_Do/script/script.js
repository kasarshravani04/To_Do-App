console.log(window.location.href);

document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
  }
});