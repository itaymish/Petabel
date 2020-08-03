// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCjMc9o-kRTQXmb_CN1HDf_Cq4dBzvFBUY",
  authDomain: "petabel-e8a6e.firebaseapp.com",
  databaseURL: "https://petabel-e8a6e.firebaseio.com",
  projectId: "petabel-e8a6e",
  storageBucket: "petabel-e8a6e.appspot.com",
  messagingSenderId: "738352742763",
  appId: "1:738352742763:web:e9201065dda2c797188c2e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function submit() {
  var num = document.getElementById('itishnum').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;
  if (date != "" && time != "") {
    firebase.database().ref().child("Customers").child(num).update({"NextTreatment": date + ", " + time});
  }
}
