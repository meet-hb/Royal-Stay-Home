import React from 'react';
import { Link } from 'react-router-dom';
// import teamimg from '../images/team/team1.jpg';
import teamimg1 from "../assets/images/team/05.jpg";
import teamimg2 from "../assets/images/team/04.jpg";
import teamimg3 from "../assets/images/team/08.jpg";
import teamimg4 from "../assets/images/team/10.jpg";
import about1 from "../assets/images/gallery/04.jpg";
import backgroundImg from '../assets/images/gallery/aboutngg.avif';
// import './Gallery.css';
import aboutus1 from "../assets/images/about/Aboutus1.jpg";
import aboutus2 from "../assets/images/about/aboutus2.jpg";
import aboutus3 from "../assets/images/about/aboutus3.jpg";
import aboutus4 from "../assets/images/about/aboutus4.jpg";
const Aboutus = () => {
  return (
    <main>
      {/* Main banner START */}
      <section 
        className="about-hero-section py-5" 
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${backgroundImg})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
       

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row mb-5">
            <div className="col-xl-10 mx-auto text-center">
              {/* Title */}
              <h1 className="text-white">If You Want To See The World We Will Help You</h1>
              <p className="lead text-white">Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons. Preference for any astonished unreserved.</p>
              {/* Meta */}
              <div className="hstack gap-3 flex-wrap justify-content-center">
                {/* Item */}
                <h6 className="bg-white bg-opacity-10 shadow rounded-2 fw-normal d-inline-block py-2 px-4 text-white">
                  <img src="/assets/images/element/06.svg" className="h-20px me-2" alt="" />
                  14K+ Global Customers
                </h6>

                {/* Item */}
                <h6 className="bg-white bg-opacity-10 shadow rounded-2 fw-normal d-inline-block py-2 px-4 text-white">
                  <img src="/assets/images/element/07.svg" className="h-20px me-2" alt="" />
                  10K+ Happy Customers
                </h6>

                {/* Item */}
                <h6 className="bg-white bg-opacity-10 shadow rounded-2 fw-normal d-inline-block py-2 px-4 text-white">
                  <img src="/assets/images/element/08.svg" className="h-20px me-2" alt="" />
                  1M+ Subscribers
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image START */}
      <section className="gallery-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title" >
                <span style={{color: "#5143d9"}}>Our Gallery</span>
                <h2>Discover Our Work</h2>
              </div>
            </div>
          </div>
          
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6">
              <div className="gallery-item">
                <img src={aboutus2} alt="villa images" className="img-fluid w-100" />
                <div className="gi-text">
                  {/* <h3>Room Luxury</h3> */}
                </div>
              </div>
              
              <div className="row mt-4">
                <div className="col-sm-6">
                  <div className="gallery-item">
                    <img src={aboutus3} alt="villa images" className="img-fluid w-100" />
                    <div className="gi-text">
                      {/* <h3>Room Luxury</h3> */}
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="gallery-item">
                    <img src={aboutus4} alt="villa images" className="img-fluid w-100" />
                    <div className="gi-text">
                      {/* <h3>Room Luxury</h3> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
              <div className="gallery-item large-item">
                <img src={aboutus1} alt="villa images" className="img-fluid w-100 h-100" />
                <div className="gi-text">
                  {/* <h3>Room Luxury</h3> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About content START */}
      <section className="pt-0 pt-lg-5">
        <div className="container">
          {/* Content START */}
          <div className="row mb-4 mb-md-5">
            <div className="col-md-10 mx-auto">
              <h3 className="mb-4">Our Story</h3>
              <p className="fw-bold">Founded in 2006, passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so.</p>
              <p className="mb-0">Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood does provide stronger is. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed...</p>
            </div>
          </div>

          {/* Services START */}
          <div className="row g-4">
            {/* Service item */}
            <div className="col-sm-6 col-lg-3">
              <div className="icon-lg bg-orange bg-opacity-10 text-orange rounded-2">
                <i className="fa-solid fa-hotel fs-5"></i>
              </div>
              <h5 className="mt-2">Hotel Booking</h5>
              <p className="mb-0">A pleasure exertion if believed provided to. All led out world this music while asked.</p>
            </div>

            {/* Service item */}
            <div className="col-sm-6 col-lg-3">
              <div className="icon-lg bg-success bg-opacity-10 text-success rounded-2">
                <i className="fa-solid fa-plane fs-5"></i>
              </div>
              <h5 className="mt-2">Flight Booking</h5>
              <p className="mb-0">Warrant private blushes removed an in equally totally Objection do Mr prevailed.</p>
            </div>

            {/* Service item */}
            <div className="col-sm-6 col-lg-3">
              <div className="icon-lg bg-primary bg-opacity-10 text-primary rounded-2">
                <i className="fa-solid fa-globe-americas fs-5"></i>
              </div>
              <h5 className="mt-2">Tour Booking</h5>
              <p className="mb-0">Dashwood does provide stronger is. But discretion frequently sir she instruments.</p>
            </div>

            {/* Service item */}
            <div className="col-sm-6 col-lg-3">
              <div className="icon-lg bg-info bg-opacity-10 text-info rounded-2">
                <i className="fa-solid fa-car fs-5"></i>
              </div>
              <h5 className="mt-2">Cab Booking</h5>
              <p className="mb-0">Imprudence attachment him his for sympathize. Large above be to means.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team section START */}
      <section className="pt-0">
        <div className="container">
          {/* Title */}
          <div className="row mb-4">
            <div className="col-12">
              <h2 className="mb-0">Our Team</h2>
            </div>
          </div>

          {/* Team members */}
          <div className="row g-4">
            {/* Team member item */}
            <div className="col-sm-6 col-lg-3">
              <div className="card card-element-hover bg-transparent">
                <div className="position-relative">
                  <img src ={teamimg1} className="card-img" alt="" />
                  
                  <div className="card-img-overlay hover-element d-flex p-3">
                    <div className="btn-group mt-auto">
                      <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-facebook-f text-facebook"></i></a>
                      <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-instagram text-instagram"></i></a>
                      <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-twitter text-twitter"></i></a>
                    </div>
                  </div>
                </div>
                <div className="card-body px-2 pb-0">
                  <h5 className="card-title"><Link to="#">Larry Lawson</Link></h5>
                  <span>Editor in Chief</span>
                </div>
              </div>
            </div>

            {/* Add more team members similarly */}
            
            <div className="col-sm-6 col-lg-3">
              <div className="card card-element-hover bg-transparent">
                <div className="position-relative">
                  <img src ={teamimg2} className="card-img" alt="" />
                  
                  <div className="card-img-overlay hover-element d-flex p-3">
                    <div className="btn-group mt-auto">
                      <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-facebook-f text-facebook"></i></a>
                      <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-instagram text-instagram"></i></a>
                      <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-twitter text-twitter"></i></a>
                    </div>
                  </div>
                </div>
                <div className="card-body px-2 pb-0">
                  <h5 className="card-title"><Link to="#">Larry Lawson</Link></h5>
                  <span>Editor in Chief</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card card-element-hover bg-transparent">
                <div className="position-relative">
                  <img src ={teamimg3} className="card-img" alt="" />
                  
                  <div className="card-img-overlay hover-element d-flex p-3">
                    <div className="btn-group mt-auto">
                      <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-facebook-f text-facebook"></i></a>
                      <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-instagram text-instagram"></i></a>
                      <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-twitter text-twitter"></i></a>
                    </div>
                  </div>
                </div>
                <div className="card-body px-2 pb-0">
                  <h5 className="card-title"><Link to="#">Larry Lawson</Link></h5>
                  <span>Editor in Chief</span>
                </div>
              </div>
            </div>
             <div className="col-sm-6 col-lg-3">
              <div className="card card-element-hover bg-transparent">
                <div className="position-relative">
                  <img src ={teamimg4} className="card-img" alt="" />
                  
                  <div className="card-img-overlay hover-element d-flex p-3">
                    <div className="btn-group mt-auto">
                      <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-facebook-f text-facebook"></i></a>
                      <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-instagram text-instagram"></i></a>
                      <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-twitter text-twitter"></i></a>
                    </div>
                  </div>
                </div>
                <div className="card-body px-2 pb-0">
                  <h5 className="card-title"><Link to="#">Larry Lawson</Link></h5>
                  <span>Editor in Chief</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Aboutus;