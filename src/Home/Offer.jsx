import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "tiny-slider/dist/tiny-slider.css";
import { tns } from "tiny-slider";
import './offer.css';
// Import images
// import offer1 from '../assets/images/gallery/05.jpg';
import offer2 from '../assets/images/offer/02.jpg';
import offer3 from '../assets/images/offer/03.jpg';
import offer4 from '../assets/images/offer/04.jpg';
import xyz from '../assets/images/gallery/05.jpg';
const offers = [
  {
    img: xyz,
    title: "Daily 50 Lucky Winners get a Free Stay",
    description: "Valid till: 15 Nov",
    // link: "/offer-detail"
  },
  {
    img: offer4,
    title: "Up to 60% OFF",
    description: "On Hotel Bookings Online",
    // link: "/offer-detail"
  },
  {
    img: offer3,
    title: "Book & Enjoy",
    description: "20% Off on the best available room rate",
    // link: "/offer-detail"
  },
  {
    img: offer2,
    title: "Hot Summer Nights",
    description: "Up to 3 nights free!",
    // link: "/offer-detail"
  }
];

const Offer = () => {
  useEffect(() => {
    const slider = tns({
      container: '.tiny-slider-inner',
      items: 3,
      slideBy: 1,
      autoplay: true,
      autoplayButtonOutput: false,
      controls: true,
      nav: false,
      edge: 2,
      gutter: 20,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1200: {
          items: 3
        }
      }
    });

    return () => {
      if (slider && slider.destroy) {
        slider.destroy();
      }
    };
  }, []);

  return (
    <section className="pb-2 pb-lg-5">
      <div className="container">
        {/* Slider START */}
        <div className="tiny-slider arrow-round arrow-blur arrow-hover">
          <div className="tiny-slider-inner">
            {offers.map((offer, index) => (
              <div key={index}>
                <div className="card border rounded-3 overflow-hidden">
                  <div className="row g-0 align-items-center">
                    {/* Image */}
                    <div className="col-sm-6">
                      <img 
                        src={offer.img} 
                        className="card-img rounded-0" 
                        alt={offer.title}
                      />
                    </div>

                    {/* Title and content */}
                    <div className="col-sm-6">
                      <div className="card-body px-3">
                        <h6 className="card-title">
                          <Link to={offer.link} className="stretched-link">
                            {offer.title}
                          </Link>
                        </h6>
                        <p className="mb-0">{offer.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Slider END */}
      </div>
    </section>
  );
};

export default Offer;






