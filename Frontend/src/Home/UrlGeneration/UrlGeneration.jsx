import React from "react";

function UrlGeneration() {
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
                />
              </div>
              <button className=" self-start text-white bg-blue-700 p-3 rounded-2xl text-lg font-bold">
                Get your link for free -&gt;
              </button>
            </div>
            {/* Output Div */}
            {/* {shortenedUrl && ( */}
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
                    value={"https://example.com"}
                    className="w-full p-2 border rounded text-gray-700 bg-white"
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("https://example.com");
                      alert("Link copied to clipboard!");
                    }}
                    className="px-4 py-2 bg-blue-700 rounded-2xl text-md font-bold text-white  hover:bg-blue-800"
                  >
                    Copy
                  </button>
                </div>
              </div>

              {/* Right: QR + Copy */}
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                  alt="QR Code"
                  className="h-24 w-24 border rounded"
                  id="qrCodeImage"
                />
                <a
                  href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                  download="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                  className="mt-2 inline-block px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 text-center"
                >
                  Download QR Code
                </a>
              </div>
            </div>
            {/* )} */}
          </div>
        </div>
      </section>
    </>
  );
}

export default UrlGeneration;
