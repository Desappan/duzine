import React from "react";
import "./service.css";


import { FaCalendarDays } from "react-icons/fa6";
import number from "./number.jpg";
// import weekend from "./weekend.svg fill.png";
import icon from "./Icon (1).png";
import ser_icon2 from "./ser_icon2.png";
import ser_icon3 from "./ser_icon3.png";
import ser_icon4 from "./ser_icon4.png";
import ser_icon5 from "./ser_icon5.png";
import ser_icon6 from "./ser_icon6.png";
import ser_icon7 from "./ser_icon7.png";
import ser_icon8 from "./ser_icon8.png";
import ser_icon9 from "./ser_icon9.png";
import ser_icon10 from "./ser_icon10.png";





function Service(){
    return(
        <div className="Service_container">
            <div className="service_sub_con">
                <div className="service_first_con">
                    <h6>POPULAR SERVICES</h6>
                    <h1>We Offer a Wide <span>Variety Of IT Services</span></h1>
                    <h5>Our services makes building long-term relationships with our clients and providing
them with ongoing support to ensure their continued success.</h5>

                </div>
                <div className="service_second_con">
                    <div className="service_type">
                        {/* <FaCalendarDays className="service_icon" /> */}
                        <img src={icon} className="service_icon" />
                       
                        <h3>Web Development</h3>
                        <h6>Enhance your website's functionality
and performance with our expert web
development team.</h6>
                    </div>

                    <div className="service_type">
                        {/* <FaCalendarDays className="service_icon" /> */}
                        <img src={ser_icon2} className="service_icon" />
                        <h3>Mobile App Development</h3>
                        <h6>Transform your business idea into
a successful mobile app with our
experienced app developers.</h6>
                    </div>

                    <div className="service_type">
                        {/* <FaCalendarDays className="service_icon" /> */}
                        <img src={ser_icon3} className="service_icon" />
                        <h3>Digital Marketing</h3>
                        <h6>Maximize your website traffic and
conversions with our tailored SEO,
PPC, social media marketing solutions</h6>
                    </div>

                    <div className="service_type">
                        {/* <FaCalendarDays className="service_icon" /> */}
                        <img src={ser_icon4} className="service_icon" />
                        <h3>UXUI Design</h3>
                        <h6>Deliver an exceptional user
experience with our intuitive and
visually stunning UX/UI designs</h6>
                    </div>

                    <div className="service_type">
                        {/* <FaCalendarDays className="service_icon" /> */}
                        <img src={ser_icon5} className="service_icon" />
                        <h3>Video Editing</h3>
                        <h6>Elevate your brand's video content
with our tailored and high-quality
video editing services</h6>
                    </div>

                    <div className="service_type">
                        {/* <FaCalendarDays className="service_icon" /> */}
                        <img src={ser_icon6} className="service_icon" />
                        <h3>Graphics Design</h3>
                        <h6>Increase your brand's visibility and
recognition with our versatile and
impactful graphic design solutions.</h6>
                    </div>


                </div>
                {/* number*/}
                <div className="number_con">
                    <div className="number_sub_con">
                        <div className="number_one">
                        {/* <FaCalendarDays /> */}
                        <img src={ser_icon7}  />
                        <h1>10 +</h1>
                        <h6>Team Member </h6>
                        </div>

                        <div className="number_one">
                        {/* <FaCalendarDays /> */}
                        <img src={ser_icon8}  />
                        <h1>30 +</h1>
                        <h6>Total Project </h6>
                        </div>

                        <div className="number_one">
                        {/* <FaCalendarDays /> */}
                        <img src={ser_icon9}  />
                        <h1>100 +</h1>
                        <h6>Happy Clients </h6>
                        </div>

                        <div className="number_one">
                        {/* <FaCalendarDays /> */}
                        <img src={ser_icon10}  />
                        <h1>10  +</h1>
                        <h6>Certified Students </h6>
                        </div>


                    </div>

                </div>

            </div>


        </div>
    )

}
export default Service;