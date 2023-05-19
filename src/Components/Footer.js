import React from 'react'
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import "../Styles/footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <AiOutlineWhatsApp /> <AiOutlineFacebook /> <AiOutlineInstagram /> <AiOutlineLinkedin />
        </div>
        <p>&copy; 2023 Sodick well services</p>
    </div>
  )
}

export default Footer