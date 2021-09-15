const prompt = require (`prompt-sync`) ();

class Principal {

    constructor () {

        this.higiene = 0;
        this.alimentacao = 0;
        this.saude = 0;
        this.dinheiro = 0;

    }

}

class Personagem extends Principal {

    constructor (higiene, alimentacao, saude, dinheiro) {

        super (higiene, alimentacao, saude, dinheiro);
        this.nome = ``;
                
    }

}

let pessoa = new Personagem ();

function higiene () {

    pessoa.higiene = pessoa.higiene + 3;
    pessoa.alimentacao = pessoa.alimentacao - 1;
    pessoa.saude = pessoa.saude + 2;
    pessoa.dinheiro = pessoa.dinheiro - 1;

}

function alimentacao () {

    pessoa.higiene = pessoa.higiene - 1;
    pessoa.alimentacao = pessoa.alimentacao + 3;
    pessoa.saude = pessoa.saude + 2;
    pessoa.dinheiro = pessoa.dinheiro - 1;

}

function exercicio () {

    pessoa.higiene = pessoa.higiene - 2;
    pessoa.alimentacao = pessoa.alimentacao - 1;
    pessoa.saude = pessoa.saude + 3;
    pessoa.dinheiro = pessoa.dinheiro - 1;

}

function trabalho () {

    pessoa.higiene = pessoa.higiene - 1;
    pessoa.alimentacao = pessoa.alimentacao + 3;
    pessoa.saude = pessoa.saude - 1;
    pessoa.dinheiro = pessoa.dinheiro + 3;

}

function resultado () {

    console.log (`\n${pessoa.nome}, você teve ${pessoa.higiene} pontos de higiene, ${pessoa.alimentacao} pontos de alimentação, ${pessoa.saude} pontos de saúde e ${pessoa.dinheiro} pontos de dinheiro`);

    console.log (`\n${pessoa.nome}, sua nota final foi ${soma}`);

    if (pessoa.higiene > 0 && pessoa.alimentacao > 0 && pessoa.saude > 0 && pessoa.dinheiro > 0) {

        console.log (`\nParabéns ${pessoa.nome}, você venceu o jogo`);

    } else {

        console.log (`\nQue pena ${pessoa.nome}, não foi dessa vez!`)
    }
}

let jogar = 1;
let soma = (pessoa.higiene + pessoa.alimentacao + pessoa.saude + pessoa.dinheiro);

console.log ();
pessoa.nome = String (prompt (`Digite o seu nome: `));

console.log (`\nOlá ${pessoa.nome}\nEsse jogo tem a intenção de testar a sua sorte\nVocê só vence se tiver todos os status positivos\n\nVAMOS JOGAR!`);

while (jogar != 0) {
    
    // Rodada 1
    console.log (`\nVocê acabou de acordar... Qual a sua rotina diária?\n[1] Tomar banho e escovar os dentes\n[2] Tomar café da manhã\n[3] Se exercitar\n[4] Ir trabalhar\n[0] SAIR`);
    jogar = +prompt (`Faça a sua escolha: `);

    if (jogar == 1) {

        console.log (`A higiene é muito importante`);
        higiene ();
        
    }

    if (jogar == 2) {

        console.log (`Alimentação nos mantem firmes`);
        alimentacao ();
        
    }

    if (jogar == 3) {

        console.log (`Ah, o supino de cada dia`);
        exercicio ();
        
    }

    if (jogar == 4) {

        console.log (`O trabalho engorda o bolso e as vontades`);
        trabalho ();
        
    }

    // Rodada 2
    console.log (`\nA manhã tem um sol lindo... Qual a sua rotina diária?\n[1] Fujo para não suar\n[2] Tomo um copão de suco para refrescar\n[3] Aproveito para limpar o quintal\n[4] Compro picolés para revender\n[0] SAIR`);
    jogar = +prompt (`Faça a sua escolha: `);

    if (jogar == 1) {

        console.log (`Nada de queimaduras de 3° grau`);
        higiene ();

    }

    if (jogar == 2) {

        console.log (`Ahhhh, que delícia de suco`);
        alimentacao ();
        
    }

    if (jogar == 3) {

        console.log (`Pronto, limpo e organizado`);
        exercicio ();
        
    }

    if (jogar == 4) {

        console.log (`Não sobrou nenhum picolé`);
        trabalho ();
        
    }

    // Rodada 3
    console.log (`\nQuase hora do almoço... Qual a sua rotina diária?\n[1] Lavo o rosto e as mãos... Cuidado com o Covid\n[2] Hora de correr para o restaurante\n[3] Comer engorda, bora fazer regime\n[4] Ainda bem que tenho um restaurante\n[0] SAIR`);
    jogar = +prompt (`Faça a sua escolha: `);

    if (jogar == 1) {

        console.log (`A higiene é muito importante`);
        higiene ();

    }

    if (jogar == 2) {

        console.log (`Cheguei antes da fila`);
        alimentacao ();
        
    }

    if (jogar == 3) {

        console.log (`Secando a barriga`);
        exercicio ();
        
    }

    if (jogar == 4) {

        console.log (`Depois vou ter que lavar os pratos`);
        trabalho ();
        
    }

    // Rodada 4
    console.log (`\nBarriga cheia, bate um soninho... Qual a sua rotina diária?\n[1] Jogo água na cara e está tudo bem\n[2] Tomo um cafézinho\n[3] Descanso por 15 minutos\n[4] Fico acordado\n[0] SAIR`);
    jogar = +prompt (`Faça a sua escolha: `);

    if (jogar == 1) {

        console.log (`Água no rosto, DISPERTADO!`);
        higiene ();

    }

    if (jogar == 2) {

        console.log (`A cafeína de cada dia`);
        alimentacao ();
        
    }

    if (jogar == 3) {

        console.log (`Cuidar da alma também é saudável`);
        exercicio ();
        
    }

    if (jogar == 4) {

        console.log (`Fiquei com sono, mas ganhei dinheiro`);
        trabalho ();
        
    }

    // Rodada 5
    console.log (`\nSua empresa recebe várias encomendas a tarde... Qual a sua rotina diária?\n[1] Uso luvas para me proteger\n[2] Tomo muita água para não ficar desidratado depois\n[3] Vou com tudo\n[4] Delego aos meus funcionários\n[0] SAIR`);
    jogar = +prompt (`Faça a sua escolha: `);

    if (jogar == 1) {

        console.log (`Minhas mãos estão protegidas`);
        higiene ();

    }

    if (jogar == 2) {

        console.log (`Suando, mas hidratado`);
        alimentacao ();
        
    }

    if (jogar == 3) {

        console.log (`Depois desse trabalho, vou ficar fortinho`);
        exercicio ();
        
    }

    if (jogar == 4) {

        console.log (`Sou um empreendedor organizado`);
        trabalho ();
        
    }

    // Rodada 6
    console.log (`\nQuase na hora de acabar o espediente e ainda tem trabalho... Qual a sua rotina diária?\n[1] Organizo tudo\n[2] Peço uma pizza, pois vai demorar\n[3] Faço o trabalho pesado\n[4] Pago hora extra para todo mundo\n[0] SAIR`);
    jogar = +prompt (`Faça a sua escolha: `);

    if (jogar == 1) {

        console.log (`O dia começa, o dia termina`);
        higiene ();

    }

    if (jogar == 2) {

        console.log (`Carboidratos recarregados`);
        alimentacao ();
        
    }

    if (jogar == 3) {

        console.log (`Não deixo nada para trás`);
        exercicio ();
        
    }

    if (jogar == 4) {

        console.log (`A folha de pagamento desse mês vai ser alta`);
        trabalho ();
        
    }

    // Rodada 7
    console.log (`\nO expediente finalmente acabou... Qual a sua rotina diária?\n[1] Direto para casa tomar banho\n[2] Hora do Happy Hour\n[3] Academia que me aguarde\n[4] Fico na empresa planejando o dia de amanhã\n[0] SAIR`);
    jogar = +prompt (`Faça a sua escolha: `);

    if (jogar == 1) {

        console.log (`Agora sim, LIMPO`);
        higiene ();

    }

    if (jogar == 2) {

        console.log (`Nutrindo as amizades`);
        alimentacao ();
        
    }

    if (jogar == 3) {

        console.log (`Sem dor, sem ganho!`);
        exercicio ();
        
    }

    if (jogar == 4) {

        console.log (`Dedicação acima de tudo`);
        trabalho ();
        
    }

    // Rodada 8
    console.log (`\nFinalmente em casa... Qual a sua rotina diária?\n[1] Me lavo para fazer a janta\n[2] Peço um belo de jantar\n[3] Uma caminhada para relaxar do dia cheio\n[4] Ler um belo de livro\n[0] SAIR`);
    jogar = +prompt (`Faça a sua escolha: `);

    if (jogar == 1) {

        console.log (`Cozinheiro limpo MODE ON`);
        higiene ();

    }

    if (jogar == 2) {

        console.log (`iFoodddddddd`);
        alimentacao ();
        
    }

    if (jogar == 3) {

        console.log (`Caminhando que se acalma, mais tempo para pensar na vida`);
        exercicio ();
        
    }

    if (jogar == 4) {

        console.log (`O trabalho nunca acaba`);
        trabalho ();
        
    }

    // Rodada 9
    console.log (`\nChegou a hora de deitar... Qual a sua rotina diária?\n[1] Tomar banho e escovar os dentes\n[2] Tomar um chá\n[3] Alongamento para esticar o esqueleto\n[4] Enviar o último e-mail\n[0] SAIR`);
    jogar = +prompt (`Faça a sua escolha: `);

    if (jogar == 1) {

        console.log (`A higiene é muito importante`);
        higiene ();

    }

    if (jogar == 2) {

        console.log (`Pronto, barriga quentinha`);
        alimentacao ();
        
    }

    if (jogar == 3) {

        console.log (`Cada músculo no seu lugar`);
        exercicio ();
        
    }

    if (jogar == 4) {

        console.log (`Segue anexo!`);
        trabalho ();
        
    }

    // Rodada 10
    console.log (`\nE nos seus sonhos?\n[1] Trabalho na Oral B\n[2] Sou padeiro\n[3] Ergo meu troféu de bombado\n[4] Sou um empreendedor de sucesso\n[0] SAIR`);
    jogar = +prompt (`Faça a sua escolha: `);

    if (jogar == 1) {

        console.log (`Dentes sempre brancos`);
        higiene ();

    }

    if (jogar == 2) {

        console.log (`Pão sempre fresquinho`);
        alimentacao ();
        
    }

    if (jogar == 3) {

        console.log (`Sou um atléta olímpico`);
        exercicio ();
        
    }

    if (jogar == 4) {

        console.log (`A Tesla será minha`);
        trabalho ();
        
    }

    jogar = 0;
        
}
resultado ();

console.log (`\nO JOGO ACABOU`);