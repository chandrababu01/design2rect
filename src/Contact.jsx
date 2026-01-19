import React from "react";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
import figma from "./servies/figma.svg";
import photoshop from "./servies/photoshop.svg";
import illustrator from "./servies/adobe-illust.svg";
import afterEffects from "./servies/After_Effects.svg";
import premiere from "./servies/Adobe_Premiere.svg";
import removebg from "./servies/removebg.svg";
import cinema from "./servies/cinema.svg";

export const Contact = () => {
  return (
    <>
      <section className="form-section my-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="contact-form">
                <div className="title">
                  Let’s Build <br /> Something <br /> Exceptional!
                </div>
                <p className="submary-content">
                  Have an idea? Whether it's branding, UI/UX, motion design, or
                  web development, let’s bring it to life!
                </p>
                <div className="contact-details">
                  <div className="d-flex  align-items-center">
                    <Link>designtoclient@gmail.com</Link>
                    <span className="mx-4">|</span>
                    <Link to="+91 7010846495">+91 7010846495</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="contact-f">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-page-tootls-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="service-page-tootls-section-wrapper text-center">
                <div className="service-page-tootls-icons d-flex justify-content-center flex-wrap mt-4">
                  <ul>
                    <li className="servies-logo adobe-products">
                      <img src={figma} alt="Figma" />
                    </li>

                    <li className="servies-logo adobe-products1">
                      <img src={photoshop} alt="Photoshop" />
                    </li>

                    <li className="servies-logo adobe-products1">
                      <img src={illustrator} alt="Illustrator" />
                    </li>

                    <li className="servies-logo adobe-products">
                      <img src={afterEffects} alt="After Effects" />
                    </li>

                    <li className="servies-logo adobe-products2">
                      <img src={premiere} alt="Premiere Pro" />
                    </li>

                    <li className="servies-logo adobe-products">
                      <img src={removebg} alt="Remove Background" />
                    </li>

                    <li className="servies-logo adobe-products1">
                      <img src={cinema} alt="Cinema 4D" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="contact-page-map-section my-5 
      pt-5 pb-5"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="contact-page-map-section-wrapper py-5">
                <div className="title mb-4">Email us</div>
                <div className="submary-content">
                  <p>We read them</p>
                  <Link to="mailto:designtoclient@gmail.com">
                    designtoclient@gmail.com
                  </Link>
                </div>
              </div>
              <div className="contact-page-map-section-wrapper py-5">
                <div className="title mb-4">Call us</div>
                <div className="submary-content">
                  <p>We are happy to answer them.</p>
                  <Link href="tel:+917010846495">+91 7010846495</Link>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="contact-page-map-wrapper">
                <div className="map-details">
                  <div className="title mb-4">Head office(Chennai- India)</div>
                  <p>New washermenpet- chennai-600081</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118212.11400290282!2d80.09468259001544!3d13.072187370739675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52667248cbdb69%3A0xc40ead684a8f274b!2sChennai%20Central%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1768673663695!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="contact-map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
