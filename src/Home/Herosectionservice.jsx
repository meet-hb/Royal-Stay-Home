import React from "react";
import backgroundImg from "../assets/images/gallery/ourservice.jpg";

const Herosectionservice = () => {
  return (
    <section 
      className="hero-section py-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h1 style={{color: "white"}}>Our Services</h1>
            <p
              className="lead text-white mb-5"
              style={{ fontSize: "1.25rem", lineHeight: "1.8" }}
            >
              We create personalized travel experiences tailored to each guest's
              preferences. From private tours and special events to hidden local
              gems, we ensure every journey is unique and unforgettable.
            </p>
            <div className="d-flex justify-content-center gap-4">
              <div className="bg-white bg-opacity-10 rounded-3 px-4 py-3 text-white">
                <h4 className="mb-0 text-white">14K+ Global Customers</h4>
              </div>
              <div className="bg-white bg-opacity-10 rounded-3 px-4 py-3 text-white">
                <h4 className="mb-0 text-white">10K+ Happy Customers</h4>
              </div>
              <div className="bg-white bg-opacity-10 rounded-3 px-4 py-3 text-white">
                <h4 className="mb-0 text-white">1M+ Subscribers</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosectionservice;
