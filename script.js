const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você gosta da Inteligência Artificial?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Afirmação da alternativa 1"
        },
        {
            texto: "Não",
            afirmação: "Afirmação da alternativa"
        }
        ]
    },
    {
        enunciado: "voce utiliza o IA",
        alternativas: [{
            texto: "talvez",
            afirmação: "Afirmação da alternativa 1"
        },
        {
            texto:"quem sabe",
            afirmação:"Afirmação da alternativa 2"
        }
        ]
    },
    {
        enunciado: "o IA e util para voce",
        alternativas: [{
            texto: "Sim",
            afirmação: "Afirmação da alternativa 1"
        },
        {
            texto: "Não",
            afirmação: "Afirmação da alternativa"
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let resostas ="";


function mostraPergunta() {
    if (posicao>=perguntaAtual.length){
    mostraresultado();
    return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent=" ";
    mostraAlternativas();
}
function mostraAlternativas() {}
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", ()=> respostaselecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
function respostaselecionadas(opçaoselecionada){
    const afirmaçoes = opçaoselecionada.afirmação;
    respostas += afirmaçoes +"";
    posicao++;
    mostraPergunta();
        }
 function mostraresultado(){
    caixaPergunta.textContent="daqui a 20 anos..."
    textoresultado.textContent=resostas;
    caixaAlternativa.textContent="";
 }
mostraPergunta();

