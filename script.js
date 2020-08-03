function submit() {
  var num = document.getElementById('itishnum').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;
  if (date != "" && time != "") {
    alert(num + " " + date+ " " + time)
    location.reload();
  }
}
