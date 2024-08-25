import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

import './Skills.css'
// import Tooltip from "@mui/material/Tooltip";
// import Items from "./items";
import Button from "./Buttons";
import Data from "./DataNew";
import Cards from "./Cards";
import Newnavbar from "../Newnavbar/NavbarResp";


const Skills = () => {
    const [item,setitem] = useState(initial);
    function initial(){
        const sortedItem = Data.filter((item) =>
        {
            return item.type === "frontend"
        })
        return sortedItem
    }
    
    function filterFunction(t){
        const sortedItem = Data.filter((item) =>
        {
            return item.type === t
        })
        setitem(sortedItem)
    }
    
    
    return (
        <>
            {/* <Navbar /> */}
            <Newnavbar />

            {/* <div className="main-div">
            <Button filter={filterFunction}/>
            <div className="container">
            <div className="front-item" >
            <Cards item={item} />
            </div>
            </div>
            </div> */}
        <div className="main-div">
        <center><h1>Language</h1></center>
            <div className="front-item">
                <div>
                <Tooltip title="C" placement="left" arrow  >
                    <h1><i class= "devicon-c-plain-wordmark colored fa-2x"></i></h1>
                </Tooltip>
                </div>
                <div>
                <Tooltip title="C++" placement="left" arrow  >
                    <h1><i class= "devicon-cplusplus-plain-wordmark colored fa-2x"></i></h1>
                </Tooltip>
                </div>
                <div>
                <Tooltip title="Java" placement="left" arrow  >
                    <h1><i class= "devicon-java-plain-wordmark colored fa-2x"></i></h1>
                </Tooltip>
                </div>
            </div>
            
        <center><h1>Frontend</h1></center>
            <div className="front-item">
                <div>
                <Tooltip title="React" placement="left" arrow  >
                    <h1><i class= "devicon-react-original-wordmark colored fa-2x"></i></h1>
                </Tooltip>
                </div>
                <div>
                <Tooltip title="Redux" placement="left" arrow  >
                    <h1><i class= "devicon-redux-original colored fa-2x"></i></h1>
                </Tooltip>
                </div>
                <div>
                <Tooltip title="Javascript" placement="left" arrow  >
                    <h1><i class= "devicon-javascript-plain colored fa-2x"></i></h1>
                </Tooltip>
                </div>
                <div>
                <Tooltip title="HTML5" placement="left" arrow  >
                    <h1><i class= "devicon-html5-plain-wordmark colored fa-2xl"></i></h1>
                </Tooltip>
                </div>
                <div>
                <Tooltip title="CSS3" placement="left" arrow  >
                    <h1><i class= "devicon-css3-plain-wordmark colored fa-2x"></i></h1>
                </Tooltip>
                </div>
            </div>


            <center><h1>Backend</h1></center>
            <div className="front-item">
                <div>
                <Tooltip title="Node Js" placement="left" arrow  >
                    <h1><i class= "devicon-nodejs-plain-wordmark colored fa-2x"></i></h1>
                </Tooltip>
                </div>
                <div>
                <Tooltip title="Mongo DB" placement="left" arrow  >
                    <h1><i class= "devicon-mongodb-plain-wordmark colored fa-2x"></i></h1>
                </Tooltip>
                </div>
                <div>
                <Tooltip title="Express Js" placement="left" arrow  >
                    <h1><i class= "devicon-express-original colored fa-2x"></i></h1>
                </Tooltip>
                </div>
                <div>
                <Tooltip title="My SQL" placement="left" arrow  >
                    <h1><i class= "devicon-mysql-plain-wordmark colored fa-2x"></i></h1>
                </Tooltip>
                </div>
            </div>

            <center><h1>Tools</h1></center>
            <div className="front-item">
                <div>
                <Tooltip title="VS Code" placement="left" arrow  >
                    <h1><i class= "devicon-vscode-plain-wordmark colored fa-2x"></i></h1>
                </Tooltip>
                </div>
                <div>
                <Tooltip title="Github" placement="left" arrow  >
                    <h1><i class= "fa-brands fa-github colored fa-2x"></i></h1>
                </Tooltip>
                </div>
                <div>
                <Tooltip title="Git" placement="left" arrow  >
                    <h1><i class= "devicon-git-plain-wordmark colored fa-2x"></i></h1>
                </Tooltip>
                </div>
                <div>
                <Tooltip title="NPM" placement="left" arrow  >
                    <h1><i class= "devicon-npm-original-wordmark colored fa-2x"></i></h1>
                </Tooltip>
                </div>
            </div>
        </div>
            
        </>
    )
}
export default Skills


/*
{/* <div className="container">
                <h1 className="text-center">Frontend</h1>
                <div className="front-item">
                    <Tooltip title="HTML5" placement="left" arrow>
                        <h1><i class="fa-brands fa-html5 fa-2xl" style={{color: "#E55C20"}}></i></h1>
                    </Tooltip>
                    <Tooltip title="CSS3" placement="top" arrow>
                        <h1><i class="fa-brands fa-css3-alt fa-2x" style={{color: "#22bedd"}}></i></h1>
                    </Tooltip>
                    <Tooltip title="Javascript" placement="top" arrow>
                        <h1><i class="fa-brands fa-js fa-2x" style={{color: "#ffe224"}}></i></h1>
                    </Tooltip>
                    <Tooltip title="React" placement="right" arrow>
                        <h1><i class="fa-brands fa-react fa-2xl" style={{color: "#61DBFB"}}></i></h1>
                    </Tooltip>
                </div>
                <h1 className="text-center">Backend</h1>
                <div className="front-item">
                    <Tooltip title="Node Js" placement="left" arrow>
                        <h1><i class="fa-brands fa-node fa-2x" style={{color: "#00b81f"}} ></i></h1>
                    </Tooltip>
                    <Tooltip title="Mongo DB" placement="top" arrow>
                        <h1><i class="devicon-mongodb-plain-wordmark colored fa-2x"></i></h1>
                    </Tooltip>
                    <Tooltip title="Express Js" placement="right" arrow>
                        <h1><i class="devicon-express-original fa-2x"></i></h1>
                    </Tooltip>
                </div>

                <h1 className="text-center">Tools</h1>
                <div className="front-item">
                <Tooltip title="VS Code" placement="left" arrow>
                        <h1><i class="devicon-vscode-plain-wordmark colored fa-2x"></i></h1>
                </Tooltip>
                <Tooltip title="Github" placement="top" arrow>
                        <h1><i class="fa-brands fa-github fa-2x"></i></h1>
                </Tooltip>
                <Tooltip title="Git" placement="top" arrow>
                        <h1><i class="fa-brands fa-git-alt fa-2x" style={{color: "#f47f1f"}}></i></h1>
                </Tooltip>
                <Tooltip title="NPM" placement="right" arrow>
                        <h1><i class="fa-brands fa-npm fa-2x" style={{color: "#e81111"}}></i></h1>
                </Tooltip>
                </div>

                <h1 className="text-center">Languages</h1>
                <div className="front-item">
                <Tooltip title="C" placement="left" arrow>
                    <h1><i class="devicon-c-plain-wordmark colored fa-2xl"></i></h1>
                </Tooltip>
                <Tooltip title="c++" placement="top" arrow>
                        <h1><i class="devicon-cplusplus-plain-wordmark colored fa-2xl"></i></h1>
                </Tooltip>
                <Tooltip title="Java" placement="right" arrow>
                        <h1><i class="devicon-java-plain-wordmark colored fa-2xl"></i></h1>
                </Tooltip>
                </div>
            </div> */
