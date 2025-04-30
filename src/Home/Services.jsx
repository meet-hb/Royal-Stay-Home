// import React from "react";

// const ServicesSection = () => {
//   const services = [
//     { icon: "bi bi-car-front", title: "Travel Plan" },
//     { icon: "bi bi-cup-straw", title: "Catering Service" },
//     { icon: "bi bi-person", title: "Babysitting" },
//     { icon: "bi bi-basket", title: "Laundry" },
//     { icon: "bi bi-person-badge", title: "Hire Driver" },
//     { icon: "bi bi-cup", title: "Bar & Drink" }
//   ];
//     return (
//       <section classNameName="py-5 bg-light">
//         <div classNameName="container">
//           <div classNameName="text-center mb-4">
//             <span classNameName="text-uppercase text-secondary">What We Do</span>
//             <h2 classNameName="fw-bold">Discover Our Services</h2>
//           </div>
//           <div classNameName="row">
//             {services.map((service, index) => (
//               <div  classNameName="col-md-4 mb-4">
//                 <div classNameName="card text-center shadow p-4">
//                   <i classNameName={`${service.icon} display-4 text-primary mb-3`}></i>
//                   <h4 classNameName="fw-semibold">{service.title}</h4>
//                   <p classNameName="text-muted">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
// };

// export default ServicesSection;

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome

const ServicesSection = () => {
  return (
    <>
      <section className="services-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span style={{ color: "#d5b342" }}>What We Do</span>
                <h2 className="section-heading">Discover Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="fas fa-map-marked-alt iconcard"></i>
                <h4 className="service-title">Travel Plan</h4>
                <p className="service-text">
                  Discover hassle-free travel planning with our expert-crafted
                  itineraries. Whether you're seeking adventure, relaxation, or
                  cultural experiences, we design customized travel plans
                  tailored to your preferences.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="fas fa-utensils"></i>
                <h4 className="service-title">Catering Service</h4>
                <p className="service-text">
                  Make your events unforgettable with our premium catering
                  services! Whether it's a wedding, corporate event, birthday,
                  or private gathering, we serve mouthwatering dishes tailored
                  to your taste and theme.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="fas fa-baby"></i>
                <h4 className="service-title">Babysitting</h4>
                <p className="service-text">
                  Looking for a reliable babysitter? We provide loving,
                  responsible, and experienced caregivers to ensure your child’s
                  safety and happiness. Whether you need occasional help or
                  regular care, we’ve got you covered!
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="fas fa-tshirt"></i>
                <h4 className="service-title">Laundry</h4>
                <p className="service-text">
                  At Royal Vaction Home, we offer top-notch laundry services to
                  ensure your clothes are fresh, clean, and perfectly pressed.
                  Whether it’s daily wear, delicate fabrics, or special
                  garments, our expert team handles everything with care.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="fas fa-car"></i>
                <h4 className="service-title">Hire Driver</h4>
                <p className="service-text">
                  At Royal Vaction Home, we offer premium driver hire services
                  to ensure a smooth and hassle-free travel experience. Whether
                  you need airport transfers, city tours, or business travel,
                  our professional chauffeurs are ready to assist you.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <i className="fas fa-glass-martini-alt"></i>
                <h4 className="service-title">Bar & Drink</h4>
                <p className="service-text">
                  Unwind and elevate your experience at [Hotel Name]’s exclusive
                  bar. From handcrafted cocktails to premium wines and
                  refreshing mocktails, we offer a wide selection of beverages
                  to suit every taste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
