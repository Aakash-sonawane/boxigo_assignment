import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import moveContext from '../../contextApi/moveContext';
import Moves from '../moves/moves';
import './viewMove.css'
import Infoheading from './infoheading';
import HouseDetail from './houseDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './dropDown';




export default function ViewMove() {
    const params = useParams();
    const [moveData] = useContext(moveContext);
    let data = moveData && moveData.filter(move => {
        return params.id === move.estimate_id;
    })

    return (
        <>
        {data[0] && <div className='single-move-data-container'>
            <div>

                {data && <Moves data={data[0]} />}
            </div>
            <div className='infoheading-container'>
                <Infoheading heading={'Additional Information'} btnText={"Edit Additional info"} />
                <div className='infoheading-data'>
                    <p>Test data</p>

                </div>
            </div>

            <div>
                <Infoheading heading={'House Details'} btnText={"Edit House Details"} />
                <div className='d-flex-col gap20'>

                <HouseDetail title={'Existing House Details'} floorNo={data[0].old_floor_no} isElevator={data[0].old_elevator_availability} distance={data[0].old_parking_distance}/>
                <HouseDetail title={'New House Details'} floorNo={data[0].new_floor_no} isElevator={data[0].new_elevator_availability} distance={data[0].old_parking_distance}/>
                </div>
            </div>
            <div>
                <Infoheading heading={'Inventory Details'} btnText={"Edit Inventory"} />
                <div className='d-flex-col gap10'>
                <BasicExample title={'Furniture'} obj={data[0].items.inventory[0]}/>
                <BasicExample title={'Electronics'} obj={data[0].items.inventory[1]}/>
                <BasicExample title={'Vehicle'} obj={data[0].items.inventory[2]}/>
                <BasicExample title={'Boxes/Trolly'} obj={data[0].items.inventory[4]}/>
                {/* <BasicExample title={'custom Item'} obj={data[0].items.cutomItems}/> */}
                
                </div>
            </div>

        </div>}
        </>
    )
}
