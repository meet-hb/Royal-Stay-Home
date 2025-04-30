import React from "react";
import { Link } from "react-router-dom";
import Contactimg from "../assets/images/gallery/14.jpg";
import backgroundImg from '../assets/images/gallery/Contactbg.jpg'; 

const ContactUs = () => {
  return (
    <main>
      {/* Main banner START */}
      <section 
        className="contact-hero-section py-5" 
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${backgroundImg})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          inset: 'unset !',
        }}
      >
        <div className="overlay" 
          style={{
            position: 'absolute',
           
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1
          }}
        />

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row mb-5">
            <div className="col-xl-10 mx-auto text-center">
              {/* Title */}
              <h1 className="text-white">Royal Vacation Homes Rental</h1>
              <h2 className="lead mb-0 text-white">
                Thank you for your interest in{" "}
                <strong className="text-warning">Royal Vacation Homes Rental™</strong>. 
                Please feel free to reach out to us with any inquiries, booking requests, or
                assistance needed. Our team is dedicated to providing prompt and
                personalized support to ensure your experience with us is
                exceptional.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Contact item START */}
            <div className="col-md-6 col-xl-4">
              <div className="card card-body shadow text-center align-items-center h-100">
                {/* Icon */}
                <div className="icon-lg bg-info bg-opacity-10 text-info rounded-circle mb-2">
                  <i className="bi bi-headset fs-5"></i>
                </div>
                {/* Title */}
                <h5>Call us</h5>
                <p>
                  Imprudence attachment him his for sympathize. Large above be
                  to means.
                </p>
                {/* Buttons */}
                <div className="d-grid">
                  <button className="btn btn-sm btn-primary-soft">
                    <i className="bi bi-phone me-2"></i>General Inquiries: +971
                    50 423 4562
                  </button>
                  <button className="btn btn-sm btn-primary-soft ">
                    <i className="bi bi-telephone me-2"></i>Reservations: +971
                    50 729 4999
                  </button>
                  <button className="btn btn-sm btn-primary-soft ">
                    <i class="bi bi-people-fill me-2 "></i>Customer Service:
                    +971 50 729 4999
                  </button>
                </div>
              </div>
            </div>
            {/* Contact item END */}

            {/* Contact item START */}
            <div className="col-md-6 col-xl-4">
              <div className="card card-body shadow text-center align-items-center h-100">
                {/* Icon */}
                <div className="icon-lg bg-danger bg-opacity-10 text-danger rounded-circle mb-2">
                  <i className="bi bi-inboxes-fill fs-5"></i>
                </div>
                {/* Title */}
                <h5>Email us</h5>
                <p>Large above be to means. Him his for sympathize.</p>
                {/* Buttons */}
                General Inquiries:
                <a
                  href="#"
                  className="btn btn-link text-decoration-underline p-0 mb-0"
                >
                  <i className="bi bi-envelope me-1"></i>{" "}
                  royalvacationhome@gmail.com
                </a>
                Reservations:
                <a
                  href="#"
                  className="btn btn-link text-decoration-underline p-0 mb-0"
                >
                  <i className="bi bi-envelope me-1"></i>{" "}
                  royalvacationhome@gmail.com
                </a>
                Customer Service: 
                <a
                  href="#"
                  className="btn btn-link text-decoration-underline p-0 mb-0"
                >
                  <i className="bi bi-envelope me-1"></i>{" "}
                  royalvacationhome@gmail.com
                </a>
              </div>
            </div>
            {/* Contact item END */}

            {/* Contact item START */}
            <div className="col-xl-4 position-relative">
              <div className="card card-body shadow text-center align-items-center h-100">
                {/* Icon */}
                <div className="icon-lg bg-orange bg-opacity-10 text-orange rounded-circle mb-2">
                  {/* <i className="bi bi-globe2 fs-5"></i> */}
                  <i class="bi bi-briefcase-fill fs-5"></i>
                </div>
                {/* Title */}
                <h5>Business </h5>
                <p>Sympathize Large above be to means.</p>
              

                {/* Buttons */}
  
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    {/* <a className="btn btn-sm bg-facebook px-2 mb-0" href="#">
                      <i className="fab fa-fw fa-facebook-f"></i> */}
                        Monday - Friday: <span><strong> 08:00 to 21:00</strong></span>
                    {/* </a> */}
                  </li>
                  <li className="list-inline-item">
                    {/* <a className="btn btn-sm bg-instagram px-2 mb-0" href="#">
                      <i className="fab fa-fw fa-instagram"></i>
                    </a> */}
                     Saturday: <strong>08:00 to 21:00</strong>
                
                  </li>
                  <li className="list-inline-item">
                    {/* <a className="btn btn-sm bg-twitter px-2 mb-0" href="#">
                      <i className="fab fa-fw fa-twitter"></i>
                    </a> */}
                  </li>
                  <li className="list-inline-item">
                    {/* <a className="btn btn-sm bg-linkedin px-2 mb-0" href="#">
                      <i className="fab fa-fw fa-linkedin-in"></i>
                    </a> */}
                     Sunday: <strong>08:00 to 21:00</strong>
                  </li>
                </ul>
              </div>
            </div>
            {/* Contact item END */}
          </div>
        </div>
      </section>

      {/* Contact form and vector START */}
      <section className="pt-0 pt-lg-5">
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-center">
            <div className="col-lg-6 text-center">
              <img src={Contactimg} alt="" />
            </div>
            {/* Vector image END */}

            {/* Contact form START */}
            <div className="col-lg-6">
              <div className="card bg-light p-4">
                {/* Card header */}
                <div className="card-header bg-light p-0 pb-3">
                  <h3 className="mb-0">Send us message</h3>
                </div>

                {/* Card body START */}
                <div className="card-body p-0">
                  <form className="row g-4">
                    {/* Name */}
                    <div className="col-md-6">
                      <label className="form-label">Your name *</label>
                      <input type="text" className="form-control" />
                    </div>
                    {/* Email */}
                    <div className="col-md-6">
                      <label className="form-label">Email address *</label>
                      <input type="email" className="form-control" />
                    </div>
                    {/* Mobile number */}
                    <div className="col-12">
                      <label className="form-label">Mobile number *</label>
                      <input type="text" className="form-control" />
                    </div>
                    {/* Message */}
                    <div className="col-12">
                      <label className="form-label">Message *</label>
                      <textarea className="form-control" rows="3"></textarea>
                    </div>
                    {/* Checkbox */}
                    <div className="col-12 form-check ms-2">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        By submitting this form you agree to our terms and
                        conditions.
                      </label>
                    </div>
                    {/* Button */}
                    <div className="col-12">
                      <button className="btn btn-dark mb-0" type="button">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
                {/* Card body END */}
              </div>
            </div>
            {/* Contact form END */}
          </div>
        </div>
      </section>
      {/* Contact form and vector END */}

      {/* Map START */}
      <section className="pt-0 pt-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <iframe
                className="w-100 h-300px"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
                height="500"
                style={{ border: 0 }}
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Map END */}
    </main>
  );
};

export default ContactUs;
