document.getElementById('btn-submit').addEventListener('click', function(){
  const emailField = document.getElementById('email-filed');
  const email = emailField.value;
  
  const passwordField = document.getElementById('password-field');
  const password = passwordField.value;
   passwordField.value = '';

  
  if(email === 'sontan@baap.com' && password === 'secret'){
    window.location.href = 'http://127.0.0.1:5500/bank.html';
  }
  else{
    alert('invalid user');
  }

})