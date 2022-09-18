// Get the Sign-up Modal
///////////////////////////////////////////////////////////////////
var signupmodal = document.querySelector("#myModal-signup");

// Get the button that opens the modal
var signupbtn = document.querySelector("#sign-up");

// Get the <span> element that closes the modal
var signupclose = document.querySelector("#signup-close");

// When the user clicks the button, open the modal
signupbtn.onclick = function () {
  signupmodal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
signupclose.onclick = function () {
  signupmodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == signupmodal) {
    signupmodal.style.display = "none";
  }
};
////////////////////////////////////////////////////////////////////

// Get the Sign-in Modal
///////////////////////////////////////////////////////////////////
var signinmodal = document.querySelector("#myModal-signin");

// Get the button that opens the modal
var signinbtn = document.querySelector("#sign-in");

// Get the <span> element that closes the modal
var signinclose = document.querySelector("#signin-close");

// When the user clicks the button, open the modal
signinbtn.onclick = function () {
  signinmodal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
signinclose.onclick = function () {
  signinmodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == signinmodal) {
    signinmodal.style.display = "none";
  }
};
////////////////////////////////////////////////////////////////////

// This is the logIn section
const logIn = document.querySelector("#log-in");
const user = document.querySelector("#p2-username");
const password = document.querySelector("#p2-password");
let php_login = "http://localhost/Backend/login.php";
fetch(php_login)
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

// sign up
const signup = document.querySelector("#sign-up");
let php_signup = "http://localhost/Backend/signup.php";
//
logIn.addEventListener("click", function () {
  fetch(php_signup, {
    method: "POST",
    body: new URLSearchParams({
      user_name: user.value,
      user_password: password.value,
    }),
  });
});

// making the log in glow

if (!user.value.Empty) {
  password.addEventListener("input", () => {
    logIn.style.backgroundColor = "white";
  });
} else {
  if (!password.value.Empty) {
    user.addEventListener("input", () => {
      logIn.style.backgroundColor = "white";
    });
  }
}

// localStorage.setItem("man", JSON.stringify("heowaadsd"));
// logged_in_user = localStorage.getItem("man")
//   ? JSON.parse(localStorage.getItem("man"))
//   : "";
// localStorage.removeItem("key");
