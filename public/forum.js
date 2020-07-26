
//NOTE TO SELF, WRAP EVERYTHING IN A SELF EXECUTING ANONYMOUS FUNCTION I.E. (FUNCTION {HAVE ALL CODE IN THE PAGE GO HERE})() TO ENSURE 
//THE VARIABLES WE DECLARE HERE DONT CLASH WITH OTHERS

document.getElementById("confirm-register").addEventListener('submit', checkPassword);
function checkPassword(event) {
    debugger;
    var password1 = document.getElementById('password').value;
    var password2 = document.getElementById('confirm').value;


    let isValid = true;
    if (password1 == ''){
        isValid = false;
        alert("Please enter Password");
    }
    
    if (password2 == ''){
        isValid = false;
        alert("Please enter Password");
    }
    if(password1 != password2){
        isValid = false;
        alert('Passwords do not match')
    }
    if (!isValid){
        event.preventDefault();
    }
}

