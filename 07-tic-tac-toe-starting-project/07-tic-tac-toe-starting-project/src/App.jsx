import GameBox from "./components/GameBox";
import Player from "./components/Player"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X"></Player>
          <Player initialName="Player 2" symbol="O"></Player>
        </ol>
          <GameBox/>
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
