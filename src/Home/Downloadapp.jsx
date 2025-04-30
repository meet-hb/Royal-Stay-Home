import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import googlePlay from '../assets/images/element/google-play.svg';
import appStore from '../assets/images/element/app-store.svg';

const Downloadapp = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row g-4">
          {/* Help */}
          <div className="col-md-6 col-xxl-4">
            <div className="bg-body d-flex rounded-3 h-100 p-4">
              <h3><i className="fa-solid fa-hand-holding-heart"></i></h3>
              <div className="ms-3">
                <h5>24x7 Help</h5>
                <p className="mb-0">If we fall short of your expectation in any way, let us know</p>
              </div>
            </div>
          </div>

          {/* Trust */}
          <div className="col-md-6 col-xxl-4">
            <div className="bg-body d-flex rounded-3 h-100 p-4">
              <h3><i className="fa-solid fa-hand-holding-usd"></i></h3>
              <div className="ms-3">
                <h5>Payment Trust</h5>
                <p className="mb-0">All refunds come with no questions asked guarantee</p>
              </div>
            </div>
          </div>

          {/* Download app */}
          <div className="col-lg-6 col-xl-5 col-xxl-3 ms-xxl-auto">
            <h5 className="mb-4">Download app</h5>
            <div className="row g-3">
              {/* Google play store button */}
              <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                <Link to="#"> 
                  <img src={googlePlay} alt="Google Play Store" /> 
                </Link>
              </div>
              {/* App store button */}
              <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                <Link to="#"> 
                  <img src={appStore} alt="App Store" /> 
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Downloadapp;