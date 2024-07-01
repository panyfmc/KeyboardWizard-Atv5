//função que verifica se email é válido para o campo(expressões regulares)
function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

