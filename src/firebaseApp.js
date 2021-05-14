import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBdLfmynOmCjrDeiiX0kwcTElJOOIaWYA",
  authDomain: "g-quiz-771bf.firebaseapp.com",
  databaseURL: "https://g-quiz-771bf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "g-quiz-771bf",
  storageBucket: "g-quiz-771bf.appspot.com",
  messagingSenderId: "367023943070",
  appId: "1:367023943070:web:caacaf6c33df9a41627a8f",
  measurementId: "G-6JZCFX8EPV"
};
firebase.initializeApp(firebaseConfig);

export default firebase;