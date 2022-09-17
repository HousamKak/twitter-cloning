// Get the modal
var modal = document.querySelector("#myModal");

// Get the button that opens the modal
var btn = document.querySelector("#sign-in");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("lprccmmch-close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const logIn = document.querySelector("#log-in");
let mylocalmachine="http://localhost/twitter-cloning/backend/login.php";
fetch(mylocalmachine)
  .then((x) => x.json())
  .then((y) => trial(y));

function trial(y, logIn) {
  for (i = 0; i < y.length; i++) {
    console.log(logIn.value == y.user_name);
  }
}
