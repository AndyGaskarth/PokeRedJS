import rl from './input.js';
import path from 'path'; 

const pastaSave = path.join(
    process.env.APPDATA, 'pokemonJS'
);

export function novoJogo() {
    console.log('\nBem vindo ao mundo pokemon node.js, onde toda realização começou com um sonho.');
    console.log('Meu nome é Profº Anderson, é um prazer te receber nessa humilde residência.');
    console.log('Por favor, me diga: qual será seu nome?\n');

    rl.question('Insira seu nome: ', (nome) => {
        console.clear();

        console.log(`\nBem-vindo, ${nome}!`);
        console.log('=========== Pressione enter para continuar ===========\n');

        rl.question('', () => {
            console.clear();

            console.log('Neste mundo, existem pequenas criaturas chamadas Pokémon.');
            console.log('Elas podem ser companheiras, protetoras ou poderosos adversários.');
            console.log('Muitos dedicam suas vidas a estudá-las.');
            console.log('Outros buscam superar seus limites ao lado delas.');
            console.log('Agora é a sua vez de trilhar esse caminho!\n');
            console.log('=========== Pressione enter para continuar ===========\n');

            rl.question('', () => {
                console.clear();

                console.log('Escolha seu Pokémon inicial:\n');
                console.log('1. Bulbasaur');
                console.log('2. Charmander');
                console.log('3. Squirtle\n');

                rl.question('Digite o número da opção: ', (opcao) => {
                    switch(opcao){
                        case '1':
                            console.log('\nVocê escolheu o Pokémon Bulbasaur!');
                            break;
                        case '2':
                            console.log('\nVocê escolheu o Pokémon Charmander!');
                            break;
                        case '3':
                            console.log('\nVocê escolheu o Pokémon Squirtle!');
                            break;
                        default:
                            console.log('\nOpção inválida. Por favor, escolha um Pokémon válido.');
                            break;
                    }

                    rl.question('\nPressione enter para continuar...', () => {
                        console.clear();
                        console.log('Profº Anderson: Essa é uma ótima escolha!');
                        console.log('Agora você está pronto para começar sua jornada como treinador de Pokémon.');
                        console.log('Explore o mundo e capture novos Pokémon!\n');
                        rl.close();
                    });
                });
            });
        });
    });
}
