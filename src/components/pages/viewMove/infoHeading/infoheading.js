import React from 'react'

export default function Infoheading(props) {
    const{heading,btnText}=props;
  return (
    <div className='infoheading d-flex'>
        <h4 className='f17 bold'>{heading}</h4>
        <button className='btn2'>{btnText}</button>
      
    </div>
  )
}
