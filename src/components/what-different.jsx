import React from "react";
// import Section Heading
// import SectionHeading from "../Common/SectionHeading";
// import Sidebar
// import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import { FiTarget, FiEdit3, FiHeart, FiX } from "react-icons/fi";

const WhatDifferent = () => {
  return (
    <>
      <div className="container lg:mt-24 mt-16">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="section_heading_center">
            <h4>What Makes Us Different</h4>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          <div className="text-center px-6">
            <div className="relative text-transparent">
              <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                <FiTarget></FiTarget>
              </div>
            </div>

            <div className="content mt-7">
              <h5 className="h5 text-lg font-semibold">Exclusive access</h5>
              <p className="text-slate-400 mt-3">
                With decades of industry expertise, we unlock the doors to exquisite properties and
                experiences beyond the ordinary reach. Our discerning clientele enjoys unprecedented
                entry to the world's most coveted destinations.
              </p>
            </div>
          </div>

          <div className="text-center px-6">
            <div className="relative text-transparent">
              <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                <FiEdit3></FiEdit3>
              </div>
            </div>

            <div className="content mt-7">
              <h5 className="h5 text-lg font-semibold">Personalized expertise</h5>
              <p className="text-slate-400 mt-3">
                Our recommendations are born from extensive, first-hand exploration. We craft travel
                itineraries with an intimate understanding of each destination's unique allure,
                ensuring your journey is as exclusive as it is enchanting.
              </p>
            </div>
          </div>

          <div className="text-center px-6">
            <div className="relative text-transparent">
              <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                <FiHeart></FiHeart>
              </div>
            </div>

            <div className="content mt-7">
              <h5 className="h5 text-lg font-semibold">Conscious experiences</h5>
              <p className="text-slate-400 mt-3">
                We believe luxury travel should not only be exceptional but also conscious. Our
                commitment to sustainable exploration means every trip you embark on with us leaves
                a positive imprint on the planet, marrying indulgence with integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatDifferent;
