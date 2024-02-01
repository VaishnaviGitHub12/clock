var today = new Date();
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var curWeekDay = days[today.getDay()];
var curDay = today.getDate();
var curMonth = months[today.getMonth()];
var curYear = today.getFullYear();
var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
document.getElementById("date").innerHTML = date;
var hour = document.getElementById("hour");

var minute = document.getElementById("minute");

var seconds = document.getElementById("seconds");

var clock = setInterval(
  function time() {
    var date_now = new Date();

    var hr = date_now.getHours();

    var min = date_now.getMinutes();

    var sec = date_now.getSeconds();

    if (hr < 10) {
      hr = "0" + hr;
    }

    if (min < 10) {
      min = "0" + min;
    }

    if (sec < 10) {
      sec = "0" + sec;
    }

    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = sec;
  }
 
);
