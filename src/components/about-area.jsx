import React from "react";
// Import Link
import { Link } from "react-router-dom";
// import Img
import Img from "../assets/img/common/abour_right.png";

const AboutArea = () => {
  return (
    <>
      <section id="about_us_top" className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about_us_left">
                <div className="section_heading_left">
                  <h5>About BluVoyages</h5>
                </div>
                <h2>We Are The World Best Travel Agency Company Since 2000</h2>
                <p>
                  We're experienced travel consultants who take into consideration customer
                  interests and budget and then tailor-make a trip offering expert insight into
                  places you want to travel to.
                </p>
                <p>
                  We invite you to delve into our journey, learn about our inspirations, and
                  discover how we can transform your wanderlust into unforgettable memories. Come,
                  explore our story and let us be a part of yours.
                </p>
                <Link
                  to=""
                  className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md"
                >
                  Find Tours <i className="mdi mdi-chevron-right align-middle ms-0.5"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="about_us_right">
                <img src={Img} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
