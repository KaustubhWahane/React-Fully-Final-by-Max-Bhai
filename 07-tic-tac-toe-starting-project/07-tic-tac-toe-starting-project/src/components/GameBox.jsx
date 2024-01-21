import React from 'react';
import { useState } from 'react';

const initialGameBoard = [
    [null, null , null],
    [null, null , null],
    [null, null , null],
]
export default function GameBox({onSelectSquare , activePlayerSymbol}) {
  const [gameboard, setGameboard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex,colIndex){
    setGameboard((prevGameBoard) => {
      const updateGameBoard = [...prevGameBoard.map(innerArray=>[...innerArray])];
      updateGameBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updateGameBoard;
    });
    onSelectSquare();
  }
  return (
    <ol id="game-board">
       {gameboard.map((row,rowIndex)=>
       <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex)=>
          <li key={colIndex}>
            <button onClick={()=>{handleSelectSquare(rowIndex,colIndex)}}>{playerSymbol}</button>
       </li>)}
        </ol>
       </li>)}
    </ol>
    );
}
