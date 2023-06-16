import React, { useContext } from 'react'
import './move.css'
import moveContext from '../../contextApi/moveContext'
export default function Move(props) {
    // const [moveData]=useContext(moveContext)
    const {data}=props
    console.log("move compo", data.to_address['toAddress'])
  return (
    
    <div className='move d-flex-col gap20 f15'>
        <div className='adress1 d-flex'>
            <div className='adfrto'>
                <p className='bold f15'>From</p>
                <p className='f15'>{data.moving_from}</p>
            </div>
            <div>
                <h1>{'=>'}</h1>
            </div>
            <div className='adfrto'>
                <p className='bold f15'>To</p>
                <p className='f15'>{data.moving_to}</p>
            </div>
            <div>
                <p>Request#</p>
                <p className='orangec'><b>{data.estimate_id}</b></p>
            </div>
        </div>
        <div className='adress1 d-flex'>
            <div>{data.property_size}</div>
            <div>{data.total_items}</div>
            <div>{data.distance}</div>
            <div>{data.moving_on}</div>
            <div><input className='orangebc' type='checkbox'/> <span>is flexible</span></div>
            <div className='btn-container d-flex'>
                <button className='view-btn'>View move details</button>
                <button className='quotes-btn'> Quotes Awaiting</button>
            </div>

        </div>
        <div>
            <p><b>Disclaimer:</b>please update your move date before two days of shifting</p>
        </div>
      
    </div>
  )
}
