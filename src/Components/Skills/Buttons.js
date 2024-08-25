import React from "react";
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';
const Button = (props) => {
 function load(){
  
 }

  return (
    <>
      <div className="text-center mt-5" onClick={load()}>
      <div class="btn-group text-center " style={{}} role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary"  onClick={() => props.filter("frontend")}>
          <WebIcon /> Frontend
        </button>
        <button type="button" class="btn btn-outline-primary" onClick={() => props.filter("backend")}>
        <i class="fa-solid fa-database fa-xl"></i> Backend
        </button>
        <button type="button" class="btn btn-outline-primary" onClick={() => props.filter("tools")}>
        <i class="fa-brands fa-git-alt fa-xl"></i> Tools
        </button>
        <button type="button" class="btn btn-outline-primary" onClick={() => props.filter("Languages")}>
        <CodeIcon /> Languages
        </button>
      </div>
      </div>

    </>
  );
};
export default Button;
