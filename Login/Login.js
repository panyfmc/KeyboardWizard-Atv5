//função que deixa os botões ativados usando as funções para validar 
function validateFields(){
    const emailValid = isEmailValid();
    document.getElementById("recover-password-button").disabled =! emailValid;
    const passWordValid = isPasswordValid()
    document.getElementById("login-button").disabled = !emailValid || !passWordValid;
}
//função que me diz se senha é valida, por id(bool)
function isPasswordValid(){
    password = document.getElementById("passWord").value;
    if(!password){
        return false;
    }
        return true;
}
//função que me diz se email é valido, id (bool)
function isEmailValid(){
    const email = document.getElementById("email").value;
    if(!email){
        return false;
    }
    return validateEmail(email);
}  

//função que verifica se email é válido para o campo(expressões regulares)
function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

