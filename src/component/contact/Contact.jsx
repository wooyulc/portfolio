import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {FaFacebookMessenger, FaInstagramSquare} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6qdbvom', 'template_z10yf4a', form.current, '3yADLul3j9MnoMRNN')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icoon'/>
            <h4>Email</h4>
            <a href='mailto:email@gmail.com'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icoon'/>
            <h4>Messenger</h4>
            <a href='https://m.me/wooyul1316'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FaInstagramSquare className='contact__option-icoon'/>
            <h4>Instagram</h4>
            <a href='https://ig.me/m/wooyulc_dev'>Send a message</a>
          </article>
        </div>
        {/* END of conatct options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your FUll Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact