import React from "react";
// import { Flip } from "gsap/Flip";
import mutedVideo from "./assets/video/background.mp4";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/all";
import { horizontalLoop } from "./gsapHelpers";
import Dvideo from "./Dvideo";
import VideoCard from "./components/lightswind/VideoCard";
import { Link } from "react-router";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SimpleSlider } from "./SimpleSlider";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import { SplitText } from "gsap/SplitText";
import { RevealText } from "./components/lightswind/RevealText";
import ContactForm from "./ContactForm";
import logo1 from "../src/assets/images/logo/1.jpg";
import logo2 from "../src/assets/images/logo/2.jpg";

gsap.registerPlugin(Observer);

function ScrollingText() {
  const containerRef = useRef(null);
  const loopRef = useRef(null);

  useLayoutEffect(() => {
    let observer;

    const ctx = gsap.context(() => {
      const scrollingText = gsap.utils.toArray(
        containerRef.current.querySelectorAll(".rail h4"),
      );

      loopRef.current = horizontalLoop(scrollingText, {
        repeat: -1,
        paddingRight: 30,
      });

      observer = Observer.create({
        target: window,
        onChangeY(self) {
          let factor = self.deltaY < 0 ? -2.5 : 2.5;

          gsap
            .timeline({ defaults: { ease: "none" } })
            .to(loopRef.current, {
              timeScale: factor * 2.5,
              duration: 0.2,
              overwrite: true,
            })
            .to(
              loopRef.current,
              {
                timeScale: factor / 2.5,
                duration: 1,
              },
              "+=0.3",
            );
        },
      });
    }, containerRef);

    return () => {
      observer?.kill();
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section ref={containerRef} className="scrolling-text-section section-2">
        <div className="container-fluid">
          <div className="row m-0">
            <div className="scrolling-text ">
              <div className="title-roll rail">
                <h4>
                  <span className="highlight-yellow"> 50+ </span>
                  Successful projects //
                  <span className="highlight-yellow1"> 100+ </span>
                  Success Stories //
                  <span className="highlight-green"> 100+ </span>
                  Amazing Clients
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function AccordionExpandIcon() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordio-tab">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            UX/UI Design
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            User-friendly, high-performing experiences
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We design intuitive, human-centered digital experiences that feel
            effortless and engaging. Every interface is crafted to balance
            beauty, usability, and business goals. Our focus is on clarity,
            accessibility, and delight at every interaction.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Motion Design
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Engaging videos & animations
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Stories come alive through motion. From product explainers to brand
            films, we create dynamic visuals that move people and ideas forward.
            Every frame is designed to communicate emotion and purpose.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Brand & Consulting
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Strategic brand identity & storytelling
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We help brands find their voice and stand out with confidence. From
            strategy to execution, we build identities that last. Our approach
            blends insight, creativity, and consistency.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export const Content = () => {
  return (
    <main className="home-page">
      <section className="header-banner-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 ">
              <div className="title">
                <div className="d-flex align-items-end align-self-baseline">
                  <div className="hero-subtitle me-2">We </div>
                  <div className="summary">
                    <RevealText text=" Bringing Ideas to Life Through Design & Innovation" />
                  </div>
                </div>
                <div className="category-content">Design</div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="vido-section">
                <video autoPlay muted loop style={{ width: "100%" }}>
                  <source src={mutedVideo} />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollingText />

      <section className="vido-section-banner my-5">
        <div className="container">
          <div className="row">
            <VideoCard />
          </div>
        </div>
      </section>

      <section className="brand-section mt-5 mb-9">
        <div className="container">
          <div className="row align-items-center">
            <div className="v-title my-5 ">
              We craft impactful designs that <span>build brands </span> ,
              enhance user experience, and drive engagement.
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="card-view right-side1">
                  <div className="media">
                    <iframe
                      src="https://www.youtube.com/embed/efGnXYVS9bs?autoplay=1&mute=1&controls=1&rel=0"
                      title="YouTube video"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card-view round1">
                  <div className="media">
                    <img src={logo1} alt="brand" />
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card-view right-side2">
                  <div className="media">
                    <iframe
                      src="https://www.youtube.com/embed/swRpY0EkvS0?autoplay=1&mute=1&playsinline=1&controls=0&rel=0"
                      title="YouTube video"
                      frameBorder="0"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card-view round2">
                  <div className="media">
                    <img src={logo2} alt="brand" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="video-blog">
        <div className="container-fliud">
          <div className="row m-0">
            <Dvideo />
          </div>
        </div>
      </section>
      <section className="category-section mt-5">
        <div className="container">
          <div className="row">
            <div className="d-flex mb-5 justify-content-between align-items-center">
              <div className="c-title">What we Do</div>
              <div className="view-btn">
                <Link>
                  <span>View all</span>
                </Link>
              </div>
            </div>
            <div className="accordion-content">
              <AccordionExpandIcon />
            </div>
          </div>
        </div>
      </section>
      <section className="our-client-section mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="client-title">Our Client</div>
            <SimpleSlider />
          </div>
        </div>
      </section>
      {/* <section className="video-section">
        <div className="container">
          <div className="row"></div>
        </div>
      </section> */}
      <section className="form-section my-5">
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
    </main>
  );
};
