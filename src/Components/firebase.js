import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAuGdHooPPnlkaWbh29I0YQWEpjF6gkxBs",
  authDomain: "scholarship-academy.firebaseapp.com",
  databaseURL: "https://scholarship-academy.firebaseio.com",
  projectId: "scholarship-academy",
  storageBucket: "scholarship-academy.appspot.com",
  messagingSenderId: "345757033591",
  appId: "1:345757033591:web:6ac4148c514e409dc55272",
  measurementId: "G-729Z2J43CM",
};

firebase.initializeApp(config);

export default firebase;
