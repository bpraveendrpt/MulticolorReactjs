import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im";
import logo from '../assests/images/emg-logo_new.png';
const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
      <Link to='/Home' className='home'>
      {/* <h3 className='logo'>Logo</h3> */}
      <img className="logo" alt="Logo" src={logo}/>
          </Link>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/Home' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/Dashboard' className='about'>
            <li>Dashboard</li>
          </Link>
          <Link to='/about' className='about'>
            <li>About</li>
          </Link>
          <Link to='/services' className='services'>
            <li>Services</li>
          </Link>
          <Link to='/skills' className='skills'>
            <li>Skills</li>
          </Link>
          <Link to='/contact' className='home'>
            <li>contact</li>
          </Link>
          <Link to='/WeatherReport' className='home'>
            <li>WeatherReport</li>
          </Link>
          <Link to='/WeatherReportMap' className='home'>
            <li>WeatherReportMap</li>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar