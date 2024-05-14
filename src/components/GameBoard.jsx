import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({onSelect, currentSymbol}) => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(row, col) {
    setGameBoard((prevBoard) => {
      const newGameBoard = [...prevBoard.map((item) => [...item])];
      newGameBoard[row][col] = currentSymbol;
      return newGameBoard;
    });

    onSelect();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => {
                        handleSelectSquare(rowIndex, colIndex);
                      }}
                    >
                      {col}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default GameBoard;
