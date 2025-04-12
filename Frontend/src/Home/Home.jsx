import React from "react";
import Navbar from "../Navbar/Navbar";
import FAQ from "./FAQ/FAQ";
import Footer from "../Footer/Footer";
import UrlGeneration from "./UrlGeneration/UrlGeneration";
function Home() {
  return (
    <>
      {/* importing navbar */}
      <Navbar />
      {/* main content of the page */}
      <main className="bg-[#061d39] h-full">
        {/* Header content */}
        <section>
          <div className="relative h-64 w-full">
            {/* Background Image */}
            <img
              src="https://docrdsfx76ssb.cloudfront.net/static/1744313580/pages/wp-content/themes/JointsWP-CSS-master/assets/images/stars.svg"
              className="absolute inset-0 w-full z-0"
              alt="background"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
              <div className="text-white font-WorkSans text-center max-w-4xl w-2/3">
                <h1 className="text-5xl  font-semibold mb-6">
                  Build stronger digital connections
                </h1>
                <p className="text-2xl">
                  Use our URL shortener, QR Codes, and landing pages to engage
                  your audience and connect them to the right information.
                  Build, edit, and track everything inside the Bitly Connections
                  Platform.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* section for displaying banner for link shortner and qr generator */}
        <section>
          <div className="flex justify-center mb-12">
            <p className="flex text-2xl text-black bg-white rounded-xl py-2 items-center px-4 font-semibold gap-3">
              <span>
                <img
                  src="https://docrdsfx76ssb.cloudfront.net/static/1744313580/pages/wp-content/uploads/2024/05/icon_codes-links-created.svg"
                  alt="link and Qr code image"
                  className="h-16 w-16"
                />
              </span>
              Short link and generate QR Code
            </p>
          </div>
        </section>
        {/* section for link input and output */}
        <UrlGeneration />
        <p className="my-4 text-xl text-white text-center font-semibold">
          Sign up for free. No need to pay any money
        </p>
        {/* FAQ Section */}
        <section className="bg-[#f7f4ed] py-6" id="KnowMore">
          <FAQ />
        </section>
      </main>
      {/* Footer */}
      <footer className="flex justify-center bg-[#f7f4ed]">
        <div className="w-full sm:w-3/4 lg:w-4/5">
          <Footer />
        </div>
      </footer>
    </>
  );
}

export default Home;
