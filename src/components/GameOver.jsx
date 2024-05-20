const GameOver = ({ winner, onSelect }) => {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} wins!!</p>}
      {!winner && <p>It's a draw !!</p>}
      <p>
        <button
          onClick={() => {
            onSelect();
          }}
        >
          REMATCH
        </button>
      </p>
    </div>
  );
};

export default GameOver;
