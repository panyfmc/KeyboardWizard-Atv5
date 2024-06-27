//função que deixa os botões desativados usando as funções para validar e pra mostrar ou esconder os erros
function onChangeEmail(){
    toggleButtonsDisable();
    toggleEmailErros();
    togglePasswordErros();
}
function onChangePassword(){
    toggleButtonsDisable();
    togglePasswordErros();
}
//função que me diz se senha é valida, por id(bool)
function isPasswordValid(){
    const password = document.getElementById("passWord").value;
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

//função que monstra ou esconde erros do email
function toggleEmailErros(){
    const email = document.getElementById("email").value;
    //mensagem de email obrigatório
    if(!email){
        document.getElementById("email-required-error").style.display= "block";
    }else{document.getElementById("email-required-error").style.display="none";

    }
    //mensagem de email inválido
    if(isEmailValid(email)){
        document.getElementById("email-invalid-error").style.display="none";
    }else{
        document.getElementById("email-invalid-error").style.display="block";
    }
}
//função que mostra erro de validação de senha
function togglePasswordErros(){
    const password = document.getElementById("passWord").value;
    if(!password){
        document.getElementById("password-required-error").style.display="block";
    }else{
        document.getElementById("password-required-error").style.display="none";
    }
}
//confere se a senha e o email são válidos 
function toggleButtonsDisable(){
    const emailValid = isEmailValid();
    document.getElementById("recover-password-button").disabled =! emailValid;
    const passWordValid = isPasswordValid()
    document.getElementById("login-button").disabled = !emailValid || !passWordValid;
}