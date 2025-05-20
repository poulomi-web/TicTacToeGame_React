import PlayerInfo from "./Components/PlayerInfo";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo player={{ name: "Player 1", symbol: "X" }} />
          <PlayerInfo player={{ name: "Player 2", symbol: "0" }} />
        </ol>
        GAME LOG
      </div>
    </main>
  );
}

export default App;
