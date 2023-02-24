
function updateTime() {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
       let session = "AM";

if (hours == 0) {
    hours = 12
  }
  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

  
  hours = (hours< 10) ? "0" + hours : hours;
  mint = (minutes < 10) ? "0" + minutes : minutes;
  sec = (seconds < 10) ? "0" + seconds : seconds;


    let formattedTime = `${hours}:${minutes}:${seconds < 10 ? '0' : ''}${seconds}:  ${session}`;
    document.getElementById("clock").innerHTML = formattedTime;
  }



setInterval(updateTime, 1000);
