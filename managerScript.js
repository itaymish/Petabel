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
    firebase.database().ref().child("Customers").child("2104").on('value', function (snapshot) {
        document.getElementById("yaron-treatment").innerHTML = snapshot.val().NextTreatment;
        console.log(snapshot.val());
    });
    firebase.database().ref().child("Customers").child("2708").on('value', function (snapshot) {
        document.getElementById("sagit-treatment").innerHTML = snapshot.val().NextTreatment;
        console.log(snapshot.val());
    });
    firebase.database().ref().child("Customers").child("0712").on('value', function (snapshot) {
        document.getElementById("amit-treatment").innerHTML = snapshot.val().NextTreatment;
        console.log(snapshot.val());
    });
    firebase.database().ref().child("Customers").child("1304").on('value', function (snapshot) {
        document.getElementById("noam-treatment").innerHTML = snapshot.val().NextTreatment;
        console.log(snapshot.val());
    });
    firebase.database().ref().child("Customers").child("0407").on('value', function (snapshot) {
        document.getElementById("itay-treatment").innerHTML = snapshot.val().NextTreatment;
        console.log(snapshot.val());
    });
