// responsive logic and the bar logic

let navpart2 = document.querySelector(".nav-part2");
let bar = document.querySelector(".test");
let checknav = document.querySelector(".check-nav");
bar.addEventListener("click", () => {
  checknav.classList.toggle("check-nav");
});

// quiz information
let quiz = [
  {
    question: "Q1:Which of the following best describes a pointer in C?",
    a: " A data type used to store character values.",
    b: "A keyword used to define a function.",
    c: "A loop used to iterate through arrays.",
    d: "A variable that stores the address of another variable.",
    ans: "ans4",
  },
  {
    question: "Q2:What is the purpose of the 'sizeof' operator in C?",
    a: " To return the memory address of a variable.",
    b: "To perform arithmetic operations.",
    c: "To compare two variables for equality.",
    d: "To return the size of a data type in bytes.",
    ans: "ans4",
  },
  {
    question: "Q3: What is the role of the 'malloc' function in C?",
    a: "To deallocate memory",
    b: " To allocate memory during program execution.",
    c: " To read data from a file",
    d: " To execute a block of code repeatedly.",
    ans: "ans2",
  },
  {
    question: "Q4: What is the purpose of the 'break' statement in C??",
    a: "To terminate a loop or a switch statement.",
    b: " To define a new function.",
    c: "To skip the current iteration of a loop.",
    d: " To print output to the console.",
    ans: "ans1",
  },
];

// quiz logic

let questionmcq = document.querySelector(".question-mcq");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let submit = document.getElementById("button");
let answer = document.querySelectorAll(".answer");
let number = document.querySelector(".question-number");
let mcqscore = 0;
let count = 0;
let numbers = 1;
let accuracyquiz;
let percenquiz;

function loadquestion() {
  let questionlist = quiz[count];
  questionmcq.innerText = questionlist.question;
  option1.innerText = questionlist.a;
  option2.innerText = questionlist.b;
  option3.innerText = questionlist.c;
  option4.innerText = questionlist.d;
  number.innerText = numbers;
}
loadquestion();

function getanswer() {
  let answers;
  answer.forEach((chq) => {
    if (chq.checked) {
      answers = chq.id;
    }
  });
  return answers;
}
submit.addEventListener("click", () => {
  let checkedanswer = getanswer();

  if (checkedanswer === quiz[count].ans) {
    mcqscore++;
  }
  count++;
  numbers++;

  if (count < quiz.length) {
    loadquestion();
  }

  if (count == quiz.length) {
    accuracyquiz = (mcqscore / 4) * 100;
  }
});

let min = 0;
let sec = 0;
let counts = 0;
let time = false;
function start() {
  time = true;

  stopwatch();
}
function stoping() {
  time = false;
  if (min < 1 && sec < 60) {
    console.log(sec);
  } else {
    console.log(min);
    console.log(sec);
  }
}
function stopwatch() {
  if (time == true) {
    counts = counts + 1;
    if (counts == 100) {
      sec = sec + 1;
      document.querySelector("#second").innerText = sec;
      counts = 0;
      if (sec == 60) {
        min = min + 1;
        document.querySelector("#minute").innerText = min;
        sec = 0;
      }
    }
    setTimeout("stopwatch()", 10);
  }
}
const questions = [
  {
    questions: " Java is an object-oriented programming language..",
    answer: true,
  },

  {
    questions: "The 'double' data type in Java is a 64-bit floating-point..",
    answer: true,
  },
  {
    questions: "Java allows the use of pointers.",
    answer: false,
  },
  {
    questions:
      "The 'this' keyword in Java refers to the current instance of the class.",
    answer: true,
  },
  {
    questions:
      " Java allows the use of multiple 'catch' blocks for a single 'try' block.",
    answer: true,
  },
  {
    questions:
      "The 'finalize' method is used to perform final operations on an object before it is removed from memory.",
    answer: true,
  },

  {
    questions:
      " The 'transient' keyword in Java is used to prevent a variable from being serialized.",
    answer: true,
  },
];

// You can now use this array of questions for quizzes or assessments.

let currentQuestion = 0;
let checkNumber = 1;
let quizscoretrfa = 0;
let accutfscore;
let finalscore;

function displayQuestion() {
  const questionElement = document.getElementById("question-t-f");
  let quesnumber = document.querySelector(".upd-num");
  quesnumber.innerText = checkNumber;
  questionElement.textContent = questions[currentQuestion].questions;
}
displayQuestion();

function checkAnswer(userAnswer) {
  if (userAnswer === questions[currentQuestion].answer) {
    quizscoretrfa++;
  }
  currentQuestion++;
  checkNumber++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  }
  if (currentQuestion == questions.length) {
    accutfscore = (quizscoretrfa / 7) * 100;
    finalscore = accutfscore.toFixed(1);
  }
}

//flash card logic

function applyShakeEffect() {
  flashdiv.classList.add("shake");
  flashdiv.classList.add("background-change");
  setTimeout(() => {
    flashdiv.classList.remove("shake");
    flashdiv.classList.remove("background-change");
  }, 1000);
}
let class1, class2, class3, class4, class5, class6, class7, class8;
let div1 = document.getElementById("one");
let div2 = document.getElementById("two");
let div3 = document.getElementById("three");
let div4 = document.getElementById("four");
let flashques = document.querySelector(".flash-question-text");
let flashdiv = document.getElementById("flash-question");

div1.addEventListener("click", function () {
  class1 = this.className;
  flashques.innerText = div1.innerText;
});

div2.addEventListener("click", function () {
  class2 = this.className;
  flashques.innerText = div2.innerText;
});
div3.addEventListener("click", function () {
  class3 = this.className;
  flashques.innerText = div3.innerText;
});
div4.addEventListener("click", function () {
  class4 = this.className;
  flashques.innerText = div4.innerText;
});

let div5 = document.getElementById("five");
let div6 = document.getElementById("six");
let div7 = document.getElementById("seven");
let div8 = document.getElementById("eight");
div5.addEventListener("click", function () {
  class5 = this.className;
  if (class1 == class5) {
    div5.style.display = "none";
    div1.style.display = "none";
  } else {
    class6 = "";
    class7 = "";
    class8 = "";
    applyShakeEffect();
  }
});
div6.addEventListener("click", function () {
  class6 = this.className;
  if (class2 == class6) {
    div2.style.display = "none";
    div6.style.display = "none";
  } else {
    class5 = "";
    class7 = "";
    class8 = "";
    applyShakeEffect();
  }
});
div7.addEventListener("click", function () {
  class7 = this.className;
  if (class3 == class7) {
    div3.style.display = "none";
    div7.style.display = "none";
  } else {
    class5 = "";
    class6 = "";
    class8 = "";
    applyShakeEffect();
  }
});
div8.addEventListener("click", function () {
  class8 = this.className;
  if (class4 == class8) {
    div4.style.display = "none";
    div8.style.display = "none";
  } else {
    class5 = "";
    class6 = "";
    class7 = "";
    applyShakeEffect();
  }
});

let allquiz = document.querySelector(".all-quiz");
let finalsubmit = document.querySelector(".final-submit");
let chart = document.querySelector(".chart");
let resultmcqscore = document.querySelector(".score-quiz-result");
let accuracyquizresult = document.querySelector(".acc-quiz-result");
let resulttfinner = document.querySelector(".score-quiz-result-t-f");
let charttorfalse = document.querySelector(".chart-t-f");
let resulttfscore = document.querySelector(".score-quiz-result-t-f");
let acctruefalse = document.querySelector(".acc-quiz-t-f");
let allquizresult = document.querySelector(".result-of-quiz");

finalsubmit.addEventListener("click", () => {
  allquiz.style.display = "none";
  allquizresult.style.display = "block";
  console.log(accuracyquiz);
  let angle = (accuracyquiz / 100) * 360;
  chart.style.background = `conic-gradient(rgb(8, 203, 8) ${angle}deg, red 0deg 360deg)`;
  resultmcqscore.innerText = mcqscore;
  accuracyquizresult.innerText = accuracyquiz + `%`;

  let agletf = (accutfscore / 100) * 360;
  charttorfalse.style.background = `conic-gradient(rgb(8, 203, 8) ${agletf}deg, red 0deg 360deg)`;
  resulttfinner.innerText = quizscoretrfa;
  acctruefalse.innerText = finalscore + `%`;

  let time = document.querySelector(".time");
  if (min) {
    time.innerText = min + ":" + sec + "sec";
  } else {
    time.innerText = sec + `sec`;
  }
});
