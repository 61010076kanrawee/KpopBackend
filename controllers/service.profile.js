var firebaseConnect = require("../config/firebaseConnect");
var Model = require("../models/kpop-profile");
var dbFirestore = firebaseConnect.firestore();

exports.getAll = async function (result) {
  const snapshot = await dbFirestore.collection("Kpop-profile").get();
  const kpopArray = [];
  let docs = snapshot.docs.map((doc) => doc);
  docs.forEach((doc) => {
    const model = new Model.Kpop_Profile();
    model.id = doc.id;
    model.title = doc.data().title;
    model.subtitle = doc.data().subtitle;
    model.image_group = doc.data().image_group;

    let MemberProfileArray = [];

    doc.data().member_profile.forEach((r) => {
      const model2 = new Model.MemberProfile();
      model2.member_name = r.member_name;
      model2.member_birth = r.member_birth;
      model2.member_photo = r.member_photo;

      MemberProfileArray.push(model2);
    });

    model.member_profile = MemberProfileArray;

    kpopArray.push(model);
  });
  result(null, kpopArray);
};

exports.getProfileById = function (profileId, result) {
  dbFirestore
    .collection("Kpop-profile")
    .doc(profileId)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        result(null, { message: "No such document!" });
      } else {
        let res = new Model.Kpop_Profile();
        res.id = doc.id;
        res.title = doc.data().title;
        res.subtitle = doc.data().subtitle;
        res.image_group = doc.data().image_group;

        let MemberProfileArray = [];

        doc.data().member_profile.forEach((r) => {
          const model2 = new Model.MemberProfile();
          model2.member_name = r.member_name;
          model2.member_birth = r.member_birth;
          model2.member_photo = r.member_photo;

          MemberProfileArray.push(model2);
        });
        res.member_profile = MemberProfileArray;

        result(null, res);
      }
    })
    .catch((error) => {
      result(null, error);
    });
};


