const functions = require("firebase-functions")

exports.onMessageCreated = functions.firestore
  .document("messages/{docId}")
  .onCreate(snapshot => {
    return snapshot.ref.update({
      imageUrl: "http://www.nyan.cat/cats/original.gif"
    })
  })
