


currentDays();
setInterval(updateTime, 1000);

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

    let formattedTime = `${hours}:${minutes}:${seconds < 10 ? '0' : ''}${seconds}  ${session}`;
    document.getElementById("clock").innerHTML = formattedTime;
    let date = new Date();
    let d= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 
    let m = [ "January","February", "March","April","May","June","July","August" ,"September", "October", "November","December"];
 
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let  da = date.getDate();
 
        let currentDate = d[day] + " , " + m[month] + "  " + year;
      document.getElementsByClassName("date")[0].innerHTML = currentDate;  
}
 function currentDays(){

    };

  






