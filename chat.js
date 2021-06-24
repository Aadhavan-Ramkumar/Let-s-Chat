function AddUser() {
    Username = document.getElementById("Username").value;
    console.log(Username);
    localStorage.setItem("Username", Username);
    window.location = "room.html";
}

window.addEventListener("keydown", MyKeyDown);

function MyKeyDown(e) {
    KeyPressed = e.keyCode;
    console.log(KeyPressed);
    if (KeyPressed == '13') {
        AddUser();
    }
}