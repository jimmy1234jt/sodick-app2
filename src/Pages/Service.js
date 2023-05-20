import React from 'react'
import { ServiceList } from '../helper/ServiceList'
import ServiceItem from '../Components/ServiceItem'
import "../Styles/Service.css"

function Service() {
  return (
    <div className='service'>
        <h1 className='serviceTitle'> Our Services </h1>
        <div className='serviceList'>
            {ServiceList.map((serviceItem, key) => {
                return (
                    <ServiceItem 
                    key={key}
                    image={serviceItem.Image}
                    name={serviceItem.name}
                    description={serviceItem.description}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Service