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
const user = document.querySelector("#p1-username");
const password = document.querySelector("#p1-password");
let mylocalmachine = "http://localhost/Backend/login.php";
fetch(mylocalmachine)
  .then((x) => x.json())
  .then((y) =>
    logIn.addEventListener("click", () => {
      for (i = 0; i < y.length; i++) {
        userfound = 0;
        if (user.value == y[i].user_name) {
          userfound = 1;
          if (password.value == y[i].user_password) {
            console.log("the user is verified");
          } else {
            console.log("wrong password");
          }
          break;
        }
      }
      if (!userfound) {
        console.log("You are not registered");
      }
    })
  );
