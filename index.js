const q1answer = document.querySelector(".q1-ans");
const q2answer = document.querySelector(".q2-ans");
const q3answer = document.querySelector(".q3-ans");
const q4answer = document.querySelector(".q4-ans");
const q5answer = document.querySelector(".q5-ans");
const button1 = document.querySelectorAll(".b1");
const button2 = document.querySelectorAll(".b2");
const button3 = document.querySelectorAll(".b3");
const button4 = document.querySelectorAll(".b4");
const button5 = document.querySelectorAll(".b5");
const question1 = document.getElementsByClassName("q1");

q1answer.classList.add("hide");
q2answer.classList.add("hide");
q3answer.classList.add("hide");
q4answer.classList.add("hide");
q5answer.classList.add("hide");

const change1 = () => {
  if (q1answer.classList.contains("hide")) {
    q1answer.classList.remove("hide");
    
  } else {
    q1answer.classList.add("hide");
  }
};

button1.forEach((button) => button.addEventListener("click", change1));

const change2 = () => {
  if (q2answer.classList.contains("hide")) {
    q2answer.classList.remove("hide");
  } else {
    q2answer.classList.add("hide");
  }
};

button2.forEach((button) => button.addEventListener("click", change2));

const change3 = () => {
  if (q3answer.classList.contains("hide")) {
    q3answer.classList.remove("hide");
  } else {
    q3answer.classList.add("hide");
  }
};

button3.forEach((button) => button.addEventListener("click", change3));

const change4 = () => {
  if (q4answer.classList.contains("hide")) {
    q4answer.classList.remove("hide");
  } else {
    q4answer.classList.add("hide");
  }
};

button4.forEach((button) => button.addEventListener("click", change4));

const change5 = () => {
  if (q5answer.classList.contains("hide")) {
    q5answer.classList.remove("hide");
  } else {
    q5answer.classList.add("hide");
  }
};

button5.forEach((button) => button.addEventListener("click", change5));
