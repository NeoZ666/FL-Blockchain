var admin = require("firebase-admin");

var serviceAccount = require("C:/Users/Nilanchala Panda/Desktop/NILANCHALA_CODING/PROJECTS/FL-Blockchain-LDI/webapp/Frontend-react/server/PrivateKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();
module.exports = { admin, db };