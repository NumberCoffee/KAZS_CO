function addUser()
{
    var userName = document.getElementById("userName").value;
    localStorage.setItem("userName", userName);

    var  password = document.getElementById("password").value;
    localStorage.setItem("password", password);
   
    window.location = "kwitter_room.html"
}