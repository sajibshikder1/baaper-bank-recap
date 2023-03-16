document.getElementById('btn-withdraw').addEventListener('click', function(){


  const newWithdrawAmount = getInputValueById('withdraw-field');
  const previousWithdrawAmount = getTextValueById('withdraw-total');

  if(isNaN(newWithdrawAmount)){
    alert('Please provide valid number')
    return;
  }




  const previousBalanceTotal = getTextValueById('balance-total');
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  if(newWithdrawAmount > previousBalanceTotal){
    alert('Baper Bank E Eto Taka Nai Haramjada');
    return;
  }
  const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
  setElementValueById('withdraw-total', newWithdrawTotal);
  
  setElementValueById('balance-total', newBalanceTotal);

})