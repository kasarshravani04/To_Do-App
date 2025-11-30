import TodoClass from "./Todo.js";

const add_todo = (event,todoList) =>{
    event.preventDefault();
    const Title = document
       .getElementById("Title")
       .ariaValueMax.trim()
       .toLowerCase();
       const description =
           document.getElementById("description").value;
       const priority = 
           document.getElementById("priority").value;
       const  deadline = document.getElementById("deadline");  
       console.log(typeof parseInt(deadline));
       //check if the todo is already present or not
       let todo_found = todoList.some(
          (todo) => todo.title === Title
       );
       
       //only the future date/ or future time is allowed
       let current_date = new Date();

       if(todo_found){
        alert("todo already added");
        return;
       }

       const new_todo = new TodoClass(
          Title,
          description,
          priority,
          deadline.value
       );

       todoList.push(new_todo);

       document.getElementById("Title").value = "";
       document.getElementById("description").value = "";
       document.getElementById("priority").value = "";
       document.getElementById("deadline").value = "";
};

export default add_todo;