import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Shobhit" symbol="X"></Player>
          <Player name="Aayushi" symbol="0"></Player>
        </ol>
      </div>
    </main>
  );
}

export default App;
