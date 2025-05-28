import PlayerInfo from "./Components/PlayerInfo";
import GameBoard from "./Components/GameBoard";
import { useState } from "react";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const gameArray = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let activePlayer = "X";

  if (gameTurns.length != 0) {
    activePlayer = gameTurns[0].player === "X" ? "0" : "X";
  }
  return activePlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  let winner;

  let currentPlayer = deriveActivePlayer(gameTurns);

  const gameState = [...gameArray];

  for (const turn of gameTurns) {
    const { pos, player } = turn;
    const { row, col } = pos;
    gameState[row][col] = player;
  }

  console.log("gameState is ", gameState);
  console.log("gameTurns is ", gameTurns);
  for (const combination of WINNING_COMBINATIONS) {
    const firstPosition = gameState[combination[0].row][combination[0].column];
    const secondPosition = gameState[combination[1].row][combination[1].column];
    const thirdPosition = gameState[combination[2].row][combination[2].column];

    if (
      firstPosition &&
      firstPosition === secondPosition &&
      firstPosition === thirdPosition
    ) {
      winner = firstPosition;
    }
  }

  function handleActivePlayer(rowIndex, colIndex) {
    const newPosObj = {
      pos: { row: rowIndex, col: colIndex },
      player: currentPlayer,
    };

    setGameTurns((prevGameTurn) => [newPosObj, ...prevGameTurn]);
  }

  return (
    <main>
      <div id="game-container">
        {winner && <p>{winner} won!</p>}
        <ol id="players" className="highlight-player">
          <PlayerInfo
            initialName="Player 1"
            symbol="X"
            isActive={currentPlayer === "X"}
          />
          <PlayerInfo
            initialName="Player 2"
            symbol="0"
            isActive={currentPlayer === "0"}
          />
        </ol>
        <GameBoard
          onButtonSelect={handleActivePlayer}
          turns={gameTurns}
          gameState={gameState}
        />
      </div>
      <Log logDetails={gameTurns} />
    </main>
  );
}

export default App;
