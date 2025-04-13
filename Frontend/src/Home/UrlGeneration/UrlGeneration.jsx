import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Qrcode from "./Qrcode/Qrcode";
import LoadingSpinner from "../../main/LoadingSpinner";

function UrlGeneration() {
  const [inputUrl, setInputUrl] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  const [load, setLoad] = useState(false);
  const handleInputChange = (e) => {
    setInputUrl(e.target.value);
  };
  // calling the api for conversion
  const handleSubmit = async (e) => {
    setLoad(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/url/urlShortner",
        {
          url: inputUrl,
          Email: localStorage.getItem("Email"),
        }
      );
      setUniqueId(response.data.id);
      toast.success("Url generated succesfully");
      setLoad(false);
    } catch (error) {
      setLoad(false);
      toast.error(error);
    }
  };

  return (
    <>
      <section id="UrlShortner">
        <div className="flex justify-center">
          <div className=" w-2/3 bg-white rounded-2xl p-5">
            {/* Input Div */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-semibold">Shorten a long link</p>
                <p className="text-xl">No money is going to be required.</p>
              </div>
              <div>
                <p className=" text-xl font-semibold">
                  Paste your long link here
                </p>
                <input
                  type="text"
                  className="w-full border-2 border-gray-300 rounded mt-4 text-xl p-3 focus:border-blue-500  focus:outline-none"
                  placeholder="https://example.com/my-long-url"
                  value={inputUrl}
                  onChange={handleInputChange}
                  name="Url"
                  required
                />
              </div>
              <button
                onClick={handleSubmit}
                className="self-start text-white bg-blue-700 p-3 rounded-2xl text-lg font-bold"
                disabled={inputUrl.length === 0}
              >
                {load ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  `Get your link for free ->`
                )}
              </button>
            </div>
            {/* Output Div */}
            <div className="mt-6 p-4 border border-gray-300 rounded-xl shadow-md bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Left: Link + Copy */}
              <div className="flex flex-col w-full md:w-2/3">
                <p className="text-lg font-semibold mb-2">
                  Your generated link:
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={`http://localhost:5000/url/${uniqueId}`}
                    className="w-full p-2 border rounded text-gray-700 bg-white"
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `http://localhost:5000/url/${uniqueId}`
                      );
                      toast.success("Link copied to clipboard!");
                    }}
                    className="px-4 py-2 bg-blue-700 rounded-2xl text-md font-bold text-white  hover:bg-blue-800"
                  >
                    Copy
                  </button>
                </div>
              </div>
              {/* Right: QR + Copy */}
              <div className="flex flex-col items-center">
                <Qrcode shortUrl={`http://localhost:5000/url/${uniqueId}`} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </>
  );
}

export default UrlGeneration;
