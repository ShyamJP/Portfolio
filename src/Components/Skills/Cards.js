import React from "react";
import Tooltip from "@mui/material/Tooltip";

import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';

const Cards = (props) =>{
    return(
        <>
        <data />
        { 
            props.item.map((ele) =>{
                const {title,classUrl,color} = ele;
                return (
                    <Tooltip title={title} placement="left" arrow  >
                    <h1><i class={classUrl} style={{color:{color}}}></i></h1>
                    </Tooltip>
                )
            })
        }
        </>
       
    )
}

export default Cards;