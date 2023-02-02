const login = document.getElementById("login");
const form = document.querySelector("form");
const input = document.querySelector("input");
const todolist = document.querySelector("#todolist");

login.children[3].addEventListener("click", (e) => {
    if (login.children[1].value === "admin" && login.children[2].value === "admin") {
        window.location.href = "main.html";
    }
    else {
        alert("Maaf, username atau password Anda tidak tepat.")
    }
})

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

todolist.addEventListener("click", handleDelete);
todolist.addEventListener("click", handleCheck);
completedlist.addEventListener("click", handleDelete);
completedlist.addEventListener("click", handleCheck);
