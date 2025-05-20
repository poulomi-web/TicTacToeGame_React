import { useState } from "react";

export default function PlayerInfo({ player }) {
  const [isEditing, setIsEditing] = useState(false);
  let inputValue;

  function handleClick() {
    setIsEditing((isEditing) => !isEditing);
    const PlayerName = document.getElementById("playerInput").value;
    if (PlayerName) {
      player.name = PlayerName;
    }
  }

  if (isEditing) {
    inputValue = (
      <span>
        <input type="text" id="playerInput" placeholder="Enter your name" />
      </span>
    );
  } else {
    inputValue = <span>{player.name}</span>;
  }

  return (
    <li>
      <span className="player">
        {inputValue}
        <span className="player-symbol">{player.symbol}</span>
      </span>

      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
