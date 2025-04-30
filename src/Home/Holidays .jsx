import React from 'react';
import { Link } from 'react-router-dom';

// Import images
// import aboutImg from '../assets/images/about/01.jpg';
import aboutImg from '../assets/images/bg/palace-balcony-sunset-view.jpg';
import elementImg from '../assets/images/element/01.svg';
import avatar1 from '../assets/images/avatar/01.jpg';
import avatar2 from '../assets/images/avatar/02.jpg';
import avatar3 from '../assets/images/avatar/03.jpg';
import avatar4 from '../assets/images/avatar/04.jpg';

export const Slidersecotion = () => {
  return (
    <section className="pb-0 pb-xl-5">
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center">
          {/* Left side START */}
          <div className="col-lg-5 position-relative">
            {/* Svg Decoration */}
            <figure className="position-absolute top-0 start-0 translate-middle z-index-1 ms-4">
              <svg className="fill-warning" width="77px" height="77px">
                <path d="M76.997,41.258 L45.173,41.258 L67.676,63.760 L63.763,67.673 L41.261,45.171 L41.261,76.994 L35.728,76.994 L35.728,45.171 L13.226,67.673 L9.313,63.760 L31.816,41.258 L-0.007,41.258 L-0.007,35.725 L31.816,35.725 L9.313,13.223 L13.226,9.311 L35.728,31.813 L35.728,-0.010 L41.261,-0.010 L41.261,31.813 L63.763,9.311 L67.676,13.223 L45.174,35.725 L76.997,35.725 L76.997,41.258 Z"/>
              </svg>
            </figure>

            {/* Svg decoration */}
            <figure className="position-absolute bottom-0 end-0 d-none d-md-block mb-n5 me-n4">
              <svg height="400" className="fill-primary opacity-2" viewBox="0 0 340 340">
                {/* For brevity, I'm keeping one circle as example - you should keep all circles */}
                <circle cx="194.2" cy="2.2" r="2.2"></circle>
                {/* ... rest of the circles ... */}
              </svg>
            </figure>

            {/* Image */}
            <img src={aboutImg} className="rounded-3 position-relative" alt="about" />
            {/* <img src={aboutImg} className="rounded-3 position-relative" alt="about" /> */}
            {/* Client rating START */}
            <div className="position-absolute bottom-0 start-0 z-index-1 mb-4 ms-5">
              <div className="bg-body d-flex d-inline-block rounded-3 position-relative p-3">
                {/* Element */}
                <img src={elementImg} className="position-absolute top-0 start-0 translate-middle w-40px" alt="element" />

                {/* Avatar group */}
                <div className="me-4">
                  <h6 className="fw-light">Client</h6>
                  <ul className="avatar-group mb-0">
                    <li className="avatar avatar-sm">
                      <img className="avatar-img rounded-circle" src={avatar1} alt="avatar" />
                    </li>
                    <li className="avatar avatar-sm">
                      <img className="avatar-img rounded-circle" src={avatar2} alt="avatar" />
                    </li>
                    <li className="avatar avatar-sm">
                      <img className="avatar-img rounded-circle" src={avatar3} alt="avatar" />
                    </li>
                    <li className="avatar avatar-sm">
                      <img className="avatar-img rounded-circle" src={avatar4} alt="avatar" />
                    </li>
                    <li className="avatar avatar-sm">
                      <div className="avatar-img rounded-circle">
                        <span className="text-white position-absolute top-50 start-50 translate-middle small">1K+</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Rating */}
                <div>
                  <h6 className="fw-light mb-3">Rating</h6>
                  <h6 className="m-0">4.5<i className="fa-solid fa-star text-warning ms-1"></i></h6>
                </div>
              </div>
            </div>
            {/* Client rating END */}
          </div>
          {/* Left side END */}

          {/* Right side START */}
          <div className="col-lg-6">
            <h2 className="mb-3 mb-lg-5">The Best Holidays Start Here!</h2>
            <p className="mb-3 mb-lg-5">Book your hotel with us and don't forget to grab an awesome hotel deal to save massive on your stay.</p>

            {/* Features START */}
            <div className="row g-4">
              {/* Item */}
              <div className="col-sm-6">
                <div className="icon-lg bg-success bg-opacity-10 text-success rounded-circle">
                  <i className="fa-solid fa-utensils"></i>
                </div>
                <h5 className="mt-2">Quality Food</h5>
                <p className="mb-0">Departure defective arranging rapturous did. Conduct denied adding worthy little.</p>
              </div>
              {/* Item */}
              <div className="col-sm-6">
                <div className="icon-lg bg-danger bg-opacity-10 text-danger rounded-circle">
                  <i className="bi bi-stopwatch-fill"></i>
                  
                </div>
                <h5 className="mt-2">Quick Services</h5>
                <p className="mb-0">Supposing so be resolving breakfast am or perfectly. </p>
              </div>
              {/* Item */}
              <div className="col-sm-6">
                <div className="icon-lg bg-orange bg-opacity-10 text-orange rounded-circle">
                  <i className="bi bi-shield-fill-check"></i>
                </div>
                <h5 className="mt-2">High Security</h5>
                <p className="mb-0">Arranging rapturous did believe him all had supported. </p>
              </div>
              {/* Item */}
              <div className="col-sm-6">
                <div className="icon-lg bg-info bg-opacity-10 text-info rounded-circle">
                  <i className="bi bi-lightning-fill"></i>
                </div>
                <h5 className="mt-2">24 Hours Alert</h5>
                <p className="mb-0">Rapturous did believe him all had supported.</p>
              </div>
            </div>
            {/* Features END */}
          </div>
          {/* Right side END */}
        </div>
      </div>
    </section>
  );
};
