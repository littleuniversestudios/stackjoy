"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
global.WebSocket = require('ws');
global.XMLHttpRequest = require('xhr2');
const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
const firebaseConfig = {
    apiKey: "AIzaSyABHSTdwJX_CMiYzQXaVjeRUoSVr1o5mnk",
    authDomain: "stackjoy-c0059.firebaseapp.com",
    databaseURL: "https://stackjoy-c0059.firebaseio.com",
    projectId: "stackjoy-c0059",
    storageBucket: "stackjoy-c0059.appspot.com",
    messagingSenderId: "1054908773220",
    appId: "1:1054908773220:web:8037d6989d90a60057c071",
    measurementId: "G-LR3FT3M4Z2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// console.log('******************************');
// console.log('     FIREBASE INITIALIZED');
// console.log('******************************');
// firebase.database().ref('/projects').once('value').then(function(snapshot) {
//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
// });
exports.firebaseDB = firebase.firestore();
exports.firebaseAuth = firebase.auth();
// firebaseDB.collection("projects").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });
exports.firebaseStorage = firebase.storage();
test();
function test() {
    const auth = firebase.auth();
    // console.log('---------------------- FB ------------------');
    // console.log(auth.)
    // console.log(auth.currentUser);
    // const token = {providerId:'firebase',signInMethod:'jwt',idToken:'eyJhbGciOiJSUzI1NiIsImtpZCI6ImZhMWQ3NzBlZWY5ZWFhNjU0MzY1ZGE5MDhjNDIzY2NkNzY4ODkxMDUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmlrIFZpdGFzIiwicGljdHVyZSI6Imh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8td3ZYdGh2Q3YxaUUvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUNIaTNyZl9ELWQ3UXdGbjBfOU1RTlNZb0NWek9JREszUS9waG90by5qcGciLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3RhY2tqb3ktYzAwNTkiLCJhdWQiOiJzdGFja2pveS1jMDA1OSIsImF1dGhfdGltZSI6MTU3MTQzMTg4MiwidXNlcl9pZCI6IlJRR2RHb3VtY1lUa3JCWTdNNGIwQmpTMmViTTIiLCJzdWIiOiJSUUdkR291bWNZVGtyQlk3TTRiMEJqUzJlYk0yIiwiaWF0IjoxNTcxNDMxODgyLCJleHAiOjE1NzE0MzU0ODIsImVtYWlsIjoibmlrQGxpdHRsZXVuaXZlcnNlc3R1ZGlvcy5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExMDY3Nzg1NzA1Mzg4MTM2NzI0OSJdLCJlbWFpbCI6WyJuaWtAbGl0dGxldW5pdmVyc2VzdHVkaW9zLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.KrSXnUJr9bZ6QBaMpPcEzWpXId_KqkPiCYx5yfOAz_hDl_q0OAasTi_O45vSQt6G-Akn3NUzXHUOxs0ksQzB75KFB_PvjWu_WnSN0duFAjNSs8TeOflOEW6kF88UUvxCAZSOwcMxIfa_Fm_IW2lXZE7hkRbLYFWgl9ecrLYBGqZccWvhdztAHiEFeSNiGTjxhda0WrCoTqJc8_sAwnKxCTnRDjOK5jsmgfwTG1lxB0wfwKxxUmr30LFuy26D19errEDSwlZXpdSWGV0TX31wHP8n9rkw-yLxBYaXC32miw4pO3NQi7_tgZqkb_Y5QFrnbW8pmWTcg4IgMWbU84SqAw'};
    const idToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjUxMjRjY2JhZDVkNWZiZjNiYTJhOGI1ZWE3MTE4NDVmOGNiMjZhMzYiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmlrIFZpdGFzIiwicGljdHVyZSI6Imh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8td3ZYdGh2Q3YxaUUvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUNIaTNyZl9ELWQ3UXdGbjBfOU1RTlNZb0NWek9JREszUS9waG90by5qcGciLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3RhY2tqb3ktYzAwNTkiLCJhdWQiOiJzdGFja2pveS1jMDA1OSIsImF1dGhfdGltZSI6MTU3MTQzMTg4MiwidXNlcl9pZCI6IlJRR2RHb3VtY1lUa3JCWTdNNGIwQmpTMmViTTIiLCJzdWIiOiJSUUdkR291bWNZVGtyQlk3TTRiMEJqUzJlYk0yIiwiaWF0IjoxNTc4MjQ2MjIxLCJleHAiOjE1NzgyNDk4MjEsImVtYWlsIjoibmlrQGxpdHRsZXVuaXZlcnNlc3R1ZGlvcy5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExMDY3Nzg1NzA1Mzg4MTM2NzI0OSJdLCJlbWFpbCI6WyJuaWtAbGl0dGxldW5pdmVyc2VzdHVkaW9zLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.c16TqRVRJYfs-LlTD9p4ijog1qFWEHwiK3XhXz4LKags8zmGLM16uBcgQD32qBpauZJtuO1sW4QCT5BEfXP-H812U3c6s-zJIMfZzsgzDfd3rpsjzLzYJRq8PCw6j1EliRo3CFGcEEs0LFqIOJSUUHYp2nnq1kLItfSmkY7sa2b_0786QXSdhJniLjEIF1-ftXbtwv2bEKLmrV5dwFK07GNGidYNTQLyTTXS12OrULUxZ-v7sJppPDjykbewu_evncAw735-DBXQOsRnPlBkXLpqZns-VH9HODYvEhd_ZHduRW9K7sN7Wpw93dR8NAdxbaXJ_4sEnHkfu80t9M5aOw';
    const accessToken = "ya29.ImG4BxbVEMxBfOooM9cJy0XDhmg1EE8DrMzPEg98K3Clb_tK60qQkp6JVLx2fWdSA6WJ7Zob2nSr9obCG6QKB8BecytTonX1cz6UzXFyv1z1UYRt2i0Aw7fXRuGofH5_HmiJ";
    const credential = firebase.auth.GoogleAuthProvider.credential(null, accessToken);
    // auth.signInWithCredential(credential).then(result => {
    //     console.log('->>>>>>', result);
    //     console.log('current user', auth.currentUser);
    // }, err => console.log('*******', err))
    // firebase.auth().signInWithCustomToken(token)
    //     .then(result => {
    //         console.log('LOGGED IN', result)
    //     })
    //     .catch(function (error) {
    //         console.log('EROOR', error)
    //     });
    // console.log('---------------------- /FB ------------------');
    // const storageRef = firebaseStorage.ref();
    // const filesRef = storageRef.child('files/text.txt');
    // const file = readFileSync('/Users/nvitas/lus/git/stackjoy/server/blueprint-templates/test/test/test.txt');
    // filesRef.put(file).then(function(snapshot) {
    //   console.log('Uploaded a blob or file!');
    // });
}
exports.logoutCurrentUser = () => {
    exports.firebaseAuth.signOut();
};
async function authenticateUserWithCredentials(userCredential) {
    if (!exports.firebaseAuth.currentUser) {
        const credential = firebase.auth.GoogleAuthProvider.credential(null, userCredential.oauthAccessToken);
        try {
            const oAuthCredential = await exports.firebaseAuth.signInWithCredential(credential);
            return oAuthCredential.user;
        }
        catch (err) {
            // console.log('******* ERROR LOGGING IN USER *********');
            // console.log(err)
            // console.log('***************************************');
            return null;
        }
    }
    else {
        return exports.firebaseAuth.currentUser;
    }
}
exports.authenticateUserWithCredentials = authenticateUserWithCredentials;
// Create a storage reference from our storage service
//# sourceMappingURL=firebase.js.map