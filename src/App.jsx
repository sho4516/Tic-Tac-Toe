import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurn, setGameTurn] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((prevActive) => {
      return prevActive === "X" ? "0" : "X";
    });

    setGameTurn((prev) => {
      let currPlayer = "X";

      if (prev.length > 0 && prev[0].player == "X") {
        currPlayer = "0";
      }

      return [
        { square: { row: rowIndex, col: colIndex }, player: currPlayer },
        ...prev,
      ];
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
            name="Player 2"
            symbol="0"
            isActive={activePlayer === "0"}
          ></Player>
        </ol>
        <GameBoard onSelect={handleSelectSquare} turns={gameTurn} />
      </div>
    </main>
  );
}

export default App;
