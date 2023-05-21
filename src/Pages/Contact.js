import React from 'react'
import "../Styles/Contact.css"
import ContactImg from "../Assets/contact.jpeg"

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${ContactImg})` }} ></div>
        <div className='rightSide'>
            <h1> Contact Us </h1>

            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input id='name' placeholder='Enter Full Name...' type='text' required/>
                <label htmlFor='email' >Email Address</label>
                <input id='email' placeholder='Enter Email Address...' type='email' required/>
                <label htmlFor='message' >Message</label>
                <textarea name='meassage' rows="6" placeholder='Enter Message...' required></textarea>
                <button type='submit'> Submit </button>
            </form>
        </div>
    </div>
  )
}

export default Contact