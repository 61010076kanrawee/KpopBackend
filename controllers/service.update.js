var firebaseConnect = require("../config/firebaseConnect");
var Model = require("../models/kpop-update");
var dbFirestore = firebaseConnect.firestore();

exports.getAll = async function (result) {
  const snapshot = await dbFirestore.collection("Kpop-updates").get();
  const kpopArray = [];
  let docs = snapshot.docs.map((doc) => doc);
  docs.forEach((doc) => {
    const model = new Model.AlbumUpdate();
    model.id = doc.id;
    model.album_image = doc.data().album_image;
    model.album_image2 = doc.data().album_image2;
    model.subtitle = doc.data().subtitle;
    model.title = doc.data().title;
   

    kpopArray.push(model);
  });
  result(null, kpopArray);
};