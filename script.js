const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const  textoResultado = Document.querySelector(".texto-resultado")
    
const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "o dia esta bonito hoje",
        alternativas: [
            {texto: "Sim, eu gosto",
            afirmação:"sim dia esta bonito hoje"}, 

            {texto: "Não, não gosto",
            afirmação:"Não o dia nao esta bonito hoje"}]
    },
    { 
        enunciado: "esta sol hoje",
        alternativas: [
            {texto: "Sim",
            afirmação:"esta sol hoje"}, 
                
            {texto: "Não",
            afirmação:"nao esta sol hojes"}]
    },
    { 
        enunciado: "esta calor hoje",
        alternativas: [
            {texto: "Sim",
            afirmação:"Sim,esta calor hoje"}, 
                
            {texto: "Não",
            afirmação:"nao esta calor hoje"}]
    },
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();
