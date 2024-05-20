import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./WinningCombinations";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveCurrentPlayer(gameTurn) {
  let currPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player == "X") {
    currPlayer = "0";
  }
  return currPlayer;
}

function gerWinner(gameBoard) {
  let winner = null;
  for (let combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol
    ) {
      if (firstSquareSymbol != null) {
        winner = firstSquareSymbol;
      } else {
        winner = null;
      }
    } else {
      winner = null;
    }

    if (!winner) {
      continue;
    } else {
      return winner;
    }
  }
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const gameBoard = [...initialGameBoard.map((item) => [...item])];
  let winner = null;

  const activePlayer = deriveCurrentPlayer(gameTurn);

  for (let turn of gameTurn) {
    const { square, player } = turn;
    const { col, row } = square;
    gameBoard[row][col] = player;
  }

  winner = gerWinner(gameBoard);
  const hasDraw = gameTurn.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurn((prev) => {
      let currPlayer = deriveCurrentPlayer(prev);

      return [
        { square: { row: rowIndex, col: colIndex }, player: currPlayer },
        ...prev,
      ];
    });
  }

  function triggerRematch() {
    setGameTurn([]);
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
        <GameBoard onSelect={handleSelectSquare} board={gameBoard} />
        {(winner || hasDraw) && (
          <GameOver winner={winner} onSelect={triggerRematch} />
        )}
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
