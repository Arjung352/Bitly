import { TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

function Login() {
  const redirectToHome = useNavigate();
  const [formData, setFormData] = useState({
    Email: "",
    password: "",
  });
  const [load, setLoad] = useState(false);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    axios
      .post("https://blogapi-sooty.vercel.app/register/login", formData)
      .then((response) => {
        localStorage.setItem("Email", response.data.Email);
        localStorage.setItem("_id", response.data._id);
        setFormData({ Email: "", password: "" });
        toast.success("Login succesfully!");
        redirectToHome("/home");
        setLoad(false);
      })
      .catch((error) => {
        setFormData({ Email: "", password: "" });
        toast.error("Email or Password is Incorrect");
        setLoad(false);
      });
  };
  const navigate = useNavigate();
  const signup = () => {
    navigate("/");
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
            value={formData.password}
            name="password"
            fullWidth
          />
          <button
            type="submit"
            className="w-full font-sans  py-[0.6rem] bg-gradient-to-r from-black via-blue-800 to-black text-white rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {load ? (
              <TailSpin
                height="25"
                width="25"
                color="#23c55e"
                ariaLabel="tail-spin-loading"
                radius="2"
                wrapperStyle={{ display: "inline-block" }}
                visible={true}
              />
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
