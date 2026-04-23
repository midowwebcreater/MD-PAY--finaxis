function login(u,p){
 if(!users[u] || users[u].password !== p){
  alert("Invalid");
  return;
 }

 localStorage.setItem("user", u);

 if(users[u].role==="admin"){
  location="admin.html";
 } else {
  location="dashboard.html";
 }
}

function getUser(){
 return users[localStorage.getItem("user")];
}

function checkAuth(){
 if(!localStorage.getItem("user")){
  location="index.html";
 }
}

function logout(){
 localStorage.clear();
 location="index.html";
}
