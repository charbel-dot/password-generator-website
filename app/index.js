const btn = document.querySelector(".button");
const copy_btn = document.querySelector(".copy-btn");
let password_field = document.querySelector(".password-field");
let password = document.querySelector(".password-length");

let upper = "ABCDEFGHIJLKMNOPQRTUVWXYZ";
let lower = upper.toLowerCase();
let numbers = "0123456789";
let symbols = "~!@#$%^&*(){}[]|;:<>?";

let all = upper + lower + numbers + symbols;
let password_length = parseInt(password.value);

btn.addEventListener("click", () => {
  copy_btn.innerText = "copy";
  password_field.innerText = generate(all);
});

copy_btn.addEventListener("click", () => {
  if (password_field.innerHTML !== "") {
    navigator.clipboard.writeText(password_field.innerHTML);
    copy_btn.innerText = "copied";
  } else {
    password_field.placeholder = "Please provide a password length (integer)!";
  }
});

const generate = (all) => {
  let password_length = parseInt(password.value);
  if (password_length <= 0) {
    password_field.placeholder = "Please enter a positive number!";
  } else if (password_length !== parseInt("")) {
    password_field.placeholder = "Please provide a password length (integer)!";
  }

  let string = "";
  for (let i = 0; i < password_length; i++) {
    string += all[Math.floor(Math.random() * all.length)];
  }
  return string;
};
