


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

function Emote() {
  var copyText = "<img src="data:image/jpeg;base64,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" alt="Image result for obamium"/>";
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the Emote: " + copyText.value);
}

