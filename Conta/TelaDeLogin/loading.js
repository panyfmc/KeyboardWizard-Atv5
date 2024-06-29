//função que desenha o elemento de carregamento na tela
function showLoading() {
    //desenho do backGround
    const div = document.createElement("div");
    div.classList.add("loading");
    //desenho do texto
    const label = document.createElement("label");
    label.innerText = "Carregando...";

    div.appendChild(label);

    document.body.appendChild(div);
}

//função que remove o elemento da tela
function hideLoading() {
    const loadings = document.getElementsByClassName("loading");
    if (loadings.length) {
        loadings[0].remove();
    }
}