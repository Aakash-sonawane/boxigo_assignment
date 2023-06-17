import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import moveContext from '../../contextApi/moveContext';
import Moves from '../moves/moves';
import './viewMove.css'




export default function ViewMove() {
    const params = useParams();
    const [moveData] = useContext(moveContext);
    let data = moveData && moveData.filter(move => {
        return params.id === move.estimate_id;
    })

    return (
        <div className='single-move-data-container'>
            {data && <Moves data={data[0]} />}

        </div>
    )
}
