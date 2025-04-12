import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="bg-[#061d39]  flex justify-center h-20 items-center">
        <ul className="w-3/4 flex justify-around text-white text-lg font-bold items-center">
          <li>
            <img
              src="https://docrdsfx76ssb.cloudfront.net/wp-content/themes/JointsWP-CSS-master/assets/scripts/pcta/logo.svg"
              alt="Logo"
              className="h-26 w-26"
            />
          </li>
          <li className="cursor-pointer">
            <a href="#UrlShortner">Url Shortner</a>
          </li>
          <li className="cursor-pointer">
            <a href="#KnowMore">Know More</a>
          </li>
          <li className="cursor-pointer">Dashboard</li>
          <li>
            <button className="cursor-pointer py-1 px-4 border-2 border-white rounded-xl text-lg text-white font-semibold">
              Log in
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
