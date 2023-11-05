import Computadora from './Computadora'
import Jugador from './Jugador'
import Marcianos from './Marcianos'


//para leer desde terminal
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

let marcianos: Marcianos = Marcianos.getMarcianos()
let computadora: Computadora = new Computadora()
let jugador: Jugador = new Jugador()

let disparos: number = 0

// Función principal asincrónica para el juego
async function main() {
  while (marcianos.cuantosQuedan(false) > 0) {
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
    jugador.destruirMarciano();
  }
  computadora.crearMarcianos();
  marcianos.cuantosQuedan(true);

  rl.close();
}

// Iniciar el juego
main().catch((error) => {
  console.error(`Error: ${error}`);
});

