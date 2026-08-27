import rl from './input.js';
import path from 'path'; 

const pastaSave = path.join(
    process.env.APPDATA, 'pokemonJS'
);

//console.log(pastaSave)

export function novoJogo() {
    console.log('Bem vindo ao mundo pokemon node.js, onde toda realização começou com um sonho.\nMeu nome é Prof° Anderson, é um prazer te receber nessa humilde residencia, por favor me diga, qual seu nome?')
    rl.question('Insira seu nome: ', (nome) => {

        console.clear();

        console.log(`Bem-vindo, ${nome}!`);

        rl.question('', () =>{

            console.clear();

            console.log('Neste mundo, existem pequenas criaturas chamadas pokemon.\nEssas criaturas podem ser companheiras, protetoras ou poderosos adversários.')
            console.log('Muitods dedicam suas vidas a estudá-las.\nOutros buscam superar seus limites ao lados delas.')
            console.log('Agora é a sua ve de trilhar esse caminho.')

            rl.question('Qual pokemon inicial você irá escolher para ser teu companheiro?')

        });
        
            
    });
}

