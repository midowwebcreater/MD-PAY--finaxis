function login(u,p){
  let users = JSON.parse(localStorage.getItem("users"));
  if(!users[u] || users[u].password!==p){
    alert("Invalid");
    return;
  }
  localStorage.setItem("currentUser", u);
  if(users[u].role==="admin") location="admin.html";
  else location="dashboard.html";
}

function register(u,p){
  if(!u || !p){ alert("Fill details"); return; }
  let users = JSON.parse(localStorage.getItem("users"));
  if(users[u]){ alert("User exists"); return; }
  users[u] = { password:p, balance:0, bonus:0, role:"user" };
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup success");
}

function getUser(){
  let users = JSON.parse(localStorage.getItem("users"));
  let u = localStorage.getItem("currentUser");
  return users[u];
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

function go(p){ location=p; }
