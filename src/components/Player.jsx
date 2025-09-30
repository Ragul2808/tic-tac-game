import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  function handleEditClick() {
    setEditing(prev => !prev);
  }

  function handleChange(event) {
    setEditedName(event.target.value);
  }

  let playerName = <span className="player-name">{editedName}</span>;

  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={editedName}
        onChange={handleChange}
      />
    );
  }

  return (
    <li>
      <span className="player-info">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
