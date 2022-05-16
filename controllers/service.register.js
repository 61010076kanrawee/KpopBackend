const firebaseConnect = require("../config/firebaseConnect");
const dbFirestore = firebaseConnect.firestore();
const CryptoJS = require("crypto-js");

exports.registerService = async function (body, result) {
  const docRef = dbFirestore.collection("User");
  var already = false;
  docRef
    .where("username", "==", body.username)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.exists) {
          already = true;
        }
      });
    })
    .then(() => {
      if (already) {
        result(null, { message: "username is already", status: 422 });
      } else {
        let hash = CryptoJS.MD5(String(body.password));
        docRef
          .doc()
          .set({
            username: body.username,
            password: hash.toString(),
          })
          .then(() => {
            result(null, { message: "success!", status: 200 });
          })
          .catch((error) => {
            result(null, { message: "error", status: 422 });
          });
      }
    })
    .catch((error) => {
      result(null, { message: "error", status: 422 });
    });
};
