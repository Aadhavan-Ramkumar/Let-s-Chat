var firebaseConfig = {
      apiKey: "AIzaSyA0SGmW3tQaTQA8pAxPwwqqUSUuYFrSBpI",
      authDomain: "let-s-chat-f65b3.firebaseapp.com",
      databaseURL: "https://let-s-chat-f65b3-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-f65b3",
      storageBucket: "let-s-chat-f65b3.appspot.com",
      messagingSenderId: "932305837996",
      appId: "1:932305837996:web:17684362e2a4f67b15e409"
};
firebase.initializeApp(firebaseConfig);

Username = localStorage.getItem("Username");
document.getElementById("Hello").innerHTML = "Hi " + Username + "!";

function AddRoom() {
      RoomName = document.getElementById("Room").value;
      firebase.database().ref("/" + RoomName).child(RoomName).update({
            purpose: "Add User"
      });
      localStorage.setItem("RoomName", RoomName);
      window.location = "page.html";
}

window.addEventListener("keydown", MyKeyDown);

function MyKeyDown(e) {
      KeyPressed = e.keyCode;
      console.log(KeyPressed);
      if (KeyPressed == '13') {
            AddRoom();
      }
      if (e.ctrlKey == true && e.altKey == true && KeyPressed == '76') {
            LogOut();
      }
      if (e.ctrlKey == true && e.altKey == true && KeyPressed == '49') {
            RedirectToRoom(RoomIndex[0]);
      }
      if (e.ctrlKey == true && e.altKey == true && KeyPressed == '50') {
            RedirectToRoom(RoomIndex[1]);
      }
      if (e.ctrlKey == true && e.altKey == true && KeyPressed == '51') {
            RedirectToRoom(RoomIndex[2]);
      }
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("Output").innerHTML = "";
            RoomIndex = [];
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Rooms = childKey;
                  console.log("Room " + Rooms);
                  RoomIndex.push(Rooms);
                  Row = "<div class='roomname' id='" + Rooms + "'onclick='RedirectToRoom(this.id)'>#" + Rooms + "</div><hr>";
                  document.getElementById("Output").innerHTML += Row;
            });
      });
}
getData();

function RedirectToRoom(Name) {
      console.log(Name);
      localStorage.setItem("RoomName", Name);
      window.location = "page.html";
}

function LogOut() {
      localStorage.removeItem("Username");
      localStorage.removeItem("RoomName");
      window.location = "index.html";
}