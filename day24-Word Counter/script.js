let textarea = document.querySelector("textarea");
let words = document.querySelector(".words");
let para = document.querySelector(".para");
let chars = document.querySelector(".chars");
let sent = document.querySelector(".sent");
let wordCount;
let sentCount;
let paraCount;

textarea.addEventListener("keyup", (e) => {
  chars.innerHTML = textarea.value.length;
  wordCount = textarea.value.match(/\b[(\w)]+\b/gi);
  if (wordCount) {
    words.innerHTML = wordCount.length;
  } else {
    words.innerHTML = 0;
  }
  if (wordCount) {
    sentCount = textarea.value.split(/[.|!|?]+/g);
    sent.innerHTML = sentCount.length;
  } else {
    sent.innerHTML = 0;
  }
  if (wordCount) {
    paraCount = textarea.value.replace(/\n$/gm, "").split(/\n/);
    console.log(paraCount);
    para.innerHTML = paraCount.length;
  } else {
    para.innerHTML = 0;
  }
});
