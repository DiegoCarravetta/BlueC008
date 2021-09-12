/* PROJETO 4 - ELEIÇÃO

A ideia deste projeto é criar um programa que simule uma votação

O programa tem que:
    1) Receber votos até que o usuário diga que não tem mais ninguém para votar; (1,0 ponto)

    2) Ter uma função chamada "autorizavoto (anonascimento)"" retornando: "Negado`, "Opcional"  ou "Obrigatório"; (2,0 pontos)

    3) Ter uma função chamada "votacao (autorizacao, voto)"" que valida e contabiliza o voto (número entre 1 e 5) ou retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado; (2,0 pontos)

    4) Contabilizar os votos de acordo com os significados (3,0 pontos):
        1 = Candidato1;
        2 = Candidato2;
        3 = Candidato3;
        4 = VotoNulo;
        5 = VotoBranco;

5) Ter uma função chamada exibirresultados() que deve mostrar: (2,0 pontos)
    - O total de votos para cada candidato;
    - O total de votos nulos;
    - O total de votos em branco;
    - Qual candidato venceu a votação; */

    const prompt = require (`prompt-sync`) ();

    /* 1) Receber votos até que o usuário diga que não tem mais ninguém para votar; (1,0 ponto) */
    
    let voto = 0;
    let listaVoto = [];
    let decisao = 0;
    let idade = 0;
    let ano;
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let votoNulo = 0;
    let votoBranco = 0;
    
    /* 2) Ter uma função chamada "autorizavoto (anonascimento)" retornando: "Negado`, "Opcional"  ou "Obrigatório"; (2,0 pontos) */
    
    function autorizaVoto (ano) {
    
        idade = 2021 - ano;
    
        if (idade < 16) {
    
            return `NEGADO`;
    
        }
    
        if (idade >= 18) {
    
            return `OBRIGATÓRIO`;
    
        } else {
    
            return `OPICIONAL`;
    
        }
    
    }
    
    /* 3) Ter uma função chamada "votacao (autorizacao, voto)" que valida e contabiliza o voto (número entre 1 e 5) ou retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado; (2,0 pontos)*/
    
    function votacao (autorizacao, voto) {
    
        if (autorizacao == `NEGADO`) {
            
            console.log (`Você não pode votar e não será contabilizado`);
    
        } else {
    
            listaVoto.push (voto);
    
            /* 4) Contabilizar os votos de acordo com os significados (3,0 pontos):
            1 = Candidato1;
            2 = Candidato2;
            3 = Candidato3;
            4 = VotoNulo;
            5 = VotoBranco; */
    
            if (voto == 1) {
    
                candidato1++;
    
            }
    
            if (voto == 2) {
    
                candidato2++;
    
            }
    
            if (voto == 3) {
    
                candidato3++;
    
            }
    
            if (voto == 4) {
    
                votoNulo++;
    
            }
    
            if (voto == 5) {
    
                votoBranco++;
    
            }
    
        }
    
    }
    
    /* 5) Ter uma função chamada exibirresultados() que deve mostrar: (2,0 pontos)
        - O total de votos para cada candidato;
        - O total de votos nulos;
        - O total de votos em branco;
        - Qual candidato venceu a votação; */
    
    function exibirResultados () {
    
        console.log (`\nO candidato 1 teve ${candidato1} votos\nO candidato 2 teve ${candidato2} votos\nO candidato 3 teve ${candidato3} votos`);
    
        console.log (`\nForam um total de ${votoNulo} votos nulos`);
    
        console.log (`\nForam um total de ${votoBranco} votos brancos`);
    
        if (candidato1 > candidato2 && candidato1 > candidato3) {
    
            console.log (`\nO Candidato 1 venceu a eleição`);
    
        }
    
        if (candidato2 > candidato1 && candidato2 > candidato3) {
    
            console.log (`\nO Candidato 2 venceu a eleição`);
            
        }
    
        if (candidato3 > candidato1 && candidato3 > candidato2) {
    
            console.log (`\nO Candidato 3 venceu a eleição`);
            
        } else {
    
            console.log (`\nHouve empate técnico, vamos comer pizza!`);
            
        }
    
    }
    
    do {
    
        console.log ();
        ano = +prompt (`Digite seu ano de nascimento: `);
        let autorizacao = autorizaVoto (ano);
        
        console.log ();
        console.log (`Digite [1] para escolher o Candidato 1\nDigite [2] para escolher o Candidato 2\nDigite [3] para escolher o Candidato 3\nDigite [4] para anular o voto\nDigite [5] para escolher votar em branco\n`);
        voto = +prompt (`Faça sua escolha: `);
    
        votacao (autorizacao, voto);
        
        console.log (`\nDigite [1] para votar\nDigite [2] para sair`);
        decisao = +prompt (`Faça sua escolha: `);
    
    } while (decisao != 0);
    
    exibirResultados ();