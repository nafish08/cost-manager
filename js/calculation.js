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

  const totalAmount = foodAmount + rentAmount + clothesAmount;

  const incomeInput = document.getElementById("inputIncome").value;

  //Get and Update total expenses

  const expenseTotal = document.getElementById("expenseTotal");
  const expenseTotalText = expenseTotal.innerText;
  const previousExpensesTotal = parseFloat(expenseTotalText);

  const balanceTotal = document.getElementById("balanceTotal");
  const balanceTotalText = parseFloat(balanceTotal.innerText);
  const previousBalanceTotal = parseFloat(balanceTotalText);

  expenseTotal.innerText = previousExpensesTotal + totalAmount;
  const newBalance = incomeInput - totalAmount;
  balanceTotal.innerText = previousBalanceTotal + newBalance;
});

// For Saving
document.getElementById("save-btn").addEventListener("click", function () {
  const incomeInput = document.getElementById("inputIncome").value;
  const saveInput = document.getElementById("inputSave").value;
  const savePercent = parseFloat(saveInput);

  //Get and Update Saving
  const savingAmount = document.getElementById("saveTotal");
  //   const savingAmountText = parseFloat(savingAmount.innerText);

  var savingValue = savePercent / 100;
  savingAmount.innerText = savingValue * incomeInput;

  //Get and Update Remaing
});
