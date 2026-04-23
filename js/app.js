function setBalance(){
  let u = getUser();
  if(!u) return;
  document.querySelectorAll(".balance-text").forEach(el=>{
    el.innerText = "₹"+u.balance;
  });
  const b = document.getElementById("bonusText");
  if(b) b.innerText = "Bonus ₹"+(u.bonus||0);
}

function save(u){
  let users = JSON.parse(localStorage.getItem("users"));
  let cu = localStorage.getItem("currentUser");
  users[cu] = u;
  localStorage.setItem("users", JSON.stringify(users));
}

function buy(amount){
  let u = getUser();
  if(u.balance < amount){ alert("Low balance"); return; }
  u.balance -= amount;
  u.bonus += Math.floor(amount*0.1);
  save(u);
  alert("Bought ₹"+amount);
  setBalance();
  addRecent("Bought ₹"+amount);
}

function addBalance(a){
  let u = getUser();
  u.balance += a;
  save(u);
  setBalance();
  addRecent("Reward +₹"+a);
}

function loadMarket(){
  const list = [
    {amount:1000, reward:100},
    {amount:5000, reward:500},
    {amount:10000, reward:1000}
  ];
  let html="";
  list.forEach(p=>{
    html += `
    <div class="market-card">
      <div>₹${p.amount}<br><small>+₹${p.reward}</small></div>
      <button onclick="buy(${p.amount})">Buy</button>
    </div>`;
  });
  document.getElementById("market").innerHTML = html;
}

function addRecent(text){
  let arr = JSON.parse(localStorage.getItem("recent")||"[]");
  arr.unshift(text);
  arr = arr.slice(0,5);
  localStorage.setItem("recent", JSON.stringify(arr));
}

function renderRecent(){
  let arr = JSON.parse(localStorage.getItem("recent")||"[]");
  let html = arr.map(x=>`<div class="row-item">${x}</div>`).join("");
  document.getElementById("recent").innerHTML = html || "<div class='row-item'>No activity</div>";
}
