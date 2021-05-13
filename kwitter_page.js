


//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC6qIt0MiYAuGuzc06_RPGOf7giW9Wd2HI",
  authDomain: "abcd-qmfp.firebaseapp.com",
  databaseURL: "https://abcd-qmfp.firebaseio.com",
  projectId: "abcd-qmfp",
  storageBucket: "abcd-qmfp.appspot.com",
  messagingSenderId: "75495616295",
  appId: "1:75495616295:web:5b3f1ee1d3d74f286d4302",
  measurementId: "G-QN6H19MY2H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


userName = localStorage.getItem("userName");
password = localStorage.getItem("password");
RoomName = localStorage.getItem("RoomName");



function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(RoomName).push({
    name:userName,
    message:msg,
    like:0
  });
  document.getElementById("msg").value = "";
}
function getData() {
  firebase.database().ref("/"+RoomName).on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
      childData = childSnapshot.val();
      if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id );
console.log(message_data);
name1 = message_data["name"];
message = message_data["message"];
like = message_data["like"];
name_width_tag = "<h4> " + name1 + "<img class='user_tick' src='tick.png'> </h4>" ;
message_width_tag = "<h4 class='message_h4'>" + message + "</h4>";
likeButton = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like +" onclick='updateLike(this.id)'>";
SpanWidthTag = "<span class = 'glyphicon gliphicon-thumbs-up'>Like: " + like + "</span> </button> <hr>";

row = name_width_tag + message_width_tag + likeButton + SpanWidthTag;
document.getElementById("output").innerHTML += row;
//End code
      }
    });
  });
}
getData();


function updateLike(message_id){
  console.log("Click On Like Button To Rate Your Friends" + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) +1;
  console.log(updated_likes);
  firebase.database().ref(RoomName).child(message_id).update({
    like:updated_likes
  });
  }
