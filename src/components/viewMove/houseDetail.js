import React from 'react'

export default function HouseDetail(props) {
    const{data}=props;
    return (
        <div>
            <h5 className='orangec'>{props.title}</h5>
            <div className='d-flex gap150'>
                <div>
                    <h5>Floor No.</h5>
                    <p>{props.floorNo}</p>
                </div>
                <div>
                    <h5>Elevator Availabe.</h5>
                    <p>yes</p>
                </div>
                <div>
                    <h5>Distance From Elevator / Straircase to truck</h5>
                    <p>{props.distance}</p>
                </div>
            </div>
        </div>
    )
}
