import React from 'react'

export default function ItemsRendering(props) {
    const {data}=props;
  return (
    <div>
        <h4 className='heading_dropdown f16'>{data.displayName}</h4>
        
        {
            data.items.map((sofa)=>{
              return (
                <div className='sofa-item-box'>
                  <div className='sofa-item d-flex'><p>{sofa.displayName}</p><p>{sofa.qty}</p></div>
                  <div className='furniture-typeOpt'><pc className='bold'>{sofa.typeOptions && sofa.typeOptions.split(',')[0]}</pc></div>
                </div>
              )
            })

        }
      
    </div>
    
  )
}
