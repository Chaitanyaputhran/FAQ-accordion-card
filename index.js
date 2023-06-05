const q1=document.querySelector(".q1");
const q2=document.querySelector(".q2");
const q3=document.querySelector(".q3");
const q4=document.querySelector(".q4");
const q5=document.querySelector(".q5");
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
q1answer.classList.add("hide");
q2answer.classList.add("hide");
q3answer.classList.add("hide");
q4answer.classList.add("hide");
q5answer.classList.add("hide");


const change1 = () => {
  if (q1answer.classList.contains("hide")) {
    q1answer.classList.remove("hide");
    q1.classList.add("active");
    
  }
  else{
  q1answer.classList.add("hide");
  q1.classList.remove("active"); 

  }
};

button1.forEach((button) => button.addEventListener("click", change1));

const change2 = () => {
  if (q2answer.classList.contains("hide")) {
    q2answer.classList.remove("hide");
    q2.classList.add("active");
  } else {
    q2answer.classList.add("hide");
    q2.classList.remove("active");
  }
};

button2.forEach((button) => button.addEventListener("click", change2));

const change3 = () => {
  if (q3answer.classList.contains("hide")) {
    q3answer.classList.remove("hide");
    q3.classList.add("active");
  } else {
    q3answer.classList.add("hide");
    q3.classList.remove("active");
  }
};

button3.forEach((button) => button.addEventListener("click", change3));

const change4 = () => {
  if (q4answer.classList.contains("hide")) {
    q4answer.classList.remove("hide");
    q4.classList.add("active");
  } else {
    q4answer.classList.add("hide");
    q4.classList.remove("active");
  }
};

button4.forEach((button) => button.addEventListener("click", change4));

const change5 = () => {
  if (q5answer.classList.contains("hide")) {
    q5answer.classList.remove("hide");
    q5.classList.add("active");
  } else {
    q5answer.classList.add("hide");
    q5.classList.remove("active");
  }
};

button5.forEach((button) => button.addEventListener("click", change5));
