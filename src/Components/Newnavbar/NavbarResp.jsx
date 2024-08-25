import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavbarResp.css'
import CloseIcon from '@mui/icons-material/Close';


const NavbarNew = () => {
  const [menuOpen,setmenuOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
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
              <NavLink to="/" className="underline">
                Home
              </NavLink>
          </li>
          <li>
              <NavLink to="/aboutus" className="underline">
                About Me
              </NavLink>
          </li>
          <li>
              <NavLink to="/skills" className="underline">
                Skills
              </NavLink>
          </li><li>
              <NavLink to="/projects" className="underline">
                Projects
              </NavLink>
          </li>
          <li>
              <NavLink to="/contact" className="underline">
                Contact Me
              </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavbarNew;