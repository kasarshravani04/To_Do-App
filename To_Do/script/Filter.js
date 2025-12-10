import renderTodo from "./RenderTodo.js";

const priority_filter = document.getElementById(
  "priority_filter"
);
const status_filter =
  document.getElementById("status_filter");
const search_filter =
  document.getElementById("search_filter");

function applyFilters(User_details) {
  console.log(User_details);
  let filtered = User_details;

  if (priority_filter.value !== "") {
    filtered = filtered.filter(
      (todo) => todo.priority === priority_filter.value
    );
  }
  if (status_filter.value === "completed") {
    filtered = filtered.filter(
      (todo) => todo.completed === true
    );
  }
  if (status_filter.value === "pending") {
    filtered = filtered.filter(
      (todo) => todo.completed === false
    );
  }

  if (search_filter.value.trim() !== ""){
    const keyword = search_filter.value
    .trim()
    .toLowerCase();
    filtered = filtered.filter((todo) =>
        todo.title.toLowerCase().includes(keyword)
    );
  }

  renderTodo(filtered);
}

export default applyFilters;