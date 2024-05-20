import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function deriveCurrentPlayer(gameTurn) {
  let currPlayer = "X";

  if (gameTurn.length > 0 && gameTurn[0].player == "X") {
    currPlayer = "0";
  }

  return currPlayer;
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);

  const activePlayer = deriveCurrentPlayer(gameTurn);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurn((prev) => {
      let currPlayer = deriveCurrentPlayer(prev);

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
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
