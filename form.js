// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later,
// measurementId is optional
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

// Log In function
function logIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Firebase authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successful login
            var user = userCredential.user;

            // Redirect to home.html upon successful login
            window.location.href = "home.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            // Handle errors (for example, show an alert)
            alert("Error: " + errorMessage);
        });
}
