import{
    deletTodo,
    editTodo,
    toggleCompleted,
} from "./crudOperation.js";

function renderTodo(todoList){
    const todo_container =
        document.getElementById("todoboard");
    const todo_card = document.getElementById("todo_card");

    if (todoList.length > 0){
        todo_container.innerHTML = "";

        todoList.forEach((todo) =>{
         const clone = todo_card.contentEditable.cloneNode(true);

         const title = clone.querySelector("h4");
         
         title.innerText = todo.title;
         const deadline = clone.querySelector("span");
         deadline.innerText = todo.deadline;
         clone
           .querySelector(".del_todo")
           .addEventListener("click",()=>{
             deletTodo(todo.title , todoList);
           });
        clone
          .querySelector("#edit_button")
          .addEventListener("click", () =>{
             editTodo(todo);
          });

        const checkbox = clone.querySelector(
            ".complete_checkbox"
        );

        checkbox.checked = todo.Completed;

        checkbox.addEventListener("change",() =>{
            toggleCompleted(todo.title);
        });

        todo_container.appendChild(clone);
        });
    }else{
        todo_container.innerHTML = `<p> No data found! Add Some </p>`
    }
}

export default renderTodo;