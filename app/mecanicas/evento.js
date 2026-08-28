import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const pastaDados = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../data');
const pokemons = JSON.parse(fs.readFileSync(path.join(pastaDados, 'pokemon.json'), 'utf8'));
const mapas = JSON.parse(fs.readFileSync(path.join(pastaDados, 'mapa.json'), 'utf8'));
const treinadores = JSON.parse(fs.readFileSync(path.join(pastaDados, 'treinadores.json'), 'utf8'));



export function encontro(local = 'Rota 1', aoFinalizar) {
    const chance = Math.random();
    if (chance < 0.2) {
        const treinador = treinadores[Math.floor(Math.random() * treinadores.length)];
        console.log(`\nVocê encontrou o treinador ${treinador.nome}!`);
        console.log(`Ele possui os seguintes Pokémon: ${treinador.time.join(', ')}`);
    } else if (chance < 0.8) {
        const rota = mapas[local];
        const nomeEscolhido = rota.pokemons[Math.floor(Math.random() * rota.pokemons.length)];
        
        const escolhido = pokemons.find(p => p.nome === nomeEscolhido);
        const nivel = Math.floor(Math.random() * (rota.nivelMax - rota.nivelMin + 1)) + rota.nivelMin;
        
        console.log(`\nVocê encontrou um Pokémon selvagem: ${escolhido.nome}!`);
        console.log(`Nível: ${nivel}`);
    } else {
        console.log('\nVocê não encontrou nada de interessante.');
        aoFinalizar?.();
    }
}
