import React from "react";
import './Card.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/material/Button';

const Card = (props)=>{
    return(
        <>
            <div className="card">
                <h2><i className={props.url}></i></h2>
                <img src={props.url} alt={props.title} className="card-img" />
                <div className="card-discription">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <Button style={{color:"white"}}  variant="outlined" target="_blank" href={props.githuUrl} startIcon={<GitHubIcon />}>Github</Button>
                    <Button style={{color:"white"}}  variant="outlined" target="_blank" href={props.websiteUrl} startIcon={<LanguageIcon />}>Visit Website</Button>
                </div>
            </div>
        </>
    )
}

export default Card;