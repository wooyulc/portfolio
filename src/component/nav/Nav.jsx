import React from 'react'
import "./nav.css"
import {BiHomeAlt2,BiSolidContact, BiUserCircle} from 'react-icons/bi';
import {BsBook} from 'react-icons/bs';
const Nav = () => {
  return (
    <nav>
      <a href="#"><BiHomeAlt2/></a>
      <a href="#about"><BiUserCircle/></a>
      <a href="#project"><BsBook/></a>
      <a href="#contact"><BiSolidContact/></a>
    </nav>
  )
}

export default Nav