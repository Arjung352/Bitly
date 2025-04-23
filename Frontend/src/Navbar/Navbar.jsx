import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../Redux/Slice/UserSlice";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleScrollOrRedirect = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false }); // Route to home page first
      // Delay scroll until the next render
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Small delay to allow rendering
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };
  // user logout/login logic
  const LogoutUser = () => {
    localStorage.clear();
    navigate("/login");
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup function to reset overflow style when the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // toggle for responsive navbar
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="bg-[#061d39] max-md:justify-between max-md:items-center  flex justify-center h-20 items-center">
        <img
          src="https://res.cloudinary.com/dzrjja888/image/upload/v1745397886/icon-256x256-removebg-preview_uwowyq.png"
          alt="Logo"
          className=" md:hidden h-20 w-20 ml-5 mt-3 max-sm:h-14 max-sm:w-14"
        />{" "}
        <ul className="w-3/4 flex justify-around max-md:hidden text-white text-lg font-bold items-center">
          <li>
            <img
              src="https://res.cloudinary.com/dzrjja888/image/upload/v1745397886/icon-256x256-removebg-preview_uwowyq.png"
              alt="Logo"
              className="h-20 w-20"
            />
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleScrollOrRedirect("UrlShortner")}
          >
            Url Shortner
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleScrollOrRedirect("KnowMore")}
          >
            Know More
          </li>

          <li className="cursor-pointer">
            <NavLink to={"/Dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            {localStorage ? (
              <button
                onClick={() => LogoutUser()}
                className="cursor-pointer py-1 px-4 border-2 border-white rounded-xl text-lg text-white font-semibold"
              >
                Log out
              </button>
            ) : (
              <NavLink
                to={"/Login"}
                className="cursor-pointer py-1 px-4 border-2 border-white rounded-xl text-lg text-white font-semibold"
              >
                Log in
              </NavLink>
            )}
          </li>
        </ul>
        <div className="md:hidden flex mr-5">
          {isMenuOpen === true ? (
            <button onClick={toggleMenu}>
              <CloseIcon className="text-white" />
            </button>
          ) : (
            <button onClick={toggleMenu} className="text-white">
              <MenuIcon />
            </button>
          )}
        </div>
      </div>
      {/* Overlay Menu with Transition */}
      <div
        className={`fixed top-20 left-0 w-full bg-black/80 text-white z-30 flex flex-col items-center py-4 md:hidden  transform ${
          isMenuOpen ? "-translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white text-xl flex flex-col justify-center items-center font-medium font-work space-y-4">
          <li
            className="cursor-pointer"
            onClick={() => handleScrollOrRedirect("UrlShortner")}
          >
            Url Shortner
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleScrollOrRedirect("KnowMore")}
          >
            Know More
          </li>

          <li className="cursor-pointer">
            <NavLink to={"/Dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            {localStorage ? (
              <button
                onClick={() => LogoutUser()}
                className="cursor-pointer py-1 px-4 border-2 border-white rounded-xl text-lg bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white font-semibold"
              >
                Log out
              </button>
            ) : (
              <NavLink
                to={"/Login"}
                className="cursor-pointer py-1 px-4 border-2 border-white rounded-xl text-lg bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white font-semibold"
              >
                Log in
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
