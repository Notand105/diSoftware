import FachadaJuego from './fachadaJuego'

//para leer desde terminal
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'


let disparos: number = 0
const Game = new FachadaJuego()

// Función principal asincrónica para el juego
async function main() {
  while (Game.ganar()) {
    await readInput(); // Esperar a que el usuario ingrese la cantidad de disparos
  }
}

async function readInput() {
  const rl = readline.createInterface({ input, output });
  const answer = await rl.question('Cantidad de disparos ');

  let number: number = parseInt(answer, 10);
  disparos = number;
  console.log(`disparos: ${disparos}`);

  for (let i = 0; i < disparos; i++) {
    Game.destruir()
  }
  Game.crear()
  Game.cantidadMarcianos()

  rl.close();
}

// Iniciar el juego
main().catch((error) => {
  console.error(`Error: ${error}`);
});

