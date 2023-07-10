function updateTime() {
   var now = new Date();
   var hours = now.getHours();
   var minutes = now.getMinutes();
   var seconds = now.getSeconds();
   var timeString = hours + ":" + minutes;
   document.getElementById("time").innerHTML = timeString;
}

setInterval(updateTime, 1000);
