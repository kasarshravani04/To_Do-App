import applyFilters from "./Filter.js";
import Todo from "./Todo.js";

const user_name = localStorage.getItem("name") || "";
function DataUpdate(){
 return JSON.parse(localStorage.getItem("user_list")) || []
}

let user_list = DataUpdate();

let index_of_the_user_obj = user_list.findIndex(
    (user) => user.username === user_name
);

const User_details = user_list.find(
    (user) => user.username === user_name
);

export const deletTodo = (id , data ) =>{
    console.log(id,data);
    let todo = data.findIndex((el) => el.title === id);

    alert(prompt("Are you sure[Y/N"));

    data.splice(todo ,1);

    User_details.todoList = data;
    user_list[index_of_the_user_obj] = User_details;

    localStorage.setItem(
        "userList",
        JSON.stringify(user_list)
    );
    applyFilters(User_details.todolist);
};

const editModal = document.getElementById("edit_modal");
const edit_todo_form = document.getElementById(
    "edit_todo_form"
);
const btn_close = document.getElementById("btn_close");

btn_close.addEventListener("click", close_btn_func);

function close_btn_func(){
    editModal.closest();
}
// calling form inputs

const Title = document.getElementById("edit_title");
const description = document.getElementById(
    "edit_description"
);
const priority = document.getElementById("edit_priority");
const deadline = document.getElementById("edit_deadline");
let old_title = "";
export const editTodo = (todo) => {
  old_title = todo.title;
  Title.value = todo.title;
  description.value = todo.desc;
  priority.value = todo.priority;
  deadline.value = todo.deadline;
  editModal.showModal();
};

//  svae edit form data
edit_todo_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const editedTodo = new Todo(
    Title.value.trim().toLowerCase(),
    description.value,
    priority.value,
    deadline.value
  );

  let old_todo_index = User_details.todoList.findIndex(
    (el) => el.title === old_title
  );
  User_details.todoList[old_todo_index] = editedTodo;

  user_list[index_of_the_user_obj] = User_details;
  localStorage.setItem(
    "userList",
    JSON.stringify(user_list)
  );
  applyFilters(User_details.todolist);
  close_btn_func();
});

export const toggleCompleted = (title) => {
  const index = User_details.todoList.findIndex(
    (el) => el.title === title
  );

  User_details.todoList[index].completed =
    !User_details.todoList[index].completed;
  user_list[index_of_the_user_obj] = User_details;
  localStorage.setItem(
    "userList",
    JSON.stringify(user_list)
  );
  applyFilters(User_details.todolist);
};