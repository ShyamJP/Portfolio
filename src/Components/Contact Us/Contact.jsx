import React from "react";

import Newnavbar from "../Newnavbar/NavbarResp";



import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./contact.css"

const Contact = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Newnavbar />
            <div className="container form p-5 border border-light shadow-lg borde rounded-3 mx-auto" style={{margin:"100px"}}>
                <form action="https://formspree.io/f/mrgwbpoj" method="POST">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="name" placeholder="your name" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput3" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" name="Email" placeholder="name@example.com" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label" >Enter Your Massege</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" name="massage" rows="3" placeholder="Eneter Yor Massage...." required></textarea>
                    </div>
                    <div className="text-center">
                    <button type="submit" className="btn btn-outline-success">Submit</button>
                    </div>
                </form>
            </div>

            <div className="container mb-5" >
                <div className="main_div">
                    <h1 className="text-center">Contact Me</h1>
                    <h3><EmailIcon /> <a href="mailto:shyam.j.pankhaniya05@gmail.com" target="_blank" rel="noreferrer">Click here to send me Mail</a></h3>
                    <h3><a target="_blank" href="https://www.linkedin.com/in/shyam-pankhaniya-3a80ab231" rel="noreferrer"><i class="fa-brands fa-linkedin fa-l" style={{color:"#0ec9c9"}}></i> Linkdin</a> </h3>
                    <h3><a target="_blank" href="https://instagram.com/shyam_0665?igshid=OTk0YzhjMDVlZA==" rel="noreferrer"><InstagramIcon /> Follw Me in Instagram </a></h3>
                </div>

            </div>


        </>
    )
}
export default Contact