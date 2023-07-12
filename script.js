function updateTime() {
   var now = new Date();
   var hours = now.getHours();
   var ampm = ' AM';
   if (hours >12) {
      hours = hours - 12;
      ampm = ' PM';
   }
   var minutes = now.getMinutes();
   if (minutes<10) {
      minutes = '0' + minutes;
   }
   var seconds = now.getSeconds();
   var timeString = hours + ":" + minutes + ampm;
   document.getElementById("time").innerHTML = timeString;
}

setInterval(updateTime, 1000);
