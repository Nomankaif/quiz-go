let navpart2 = document.querySelector(".nav-part2");
let bar = document.querySelector(".test");
let checknav = document.querySelector(".check-nav");
bar.addEventListener("click", () => {
  checknav.classList.toggle("check-nav");
});
// java logic mcq

let quiz = [
  {
    question: "Q1:What is the purpose of the 'final' keyword in Java?? ",
    a: "It is used to prevent a class from being inherited.",
    b: " It is used to define a method in an interface.",
    c: " It is used to handle runtime exceptions.",
    d: " It is used to declare a constant variable.",
    ans: "ans4",
  },
  {
    question:
      "Q2:What is the key difference between an abstract class and an interface in Java?",
    a: "An abstract class can have constructors, while an interface cannot.",
    b: "An abstract class can be instantiated, while an interface cannot.",
    c: "An abstract class can implement multiple interfaces, while an interface cannot extend a class.",
    d: "An abstract class can have both abstract and concrete methods, while an interface can only have abstract methods.",
    ans: "ans4",
  },
  {
    question:
      "Q3: What is the role of the 'try', 'catch', and 'finally' blocks in Java exception handling?",
    a: "'try' is used for loops, 'catch' is used for conditional statements, and 'finally' is used for method declarations.",
    b: "'try' is used for regular code, 'catch' is used to handle exceptions, and 'finally' is used to clean up resources.",
    c: " 'try' is used for file I/O operations, 'catch' is used for networking, and 'finally' is used for database operations.",
    d: "'try' is used for method declarations, 'catch' is used for variable declarations, and 'finally' is used for object instantiations.",
    ans: "ans2",
  },
  {
    question: "Q4: What is the purpose of the 'static' keyword in Java?",
    a: " It is used to define constants.",
    b: " It is used to create instances of a class.",
    c: " It is used to override methods in a subclass.",
    d: "It is used to allocate memory to objects.",
    ans: "ans1",
  },
];

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

// true false logic

const questions = [
  {
    questions:
      " In Java, the 'super' keyword is used to refer to the superclass of a subclass.",
    answer: true,
  },

  {
    questions: " Java allows the use of multiple inheritance.",
    answer: false,
  },
  {
    questions:
      " Java supports automatic memory management through a process known as garbage collection.",
    answer: true,
  },
  {
    questions: "The 'String' class in Java is mutable.",
    answer: false,
  },
  {
    questions:
      "Java does not support the implementation of user-defined exceptions.",
    answer: false,
  },
  {
    questions:
      " The 'compareTo' method is used for comparing the equality of two objects in Java.",
    answer: false,
  },

  {
    questions:
      "The `setTimeout` executes a function  after a specified amount of time has passed.",
    answer: true,
  },
];

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
