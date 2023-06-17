import React, { useContext } from 'react'
import './moves.css'
import moveContext from '../../contextApi/moveContext'
import { useNavigate } from 'react-router-dom'
export default function Moves(props) {
    // const [moveData]=useContext(moveContext)
    const navigate = useNavigate();
    const { data } = props
    // console.log("move compo", data.to_address['toAddress'])

    return (
        <>

            {data && <div className='move d-flex-col gap20 grayc'>
                <div className='adress1 first d-flex f15'>
                    <div className='adfrto'>
                        <h4 className='bold '>From</h4>
                        <p >{data.moving_from}</p>
                    </div>
                    <div className='arrow-icon'>
                        <i className="fa-solid fa-xl fa-arrow-right-long orangec"></i>
                        {/* <i className="fa-solid fa-arrow-right"></i> */}
                    </div>
                    <div className='adfrto'>
                        <h4 className='bold '>To</h4>
                        <p>{data.moving_to}</p>
                    </div>
                    <div>
                        <p>Request#</p>
                        <p className='orangec'><b>{data.estimate_id}</b></p>
                    </div>
                </div>
                <div className='adress1 d-flex'>
                    <div><i className="fa-solid fa-xl fa-house orangec"></i> {data.property_size}</div>
                    <div><i className="fa-solid fa-xl fa-boxes-stacked orangec"></i> {data.total_items}</div>
                    <div><i className="fa-sharp fa-xl fa-solid fa-road orangec"></i> {data.distance}</div>
                    <div><i className="fa-solid fa-xl fa-truck orangec"></i> {data.moving_on}</div>
                    <div><input className='checkbox' type='checkbox' /> <span>is flexible</span></div>
                    <div className='btn-container d-flex'>
                        <button className='view-btn' onClick={() => { navigate(`/${data.estimate_id}`) }}>View move details</button>
                        <button className='quotes-btn'> Quotes Awaiting</button>
                    </div>

                </div>
                <div>
                    <p><i className="fa-sharp fa-solid fa-triangle-exclamation orangec"></i> <b>Disclaimer:</b> please update your move date before two days of shifting</p>
                </div>

            </div>}
        </>
    )
}
