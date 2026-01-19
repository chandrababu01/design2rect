import React from "react";
import { RevealText } from "./components/lightswind/RevealText";
import AboutDetails from "./AboutDetails";
import Accordion from "react-bootstrap/Accordion";
import Dvideo from "./Dvideo";

export const About = () => {
  return (
    <>
      <section className="about-section-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="title">
                <div className="d-flex align-items-end align-self-baseline">
                  <div className="hero-subtitle me-2">Who are </div>
                </div>
                <div className="d-flex gap-2   align-items-end">
                  <div className="category-content">we</div>
                  <div className="what-we-do">
                    <RevealText text="Design Meets Strategy for a Powerful Digital Presence" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-details-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="about-details-section-wrapper">
                <AboutDetails />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-mission-section my-5">
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
                <AboutAccordion />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-additional-section py-5 dark padding-bottom-100">
        {/* Additional sections can be added here */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="about-additional-section-wrapper brand-section">
                <div
                  className="v-title my-5 text-center"
                  style={{ maxWidth: "1000px", margin: "0 auto" }}
                >
                  Whether it’s branding, UI/UX, motion graphics, or front-end
                  development,<span> we create solutions</span> , that make an
                  impact.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0 mb-5">
          <Dvideo />
        </div>
      </section>
    </>
  );
};

export function AboutAccordion() {
  return (
    <>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Commercial</Accordion.Header>
          <Accordion.Body>
            Impact-driven visuals designed to sell ideas and products. We turn
            brand messages into powerful commercial stories. Our content is
            built to attract attention and inspire action.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Education</Accordion.Header>
          <Accordion.Body>
            Engaging visuals that simplify learning. We create content that
            informs, inspires, and makes knowledge accessible. Designed to
            improve understanding and retention.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Health care</Accordion.Header>
          <Accordion.Body>
            Design with empathy and clarity. We build experiences that support
            trust, care, and meaningful human connection. Our work focuses on
            accuracy, sensitivity, and ease of use.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Real Estate</Accordion.Header>
          <Accordion.Body>
            Showcasing spaces with style and precision. Our visuals help
            properties stand out and connect with buyers emotionally. Designed
            to highlight value and lifestyle.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Ecommerce</Accordion.Header>
          <Accordion.Body>
            Designs that convert. We create seamless shopping experiences that
            guide users from discovery to checkout. Optimized for usability,
            trust, and sales.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Fintech</Accordion.Header>
          <Accordion.Body>
            Complex ideas, made simple. We design secure, intuitive experiences
            that build confidence in digital finance. Clarity and trust guide
            every design decision.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Food Industry</Accordion.Header>
          <Accordion.Body>
            Visuals that spark appetite and emotion. We help food brands tell
            delicious stories that customers remember. Crafted to enhance taste,
            mood, and brand reca
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
