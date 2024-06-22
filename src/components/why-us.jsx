import React from "react";
import { Link } from "react-router-dom";

import about from "../assets/images/why-us2.jpg";
import map from "../assets/images/map-plane-big-flip.png";

import { FiUsers, FiGlobe } from "react-icons/fi";

import CountUp from "react-countup";

export default function WhyUs() {
  return (
    <div className="container relative md:mt-24 mt-16">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6 relative">
        <div className="md:col-span-6">
          <div className="lg:ms-8">
            <h5 className="mb-6 md:leading-normal leading-normal font-semibold">WHY US?</h5>
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Expert Travel Designers <br /> for the evolved traveller
            </h3>

            <p className="text-slate-400 max-w-xl mb-6">
              Our clients are informed, aware and discerning. They like to ‘travel real’ seeking
              life’s unique and varied experiences, small or big. At Panache we believe that a good
              trip involves a journey away from home that includes enriching and memorable
              experiences and returning home transformed. This in a way improves how one connects
              with the one’s close-ones and the world.
            </p>

            <Link
              to=""
              className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md"
            >
              Talk To a Travel Expert <i className="mdi mdi-chevron-right align-middle ms-0.5"></i>
            </Link>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="relative">
            <img
              src={about}
              className="mx-auto rounded-3xl shadow dark:shadow-gray-700 w-[75%]"
              alt=""
            />
          </div>
        </div>

        <div className="absolute bottom-0 start-1/2 -z-1">
          <img src={map} className="lg:w-[600px] w-96" alt="" />
        </div>
      </div>
    </div>
  );
}
