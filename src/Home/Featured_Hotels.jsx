import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import hotel1 from '../assets/images/category/hotel/01.jpg';
import hotel2 from '../assets/images/category/hotel/02.jpg';
import hotel3 from '../assets/images/category/hotel/03.jpg';
import hotel4 from '../assets/images/category/hotel/04.jpg';

const hotels = [
  {
    img: hotel1,
    location: "Dubai",
    name: "Baga Comfort",
    price: "455",
    rating: "4.5"
  },
  {
    img: hotel2,
    location: "Dubai",
    name: "New Apollo Hotel",
    price: "585",
    rating: "4.8"
  },
  {
    img: hotel3,
    location: "Dubai",
    name: "New Age Hotel",
    price: "385",
    rating: "4.6"
  },
  {
    img: hotel4,
    location: "Dubai",
    name: "Helios Beach Resort",
    price: "665",
    rating: "4.8"
  }
];

export const Featured_Hotels = () => {
  return (
    <section>
      <div className="container">
        {/* Title */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="mb-0">Featured Hotels</h2>
          </div>
        </div>

        <div className="row g-4">
          {hotels.map((hotel, index) => (
            <div key={index} className="col-sm-6 col-xl-3">
              {/* Card START */}
              <div className="card card-img-scale overflow-hidden bg-transparent">
                {/* Image and overlay */}
                <div className="card-img-scale-wrapper rounded-3">
                  {/* Image */}
                  <img src={hotel.img} className="card-img" alt={`${hotel.name} hotel`} />
                  {/* Badge */}
                  <div className="position-absolute bottom-0 start-0 p-3">
                    <div className="badge text-bg-dark fs-6 rounded-pill stretched-link">
                      <i className="bi bi-geo-alt me-2"></i>{hotel.location}
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="card-body px-2">
                  {/* Title */}
                  <h5 className="card-title">
                    <Link to="/" className="stretched-link">
                      {hotel.name}
                    </Link>
                  </h5>
                  {/* Price and rating */}
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="text-success mb-0">
                      ${hotel.price} <small className="fw-light">/starting at</small>
                    </h6>
                    <h6 className="mb-0">
                      {hotel.rating}<i className="fa-solid fa-star text-warning ms-1"></i>
                    </h6>
                  </div>
                </div>
              </div>
              {/* Card END */}
            </div>
          ))}
        </div> {/* Row END */}
      </div>
    </section>
  );
};

