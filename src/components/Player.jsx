import { useState } from "react";

export default function Player({ name, symbol, isActive, onNameChange }) {
  const [isEditing, setisEditing] = useState(false);
  const [inputText, setInputText] = useState(name);
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing && (
          <input
            type="text"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          ></input>
        )}
        {!isEditing && <span className="player-name">{inputText}</span>}
        <span className="player-symbol">{symbol}</span>
        <button
          onClick={() => {
            setisEditing((edit) => !edit);
            if (isEditing) {
              onNameChange(symbol, inputText);
            }
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </span>
    </li>
  );
}
