// Get the Sign-up Modal
///////////////////////////////////////////////////////////////////
var signup_modal = document.querySelector("#myModal-signup");

// Get the button that opens the modal
var signup_btn = document.querySelector("#sign-up");

// Get the <span> element that closes the modal
var signup_close = document.querySelector("#signup-close");

// When the user clicks the button, open the modal
signup_btn.onclick = function () {
  signup_modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
signup_close.onclick = function () {
  signup_modal.style.display = "none";
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

////////////////////////////////////////////////////////////////////

// When the user clicks anywhere outside of any modal, close it
window.onclick = function (event) {
  if (event.target == signinmodal) {
    signinmodal.style.display = "none";
  }
  if (event.target == signup_modal) {
    signup_modal.style.display = "none";
  }
};
////////////////////////////////////////////////////////////////////
const label = document.createElement("label");
// sign up data sending to server
const signup_name = document.querySelector("#p1-name");
const signup_username = document.querySelector("#p1-username");
const email = document.querySelector("#p1-email");
const dob = document.querySelector("#p1-dob");
const signup_password = document.querySelector("#p1-password");
const signup = document.querySelector("#sign-up-btn");
const php_signup = "http://localhost/Backend/signup.php";
let php_login = "http://localhost/Backend/login.php";

signup.addEventListener("click", () => {
  fetch(php_login, {
    method: "POST",
    body: new URLSearchParams({
      user_name: signup_username.value,
      user_password: "",
    }),
  })
    .then((x) => x.json())
    .then((y) => {
      if (!y.ispresent) {
        fetch(php_signup, {
          method: "POST",
          body: new URLSearchParams({
            full_name: signup_name.value,
            user_name: signup_username.value,
            email: email.value,
            dob: dob.value,
            user_password: signup_password.value,
          }),
        });
        signup_modal.style.display = "none";
        signinmodal.style.display = "block";
      } else {
        const signup_username_label = signup_username.insertAdjacentElement(
          "afterend",
          label
        );
        signup_username_label.textContent = "Username exists";
      }
    });
});

// This is the logIn section, checking if the data is in the server

const logIn = document.querySelector("#log-in");
const user = document.querySelector("#p2-username");
const password = document.querySelector("#p2-password");

logIn.addEventListener("click", function () {
  fetch(php_login, {
    method: "POST",
    body: new URLSearchParams({
      user_name: user.value,
      user_password: password.value,
    }),
  })
    .then((x) => x.json())
    .then((y) => {
      if (!y.ispresent) {
        username_label = user.insertAdjacentElement("afterend", label);
        username_label.textContent = "Username doesn't exist";
      } else {
        password_label = password.insertAdjacentElement("afterend", label);
        if (!y.pass_valid) {
          password_label.textContent = "Password is invalid";
        } else {
          window.location.href = "/Frontend/home-page/homepage.html";
          password_label.textContent = "WELCOME";
          localStorage.setItem("active-user", JSON.stringify(user.value));
        }
      }
    });
});

// making the log-in glow

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

// changing to sign up from log in
newaccount = document.querySelector("#newaccount");
newaccount.addEventListener("click", () => {
  signup_modal.style.display = "block";
  signinmodal.style.display = "none";
});
