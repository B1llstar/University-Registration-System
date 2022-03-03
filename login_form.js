window.onload = function () {
  function login() {
    axios
      .post("http://localhost:5505/login", {
        username: loginUsernameSelection,
        password: loginPasswordSelection,
        userType: loginUserTypeSelection,
      })
      .then(
        (response) => {
          console.log(response);
          console.log(response.data.validated);
        },
        (error) => {
          console.log(error);
        }
      );

    var loginUserTypeSelection = document.getElementById("loginUserTypeChoice");
    var loginUsernameSelection = document.getElementById("loginEmail");
    var loginPasswordSelection = document.getElementById("loginPassword");
    console.log(loginUserTypeSelection.value);
    console.log(loginUsernameSelection.value);
    console.log(loginPasswordSelection.value);
  }

  console.log("Loaded!");
  const ele = document.getElementById("login-submit");

  var form = document.getElementById("login-form");
  function handleForm(event) {
    event.preventDefault();
  }

  form.addEventListener("submit", handleForm);

  if (ele.addEventListener) ele.addEventListener("click", login, false);
  // Otherwise, just use the standard onClick event
  else if (el.attachEvent) ele.attachEvent("onClick", login);

  axios
    .post("/login", {
      firstName: "Fred",
      lastName: "Flintstone",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// If the browser lets us add events, make our own
// custom click event
