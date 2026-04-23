if(!localStorage.getItem("users")){
  localStorage.setItem("users", JSON.stringify({
    user1:{password:"1234",balance:500,role:"user"},
    admin1:{password:"admin123",balance:0,role:"admin"}
  }));
}
