const admin = require("firebase-admin");
var serviceAccount = require("../env_firebase.json");
// const config = require("./config");

// const firebaseConnect = admin.initializeApp({
//   credential: admin.credential.cert({
//     type: String(process.env.TYPE),
//     project_id: String(process.env.PROJECT_ID),
//     private_key_id: String(process.env.PRIVATE_KEY_ID),
//     private_key: String(process.env.PRIVATE_KEY?.replace(/\\n/g, "\n")),
//     client_email: String(process.env.CLIENT_EMAIL),
//     client_id: String(process.env.CLIENT_ID),
//     auth_uri: String(process.env.AUTH_URI),
//     token_uri: String(process.env.TOKEN_URI),
//     auth_provider_x509_cert_url: String(
//       process.env.AUTH_PROVIDER_X509_CERT_URL
//     ),
//     client_x509_cert_url: String(process.env.CLIENT_X509_CERT_URL),
//   }),
// });


const firebaseConnect = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = firebaseConnect;
