document.getElementById('btn-deposit').addEventListener('click', function(){
  
  const newDepositAmount = getInputValueById('deposit-field');

  const previousDepositAmount = getTextValueById('deposit-total');
  if(isNaN(newDepositAmount)){
    alert('Please provide valid number');
    return;
  }
  
  const currentDepositAmount = previousDepositAmount + newDepositAmount;

  setElementValueById('deposit-total', currentDepositAmount);

  const previousBalance = getTextValueById('balance-total');
  const newBalanceTotal = previousBalance + newDepositAmount;
  setElementValueById('balance-total', newBalanceTotal);

})