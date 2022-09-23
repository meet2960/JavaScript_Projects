setInterval(displaytime, 1000);

function displaytime() {
  /*For Time */
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let format = "AM";

  if (hour >= 12) {
    format = "PM";
  }
  if (hour > 12) {
    hour -= 12;
  }

  /*Logic to Print 0 before */
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  document.getElementById("h").innerHTML = hour;
  document.getElementById("m").innerHTML = min;
  document.getElementById("s").innerHTML = sec;
  document.getElementById("f").innerHTML = format;

  /*For Date */
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yy = date.getFullYear();
  let months;

  // dd = dd < 10 ? "0" + dd : dd;
  // mm = mm < 10 ? "0" + mm : mm;
  // yy = yy < 10 ? "0" + yy : yy;

  switch (mm) {
    case 1:
      months = "January";
      break;
    case 2:
      months = "Febuary";
      break;
    case 3:
      months = "March";
      break;
    case 4:
      months = "April";
      break;
    case 5:
      months = "May";
      break;
    case 6:
      months = "June";
      break;
    case 7:
      months = "July";
      break;
    case 8:
      months = "August";
      break;
    case 9:
      months = "September";
      break;
    case 10:
      months = "October";
      break;
    case 11:
      months = "November";
      break;
    case 12:
      months = "December";
      break;
    default:
      months = "Enter";
  }

  document.getElementById("date").innerHTML = dd;
  document.getElementById("month").innerHTML = months;
  document.getElementById("year").innerHTML = yy;
}
