import React from "react";
import dev from "./dev.png";
import "./develop.css";
import it from "./it.png";
import eCommerce from "./eCommerce.png";
import Media from "./Media.png";
import Real  from "./Real Estate.png";
import Engineering from "./Engineering.png";
import Architech  from "./Architech.png";
import Healthcare from "./Healthcare.png";
import  Finance from "./Finance.png";
import Hospitality from "./Hospitality.png";
import Ad   from "./Ad Agency.png";
import Auto  from "./Auto Mobile.png";
import Imports  from "./Imports.png"


function Develop(){
    return(
        <div className="develop_con">
            <div className="develop_first_con">
            <div className="develop_sub_con">
                <div className="develop_img">
                    <img src={dev} />

                </div>
                <div className="develop_word">
                    <h6>develop</h6>
                    <h2>We Grow Your Business s Online Presence!!!</h2>
                    <h5>Duhzine IT Solutions not only concentrates on the website,
                        we are your strategic partner in expanding your digital
                         footprint. With a keen eye on the latest trends, we navigate
                          the dynamic landscape of online growth, ensuring your
                           business thrives in the digital era. Let us elevate your brand
                                 and reach new heights together</h5>
                </div>
            </div>

            <div className="explore_sub_con">
                <div className="explore_word">
                    <h6>EXPLORE</h6>
                    <h2>We have Served In Different Industry Vertical</h2>
                    <h5>We have provided premium web development services to a large clientele across multiple industries, enabling them
                          leverage their potential, expand their market share and increase their turnover.</h5>

                </div>
                <div className="explore_con_box">
                    <div className="explore_box">
                        <img src={it} />
                        <h6>IT / Software</h6>
                    </div>

                    <div className="explore_box">
                        <img src={Real} />
                        <h6>Real Estate</h6>
                    </div>

                    <div className="explore_box">
                        <img src={ Engineering} />
                        <h6>Engineering</h6>
                    </div>

                    <div className="explore_box">
                        <img src={Architech} />
                        <h6>Architech & Interior</h6>
                    </div>

                    <div className="explore_box">
                        <img src={eCommerce} />
                        <h6>eCommerce</h6>
                    </div>

                    <div className="explore_box">
                        <img src={Healthcare} />
                        <h6>Healthcare</h6>
                    </div>

                    <div className="explore_box">
                        <img src={Finance} />
                        <h6>Finance</h6>
                    </div>

                    <div className="explore_box">
                        <img src={Hospitality} />
                        <h6>Hospitality</h6>
                    </div>

                    <div className="explore_box">
                        <img src={Media} />
                        <h6>Media / Cinema</h6>
                    </div>

                    <div className="explore_box">
                        <img src={Ad} />
                        <h6>Ad Agency</h6>
                    </div>

                    <div className="explore_box">
                        <img src={Auto} />
                        <h6>Auto Mobile</h6>
                    </div>

                    <div className="explore_box">
                        <img src={Imports} />
                        <h6>Imports & Exports</h6>
                    </div>


                </div>

            </div>


            </div>
        </div>
    )

}

export default Develop;