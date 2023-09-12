import React from 'react'
import "./nav.css"
import {BiHomeAlt2,BiSolidContact, BiUserCircle} from 'react-icons/bi';
import {BsBook} from 'react-icons/bs';
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt2/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle/></a>
      <a href="#project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><BsBook/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiSolidContact/></a>
    </nav>
  )
}

export default Nav