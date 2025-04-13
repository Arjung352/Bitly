import { TextField } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import LoadingSpinner from "../main/LoadingSpinner";
import { useDispatch } from "react-redux";
import { loginUser } from "../Redux/Slice/UserSlice";
import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";

function Login() {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });
  const [load, setLoad] = useState(false);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    axios
      .post("http://localhost:5000/checkUser/login", formData)
      .then((response) => {
        setFormData({ Email: "", Password: "" });
        localStorage.setItem("Email", formData.Email);
        dispatch(loginUser());
        toast.success("Login succesfully!");
        setLoad(false);
        redirect("/");
      })
      .catch((error) => {
        setFormData({ Email: "", Password: "" });
        toast.error("Email or Password is Incorrect");
        setLoad(false);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center h-svh backGround-Gradient-Light">
      <img
        src="https://docrdsfx76ssb.cloudfront.net/wp-content/themes/JointsWP-CSS-master/assets/scripts/pcta/logo.svg"
        alt="Logo"
        className="h-26 w-26 absolute top-0 left-5"
      />
      <div className="backdrop-blur-lg bg-white/10 p-8 rounded-xl shadow-md shadow-black border border-white/20 font-sans w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-4">
          Log-In to Bitly
        </h2>
        <h3 className="text-sm text-gray-600 text-center mb-6">
          Log-in to get to work & manage your account.
        </h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            label="Email"
            type="text"
            value={formData.Email}
            required
            name="Email"
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            required
            onChange={handleInputChange}
            value={formData.Password}
            name="Password"
            fullWidth
          />
          <button
            type="submit"
            className="w-full font-sans py-[0.6rem] bg-gradient-to-r from-black via-blue-800 to-black text-white rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-center items-center"
          >
            {load ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <p>Log-in</p>
            )}
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default Login;
