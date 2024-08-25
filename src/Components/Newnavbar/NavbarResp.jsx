import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavbarResp.css'
import CloseIcon from '@mui/icons-material/Close';


const NavbarNew = () => {
  const [menuOpen,setmenuOpen] = useState(false);
  const [icon,seticon] = useState('DensityMediumIcon')
  return (
    <>
      <nav className="fixed-top">
        <div className="title"><a className="navbar-brand fw-bold fs-3" href="/">
            {/* <img src="logo.png" />  */}
            <span style={{color:"white"}}>Shyam</span> Pankhnaiya
          </a></div>
        <div className="menu" onClick={
          () => 
          {
            setmenuOpen(!menuOpen)
            seticon(!CloseIcon)
          }
        }>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <a href="">
              <NavLink to="/" className="underline">
                Home
              </NavLink>
            </a>
          </li>
          <li>
            <a href="">
              <NavLink to="/aboutus" className="underline">
                About Me
              </NavLink>
            </a>
          </li>
          <li>
            <a href="">
              <NavLink to="/skills" className="underline">
                Skills
              </NavLink>
            </a>
          </li><li>
            <a href="">
              <NavLink to="/projects" className="underline">
                Projects
              </NavLink>
            </a>
          </li>
          <li>
            <a href="">
              <NavLink to="/contact" className="underline">
                Contact Me
              </NavLink>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavbarNew;