import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../Redux/Slice/UserSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar() {
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

  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const LogoutUser = () => {
    localStorage.clear();
    navigate("/login");
    dispatch(logoutUser());
  };
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
            <Link to={"/Dashboard"}>Dashboard</Link>
          </li>
          <li>
            {isUserLoggedIn ? (
              <button
                onClick={() => LogoutUser()}
                className="cursor-pointer py-1 px-4 border-2 border-white rounded-xl text-lg text-white font-semibold"
              >
                Log out
              </button>
            ) : (
              <Link
                to={"/Login"}
                className="cursor-pointer py-1 px-4 border-2 border-white rounded-xl text-lg text-white font-semibold"
              >
                Log in
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
