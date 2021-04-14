
let firebase = require('firebase')

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
    apiKey: "AIzaSyDpjkAd12e3OdvsGpA1okozUv2YFNaDEmU",
    authDomain: "testconstruct-d38e2.firebaseapp.com",
    projectId: "testconstruct-d38e2",
    storageBucket: "testconstruct-d38e2.appspot.com",
    messagingSenderId: "346430428056",
    appId: "1:346430428056:web:632e4e26c74d7e3a15d1ed"
};

let firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAINE,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

let database = firebase.database()

//write
// database.ref("/").set(obj, function(error) {
//     if (error) {
//         // The write failed...
//         console.log("Failed with error: " + error)
//     } else {
//         // The write was successful...
//         console.log("success")
//     }
// })

database.ref('/').once('value')
    .then(function(snapshot) {
        console.log( snapshot.val() )
    })

