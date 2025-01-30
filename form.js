var firebaseConfig = {
  apiKey: "AIzaSyCwupMId5o8musYtaEdAEhnGKwvfEhkDKE",
  authDomain: "cfb-pick-em-b75c4.firebaseapp.com",
  projectId: "cfb-pick-em-b75c4",
  storageBucket: "cfb-pick-em-b75c4.firebasestorage.app",
  messagingSenderId: "722777277682",
  appId: "1:722777277682:web:073caaa949b17ece2bbc6b",
  measurementId: "G-S0Q41DEZY9",
};

firebase.initializeApp(firebaseConfig);

function logIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log("Logging in with email:", email); // Debugging log

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;

            console.log("Login successful for user:", user.email); // Debugging log

            window.location.href = "home.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log("Error:", errorMessage); // Debugging log
            alert("Error: " + errorMessage);
        });
}
