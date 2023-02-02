const login = document.getElementById("login");

login.children[3].addEventListener("click", (e) => {
    if (login.children[1].value === "admin" && login.children[2].value === "admin") {
        window.location.href = "main.html";
    }
    else {
        alert("Maaf, username atau password Anda tidak tepat.")
    }
})
