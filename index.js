const express = require('express')
const app = express()
let firebase = require('firebase')
let port = process.env.PORT || 3000
var cors = require('cors')
app.use(cors())


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

let database = firebase.database()

app.get('/', (req, res) => {
    database.ref('/').once('value')
        .then(function(snapshot) {
            // res.setHeader('Content-Type', 'application/json');
            res.json(snapshot.val())
        })
})

app.get('/value', (req, res) => {
    database.ref('/').once('value')
        .then(function(snapshot) {
            res.send('Valeur de test')
        })
})


app.listen(port, () => {
    console.log(`Am listening at http://localhost:${port}`)
})


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

