// import React from "react";
// import grytik from "../assets/images/gallery/icon-checked-grey.png";
// const WhyChoosus = () => {
//   return (
//     <>
//       <div className="container">
//         <h2 className="nd_options_first_font ">
//           Why Choose Our Vacation Home Company?
//         </h2>
//         <p style={{ fontSize: "18px" }}>
//           We are a popular holiday home rental company with long experience in
//           offering quality vacation home rentals in Dubai. Featuring varied
//           options of luxury holiday homes and cozy modern studio apartments to
//           rent, we help the clients enjoy the real essence and high-end
//           lifestyle in the UAE.
//         </p>
//         <div className="row">
//           <div className="col-6">
//             <div>
//               <img
//                 style={{ top: "5px" }}
//                 alt=""
//                 className="nd_options_position_absolute nd_options_left_0"
//                 width="30"
//                 src={grytik}
//               />
//               <span>Affordable holiday house rentals</span>
//             </div>
//             <div>
//               <img
//                 style={{ top: "5px" }}
//                 alt=""
//                 className="nd_options_position_absolute nd_options_left_0"
//                 width="30"
//                 src={grytik}
//               />
//               <span>Highly secured vacation homes</span>
//             </div>
//             <div>
//               <img
//                 style={{ top: "5px" }}
//                 alt=""
//                 className="nd_options_position_absolute nd_options_left_0"
//                 width="30"
//                 src={grytik}
//               />
//               <span>Short term or long monthly stay options</span>
//             </div>
//           </div>
        
//              <div className="col-6">
//             <div>
//               <img
//                 style={{ top: "5px" }}
//                 alt=""
//                 className="nd_options_position_absolute nd_options_left_0"
//                 width="30"
//                 src={grytik}
//               />
//               <span>Spacious Vacation Rental apartments in Dubai</span>
//             </div>
//             <div>
//               <img
//                 style={{ top: "5px" }}
//                 alt=""
//                 className="nd_options_position_absolute nd_options_left_0"
//                 width="30"
//                 src={grytik}
//               />
//               <span>Friendly customer service</span>
//             </div>
//             <div>
//               <img
//                 style={{ top: "5px" }}
//                 alt=""
//                 className="nd_options_position_absolute nd_options_left_0"
//                 width="30"
//                 src={grytik}
//               />
//              <span>Complimentary services</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WhyChoosus;
import React from "react";
import grytik from "../assets/images/gallery/icon-checked-grey.png";

const WhyChooseUs = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Why Choose Our Vacation Home Company?</h2>
      <p className="text-center fs-5 ">
        We are a popular holiday home rental company with long experience in offering quality vacation 
        home rentals in Dubai. Featuring varied options of luxury holiday homes and cozy modern 
        studio apartments to rent, we help clients enjoy the real essence and high-end lifestyle in the UAE.
      </p>

      <div className="row">
        {/* Left Column */}
        <div className="col-md-6">
          <div className="d-flex align-items-center mb-3">
            <img src={grytik} alt="" width="30" className="me-2" />
            <span>Affordable holiday house rentals</span>
          </div>
          <div className="d-flex align-items-center mb-3">
            <img src={grytik} alt="" width="30" className="me-2" />
            <span>Highly secured vacation homes</span>
          </div>
          <div className="d-flex align-items-center">
            <img src={grytik} alt="" width="30" className="me-2" />
            <span>Short-term or long monthly stay options</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          <div className="d-flex align-items-center mb-3">
            <img src={grytik} alt="" width="30" className="me-2" />
            <span>Spacious Vacation Rental apartments in Dubai</span>
          </div>
          <div className="d-flex align-items-center mb-3">
            <img src={grytik} alt="" width="30" className="me-2" />
            <span>Friendly customer service</span>
          </div>
          <div className="d-flex align-items-center">
            <img src={grytik} alt="" width="30" className="me-2" />
            <span>Complimentary services</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
