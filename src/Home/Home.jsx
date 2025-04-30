// import React from 'react'

// export const Home = () => {
//   return (
//    <>

//    </>
//   )
// }
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firstRoundImg from "../assets/images/bg/05.jpg";
import secondRoundImg from "../assets/images/bg/roundimg1.jpg";
import avatarImage from "../assets/images/avatar/12.jpg";
import flatpickr from "flatpickr"; 
import "flatpickr/dist/flatpickr.min.css";
// import homeimg from "../assets/images/bg/palace-balcony-sunset-view.jpg";
import homeimg from "../assets/images/bg/14.jpg";
// import bgImage from '../assets/images/bg/06.jpg';
// import homeimg2 from '../assets/images/gallery/homeimg.avif';


export const Home = () => {
  // Add state for guests and rooms
  const [guestCount, setGuestCount] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  });

  // Update input text when counts change
  const updateGuestText = () => {
    const total = guestCount.adults + guestCount.children;
    return `${total} Guest${total > 1 ? "s" : ""} ${guestCount.rooms} Room${
      guestCount.rooms > 1 ? "s" : ""
    }`;
  };

  // Handler functions for increment/decrement
  const handleCount = (type, operation) => {
    setGuestCount((prev) => {
      const newCount = {
        ...prev,
        [type]: operation === "add" ? prev[type] + 1 : prev[type] - 1,
      };

      // Add limits
      if (type === "adults" && (newCount.adults < 1 || newCount.adults > 8))
        return prev;
      if (
        type === "children" &&
        (newCount.children < 0 || newCount.children > 8)
      )
        return prev;
      if (type === "rooms" && (newCount.rooms < 1 || newCount.rooms > 8))
        return prev;

      return newCount;
    });
  };

  // Initialize flatpickr when component mounts
  useEffect(() => {
    // Initialize date picker
    flatpickr(".flatpickr", {
      mode: "range",
      dateFormat: "d M",
      defaultDate: "today",
      minDate: "today",
      disableMobile: "true",
      showMonths: 1,
      static: true,
      conjunction: " to ",
      onClose: function (selectedDates, dateStr) {
        if (selectedDates.length === 2) {
          const start = selectedDates[0].toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
          });
          const end = selectedDates[1].toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
          });
          this.input.value = `${start} to ${end}`;
        }
      },
    });
  }, []);

  return (
    <>
      <section className="pt-3 pt-lg-5">
        <div className="container ">
          {/* Content and Image START */}
          <div className="row g-4 g-lg-5">
            {/* Content */}
            <div className="col-lg-6 position-relative mb-4 mb-md-0">
              {/* Title */}
              <h1 className="mb-4 mt-md-5 display-5 home-title">
              Dubai Vacation Homes
             
                <span className="position-relative z-index-9">
                {/* Hassle-Free Holiday Home Property Management */}
                  {/* SVG START */}
                  <span className="position-absolute top-50 start-50 translate-middle z-index-n1 d-none d-md-block mt-4">
                    <svg
                      width="390.5px"
                      height="21.5px"
                      viewBox="0 0 445.5 21.5`"
                    >
                      <path
                        className="fill-primary opacity-7"
                        d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 
      c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 
      c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 
      c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 
      C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 
      C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 
      c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 
      c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 
      c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 
      c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 
      c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 
      c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 
      C419.7,3.1,414.8,2.9,409.9,2.6z"
                      />
                    </svg>
                  </span>
                  {/* SVG END */}
                </span>
              </h1>
              {/* Info */}
              <p className="mb-4">
                We bring you not only a stay option, but an experience in your
                budget to enjoy the luxury.
              </p>

              {/* Buttons */}
              <div className="hstack gap-4 flex-wrap align-items-center">
                {/* Button */}
                <Link to="#" className="btn btn-primary-soft mb-0">
                  Discover Now
                </Link>
                {/* Story button */}
                <a
                  data-glightbox=""
                  data-gallery="office-tour"
                  href="https://www.youtube.com/embed/tXHviS-4ygo"
                  className="d-block"
                >
                  {/* Avatar */}
                  <div className="avatar avatar-md z-index-1 position-relative me-2">
                    <img
                      className="avatar-img rounded-circle"
                      src={homeimg}
                      alt="avatar"
                    />
                    {/* Video button */}
                    <div className="btn btn-xs btn-round btn-white shadow-sm position-absolute top-50 start-50 translate-middle z-index-9 mb-0">
                      <i className="fas fa-play"></i>
                    </div>
                  </div>
                  <div className="align-middle d-inline-block">
                    <h6 className="fw-normal small mb-0">Watch our story</h6>
                  </div>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="col-lg-6 position-relative">
              <img src={homeimg} className="rounded homeimage" alt="" />

              {/* Svg decoration */}
              <figure className="position-absolute end-0 bottom-0">
                <svg width="163px" height="163px" viewBox="0 0 163 163">
                  <path
                    className="fill-warning"
                    d="M145.6,66.2c-0.9-0.3-1.6,0.2-2.1-0.4c-0.5-0.7..."
                  />
                </svg>
              </figure>

              {/* Support guid */}
              {/* <div className="position-absolute top-0 end-0 z-index-1 mt-n4">
                <div className="bg-blur border border-light rounded-3 text-center shadow-lg p-3">
                  <i className="bi bi-headset text-danger fs-3"></i>
                  <h5 className=" mb-1 text-danger ">24 / 7</h5>
                  <h6 className="text-dark fw-light small mb-0">
                    
                    <span className="text-danger">Guide Supports</span>
                  </h6>
                </div>
              </div> */}

              {/* Round image group */}
              <div className="vstack gap-5 align-items-center position-absolute top-0 start-0 d-none d-md-flex mt-4 ms-n3">
                <img
                  className="icon-lg shadow-lg border border-3 border-white rounded-circle"
                  src={firstRoundImg}
                  alt="hotel avatar"
                />
                <img
                  className="icon-xl shadow-lg border border-3 border-white rounded-circle"
                  src={secondRoundImg}
                  alt="hotel avatar"
                />
              </div>
            </div>
          </div>
          {/* Content and Image END */}

          {/* Search START */}
          <div className="row">
            <div className="col-xl-10 position-relative mt-n3 mt-xl-n9">
              {/* Title */}
              <h6 className="d-none d-xl-block mb-3">Check Availability</h6>

              {/* Booking from START */}
              <form className="card shadow rounded-3 position-relative p-4 pe-md-5 pb-5 pb-md-4">
                <div className="row g-4 align-items-center">
                  {/* Location */}
                  <div className="col-lg-4">
                    <div className="form-control-border form-control-transparent form-fs-md d-flex align-items-start">
                      <i className="bi bi-geo-alt fs-3 me-3 mt-2"></i>
                      <div className="flex-grow-1">
                        <label className="form-label">Location</label>
                        <select
                          // className="form-select js-choice  "
                           className="form-control flatpickr"
                          data-search-enabled="true"
                        >
                          <option value="">Select location</option>
                          <option>San Jacinto, USA</option>
                          <option>North Dakota, Canada</option>
                          <option>West Virginia, Paris</option>
                        </select>
                       
                      </div>
                    </div>
                  </div>
                  {/* Check in */}
                  <div className="col-lg-4">
                    <div className="d-flex">
                      <i className="bi bi-calendar fs-3 me-2 mt-2"></i>
                      <div className="form-control-border form-control-transparent form-fs-md">
                        <label className="form-label">Check in - out</label>
                        <input
                          type="text"
                          className="form-control flatpickr"
                          data-mode="range"
                          placeholder="Select date"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Guest */}
                  <div className="col-lg-4">
                    <div className="form-control-border form-control-transparent form-fs-md d-flex">
                      <i className="bi bi-person fs-3 me-2 mt-2"></i>
                      <div className="w-100">
                        <label className="form-label">Guests & rooms</label>
                        <div className="dropdown guest-selector me-2">
                          <input
                            type="text"
                            className="form-guest-selector form-control selection-result"
                            value={updateGuestText()}
                            readOnly
                            data-bs-auto-close="outside"
                            data-bs-toggle="dropdown"
                          />
                          <ul className="dropdown-menu guest-selector-dropdown">
                            {/* Adults */}
                            <li className="d-flex justify-content-between">
                              <div>
                                <h6 className="mb-0">Adults</h6>
                                <small>Ages 13 or above</small>
                              </div>
                              <div className="hstack gap-1 align-items-center">
                                <button
                                  type="button"
                                  className="btn btn-link p-0 mb-0"
                                  onClick={() =>
                                    handleCount("adults", "remove")
                                  }
                                >
                                  <i className="bi bi-dash-circle fs-5 fa-fw"></i>
                                </button>
                                <h6 className="guest-selector-count mb-0">
                                  {guestCount.adults}
                                </h6>
                                <button
                                  type="button"
                                  className="btn btn-link p-0 mb-0"
                                  onClick={() => handleCount("adults", "add")}
                                >
                                  <i className="bi bi-plus-circle fs-5 fa-fw"></i>
                                </button>
                              </div>
                            </li>

                            <li className="dropdown-divider"></li>

                            {/* Children */}
                            <li className="d-flex justify-content-between">
                              <div>
                                <h6 className="mb-0">Child</h6>
                                <small>Ages 13 below</small>
                              </div>
                              <div className="hstack gap-1 align-items-center">
                                <button
                                  type="button"
                                  className="btn btn-link p-0 mb-0"
                                  onClick={() =>
                                    handleCount("children", "remove")
                                  }
                                >
                                  <i className="bi bi-dash-circle fs-5 fa-fw"></i>
                                </button>
                                <h6 className="guest-selector-count mb-0">
                                  {guestCount.children}
                                </h6>
                                <button
                                  type="button"
                                  className="btn btn-link p-0 mb-0"
                                  onClick={() => handleCount("children", "add")}
                                >
                                  <i className="bi bi-plus-circle fs-5 fa-fw"></i>
                                </button>
                              </div>
                            </li>

                            <li className="dropdown-divider"></li>

                            {/* Rooms */}
                            <li className="d-flex justify-content-between">
                              <div>
                                <h6 className="mb-0">Rooms</h6>
                                <small>Max room 8</small>
                              </div>
                              <div className="hstack gap-1 align-items-center">
                                <button
                                  type="button"
                                  className="btn btn-link p-0 mb-0"
                                  onClick={() => handleCount("rooms", "remove")}
                                >
                                  <i className="bi bi-dash-circle fs-5 fa-fw"></i>
                                </button>
                                <h6 className="guest-selector-count mb-0">
                                  {guestCount.rooms}
                                </h6>
                                <button
                                  type="button"
                                  className="btn btn-link p-0 mb-0"
                                  onClick={() => handleCount("rooms", "add")}
                                >
                                  <i className="bi bi-plus-circle fs-5 fa-fw"></i>
                                </button>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <div className="btn-position-md-middle">
                  <Link
                    to="#"
                    className="icon-lg btn btn-round btn-primary mb-0"
                  >
                    <i className="fas fa-search"></i>
                  </Link>
                </div>
              </form>
              {/* Booking from END */}
            </div>
          </div>
          {/* Search END */}
        </div>
      </section>
    </>
  );
};
