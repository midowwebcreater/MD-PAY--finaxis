function setBalance(){
 let u = getUser();
 document.querySelectorAll(".balance")
 .forEach(el => el.innerText="₹"+u.balance);
}

function buy(amount){
 let u = getUser();

 if(u.balance < amount){
  alert("Low balance");
  return;
 }

 u.balance -= amount;
 alert("Purchased ₹"+amount);
}

function addBalance(amount){
 let u = getUser();
 u.balance += amount;
}
