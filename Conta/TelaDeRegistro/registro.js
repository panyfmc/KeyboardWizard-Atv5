//função que valida Email
function onChangeEmail(){
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
    // Chama a validação de confirmação de email
    validateEmailMatch();
    toggleRegisterButtonDisable();
}

//função que valida Senha
function onChangePassword(){
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";

    const isValidLength = password.length >= 8; //maior ou igual que 8 caracteres
    const hasLowercase = /[a-z]/.test(password); //conter uma letra minúscula
    const hasNumber = /[0-9]/.test(password); // conter um número
    const hasUppercase = /[A-Z]/.test(password); // conter uma letra maiúscula
    const hasSpecialChar = /[!@#$%*()_+^&{}}:;?.]/.test(password); //conter um caractere especial

    // Se qualquer pré-requisito não for atendido, exibir mensagem de erro
    const isPasswordInvalid = !isValidLength || !hasLowercase || !hasNumber || !hasUppercase || !hasSpecialChar;
    form.passwordCaracteresError().style.display = isPasswordInvalid ? "block" : "none";
    //função que válida password sendo chamada
    validatePasswordMatch();
    toggleRegisterButtonDisable();
}

//função para chamar a validação da password
function OnChangeConfirmPassword(){
    validatePasswordMatch();
    toggleRegisterButtonDisable();
}

//função que valida senha
function validatePasswordMatch(){
    const password = form.password().value;
    const confirmPassword = form.ConfirmPassword().value;

    form.ConfirmPasswordDoesntMatchError().style.display = 
    password == confirmPassword ? "none" : "block";
}

//função para reativar o botão
function toggleRegisterButtonDisable() {
    form.registerButton().disabled = !isFormValid();
}
//validando todo formulario para ativar botão
function isFormValid() {
    //valida email
    const email = form.email().value;
    if (!email || !validateEmail(email)) {
        return false;
    }
    //valida confirmação de email
    const confirmEmail = form.ConfirmEmail().value;
    if(email != confirmEmail){
        return false;
    }
    //valida senha
    const password = form.password().value;
    const isValidLength = password.length >= 8; //maior ou igual que 8 caracteres
    const hasLowercase = /[a-z]/.test(password); //conter uma letra minúscula
    const hasNumber = /[0-9]/.test(password); // conter um número
    const hasUppercase = /[A-Z]/.test(password); // conter uma letra maiúscula
    const hasSpecialChar = /[!@#$%*()_+^&{}}:;?.]/.test(password); //conter um caractere especial

    // Se qualquer pré-requisito não for atendido, exibir mensagem de erro
    const isPasswordInvalid = !isValidLength || !hasLowercase || !hasNumber || !hasUppercase || !hasSpecialChar;
    if (!password || isPasswordInvalid) {
        return false;
    }
    //valida confirmação de senha
    const confirmPassword = form.ConfirmPassword().value;
    if (password != confirmPassword) {
        return false;
    }
    //se não, retorna true
    return true;
}

//função para chamar a validação de email
function onChangeConfirmEmail() {
    validateEmailMatch();
    toggleRegisterButtonDisable();
}

// Função que valida a confirmação de email
function validateEmailMatch() {
    const email = form.email().value;
    const confirmEmail = form.ConfirmEmail().value;

    form.ConfirmEmailDoesntMatchError().style.display = 
    email == confirmEmail ? "none" : "block";
}
//função que coloca os dados do registro no firebase
function register(){
    showLoading();//animação carregar

    const email = form.email().value;
    const password = form.password().value;
    firebase.auth().createUserWithEmailAndPassword(
        email, password
    ).then(() => {
        hideLoading();//tirando animação
        window.location.href = "/index.html";
    }).catch(error =>{
        hideLoading();//tirando animação
        alert(getErrorMessageRegist(error));
    })
}
//função que redireciona pra página de Login
function gologin(){
    window.location.href = "/Conta/TelaDeLogin/TelaDeLogin.html";
}
//função para exibir error(usuário já cadastrado)
function getErrorMessageRegist(error){
    if(error.code == "auth/email-already-in-use"){
        return "Email já está em uso"
    }
    return error.message;
}
//formulario com todos os dados que tem input
const form = {
    email: () => document.getElementById("email"),
    ConfirmEmail: () => document.getElementById("confirmEmail"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    ConfirmEmailDoesntMatchError: () => document.getElementById("email-doesnt-match-error"),
    password: () => document.getElementById("password"),
    ConfirmPassword: () => document.getElementById("confirmPassword"),
    ConfirmPasswordDoesntMatchError: () => document.getElementById("password-doesnt-match-error"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    passwordCaracteresError: () => document.getElementById("password-min-length-error"),
    registerButton: () => document.getElementById('register-button')
}