import Firebase from "firebase"

const config = {
  apiKey: "AIzaSyA729w66319GPhB3w82WOzHaKyhAXXmsUY",
  authDomain: "nyan-chat-ecd6b.firebaseapp.com",
  databaseURL: "https://nyan-chat-ecd6b.firebaseio.com",
  projectId: "nyan-chat-ecd6b",
  storageBucket: "nyan-chat-ecd6b.appspot.com",
  messagingSenderId: "702421469116"
}

const app = Firebase.initializeApp(config)
const Firestore = app.firestore()
Firestore.settings({ timestampsInSnapshots: true })

export const firestore = Firestore
export const serverTimestamp = Firebase.firestore.FieldValue.serverTimestamp
