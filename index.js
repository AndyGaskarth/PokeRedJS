import rl from './app/input.js';
import { novoJogo } from './app/novoJogo.js'

function menuInicial() { 

console.log('==Bem vindo ao pokemonJS==')
console.log('= 1. New Game =')
console.log('= 2. Continue =')
console.log('=  3. Opções  =')
console.log('=   0. Sair   =')

    rl.question('Escolha uma opção: ', (opcao) => {
        switch(opcao){
            case '1':
                console.log('\nIniciando novo jogo...');
                return novoJogo();
            case '2':
                console.log('\nContinuar jogo...');
                break;
            case '3':
                console.log('\nAbrindo opções...');
                break;
            case '0':
                console.log('\nEncerrando jogo...');
                break;
        }

        rl.close();
    })

}

menuInicial();