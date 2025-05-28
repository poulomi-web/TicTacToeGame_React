// import { useState } from "react";

export default function GameBoard({ onButtonSelect, turns, gameState }) {
  // const [gameState, setgameState] = useState(gameArray);

  // function handleClick(rowIndex, cellIndex) {
  //   const updatedGameState = [...gameState];
  //   updatedGameState[rowIndex][cellIndex] = activePlayerSymbol; // or "O" based on the current player
  //   setgameState(updatedGameState);

  //   onButtonSelect();
  // }

  return (
    <ol id="game-board">
      {gameState.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, cellIndex) => (
              <li key={cellIndex}>
                <button
                  onClick={() => onButtonSelect(rowIndex, cellIndex)}
                  disabled={cell != null}
                >
                  {cell}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
