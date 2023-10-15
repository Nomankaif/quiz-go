let navpart2 = document.querySelector(".nav-part2");
let bar = document.querySelector(".test");
let checknav = document.querySelector(".check-nav");
bar.addEventListener("click", () => {
  checknav.classList.toggle("check-nav");
});
const search = () => {
  let searchtext = document.querySelector(".search-box").value.toUpperCase();
  let quizbox = document.querySelector(".quiz-template");
  let quiztext = quizbox.querySelectorAll("div");
  for (let i = 0; i < quiztext.length; i++) {
    let head = quiztext[i].getElementsByTagName("p")[0];
    if (head) {
      let headvalue = head.textContent || head.innerText;
      if (headvalue.toLocaleUpperCase().indexOf(searchtext) > -1) {
        quiztext[i].style.display = "";
      } else {
        quiztext[i].style.display = "none";
      }
    }
  }
};
