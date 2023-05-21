import React from 'react'
import AboutImg from "../Assets/About.jpeg"
import "../Styles/About.css"

function About() {
  return (
    <div className='about'  >
        <div className='aboutTop' style={{ backgroundImage: `url(${AboutImg})` }}></div>
        <div className='aboutBottom'>
            <h1> About Us </h1>
            <p>Founded in 2021 Sodick Well Services is now an international Service Company offering services to the oil & gas industry in Deep Offshore, Offshore and Onshore.

Sodick Well Services owns and operates fleets of onshore & offshore equipment used to render the following services; Soil and Groundwater Remediation/Restoration, Chemical and Industrial Cleaning (Hydro Blasting), Oil and Gas Well cementing (Truck and Skid Mounted), Coiled Tubing and Nitrogen lift, Brine filtration, Electric line, Slick line, Pressure pumping, Pipeline and other Support & Logistics equipments and services. Sodick Well Services also offers services in chemical and industrial cleaning through the use of its high-pressure Hydro Blasting pump unit.</p>
        </div>
    </div>
  )
}

export default About