import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((prevActive) => {
      return prevActive === "X" ? "0" : "X";
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Shobhit"
            symbol="X"
            isActive={activePlayer === "X"}
          ></Player>
          <Player
            name="Aayushi"
            symbol="0"
            isActive={activePlayer === "0"}
          ></Player>
        </ol>
        <GameBoard onSelect={handleSelectSquare} currentSymbol={activePlayer} />
      </div>
    </main>
  );
}

export default App;
