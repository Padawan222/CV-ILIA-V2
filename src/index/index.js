import "../assets/styles/style.scss";
import "../index/index.scss";

// tel

const tel1 = document.querySelector(".telephone");
const tel2 = document.querySelector(".fa-phone");
const tel3 = document.querySelector(".telephone-num");

tel1.addEventListener("mouseover", () => {
  tel2.classList.add("fa-phone-active");
  tel3.classList.add("telephone-num-active");
});
tel1.addEventListener("mouseout", () => {
  tel2.classList.remove("fa-phone-active");
  tel3.classList.remove("telephone-num-active");
});

// mail
const mail = document.querySelector(".mail");
const mailAnim = document.querySelector(".mail-anim");
const env = document.querySelector(".fa-envelope");
const envOpen = document.querySelector(".fa-envelope-open");

mail.addEventListener("mouseover", () => {
  envOpen.classList.add("fa-envelope-open-active");
  env.classList.add("fa-envelope-active");
  mailAnim.classList.add("mail-anim-active");
});
mail.addEventListener("mouseout", () => {
  envOpen.classList.remove("fa-envelope-open-active");
  env.classList.remove("fa-envelope-active");
  mailAnim.classList.remove("mail-anim-active");
});

// btn

const btn = document.querySelector(".btn-xs");
const bar1 = document.querySelector(".bar-1");
const bar2 = document.querySelector(".bar-2");
const bar3 = document.querySelector(".bar-3");
const infoBar = document.querySelector(".info-bar");
const containerGeneral = document.querySelector(".container-general");

btn.addEventListener("click", () => {
  if (bar1.classList.contains("bar-1-active-1")) {
    bar1.classList.remove("bar-1-active-2");
    bar3.classList.remove("bar-3-active-2");
    infoBar.classList.remove("info-bar-active");
    setTimeout(() => {
      bar1.classList.remove("bar-1-active-1");
      bar2.classList.remove("bar-2-active");
      bar3.classList.remove("bar-3-active-1");
      containerGeneral.classList.add("container-general-active-xs");
      infoBar.style.display = "flex";
    }, 300);
    setTimeout(() => {
      containerGeneral.classList.remove("container-general-active-xs");
      containerGeneral.style.display = "none";
    }, 1000);
  } else {
    bar1.classList.add("bar-1-active-1");
    bar2.classList.add("bar-2-active");
    bar3.classList.add("bar-3-active-1");
    setTimeout(() => {
      bar1.classList.add("bar-1-active-2");
      bar3.classList.add("bar-3-active-2");
      infoBar.classList.add("info-bar-active");
      containerGeneral.style.display = "flex";
    }, 300);
    setTimeout(() => {
      infoBar.style.display = "none";
    }, 1000);
  }
});
