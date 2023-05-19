import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/Sondick.png'
import { TfiAlignRight } from "react-icons/tfi";
import '../Styles/Navbar.css'

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false)

  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  }
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"} >
            <img src={Logo} alt='logo' />
            <div className='hiddenlinks' >
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/about'>About</Link>
            <Link to='/clients'>Clients</Link>
            <Link to='/contacts'>Contacts</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/about'>About</Link>
            <Link to='/clients'>Clients</Link>
            <Link to='/contacts'>Contacts</Link>
            <button onClick={toggleNavbar}>
              <TfiAlignRight />
            </button>
        </div>
    </div>
  )
}

export default Navbar