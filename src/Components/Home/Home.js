import React from "react";
import "./Home.css";
import Newnavbar from "../Newnavbar/NavbarResp";
import Avtar from "./Avtar";

import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";


const Home = () => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <>
      {/* <Navbar /> */}
      <Newnavbar />
      <div className="container">
        <div className="detail">
          <div  className="details">
            <h1><span style={{color:"white"}}>Hello, I'm</span> <strong>Shyam Pankhaniya</strong></h1>
            <h3><span style={{color:"white"}}>I'm</span> Web Developer 🧑‍💻 and Programmer &lt;/&gt;</h3>
            {/* <h6 style={{color:"white" , fontWeight:"200"}}>This is my protfolio website. you'll get to know about me and My projects and Skills.</h6> */}
            <h6 className="desc">Exploring Web Technologies and Crafting Seamless Digital Experiences with web Technologies like Node.js, React.js and Express Js(MERN-stack).
            Check it out My Resume and More about me 👇👇</h6>
            <div className="text-center">
              
                <Tooltip title="Show My Resume" placement="left" arrow>
                <Button
                  className="buttons"
                  variant="outlined"
                  sx={{ color: "#008080", margin: "10px" }}
                  href="https://drive.google.com/file/d/1VY0DSSO4UoI6LsSyLII1p-mUjICZwZWH/view?usp=sharing"
                  target="_blank"
                >
                  
                  Resume
                </Button>
                </Tooltip>
             
              

              <NavLink to="/aboutus">
                <Tooltip title="Show About Me" placement="right" arrow>
                <Button
                  className="buttons"
                  href="/aboutus"
                  variant="outlined"
                  sx={{ color: "#008080", margin: "10px" }}
                >
                  About Me
                </Button>
                </Tooltip>
              </NavLink>
            </div>
          </div>

          <div  className="shyam">
            <Avtar />
            {/* <Avatar
              variant="circular"
              className="tmx-auto bt MuiAvatar-colorDefault"
              alt="Remy Sharp"
              src={shyam}
              sx={{ width: "250px", height: "250px"}}
              style={{boxShadow:"0px 0px 30px #008080",}}
            /> */}
            <span className="icons">
              <Tooltip title="Visit My Linkdin Profile" placement="left" arrow>
                <a target="_blank" href="https://www.linkedin.com/in/shyam-pankhaniya-3a80ab231" rel="noreferrer">
                  <h1><i class="fa-brands fa-linkedin fa-beat-fade fa-l"></i></h1>
                </a>
              </Tooltip>

              <Tooltip title="Visit My Github Profile" placement="bottom" arrow>
                <a target="_blank" href="https://github.com/ShyamJP" rel="noreferrer">
                  <h1><i class="fa-brands fa-github fa-beat-fade fa-l"></i></h1>
                </a>
              </Tooltip>

              <Tooltip title="Mail me" placement="right" arrow>
                <a target="_blank" href="mailto:shyam.j.pankhaniya05@gmail.com" rel="noreferrer">
                  <h1><i class="fa-solid fa-envelope fa-beat-fade fa-l"></i></h1>
                </a>
              </Tooltip>
              <Tooltip title="Visit My Twitter Profile" placement="bottom" arrow>
                <a target="_blank" href="https://twitter.com/ShyamPankhaniy2?t=DFQZTo0iZar0JqrRJdIFlJPQ4s8fPrRlLeD6oNXqgso&s=08" rel="noreferrer">
                  <h1><i class="fa-brands fa-twitter fa-beat-fade fa-l"></i></h1>
                </a>
              </Tooltip>
            </span>
            {/* <img src={shyam} className="images"/> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
