const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const firebaseAuth = require('firebase-auth');

// Create a cloud function to handle login
exports.loginWithEmailPassword = functions.https.onRequest((req, res) => {
  const { email, password } = req.body;

  admin.auth().getUserByEmail(email)
    .then((userRecord) => {
      if (userRecord.password === password) {
        res.status(200).send({ message: 'Login successful' });
      } else {
        res.status(401).send({ message: 'Invalid password' });
      }
    })
    .catch(error => {
      res.status(500).send({ message: error.message });
    });
});
