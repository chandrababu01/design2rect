import React from "react";
import Accordion from "react-bootstrap/Accordion";
import figma from "./servies/figma.svg";
import photoshop from "./servies/photoshop.svg";
import illustrator from "./servies/adobe-illust.svg";
import afterEffects from "./servies/After_Effects.svg";
import premiere from "./servies/Adobe_Premiere.svg";
import removebg from "./servies/removebg.svg";
import cinema from "./servies/cinema.svg";

export const Service = () => {
  return (
    <>
      <section className="service-page-section py-5 dark">
        <div className="container">
          <div className="row brand-section">
            <div
              className="v-title my-5 text-justify"
              style={{ maxWidth: "1000px", margin: "0 auto" }}
            >
              *<br />
              we create visually compelling graphics that communicate your brand
              message with
              <span> clarity and creativity. </span>
              Our graphic design services are all about making your business
              stand out through stunning visuals that capture attention and
              leave a lasting impression.
            </div>
          </div>
        </div>
      </section>
      <section className="about-mission-section my-5 ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="about-mission-section-wrapper">
                <h2 className="about-mission-title">we are proud for</h2>
                <p className="about-mission-description">
                  At design2client.com, we blend creativity and technology to
                  build powerful brands, seamless user experiences, and
                  cutting-edge visual designs.
                </p>
              </div>
              <div className="service-underline-box">
                <ServiceAccordion />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-page-tootls-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="service-page-tootls-section-wrapper text-center py-5 pt-0 mb-5">
                <div className="title">Tools we are familiar with</div>
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
                      <img src={removebg} alt="Remove BG" />
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
    </>
  );
};

export function ServiceAccordion() {
  return (
    <>
      <div className="service-page-section">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>UX/UI Design</Accordion.Header>
            <Accordion.Body>
              We design intuitive, human-centered digital experiences that feel
              effortless and engaging. Every interface is crafted to balance
              beauty, usability, and business goals. Our focus is on clarity,
              accessibility, and delight at every interaction.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Motion Design</Accordion.Header>
            <Accordion.Body>
              Stories come alive through motion. From product explainers to
              brand films, we create dynamic visuals that move people and ideas
              forward. Every frame is designed to communicate emotion and
              purpose.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Graphic Design</Accordion.Header>
            <Accordion.Body>
              Bold visuals with purpose. Our designs communicate clearly,
              connect emotionally, and elevate your brand across every
              touchpoint. We turn ideas into visually striking brand assets.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Brand & Consulting</Accordion.Header>
            <Accordion.Body>
              We help brands find their voice and stand out with confidence.
              From strategy to execution, we build identities that last. Our
              approach blends insight, creativity, and consistency.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Photography</Accordion.Header>
            <Accordion.Body>
              Authentic moments, thoughtfully captured. Our photography adds
              depth, emotion, and credibility to your brand story. Each shot is
              composed to reflect your brand personality.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Frontend Development</Accordion.Header>
            <Accordion.Body>
              Design meets performance. We build fast, responsive, and scalable
              interfaces that look stunning and work flawlessly. Our code
              supports both user experience and business growth.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Marketing</Accordion.Header>
            <Accordion.Body>
              Creativity backed by strategy. We craft campaigns that cut through
              noise, spark interest, and drive measurable growth. Every idea is
              built to engage and convert.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
