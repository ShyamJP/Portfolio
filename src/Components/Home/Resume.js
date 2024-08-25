import React from "react";

const Resume = () => {
  return (
    <>
      <h1>Resume</h1>
      <a href="https://drive.google.com/file/d/1_-vsc8FWENVVaKW15-e8MaDHRPcL4Lha/view?usp=sharing">
        Resume
      </a>

      <div class="ratio ratio-16x9">
        <iframe
          src="https://drive.google.com/file/d/1_-vsc8FWENVVaKW15-e8MaDHRPcL4Lha/view?usp=sharing"
          title="YouTube video"
          allowfullscreen
        ></iframe>
      </div>
      {/* <iframe src="Resume.pdf" width="600px" title="Resume" height="500px" frameborder="0" /> */}
    </>
  );
};

export default Resume;
