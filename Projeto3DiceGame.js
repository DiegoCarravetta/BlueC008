/* -------------------------------------------------------

Projeto 03 - Dice Game
Data de entrega: 4 de set. 23:59

Utilizando os conceitos aprendidos até objetos, crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.

O programa tem que:
• Perguntar quantas rodadas você quer fazer; (1,0 ponto)
• Perguntar quantos jogadores vão jogar; (1,5 pontos)
• Criar um objeto pra cada jogador com nome e número tirado; (1,5 pontos)
• Guarda todos os objetos em uma lista; (2,0 pontos)
• Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado. (2,0 pontos)
• Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão. (2,0 pontos)

--------------------------------------------------------*/

console.log("Vamos jogar os dados e ver qual jogador ganhará!");

// Perguntar quantas rodadas você quer fazer; (1,0 ponto)
let rodadas = +prompt ("\nDigite o número de rodadas: ");

// Perguntar quantos jogadores vão jogar; (1,5 pontos)
let jogadores = +prompt ("\nDigite o número de jogadores: ");

// Criar um objeto pra cada jogador com nome e número tirado; (1,5 pontos)
var lista = [];
var maior = 0;
var contador = 0;

for (let i = 0; i < rodadas; i++) {

  for (let i = 0; i < jogadores; i++) {

    let objeto = {};

    objeto.nome = prompt ("\nDigite o seu nome: ");
    objeto.dado = Math.floor (Math.random () *6+1);
  
    // Guarda todos os objetos em uma lista; (2,0 pontos)
    lista.push (objeto);

    if (maior < lista[contador].dado) {

      maior = lista[contador].dado;
      vencedor = lista[contador].nome;

    }

  }

  // Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado. (2,0 pontos)
  lista.sort(function(a, b) {
    return a.dado - b.dado; // ordena de forma decrescente
  })

  lista.reverse();

  console.log (`\nA pessoa vencedora dessa rodada é ${lista[0].nome}`);

}

console.log ("\nSegue a oderdem dos dados de maior para menor:");
console.log (lista);

// Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão. (2,0 pontos)
console.log ("\nO grande vencedor das rodadas foi: " + vencedor);

console.log ("\nAté mais!")