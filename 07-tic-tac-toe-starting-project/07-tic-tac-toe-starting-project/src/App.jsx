import GameBox from "./components/GameBox";
import Player from "./components/Player"
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare(){
  setActivePlayer((curActivePlayer)=> curActivePlayer === "X" ? "O" : 'X');
}
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}></Player>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}></Player>
        </ol>
          <GameBox  onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      LOG
      </div>
    </main>
    );
    /* 
Quiz done by me
  function change(){
    setIsEditing(true);
  }
  function stopEditing() {
    setIsEditing(false);
  }
  let warning;
  if(isEditing){
    warning =  <input type="text" />
  }
  else if (!isEditing){
   warning = <span className="player-name">Player 2</span>
  }
  return (
    
     <>
     {warning}
     <button onClick={change}>Click here</button>
     <button onClick={stopEditing}>Stop Editing</button>
     </>   
    )
     */
}

export default App
