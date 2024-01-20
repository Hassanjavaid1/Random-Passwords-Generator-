let btn = document.getElementById("btn");
let input = document.getElementById("input");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const generatePassword = (length) => {
    let result = "";
    let chracters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+|;:`~<>?/&234344243";
    for (let i = 0; i < length; i++) {
      let mathNum = Math.floor(Math.random() * chracters.length);
      result += chracters.charAt(mathNum);
    }
    input.value = result;
  };
  generatePassword(12);
});
let copyMessage = document.getElementById("copyMessage");
const copyText = (e) => {
  input.select();
  input.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(input.value);
  copyMessage.style.display = "block";

  setInterval(() => {
    copyMessage.style.display = "none";
  }, 2000);
};
