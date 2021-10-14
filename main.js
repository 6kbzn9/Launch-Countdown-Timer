const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

let day = 8;
let hour = 23;
let minute = 55;
let second = 41;
let d, h, m, s;

const addZero = () => {
  d = day;
  if (day < 10) d = `0${day}`;
  h = hour;
  if (hour < 10) h = `0${hour}`;
  m = minute;
  if (minute < 10) m = `0${minute}`;
  s = second;
  if (second < 10) s = `0${second}`;
};

const updateTime = () => {
  if (second < 0) {
    second = 59;
    minute -= 1;
  }
  if (minute < 0) {
    minute = 59;
    hour -= 1;
  }
  if (hour < 0) {
    hour = 23;
    day -= 1;
  }
};
const prinTimer = () => {
  addZero();
  days.textContent = d;
  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;
};

const startTimer = () => {
  second -= 1;
  updateTime();
  prinTimer();
};

window.addEventListener("DOMContentLoaded", setInterval(startTimer, 1000));
