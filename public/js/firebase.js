// var firebaseConfig = {
//     apiKey: "AIzaSyByHflVSt-95YP4yWECkiK6vLGTguS7KFU",
//     authDomain: "future-force-270416.firebaseapp.com",
//     databaseURL: "https://future-force-270416.firebaseio.com",
//     projectId: "future-force-270416",
//     storageBucket: "future-force-270416.appspot.com",
//     messagingSenderId: "397427626203",
//     appId: "1:397427626203:web:e353a58a74c91413f6bcfe",
//     measurementId: "G-H126PY4SSJ"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();



// var mainPictureButton = document.getElementById("mainPictureButton");
// var secondaryPictureButton = document.getElementById("secondaryPictureButton");
// var uploader = document.getElementById("uploader");
// var secondaryUploader = document.getElementById("secondaryUploader")






// mainPictureButton.addEventListener("change", function (e) {

//     console.log(e.target.files[0].name)
//     // get file
//     var file = e.target.files[0];


//     // create a storage ref
//     var storageRef = firebase.storage().ref("images/" + file.name);

//     //  upload file
//     var task = storageRef.put(file);

//     // update progress bar
//     task.on('state_changed',
//         function progress(snapshot) {
//             var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             uploader.value = percentage;
//         },

//         function error(err) {
//             throw err;
//         },

//         function complete() {
//             var URL = task.snapshot.ref.getDownloadURL().then(function (downloadURL) { console.log(downloadURL) })
//             return URL;

//         })

// })






// secondaryPictureButton.addEventListener('change', function (e) {
//     //Get files
//     for (var i = 0; i < e.target.files.length; i++) {
//         var imageFile = e.target.files[i];

//         uploadImageAsPromise(imageFile);
//     }
// });

// //Handle waiting to upload each file using promise
// function uploadImageAsPromise(imageFile) {

//     var storageRef = firebase.storage().ref("secondaryimages/" + imageFile.name);

//     //Upload file
//     var task = storageRef.put(imageFile);

//     //Update progress bar
//     task.on('state_changed',
//         function progress(snapshot) {
//             var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
//             secondaryUploader.value = percentage;
//         },
//         function error(err) {
//             throw err;
//         },
//         function complete() {
//             var secondaryURL = task.snapshot.ref.getDownloadURL().then(function (downloadURL) { console.log(downloadURL) })
//             return secondaryURL;

//         }
//     );

// }