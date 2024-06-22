import React from "react";
// import Section Heading
// import SectionHeading from "../Common/SectionHeading";
// import Sidebar
// import SideBar from "./SideBar";
// import Data
import { DestinationData2 } from "../data/data";
// import Link
import { Link } from "react-router-dom";

const TopDestinationsArea = () => {
  return (
    <>
      {/* <!-- Destinations Areas --> */}
      <section id="top_testinations" className="section_padding">
        <div className="container">
          {/* <!-- Section Heading --> */}
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="section_heading_center">
              <h5>BluVoyages destinations</h5>
            </div>
          </div>
          <div className="row">
            <div className="grid grid-cols-1 pb-8 text-center">
              <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                Experiences you'll want to have
              </h3>

              <p className="text-slate-400 max-w-xl mx-auto">
                In our near-25 years, we've seen the world and given it to our clients, in the form
                of enriching experiences across the globe. Dive into our curation of trips and
                experiences that will be dominating your Instagram feeds later this year.
              </p>
            </div>
            s
          </div>
          {/* <SectionHeading heading="19 destinations found" /> */}
          <div className="row">
            {/* <div className="col-lg-3">
              <SideBar />
            </div> */}
            {/* <div className="col-lg-9"> */}
            <div className="row">
              {DestinationData2.map((data, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
                  <div className="top_destinations_box img_hover">
                    <div className="heart_destinations">
                      <i className="fas fa-heart"></i>
                    </div>
                    <Link to="/destinations-details" className="d-block square-image-container">
                      <img
                        src={data.img}
                        alt="img"
                        className="img-fluid w-100 h-100 object-fit-cover"
                      />
                    </Link>
                    <div className="top_destinations_box_content text-center">
                      {/* <span className="review_rating">{data.reviewRating}</span>{" "}
                        <span className="review_count">{data.reviewCount}</span> */}
                      <span className="review_count text-white">{data.tripsCount} Trips</span>
                      <h4>
                        <Link to="/destinations-details">{data.heading}</Link>
                      </h4>
                      {/* <h3>
                        {data.price}
                        <span>Price starts from</span>
                      </h3> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopDestinationsArea;
