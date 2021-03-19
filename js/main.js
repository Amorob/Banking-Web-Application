let balance = document.getElementById("account-balance");
let amount = document.getElementById("deposite-amount");
let deposite = document.getElementById("deposite");
balance.innerHTML = 0;

deposite.addEventListener("click", function () {
  balance += amount;
  balance.innerHTML.value = balance;

  //   return balance.innerHTML;
  //   balance.value += amount;
  //   balance.innerHTML = balance.value;
  //   return (balance += amount);
});

function calculate() {
  var num1 = document.getElementById("first").value;
  var num2 = document.getElementById("second").value;
  var operation = document.getElementById("oper").value;
  return (balance += amount);
}
