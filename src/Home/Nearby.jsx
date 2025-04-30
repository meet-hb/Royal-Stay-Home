import React from 'react';
import { Link } from 'react-router-dom';

// Import all images
import nearby01 from '../assets/images/category/hotel/nearby/01.jpg';
import nearby02 from '../assets/images/category/hotel/nearby/02.jpg';
import nearby03 from '../assets/images/category/hotel/nearby/03.jpg';
import nearby04 from '../assets/images/category/hotel/nearby/04.jpg';
import nearby05 from '../assets/images/category/hotel/nearby/05.jpg';
import nearby06 from '../assets/images/category/hotel/nearby/06.jpg';
import nearby07 from '../assets/images/category/hotel/nearby/07.jpg';
import nearby08 from '../assets/images/category/hotel/nearby/08.jpg';
import nearby09 from '../assets/images/category/hotel/nearby/09.jpg';
import nearby10 from '../assets/images/category/hotel/nearby/10.jpg';
import nearby11 from '../assets/images/category/hotel/nearby/11.jpg';

const nearbyLocations = [
  { image: nearby01, title: "San Francisco", duration: "13 min drive" },
  { image: nearby02, title: "Los Angeles", duration: "25 min drive" },
  { image: nearby03, title: "Miami", duration: "45 min drive" },
  { image: nearby04, title: "Sanjosh", duration: "55 min drive" },
  { image: nearby05, title: "New York", duration: "1-hour drive" },
  { image: nearby06, title: "North Justen", duration: "2-hour drive" },
  { image: nearby07, title: "Rio", duration: "20 min drive" },
  { image: nearby08, title: "Las Vegas", duration: "3-hour drive" },
  { image: nearby09, title: "Texas", duration: "55 min drive" },
  { image: nearby10, title: "Chicago", duration: "13 min drive" },
  { image: nearby11, title: "New Keagan", duration: "35 min drive" },
  { image: nearby01, title: "Oslo", duration: "1 hour 13 min drive" },
];

export const Nearby = () => {
  return (
    <section>
      <div className="container">
        {/* Title */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="mb-0">Explore Nearby</h2>
          </div>
        </div>

        <div className="row g-4 g-md-5">
          {nearbyLocations.map((location, index) => (
            <div key={index} className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="card bg-transparent text-center p-1 h-100 boardernearbycard">
                {/* Image */}
                <img 
                  src={location.image} 
                  className="rounded-circle" 
                  alt={location.title} 
                />

                <div className="card-body p-0 pt-3">
                  <h5 className="card-title">
                    <Link to="#" className="stretched-link">
                      {location.title}
                    </Link>
                  </h5>
                  <span>{location.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
