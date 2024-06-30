//função que valida Email
function onChangeEmail(){
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
    // Chama a validação de confirmação de email
    validateEmailMatch();
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
}

//função para chamar a validação da password
function OnChangeConfirmPassword(){
    validatePasswordMatch();
}

//função que valida senha
function validatePasswordMatch(){
    const password = form.password().value;
    const confirmPassword = form.ConfirmPassword().value;

    form.ConfirmPasswordDoesntMatchError().style.display = 
    password == confirmPassword ? "none" : "block";
}

function onChangeConfirmEmail() {
    validateEmailMatch();
}

// Função que valida a confirmação de email
function validateEmailMatch() {
    const email = form.email().value;
    const confirmEmail = form.ConfirmEmail().value;


    form.ConfirmEmailDoesntMatchError().style.display = 
    email == confirmEmail ? "none" : "block";
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
}