const perguntas = [
    {
        pergunta: "Pergunta 1: Qual foi o nosso primeiro encontro?",
        opcoes: ["Okawari", "McDonalds", "Burguer King", "Bob's"],
        resposta: "Okawari"
    },
    {
        pergunta: "Pergunta 2: Qual é o programa de TV ou série favorita do seu parceiro?",
        opcoes: [" Game of Throne", "Friends", "How i met your mother", "Stranger Things"],
        resposta: "How i met your mother"
    },
    {
        pergunta: "Pergunta 3: Quem é mais bagunceiro(a) em casa?",
        opcoes: ["Você", "Seu Parceiro", "Os dois", "Nenhum dos dois"],
        resposta: "Você"
    }
];

let pergunta_atual = 0;
let pontuacao = 0;

const pergunta_texto = document.getElementById("pergunta_texto");
const opcoes_container = document.getElementById("opcoes_container");
const proxima_pergunta = document.getElementById("proxima_pergunta");
const valor_score = document.getElementById("valor_score");

proxima_pergunta.addEventListener("click", () => proximaPergunta());

function carregar_pergunta() {
    const pergunta_atual_obj = perguntas[pergunta_atual];
    pergunta_texto.textContent = pergunta_atual_obj.pergunta;

    opcoes_container.innerHTML = "";
    pergunta_atual_obj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        botao.classList.add("opcao");
        botao.addEventListener("click", () => verificar_resposta(opcao, botao));
        opcoes_container.appendChild(botao);
    });
}

function verificar_resposta(opcao_selecionada, botao) {
    const pergunta_atual_obj = perguntas[pergunta_atual];
    if (opcao_selecionada === pergunta_atual_obj.resposta) {
        pontuacao++;
        botao.style.backgroundColor = "green"; // Resposta correta
    } else {
        botao.style.backgroundColor = "red"; // Resposta incorreta
    }
    valor_score.textContent = pontuacao;
    // Desativar os botões após a resposta ser selecionada
    const botoes = document.querySelectorAll(".opcao");
    botoes.forEach(b => b.disabled = true);
}

function proximaPergunta() {
    pergunta_atual++;
    if (pergunta_atual < perguntas.length) {
        carregar_pergunta();
    } else {
        // Aqui você pode fazer algo quando todas as perguntas forem respondidas
        alert("Quiz concluído! Pontuação: " + pontuacao);
    }
}

// Carregar a primeira pergunta ao carregar a página
carregar_pergunta();
