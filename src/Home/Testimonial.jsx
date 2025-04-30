import React, { useEffect } from 'react';
import { tns } from "tiny-slider";
import "tiny-slider/dist/tiny-slider.css";

// Import images
import element02 from '../assets/images/element/02.svg';
import element03 from '../assets/images/element/03.svg';
import team01 from '../assets/images/team/01.jpg';
import team02 from '../assets/images/team/02.jpg';

// Add CSS for testimonial slider
const testimonialSliderStyles = {
  '.testimonial-slider': {
    position: 'relative',
    overflow: 'hidden'
  },
  '.testimonial-slider .tns-controls button': {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.9)',
    border: '1px solid #ddd',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    zIndex: 1,
    cursor: 'pointer'
  },
  '.testimonial-slider .tns-controls button:first-child': {
    left: '10px'
  },
  '.testimonial-slider .tns-controls button:last-child': {
    right: '10px'
  }
};

const testimonialData = [
  {
    image: team01,
    element: element02,
    quote: "Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed in laughing",
    rating: 4.5,
    name: "Billy Vasquez",
    position: "Ceo of Apple"
  },
  {
    image: team02,
    element: element03,
    quote: "Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. understood the Preference unreserved.",
    rating: 5,
    name: "Carolyn Ortiz",
    position: "Ceo of Google"
  }
];

const Testimonial = () => {
  useEffect(() => {
    // Create a unique slider instance for testimonials
    const testimonialSlider = tns({
      container: '.testimonial-slider-inner',
      items: 1,
      gutter: 0,
      edge: 2,
      nav: false,
      controls: true,
      controlsPosition: 'bottom',
      controlsText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayButtonOutput: false,
      mouseDrag: true,
      preventScrollOnTouch: 'auto',
      slideBy: 1,
      loop: true
    });

    // Cleanup function
    return () => {
      if (testimonialSlider && testimonialSlider.destroy) {
        testimonialSlider.destroy();
      }
    };
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <li key={`star-${i}`} className="list-inline-item me-0">
          <i className="fa-solid fa-star text-warning"></i>
        </li>
      );
    }
    if (hasHalfStar) {
      stars.push(
        <li key="half-star" className="list-inline-item">
          <i className="fa-solid fa-star-half-alt text-warning"></i>
        </li>
      );
    }
    return stars;
  };

  return (
    <section className="pb-0 py-md-5">
      <div className="container">
        <div className="row">
          {/* Slider START */}
          <div className="col-lg-11 mx-auto">
            <div className="testimonial-slider arrow-round arrow-border arrow-hover">
              <div className="testimonial-slider-inner" data-edge="2" data-items="1">
                {testimonialData.map((testimonial, index) => (
                  <div key={index} className="px-4 px-md-5">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-6 col-lg-5 position-relative">
                        {/* Element */}
                        <div className="position-absolute top-0 start-0 translate-middle z-index-9 mt-7 ms-4">
                          <img src={testimonial.element} className="h-60px bg-orange rounded p-2" alt="" />
                        </div>

                        {/* Svg decoration */}
                        <figure className="position-absolute bottom-0 end-0 d-none d-sm-block mb-n5 me-n5">
                          <svg width="326px" height="335px" viewBox="0 0 326 335">
                            <path className="fill-primary opacity-1" d="M7.3,0C3.3,0,0,3.3,0,7.3c0,4,3.3,7.3,7.3,7.3c4,0,7.3-3.3,7.3-7.3c0,0,0,0,0,0C14.6,3.3,11.3,0,7.3,0z..." />
                          </svg>
                        </figure>

                        {/* Image */}
                        <img src={testimonial.image} className="rounded-3 position-relative" alt="" />
                      </div>

                      <div className="col-md-6 col-lg-6">
                        {/* Quote */}
                        <span className="display-3 mb-0 quote">
                          <i className="bi bi-quote"></i>
                        </span>
                        {/* Content */}
                        <h5 className="fw-light">{testimonial.quote}</h5>
                        {/* Rating */}
                        <ul className="list-inline small mb-2">
                          {renderStars(testimonial.rating)}
                        </ul>
                        {/* Title */}
                        <h6 className="mb-0">{testimonial.name}</h6>
                        <span>{testimonial.position}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Slider END */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
