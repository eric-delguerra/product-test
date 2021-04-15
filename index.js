const express = require('express')
const app = express()
let firebase = require('firebase')
let port = 80

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


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



app.get('/', (req, res) => {
    res.send(database.ref('/').once('value')
        .then(function(snapshot) {
            return snapshot.val()
        }))
})


app.listen(port, () => {
    console.log(`Am listening at http://localhost:${port}`)
})

