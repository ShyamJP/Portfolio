import React from "react";
import './Project.css'
import Card from "../../UI/Card/Card";
import Newnavbar from "../Newnavbar/NavbarResp";
import ProjectCard from "../../UI/ProjectCard/ProjectCard";
const Projects = () => {
  const tech = ["react", "Node"]
  return (
    <>
      {/* <Navbar /> */}
      <Newnavbar />

      <div className="main_div">
        <h1 className="text-center">Projects</h1>
        <hr style={{ width: "330px", margin: "auto" }} />

        <div className="card-container">

          <ProjectCard
            title="Medium Clone"
            url='fa-solid fa-message fa-2xl'
            description="It is build using React Js and it includes concepts like Hooks , Redux , Props etc,To visite Website through bellow link and also visit Git Repository."
            githuUrl="https://github.com/SHP05/Reddit-Clone"
            websiteUrl=""
            tech="React JS, Redux , Node Js, Express JS , Material UI , MongoDB , Tailwind CSS " />

          <ProjectCard
            title="Ecommerce Website"
            url='fa-solid fa-cart-shopping fa-2xl'
            description="It is build using React Js and it includes concepts like Hooks , Redux , Props etc,To visite Website through bellow link and also visit Git Repository."
            githuUrl="https://github.com/ShyamJP/Foodies.git"
            websiteUrl="https://foodies-by-shyam.netlify.app/"
            tech="React JS, Redux , Node Js, Express JS , Material UI , MongoDB , Tailwind CSS " />
          {/* 1*/}

          <ProjectCard
            title="Todo App"
            url='fa-solid fa-list-check fa-2xl'
            description="This Todo App Build using React js , TypeScript and Tailwind css. which provides functionality of create And delete your todo's , Task's , daily routine activitis. see More in Gitub 👇"
            githuUrl="https://github.com/ShyamJP/TodO-App-using-React-TypeScript"
            websiteUrl=""
            tech="HTML , CSS ,JS , Fetch API"
          />
          {/* 2*/}
          <ProjectCard
            title="QR Code Generator"
            url='fa-solid fa-qrcode fa-2xl'
            description="This Project is build using Node js and useing web Socket for build server and transfer data to multipal server."
            githuUrl="https://github.com/ShyamJP/QR-Code-Generator.git"
            websiteUrl="https://qr-code-generator-byshyam.netlify.app/"
            tech="HTML , CSS ,JS , Fetch API"
          />

          <ProjectCard
            title="Basic Chat App"
            url='fa-regular fa-comment fa-2xl'
            description="This QR Code Generator is make using HTML , CSS and JS. API is used to create QR Code by Website URL. and in this project i used fetch method of API."
            githuUrl="https://github.com/ShyamJP/Chat-App"
            websiteUrl=""
            tech=" Node JS , HTML , CSS ,JS , Socket.io"
          />

          <ProjectCard
            title="REST-API"
            url='fa-solid fa-cloud fa-2xl'
            description="This API provides information about famous places in Gujarat, including their names, cities, images, and location details. It's a valuable resource for travelers and enthusiasts interested in exploring the beauty of Gujarat. It is Build Using Node Js , Express Js ans MongoDB. "
            githuUrl="https://github.com/ShyamJP/Travel_REST_API"
            websiteUrl="https://travel-rest-api.onrender.com/data"
            tech="Node Js, Express JS , Postman , REST Principles , MongoDB"
          />

          <ProjectCard
            title="Profile Manager"
            url='fa-solid fa-users fa-2xl'
            description="TThe Profile Manager Project is a small-scale MERN-Stack application designed to manage user profiles for any website. It allows the storage of user data in a MongoDB database and provides a simple interface to view and manage user profiles, including profile images. for more visit Github !"
            githuUrl="https://github.com/ShyamJP/Profile_Manager"
            websiteUrl=""
            tech="React JS, Node Js, Express JS , Multer , MongoDB"
          />

          {/* 3*/}
          {/* <ProjectCard 
      title="Basic Chat App"
      url='fa-regular fa-comment fa-2xl'
      description="This QR Code Generator is make using HTML , CSS and JS. API is used to create QR Code by Website URL. and in this project i used fetch method of API."
      githuUrl="https://github.com/ShyamJP/QR-Code-Generator.git"
      websiteUrl="https://qr-code-generator-byshyam.netlify.app/"
      /> */}
          {/* 4*/}
          {/* <ProjectCard 
      title="ToDo App"
      url='fa-solid fa-list-check fa-2xl'
      description="This ToDo App create using simple concepts of Javascript. like CRUD Operation using js and store data using Local Storage."
      githuUrl="https://github.com/ShyamJP/ToDo-App.git"
      websiteUrl="https://todo-list-byshyam.netlify.app/"
      /> */}

          {/* 5*/}
        </div>


        {/* <h1 className=" text-center">Projects</h1>
      <hr style={{width:"330px", margin:"auto" }}/> */}
        {/* <div className="cards d-flex justify-content-around container mb-5 flex-wrap">
      <Card 
        title="Ecommerce Website"
        url='fa-solid fa-cart-shopping fa-2xl'
        description="It is build using React Js and it includes concepts like Hooks , Redux , Props etc,To visite Website through bellow link and also visit Git Repository."
        githuUrl=""
        websiteUrl=""
      />
      <Card 
        title="QR Code Generator"
        url='qrcode.png'
        description="This QR Code Generator is make using HTML , CSS and JS. API is used to create QR Code by Website URL. and in this project i used fetch method of API."
        githuUrl="https://github.com/ShyamJP/QR-Code-Generator.git"
        websiteUrl="https://qr-code-generator-byshyam.netlify.app/"
      />
      <Card 
        title="Chat App"
        url='chatapp.jpeg'
        description="It is build using Node js. This Project make use Socket for build server and transfer data to multipal server. "
        githuUrl=""
        websiteUrl=""
      />
      </div> */}



        {/* <h1 className=" text-center">Basic Projects</h1> */}
        {/* <hr style={{width:"300px", margin:"auto" }}/> */}
        {/* <div className="cards d-flex justify-content-around container flex-wrap">
      <Card 
        title="Country API"
        url='country.png'
        description="It is build using React Js and it includes concepts like Hooks , Redux , Props etc."
        githuUrl="https://github.com/ShyamJP/Country-Details"
        websiteUrl="https://countryinformationbysp.netlify.app/"
      />
      
      <Card 
        title="ToDo App ()"
        url='todo.png'
        description="This ToDo App create using simple concepts of Javascript. like CRUD Operation using js and save data using Local Storage."
        githuUrl="https://github.com/ShyamJP/ToDo-App.git"
        websiteUrl="https://todo-list-byshyam.netlify.app/"
      />
      </div> */}

      </div>
    </>
  )
}
export default Projects