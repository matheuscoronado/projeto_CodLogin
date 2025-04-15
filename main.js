// Implementa acesso para a tela de Login
function acessar(){
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

    // Implementa estrutura que testa se todos os campos foram preenchidos
    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos!");
        return;
    }
    else{
        window.location.href = "cadastro.html";
    }
}