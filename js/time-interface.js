$(document).ready(function(){
  $('#time').text(timeDisplay());
});

function timeDisplay() {
  var currentTime = moment().format('h:mm:ss a');

  document.getElementById('time').innerHTML = currentTime;
  if(currentTime === alarmTime){
    alarmNow = true;
  }
  setTimeout(timeDisplay, 1000);
  console.log(alarmNow);
}
