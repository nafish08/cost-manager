// Input field string to number convert
function convertInputExpense(idName) {
  const input = document.getElementById(idName).value;
  const amount = parseFloat(input);
  return amount;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const foodAmount = convertInputExpense("inputFood");
  const rentAmount = convertInputExpense("inputRent");
  const clothesAmount = convertInputExpense("inputClothes");

  //Total Expense
  const totalAmount = foodAmount + rentAmount + clothesAmount;

  const incomeInput = document.getElementById("inputIncome").value;

  //Get and Update total expenses

  const expenseTotal = document.getElementById("expenseTotal");
  const expenseTotalText = expenseTotal.innerText;
  const previousExpensesTotal = parseFloat(expenseTotalText);

  const balanceTotal = document.getElementById("balanceTotal");
  const balanceTotalText = parseFloat(balanceTotal.innerText);
  const previousBalanceTotal = parseFloat(balanceTotalText);

  //Total Expense
  expenseTotal.innerText = previousExpensesTotal + totalAmount;

  //Balance
  const newBalance = incomeInput - totalAmount;
  balanceTotal.innerText = previousBalanceTotal + newBalance;
});

// For Saving
document.getElementById("save-btn").addEventListener("click", function () {
  const incomeInput = document.getElementById("inputIncome").value;

  const saveInput = document.getElementById("inputSave").value;
  const savingPerchantage = parseFloat(saveInput);

  //Get balance and saving amount

  const balanceTotal = document.getElementById("balanceTotal");
  const balanceTotalText = parseFloat(balanceTotal.innerText);

  const balanceRemaining = document.getElementById("remainTotal");

  //Get and Update saving amount
  const savingAmount = document.getElementById("saveTotal");

  //Saving Amount
  var savingscalc = savingPerchantage / 100;
  const a = savingscalc * incomeInput;
  savingAmount.innerText = a;

  // Remaining Balance
  balanceRemaining.innerText = balanceTotalText - a;
});
