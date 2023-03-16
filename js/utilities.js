function getInputValueById(inputFieldId){
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldIdValue = parseFloat(inputFieldValueString);
  inputField.value = '';
  return inputFieldIdValue;
}

function getTextValueById(elementId){
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  
  return textElementValue;
}

function setElementValueById(elementId, newValue){
  const element = document.getElementById(elementId);
  element.innerText = newValue;
}

