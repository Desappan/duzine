import React from "react";
import "./project.css";

import project_img1 from "./project_img1.jpg";
import project_img2 from "./project_img2.jpg";
import project_img3 from "./project_img3.jpg";
import project_img4 from "./project_img4.jpg";
import project_img5 from "./project_img5.jpg";
import project_img6 from "./project_img6.jpg";

function Project(){
    return(
        <div className="project_con">
            <div className="project_sub_con">
                <div className="project_word">
                    <h6>Projects</h6>
                    <h2>Our <span>Portfolio</span> </h2>
                </div>
                <div className="project_type">
                    <p>All</p>
                    <p>Design</p>
                    <p>Marketing</p>
                    <p>Branding</p>

                </div>

                <div className="project_img_con">
                    <div className="project_img">
                        <img src={project_img6}/>
                        <h4>Modern Web Design For Local Agency & Company</h4>
                        <button>Design</button>
                    </div>

                    <div className="project_img">
                        <img src={project_img2}/>
                        <h4>App Design For Local Agency And Company</h4>
                        <button>Design</button>
                    </div>

                    <div className="project_img">
                        <img src={project_img3}/>
                        <h4>Branding For American IT Business Agency</h4>
                        <button>Branding</button>
                    </div>

                    <div className="project_img">
                        <img src={project_img4}/>
                        <h4>World Best Available Scope For Your Product Marketing.</h4>
                        <button>Marketing</button>
                    </div>

                    <div className="project_img">
                        <img src={project_img5}/>
                        <h4>What Is The Exact Solution For Your IT Business?</h4>
                        <button>Branding</button>
                    </div>

                    <div className="project_img">
                        <img src={project_img6}/>
                        <h4>What The New In Upcoming Design Think?</h4>
                        <button>Branding</button>
                    </div>
                    

                </div>

            </div>

        </div>


    )
}
export default Project;