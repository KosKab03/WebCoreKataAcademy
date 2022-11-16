const main = document.querySelector(".main");

const background = document.querySelectorAll('.menu-background');
const sidebar = document.querySelector(".sidebar");
const sideBackground = document.querySelector(".side-background");
const menuBtn = document.querySelectorAll(".menu-btn");

export default function visSidebar(){
  if (window.matchMedia("(min-width: 1120px").matches){
    sidebar.classList.remove('hidden-modal');
    background[0].classList.add('hidden-modal');
  }else{
    sidebar.classList.add('hidden-modal');
    background[0].classList.add('hidden-modal');
  }
};

visSidebar();

menuBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    window.scrollTo(0, 0);
    sidebar.classList.toggle('hidden-modal');
    background[0].classList.toggle('hidden-modal');
  });
});

background[0].addEventListener("click", function () {
  sidebar.classList.add("hidden-modal");
  background[0].classList.add("hidden-modal");
});

const feedbackForm = document.querySelector(".feedback-form");
const feedbackBtnClose = document.querySelector(".feedback__btn-close");
const feedbackBtnOpen = document.querySelectorAll(".feedback__btn-open");

feedbackBtnOpen.forEach(function (item) {
  item.addEventListener("click", function() {
    window.scrollTo(0, 0);
    feedbackForm.classList.remove("hidden-modal");
    background[1].classList.remove("hidden-modal");
  });
});

feedbackBtnClose.addEventListener("click", function() {
  feedbackForm.classList.add("hidden-modal");
  background[1].classList.add("hidden-modal");
});

background[1].addEventListener("click", function () {
  feedbackForm.classList.add("hidden-modal");
  background[1].classList.add("hidden-modal");
});


const feedbackCall = document.querySelector(".feedback-call");
const feedbackCallBtnClose = document.querySelector(".feedback-call__btn-close");
const callOpen = document.querySelectorAll(".call-open");

callOpen.forEach(function (item) {
  item.addEventListener("click", function() {
    window.scrollTo(0, 0);
    feedbackCall.classList.remove("hidden-modal");
    background[2].classList.remove("hidden-modal");
  });
});

feedbackCallBtnClose.addEventListener("click", function() {
  feedbackCall.classList.add("hidden-modal");
  background[2].classList.add("hidden-modal");
});

background[2].addEventListener("click", function () {
  feedbackCall.classList.add("hidden-modal");
  background[2].classList.add("hidden-modal");
});
