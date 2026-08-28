import rl from './input.js';
import { menuTreinador } from './treinador.js';
import { encontro } from './mecanicas/evento.js';


//console.log('=== Menu de Exploração ===');
//console.log('1. Explorar');
//console.log('2. Avançar rota.');
//console.log('3. Retornar Rota.');
//console.log('4. Menu');

// Com as crases ( ` `) você pode criar strings multilinha, o que é útil para menus ou mensagens longas. Aprendi isso agora = shif + ` (crase) no teclado, e você pode digitar o texto normalmente, sem precisar de concatenação ou caracteres especiais para pular linhas. 

const textoMenuExploracao = `
=== Menu de Exploração ===
O que deseja fazer?
1. Explorar.
2. Avançar rota.
3. Retornar Rota.
4. Menu.

`

export function menuExploracao() {
    rl.question(textoMenuExploracao, (opcao) => {
        switch(opcao){
            case '1':
                console.log('1. Explorar');
                return encontro('Rota 1', menuExploracao);
            case '2':
                console.log('2. Avançar rota.');
                break;
            case '3':
                console.log('3. Retornar Rota.');
                break;
            case '4':
                console.log('4. Menu');
                return menuTreinador();
            default:
                return menuExploracao();
        }
    });
}

menuExploracao();