//funções que desabilitam o botões de acordo com validade dos campos/ exige mensagem de erro
//função que desabilita os botões de acordo com validade do email/ exige mensagem de erro
function onChangeEmail(){
    toggleButtonsDisable();
    toggleEmailErros();
}
//função que desabilita os botões de acordo com validade da senha/ exige mensagem de erro
function onChangePassword(){
    toggleButtonsDisable();
    togglePasswordErros();
}
//função que redireciona usuario para tela de perfil
function login(){
    showLoading();
    firebase.auth().signInWithEmailAndPassword(
        form.email().value,form.passWord().value
    ).then(() => {
        hideLoading();
        window.location.href = "/index.html";
    }).catch(error => {
        hideLoading();
        alert(getErrorMessage(error));
    });
}
//função que escolhe define o que vai ser exibido na mensagem de erro, a partir do código da fireBase
function getErrorMessage(error){
    if (error.code == "auth/wrong-password") {
        return "Senha inválida";
    }
    if(error.code == "auth/invalid-credential"){
        return "Usuário não encontrado.";
    }
    return error.message;
}
//função que passa para pagina de registro
function register(){
    window.location.href = "https://panyfmc.github.io/KeyboardWizard-Atv5/Conta/TelaDeRegistro/TelaDeRegistro.html"
}
//função que me diz se senha é valida, por id(bool)
function isPasswordValid(){
    const password = form.passWord().value;
    if(!password){
        return false;
    }
        return true;
}
//função que me diz se email é valido, id (bool)
function isEmailValid(){
    const email = form.email().value;
    if(!email){
        return false;
    }
    return validateEmail(email);
}  

//função que monstra ou esconde erros do email
function toggleEmailErros(){
    const email = form.email().value;
    //mensagem de email obrigatório
    form.emailRequiredError().style.display = email ? "none" : "block";
    //mensagem de email inválido
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}
//função que mostra erro de validação de senha
function togglePasswordErros(){
    const password = form.passWord().value;
    form.passWordRequiredError().style.display = password ? "none" : "block";
}
//confere se a senha e o email são válidos 
function toggleButtonsDisable(){
    const emailValid = isEmailValid();
    form.recoverpassword().disabled =! emailValid;
    const passWordValid = isPasswordValid()
    form.loginButton().disabled = !emailValid || !passWordValid;
}
//função que redireciona para recuperar a senha
function recoverPassword() {
    showLoading();
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
        hideLoading();
        alert("Email enviado! Caso o email não tenha chegado, verifique se você concluiu o cadastro");
    }).catch(error => {
        hideLoading();
        alert(getErrorMessage(error));
    });
}
//armazena os elementos que são pegos pelo id
const form = {
    loginButton: () => document.getElementById("login-button"),
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    passWord: () => document.getElementById("passWord"),
    passWordRequiredError: () => document.getElementById("password-required-error"),
    recoverpassword: () => document.getElementById("recover-password-button"),
}