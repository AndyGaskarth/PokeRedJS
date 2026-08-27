import rl from './input.js';

export function novoJogo() {
    rl.question('Insira seu nome: ', (nome) => {
        console.log(`Bem-vindo, ${nome}!`);
    });
}