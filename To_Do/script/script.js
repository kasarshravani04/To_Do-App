import add_todo from "./AddTodo.js";
import applyFilters from "./Filter.js";
import renderTodo from "./RenderTodo.js";

document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
    return;
  }

  // to set min time
  let deadline = document.getElementById("deadline");
  const now = new Date().toISOString().slice(0, 16);
  // Set as the minimum selectable time
  deadline.min = now;

  const logoutBtn = document.getElementById("logout_btn");

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("name");
    localStorage.removeItem("loggedIn");
    alert("logout succesfull , Redirecting to login page");
    window.location.href = "login.html";
  });

  const addFormBtn =
    document.getElementById("add_todo_btn");
  const addModal = document.getElementById("addModal");
  const closeBtn = document.getElementById("close_btn");

  addFormBtn.addEventListener("click", () =>
    addModal.showModal()
  );
  closeBtn.addEventListener("click", () =>
    addModal.close()
  );

  // atodo data shocase logic

  const user_name = localStorage.getItem("name") || "";
  function DataUpdate() {
    const user_list =
      JSON.parse(localStorage.getItem("userList")) || [];
    return user_list;
  }

  let user_list = DataUpdate();

  let index_of_the_user_obj = user_list.findIndex(
    (user) => user.username === user_name
  );

  const User_details = user_list.find(
    (user) => user.username === user_name
  );

  document.getElementById("username").innerText =
    User_details.name;
  applyFilters(User_details.todoList);
  console.log(User_details);
  if (!User_details) {
    // fallback logic
    return;
  }

  const add_todo_form =
    document.getElementById("add_todo_form");

  add_todo_form.addEventListener("submit", (event) => {
    add_todo(event, User_details.todoList);
    user_list[index_of_the_user_obj] = User_details;
    localStorage.setItem(
      "userList",
      JSON.stringify(user_list)
    );
    applyFilters(User_details.todolist);

    alert("task added successfully");
    addModal.close();
  });

  // filter logic

  applyFilters(User_details.todoList);

  const priority_filter = document.getElementById(
    "priority_filter"
  );
  const status_filter =
    document.getElementById("status_filter");
  const search_filter =
    document.getElementById("search_filter");

  priority_filter.addEventListener("change", () =>
    applyFilters(User_details.todoList)
  );
  status_filter.addEventListener("change", () =>
    applyFilters(User_details.todoList)
  );
});