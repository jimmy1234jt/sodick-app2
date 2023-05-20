import React from 'react'

function ServiceItem({image, name, description}) {
  return (
    <div className='serviceItem'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1> {name} </h1>
        <p> {description} </p>
    </div>
  )
}

export default ServiceItem