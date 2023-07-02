function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours().toString().padStart(2, '0');
  var minutes = currentTime.getMinutes().toString().padStart(2, '0');
  var seconds = currentTime.getSeconds().toString().padStart(2, '0');

  var formattedTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById('time').textContent = formattedTime;
}

setInterval(updateTime, 1000);