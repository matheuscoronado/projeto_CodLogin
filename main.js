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

// Cria variável do tipo array
var dadosLista = [];

function salvarUser(){
    let nameUser = document.getElementById("nameUser").value;

    if(nameUser){
        dadosLista.push(nameUser);
        console.log(dadosLista);
        criaLista(); // Chama a função para preencher a lista de cadastro
        document.getElementById("nameUser").value = ""; // Limpa o campo após o cadastro
    }
    else{
        alert("Favor informar um nome para o cadastro!");
    }
}

// Função para preencher a lista de cadastro

function criaLista(){
    let tabela = "<tr><td>Nome</th><th>Ações</td></tr>";
    for(let i = 0; i <= dadosLista.length-1; i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-warning'>Editar</button><button class='btn btn-danger'>Excluir</button></td></tr>";
        document.getElementById("tabela").innerHTML = tabela;
    }
}