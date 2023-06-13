var firebaseConfig = {
      apiKey: "AIzaSyDKzqT4Ht5p9NC8exhp9Kn7lEgeA3zJQHY",
      authDomain: "kwitter-5b553.firebaseapp.com",
      databaseURL: "https://kwitter-5b553-default-rtdb.firebaseio.com",
      projectId: "kwitter-5b553",
      storageBucket: "kwitter-5b553.appspot.com",
      messagingSenderId: "1072842131070",
      appId: "1:1072842131070:web:a44d3a31385d6ea4817a2f"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name_welcome").innerHTML="Welcome "+user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}