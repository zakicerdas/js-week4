document.addEventListener("DOMContentLoaded", () => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((item) => tampilkanTodo(item));
});

function tambahTodo() {
  const input = document.getElementById("todoInput");
  const value = input.value.trim();
  const priority = document.getElementById("prioritySelect").value;
  const deadline = document.getElementById("inputDeadline").value;

  if (!value) return alert("Silahkan isi todo!");
  if (!priority) return alert("Silahkan pilih prioritas!");
  if (!deadline) return alert("Tolong isi deadlinenya!");

  const obj = { text: value, priority, deadline };
  tampilkanTodo(obj);
  simpanTodo(obj);

  input.value = "";
  document.getElementById("inputDeadline").value = "";
  document.getElementById("prioritySelect").value = "";
}

function tampilkanTodo(todo) {
  const list = document.getElementById("todoList");

  const item = document.createElement("li");
  item.classList.add(todo.priority);

  const info = document.createElement("div");
  info.classList.add("info");
  info.innerHTML = `<strong>${todo.text}</strong>
                    <span class="deadline">Deadline: ${todo.deadline}</span>`;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Hapus";
  deleteButton.classList.add("delete-btn");
  deleteButton.onclick = function () {
    list.removeChild(item);
    hapusTodo(todo);
  };

  item.appendChild(info);
  item.appendChild(deleteButton);
  list.appendChild(item);
}

function simpanTodo(todo) {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function hapusTodo(todo) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos = todos.filter(
    (item) =>
      !(item.text === todo.text &&
        item.priority === todo.priority &&
        item.deadline === todo.deadline)
  );
  localStorage.setItem("todos", JSON.stringify(todos));
}
