let btn = document.querySelector("#button");

btn.addEventListener("click", () => {
  document.querySelector(".password").value = "";
  let radio = document.getElementsByName("pass");
  let type;
  for (let index = 0; index < radio.length; index++) {
    if (radio[index].checked) {
      type = radio[index].id;
    }
  }
  document.querySelector(".password").value = randPass(type);
});

function randPass(type) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let num = "0123456789";
  let special = "!@#$%^&*";
  let password = "";

  if (type == "weak") {
    for (let i = 0; i < 5; i++) {
      let idx = Math.floor(Math.random() * 26);
      password += alpha[idx];
    }
    return password;
  } else if (type == "strong") {
    for (let i = 0; i < 5; i++) {
      let idx = Math.floor(Math.random() * 26);
      password += alpha[idx];
    }
    for (let i = 0; i < 3; i++) {
      let idx = Math.floor(Math.random() * 10);
      password += num[idx];
    }
    return password;
  } else {
    for (let i = 0; i < 5; i++) {
      let idx = Math.floor(Math.random() * 26);
      password += alpha[idx];
    }
    for (let i = 0; i < 3; i++) {
      let idx = Math.floor(Math.random() * 10);
      password += num[idx];
    }
    for (let i = 0; i < 2; i++) {
      let idx = Math.floor(Math.random() * 8);
      password += special[idx];
    }
    return password;
  }
}
