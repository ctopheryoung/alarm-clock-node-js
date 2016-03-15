var alarmTime;
var alarmNow = false;

$(document).ready(function(){
  $(function(){
    $('#alarm-form').submit(function(event) {
      event.preventDefault();
      alarmTime = moment(($('#alarm').val()), "H:mm").format("h:mm:ss a");
       $('#saved-alarm').append("<h3>" + "Saved Alarm" + "</h3>" + "<p>" + alarmTime + "</p>");
    });
  });
});
