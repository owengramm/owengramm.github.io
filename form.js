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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Signup function
function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));
  alert("SignUp Successfully");
}

// SignIN function
function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(
            email.value, password.value);
  promise.catch((e) => alert(e.message));
}

// SignOut
function signOut() {
  auth.signOut();
  alert("SignOut Successfully from System");
}

// Active user to homepage
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var email = user.email;
    alert("Active user " + email);
  } else {
    alert("No Active user Found");
  }
});
