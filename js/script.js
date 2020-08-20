// question 1
const bgBtn = document.querySelector("#bg");

bgBtn.onclick = function () {
  document.body.style.backgroundColor = "#265d47";
}

// question 2
const togglerBtn = document.querySelector(".toggler");
const togglee = document.querySelector(".togglee");

togglerBtn.onclick = function () {
  togglee.classList.toggle("extra");
  
}

// question 3
const select = document.querySelector("select");
const paragraphs = document.querySelector(".paragraphs-container");

select.onchange = function () {
  const value = this.value;
  paragraphs.innerHTML = "";
  
  for (i = 0; i < value; i++) {
    paragraphs.innerHTML+= '<p class="content">I am some content</p>'
  }

}