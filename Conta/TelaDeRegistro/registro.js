//função que valida Email
function onChangeEmail(){
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}
//função que valida Senha
function onChangePassword(){
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";

    const isValidLength = password.length >= 8;
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%*()_+^&{}}:;?.]/.test(password);

    // Se qualquer pré-requisito não for atendido, exibir mensagem de erro
    const isPasswordInvalid = !isValidLength || !hasLowercase || !hasNumber || !hasUppercase || !hasSpecialChar;
    form.passwordCaracteresError().style.display = isPasswordInvalid ? "block" : "none";
}

const form = {
    email: () => document.getElementById("email"),
    ConfirmEmail: () => document.getElementById("confirmEmail"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    password: () => document.getElementById("password"),
    ConfirmPassword: () => document.getElementById("confirmPassword"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    passwordCaracteresError: () => document.getElementById("password-min-length-error"),
}