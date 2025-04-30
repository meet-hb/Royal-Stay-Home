// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// // Import images
// import logoLight from '../assets/images/logo-light.svg';
// import paypal from '../assets/images/element/paypal.svg';
// import visa from '../assets/images/element/visa.svg';
// import mastercard from '../assets/images/element/mastercard.svg';
// import expresscard from '../assets/images/element/expresscard.svg';

// export const Footer = () => {
//   return (
//     <footer className="bg-dark">
//       <div className="container">
//         {/* Main Content */}
//         <div className="row g-4 mb-5">
//           {/* Left Column */}
//           <div className="col-lg-4">
//             <p className="text-body-secondary mb-4">
//               Departure defective arranging rapturous did believe him all had supported.
//             </p>
//             <p className="mb-2">
//               <Link to="#" className="text-body-secondary">
//                 <i className="bi bi-telephone me-2"></i>+97 1507294999
//               </Link>
//             </p>
//             <p className="mb-4">
//               <Link to="#" className="text-body-secondary">
//                 <i className="bi bi-envelope me-2"></i>royalvacationhome@gmail.com
//               </Link>
//             </p>
//           </div>

//           {/* Center Columns */}
//           <div className="col-lg-4">
//             <div className="row">
//               {/* About Us Column */}
//               <div className="col-6">
//                 <h5 className="text-white mb-3">About us</h5>
//                 <ul className="list-unstyled footer-links">
//                   <li><Link to="#" className="text-body-secondary d-block py-1">Contact us</Link></li>
//                   <li><Link to="#" className="text-body-secondary d-block py-1">News and Blog</Link></li>
//                   <li><Link to="#" className="text-body-secondary d-block py-1">Meet a Team</Link></li>
//                 </ul>
//               </div>
//               {/* Sign Up Column */}
//               <div className="col-6">
//                 <h5 className="text-white mb-3">Sign up</h5>
//                 <ul className="list-unstyled footer-links">
//                   <li><Link to="#" className="text-body-secondary d-block py-1">Sign in</Link></li>
//                   <li><Link to="#" className="text-body-secondary d-block py-1">Privacy Policy</Link></li>
//                   <li><Link to="#" className="text-body-secondary d-block py-1">Terms</Link></li>
//                   <li><Link to="#" className="text-body-secondary d-block py-1">Cookie</Link></li>
//                   <li><Link to="#" className="text-body-secondary d-block py-1">Support</Link></li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="col-lg-4">
//             <div className="row">
//               {/* Global Sites */}

//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="footer-bottom pt-4 border-top border-secondary">
//           <div className="row align-items-center">
//             {/* Copyright */}
//             <div className="col-md-6">
//               <div className="d-flex align-items-center mb-3 mb-md-0">
//                 <div className="payment-cards me-4">
//                   <Link to="#" className="me-2"><img src={paypal} className="h-30px" alt="paypal" /></Link>
//                   <Link to="#" className="me-2"><img src={visa} className="h-30px" alt="visa" /></Link>
//                   <Link to="#" className="me-2"><img src={mastercard} className="h-30px" alt="mastercard" /></Link>
//                   <Link to="#" className="me-2"><img src={expresscard} className="h-30px" alt="expresscard" /></Link>
//                 </div>
//               </div>
//             </div>

//             {/* Links and Social */}
//             <div className="col-md-6">
//               <div className="d-flex justify-content-md-end align-items-center">
//                 {/* Footer Links */}
//                 <div className="footer-links me-4">
//                   <Link to="#" className="text-body-secondary me-3">Privacy policy</Link>
//                   <Link to="#" className="text-body-secondary me-3">Terms and conditions</Link>
//                   <Link to="#" className="text-body-secondary">Refund policy</Link>
//                 </div>
//                 {/* Social Icons */}
//                 <div className="social-icons">
//                   <Link to="#" className="text-body-secondary me-3"><FaFacebookF /></Link>
//                   <Link to="#" className="text-body-secondary me-3"><FaInstagram /></Link>
//                   <Link to="#" className="text-body-secondary"><FaLinkedinIn /></Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

import React from "react";
import LogoLight from "../assets/images/Royal-stay-2.png";
// import LogoLight from "../assets/images/Royal-stay-2.png";
export const Footer = () => {
  return (
    <footer className="footer text-white py-5 mt-5 bg-dark">
    <div className="container">
      <div className="row g-4">
        {/* Brand Info */}
        <div className="col-md-4">
          <div className="d-flex flex-column align-items-start">
            <a href="/" className="mb-3">
              <img
                src={LogoLight}
                alt="company logo"
                width={250}
                className="img-fluid"
              />
            </a>
            <p className=" mb-1">
              Royal Vacation Homes
            </p>
            <p className="">
            <i className="bi bi-geo-alt-fill me-2"></i>
            Office 1203, Business Bay, Dubai, UAE
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="col-md-4">
          <h5 className="fw-semibold mb-3 text-white">Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/" className="text-white text-decoration-none">
                Home
              </a>
            </li>
            <li>
              <a href="/AboutUs" className="text-white text-decoration-none">
                About Us
              </a>
            </li>
            <li>
              <a href="/Ourservices" className="text-white text-decoration-none">
                Our Services
              </a>
            </li>
            <li>
              <a href="/ContactUs" className="text-white text-decoration-none">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="col-md-4">
          <h5 className="fw-semibold mb-3 text-white">Contact Us</h5>
          <p className="mb-1">
            <a
              href="mailto:royalvacationhome@gmail.com"
              className="text-white text-decoration-none"
            >
              royalvacationhome@gmail.com
            </a>
          </p>
          <p className="mb-0">📞 +971 50 729 4999</p>
        </div>
      </div>
    </div>
  </footer>
  );
};
