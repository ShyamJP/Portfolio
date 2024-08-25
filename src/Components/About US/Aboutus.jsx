import React from "react";
import './Aboutus.css'
import Avtar from "../Home/Avtar";
import Newnavbar from "../Newnavbar/NavbarResp";

const Aboutus = () => {
   
    return (
        <>
            {/* <Navbar /> */}
            <Newnavbar />
            <div className="container">
                <div className="main-about" >
                    <div className="about" >
                        <h2 className="text-center">About Me</h2>
                        <hr />
                        <ul>
                            <li>
                            I am a final year student with passion web developer with a strong foundation in web
                            development concepts and technologies.
                            </li>


                            <li>
                            During my academic journey, I gained a solid foundation in both front-end and back-end technologies, including proficiency in JavaScript, and popular frameworks like React.js. I've also developed a strong understanding of server-side technologies such as Node.js and database management with SQL and MongoDB.
                            </li>


                            <li>
                            I have an experience of web development through my hands-on projects Skilled in creating responsive and user-friendly web designs,
                        And I am familier with REST APIS , problem-solving
                        abilities and a quick learner, always seeking opportunities to expand
                        my skill set. and stay updated with the latest web development trends.
                            </li>
                            <li>
                            I have developed several <a href="/projects">projects</a> that showcase my ability to create dynamic and interactive web applications. I tried to cover all basic concepts of React Js and Node Js and other technologies which I known.
                            </li>
                            <li>
                            Seeking a web developer internship to gain hands-on experience,
                            contribute to real-world projects, and further enhance my technical
                            skills in a supportive and dynamic environment.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Aboutus

{/* <div className="shyam" >
<Avtar />
</div> */}