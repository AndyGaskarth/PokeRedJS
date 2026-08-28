import rl from './input.js';

export function menuTreinador() {
    const menuTexto = `
=== Menu do Treinador ===
1. Meu time
2. Itens
3. Pokédex
4. Salvar
5. Sair

Selecione a opção do menu: `;

    rl.question(menuTexto, (opcao) => {
        switch(opcao){
            case '1':
                console.log('\nVocê abriu seu time de Pokémon.');
                break;
            case '2':
                console.log('\nVocê abriu sua mochila de itens.');
                break;
            case '3':
                console.log('\nVocê consultou sua Pokédex.');
                break;
            case '4':
                console.log('\nJogo salvo com sucesso!');
                break;
            case '5':
                console.log('\nSaindo do menu...');
                rl.close();
                return;
            default:
                console.log('\nOpção inválida.');
                break;
        }

        rl.question('\nPressione enter para voltar ao menu...', () => {
            menuTreinador(); // volta ao menu
        });
    });
}
