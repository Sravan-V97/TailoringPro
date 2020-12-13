import firebase  from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyAUB4-uw6foETY1TSoqwputmHbOvuzCDhI",
    authDomain: "mytailoring-de438.firebaseapp.com",
    projectId: "mytailoring-de438",
    storageBucket: "mytailoring-de438.appspot.com",
    messagingSenderId: "413488715689",
    appId: "1:413488715689:web:1565bea7616d84ea3416b8",
    measurementId: "G-GXN3LFMMLQ"
  };
  // Initialize Firebase
 var fireDb= firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fireDb.database().ref();