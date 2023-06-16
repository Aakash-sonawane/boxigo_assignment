import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Move from './components/move/move';
import MoveContext from './contextApi/moveContext';

function App() {
  const [view, setView]=useState('moves');
  const [moveData,setMoveData]=useState([]);

  useEffect(()=>{
    fetchMoveData()
  },[])

  const fetchMoveData=async()=>{
    const response=await fetch("http://test.api.boxigo.in/sample-data/")
    const data=await response.json();
    
    setMoveData(data.Customer_Estimate_Flow)
  }
  // console.log('move data is',moveData)
  return (
    <>
    <MoveContext.Provider value={[moveData,setMoveData]}>
    <div className='main d-flex'>
      <div className='nav-bar'>
        <div className='bold f15'>MY MOVES</div>
        <div className='bold f15'>MY PROFILE</div>
        <div className='bold f15'>GET QUOTE</div>
        <div className='bold f15'>LOGOUT</div>
      </div>
      <div className='view'>
        <h3>My Moves</h3>
        {
          moveData && moveData.map(move=><Move data={move}/>)
        }
        

      </div>
      </div>
      </MoveContext.Provider>
    </>
  );
}

export default App;
