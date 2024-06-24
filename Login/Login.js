function validateFields(){
    const email = document.getElementById("email").value;
    if(!email){
        document.getElementById('recover-password-button').disabled = true;
    } else if(validateEmail(email)){
        document.getElementById('recover-password-button').disabled = false;
    }
    //pegar valor do campo de email
    //verificar se o email não é vazio e se o email é valido
    //se vdd então habilitar botao de recuperar senha
    //se falso então desabilitar botão de recuperar senha  
}
//função que peguei na net que verifica se email é válido
function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
