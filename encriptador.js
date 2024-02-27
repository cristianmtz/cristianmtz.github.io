/*Global Variables*/

let encryptButton = document.getElementById("encryptButton");
let decryptButton = document.getElementById("decryptButton");
let copyButton = document.getElementById("copy");
let image = document.getElementById("initialMessage");

/*Encrypt and Decrypt funcions*/

const encrypt = (text) => {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
};

const decrypt = (data) => {
  return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
};

function clearTextareas(name) {
  document.getElementById(name).value = "";
}

function encryptMessage() {
  let textareaInput = document.getElementById("userInput").value;
  console.log(textareaInput);
  if (textareaInput == "") {
    alert("No hay texto para encriptar");
  } else {
    var encryptText = encrypt(textareaInput);
    document.getElementById("userOutput").value = encryptText;
    clearTextareas("userInput");
  }
}

function decryptMessage() {
  let textareaInput = document.getElementById("userInput").value;
  if (textareaInput == "") {
    alert("No hay texto para desencriptar");
  } else {
    var decryptText = decrypt(textareaInput);
    document.getElementById("userOutput").value = decryptText;
    clearTextareas("userInput");
  }
}

function copyText() {
  let copyText = document.getElementById("userOutput");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  alert("Texto copiado.");
}

document.getElementById("userInput").addEventListener("input", function (e) {
  if (e.target.value !== "") {
    image.hidden = true;
    copyButton.hidden = false;
  } else {
    image.hidden = false;
    copyButton.hidden = true;
  }
});

copyButton.onclick = copyText;
encryptButton.onclick = encryptMessage;
decryptButton.onclick = decryptMessage;
