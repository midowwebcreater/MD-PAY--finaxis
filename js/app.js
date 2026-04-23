function setBal(){
  let u = getUser();
  bal.innerText = u.balance;
}

function loadMarket(){
  let html="";
  [1000,5000,10000].forEach(a=>{
    html += `<div>
      ₹${a} <button onclick="buy(${a})">Buy</button>
    </div>`;
  });
  list.innerHTML=html;
}

function buy(a){
  let u = getUser();
  if(u.balance<a){alert("low");return;}
  u.balance -= a;
  save(u);
  alert("done");
}

function reward(){
  let u = getUser();
  u.balance +=10;
  save(u);
  alert("added");
}

function save(u){
  let users = JSON.parse(localStorage.getItem("users"));
  users[localStorage.getItem("currentUser")] = u;
  localStorage.setItem("users",JSON.stringify(users));
}
