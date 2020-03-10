/* Neste exemplo, veremos como é criado um Tipo Abstrato de Dado em JavaScript.
 * Os TADs são compostos de:
 * - Estrutura: definida através de objeto JSON;
 * - Operações: definidas por funções;
 * 
 * Nosso exemplo será: um Vídeo
 * 
 * Em um vídeo, temos uma sequência de fotografias, 30 por segundo.
 * Cada fotografia é composta de uma matriz de pontos (Full HD por exemplo:
 * 1920 colunas x 1080 linhas = 2.073.600 pontos).
 * Cada ponto é composto por um feixe luminoso de 3 cores diferentes:
 * Vermelho, Verde e Azul.
 * Cada uma dessas cores possui até 256 tons diferentes (entre 
 * completamente aceso e completamente apagado).
 * 
 */

// Vamos associar ao tom da cor um número que vai de 0-255:

var vermelho = 10;
var verde = 20;
var azul = 30;

// Para cada ponto, devemos ter as 3 cores:

// Aqui estamos criando uma estrutura usando JSON.

var ponto = {
    vermelho: 10,
    verde: 20,
    azul: 30
}

// Agora vamos para a fotografia, que tem 2 milhões de pontos:

var fotografia = {
    pontos: [
     [ponto,ponto,ponto,ponto,{vermelho:30,verde:25,azul:5},{},/* ... */, ponto /* coluna 1920 */], // linha 1
     [ponto,ponto,ponto,ponto,{vermelho:30,verde:25,azul:5},{},], // linha 2
     // ...
     [], // linha 1080
    ]
}

// O vídeo consiste de um conjunto de fotografias, e tem uma duração:

var video = {
    fotografias: [
        fotografia,
        fotografia,
        fotografia,
        fotografia,
        fotografia,
        fotografia,
        fotografia,
    ],
    duracao: 10,
}












