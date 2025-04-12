import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <hr className=" border border-gray-400" />
      <div className="flex justify-between my-10 font-sans max-md:mx-4 mx-8 max-md:flex-col max-md:gap-5">
        <div className="flex flex-col items-center justify-center text-center max-md:flex-col max-md:items-center max-md:justify-center">
          <img
            src="https://docrdsfx76ssb.cloudfront.net/wp-content/themes/JointsWP-CSS-master/assets/scripts/pcta/logo.svg"
            className="h-20"
            alt="Logo"
          />
          <p className="mt-2 w-4/6 text-lg text-gray-600">
            Shorten it. Scan it. Share it.
          </p>
        </div>

        <div>
          <p className="font-bold text-xl">Usefull Links</p>
          <div className="text-lg text-gray-600 flex flex-col gap-3">
            <a className="mt-3" href="#KnowMore">
              About Us
            </a>
            <Link to="https://blogingdotblog.netlify.app/" target="_blank">
              Blogs
            </Link>
            <a href="#KnowMore">FAQ</a>
          </div>
        </div>
        <div>
          <Link className="font-bold text-xl">Contact-Us</Link>
          <div className="text-lg text-gray-600 flex flex-col gap-3">
            <Link to="mailto:Arjung.dev29@gmail.com" className="mt-3">
              Arjung.dev29@gmail.com
            </Link>
            <Link to="https://github.com/Arjung352/">GitHub</Link>
            <Link>Social Media</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
