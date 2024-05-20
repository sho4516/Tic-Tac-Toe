import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelect, turns }) => {
  const gameBoard = initialGameBoard;

  for (let turn of turns) {
    console.log(turn);
    const { square, player } = turn;
    const { col, row } = square;

    gameBoard[row][col] = player;
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
                        onSelect(rowIndex, colIndex);
                      }}
                      disabled={col != null}
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
