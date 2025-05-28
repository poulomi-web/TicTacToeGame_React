import { useState } from "react";

export default function PlayerInfo({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  let inputValue = <span>{playerName}</span>;

  function handleClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleChangeName(event) {
    setPlayerName(event.target.value);
  }

  if (isEditing) {
    inputValue = (
      <span>
        <input
          type="text"
          id="playerInput"
          placeholder="Enter your name"
          required
          defaultValue={playerName}
          onChange={handleChangeName}
        />
      </span>
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {inputValue}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
