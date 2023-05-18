let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm_Password');
let form = document.querySelector('.form');
let submit = document.querySelector('.submit')
let passwordMatch = document.querySelector('.passwordMatch');
confirmPassword.addEventListener('keyup', function(){
//    form.style.backgroundColor = 'orange';
   console.log(form)
   if(password.value !== confirmPassword.value){
       submit.disabled = true
       passwordMatch.style.display = '';
        passwordMatch.textContent = "*password doesnt't match";
   }
   else{
        submit.disabled = false
        passwordMatch.textContent = '';
   } 
});

