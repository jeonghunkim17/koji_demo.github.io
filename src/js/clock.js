const clock = document.querySelector("h1#clock");
const dateTitle = document.querySelector("h2#date");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const week = date.getDay();
  const weekList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  dateTitle.innerText = `${year}년 ${month}월 ${day}일 (${weekList[week]})`;
}

getClock();
getDate();
setInterval(getClock, 1000);
