function login(u,p){
  let users = JSON.parse(localStorage.getItem("users"));

  if(!users[u] || users[u].password!==p){
    alert("Invalid");
    return;
  }

  localStorage.setItem("currentUser",u);

  if(users[u].role==="admin"){
    location.href="admin.html";
  } else {
    location.href="dashboard.html";
  }
}

function checkAuth(){
  if(!localStorage.getItem("currentUser")){
    location="index.html";
  }
}

function logout(){
  localStorage.removeItem("currentUser");
  location="index.html";
}

function getUser(){
  let users = JSON.parse(localStorage.getItem("users"));
  return users[localStorage.getItem("currentUser")];
}
