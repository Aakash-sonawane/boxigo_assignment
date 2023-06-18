import React, { useContext } from 'react'
import Navbar from './navbar/navbar'
import Moves from './moves/moves'
import moveContext from '../contextApi/moveContext'

export default function Root() {
    const[moveData]=useContext(moveContext)
  return (
    <div className='main d-flex'>
      <Navbar/>
      <div className='view'>
        <h3>My Moves</h3>
        {
          
          moveData && moveData.map(move=><div key={move.estimate_id}><Moves data={move}/></div>)
        }
        

      </div>
      </div>
  )
}
