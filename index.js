const { generateNumberArray } = require("./helpers/number.js");
const { generateCardArray } = require("./helpers/card.js");

const numbers = generateNumberArray();
const cards = generateCardArray();

const generatePlayers = () => {
  const players = [];
  for (let i = 0; i < cards.length; i++) {
    players.push({
      name: `Player ${i + 1}`,
      card: cards[i],
    });
  }
  return players;
};
const players = generatePlayers();


const getWinner = (players, numbers) => {
  let counter = 0;
  let newPlayers = [];

  //   formateando el arreglo de números por cartilla de cada jugador
  players.map((player) => {
    let playerNumbers = [];
    player.card.map((e) => {
      e.map((a) => {
        playerNumbers.push(a);
      });
    });
    newPlayers.push({
      name: player.name,
      playerNumbers,
    });
  });

  //   iteramos numero por numero y lo comparamos con los números de cada jugador

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < newPlayers.length; j++) {
      if (newPlayers[j].playerNumbers.includes(numbers[i])) {
        counter++;
        console.log(
          `el arreglo ${newPlayers[j].playerNumbers} SI incluye el numero ${numbers[i]}`
        );
        console.log(`y counter es ${counter}`);
      } else {
        console.log(
          `el arreglo ${newPlayers[j].playerNumbers} NO incluye el numero ${numbers[i]}`
        );
        console.log(`y counter es ${counter}`);
      }

      //   al tener 25 coincidencias ya habbrá llenado su cartilla y ganado el juego
      if (counter == 25) {
        var winner = newPlayers[j];
        console.log(
          `el ganador es = ${newPlayers[j].name} y sus numeros son ${newPlayers[j].playerNumbers}`
        );
        console.log(winner);
        return winner;
      }
    }
  }
};

getWinner(players, numbers);

module.exports = {
  getWinner,
  generatePlayers
};
