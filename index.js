const form = document.querySelector("form");
const input = document.querySelector("input");
const todolist = document.querySelector("#todolist");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!input.value) return;

    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox"/>
      <span>${input.value}</span>
      <button>Delete</button>
    `;

    todolist.insertBefore(li, todolist.firstChild);
    input.value = "";
    console.log(input.value)
});

function handleDelete(e) {
    if (!e.target.matches("button")) return;
    e.target.parentElement.remove();
}

function handleCheck(e) {
    if (!e.target.matches("input[type='checkbox']")) return;
    const li = e.target.parentElement;
    if (e.target.checked) {
        completedlist.insertBefore(li, completedlist.firstChild);
    } else {
        todolist.insertBefore(li, todolist.firstChild);
    }
}

function handleUpdate(e) {
    if (!e.target.matches("span")) return;
    const text = e.target.textContent;
    const updatedText = prompt("Update the item:", text);
    if (updatedText) {
        e.target.textContent = updatedText;
    }
}

todolist.addEventListener("click", handleDelete);
todolist.addEventListener("click", handleCheck);
todolist.addEventListener("click", handleUpdate);
completedlist.addEventListener("click", handleDelete);
completedlist.addEventListener("click", handleCheck);
completedlist.addEventListener("click", handleUpdate);
