let a = true;
let hght = "130px";
const form = document.getElementById("authentication")
const name = document.getElementById("auth_name")
const cros = document.getElementById("cross")
const nav = document.getElementById("nav")
const auth = document.getElementById("auth")
const search = document.getElementById("search")
const extender = document.getElementById("drop")
const caret = document.getElementById("caret");
function dropdown() {
  if (a) {
    document.getElementById("that").style.display = "block";
    caret.classList.remove("fa-caret-down")
    caret.classList.add("fa-caret-up")
    a = false;
  } else {
    document.getElementById("that").style.display = "none";
    caret.classList.add("fa-caret-down")
    caret.classList.remove("fa-caret-up")
    a = true
  }
}
function deep() {
  console.log(nav.style.height);
  if (nav.style.height == hght) {
    nav.style.height = "60px";
    caret.classList.add("fa-caret-up");
    caret.classList.remove("fa-caret-down");
    auth.style.display = "none";
    search.style.display = "none";
  } else {
    console.log("Deep");
    caret.classList.add("fa-caret-down");
    caret.classList.remove("fa-caret-up");
    nav.style.height = hght;
    auth.style.display = "block";
    search.style.display = "block";

  }
}
function login() {
  form.style.display = "block";
  auth_name.innerText = "Login Form";
}
function signup() {
  form.style.display = "block";
  auth_name.innerText = "Signup Form";
}
function cross() {
  form.style.display = "none";
}
