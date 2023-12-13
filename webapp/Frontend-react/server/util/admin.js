var admin = require("firebase-admin");

var serviceAccount = require("C:/Users/shweta/Desktop/Pyara sa project/FL-Blockchain/webapp/Frontend-react/server/PrivateKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();
module.exports = { admin, db };