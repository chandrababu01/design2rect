import { useState } from "react";
import { RevealText } from "./components/lightswind/RevealText";
import Hero3D from "./Hero3D";
import Dvideo from "./Dvideo";
import { Tabs, Tab, Box } from "@mui/material";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgVideo from "lightgallery/plugins/video";

// CSS Imports
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";

// ✅ IMAGE IMPORTS
import logo11 from "./assets/images/logo/11.jpg";
import logo9 from "./assets/images/logo/9.jpg";
import logo10 from "./assets/images/logo/10.jpg";
import b1 from "./assets/images/digital-branding/b1.png";
import b2 from "./assets/images/digital-branding/b2.jpg";
import b3 from "./assets/images/digital-branding/b3.jpg";
import b4 from "./assets/images/digital-branding/b4.png";
import b5 from "./assets/images/digital-branding/b5.jpg";
import b6 from "./assets/images/digital-branding/b6.png";
import b7 from "./assets/images/digital-branding/b7.jpg";
import b8 from "./assets/images/digital-branding/b8.jpg";
import b9 from "./assets/images/digital-branding/b9.jpg";
import b10 from "./assets/images/digital-branding/b10.jpg";
import b11 from "./assets/images/digital-branding/b11.jpg";
import s1 from "./assets/images/digital-branding/s1.jpg";
import s2 from "./assets/images/digital-branding/s2.jpg";
import s3 from "./assets/images/digital-branding/s3.jpg";
import s4 from "./assets/images/digital-branding/s4.jpg";
import s5 from "./assets/images/digital-branding/s5.jpg";
import s6 from "./assets/images/digital-branding/s6.jpg";
import s7 from "./assets/images/digital-branding/s7.jpg";
import s8 from "./assets/images/digital-branding/s8.jpg";
import s9 from "./assets/images/digital-branding/s9.jpg";
import l1 from "./assets/images/digital-branding/l1.jpg";
import l2 from "./assets/images/digital-branding/l2.png";
import l3 from "./assets/images/digital-branding/l3.png";
import l4 from "./assets/images/digital-branding/l4.png";
import l5 from "./assets/images/digital-branding/l5.png";
import l6 from "./assets/images/digital-branding/l6.png";
import l7 from "./assets/images/digital-branding/l7.png";
import ux1 from "./assets/images/user-experience-design/1.jpg";
import ux2 from "./assets/images/user-experience-design/2.png";
import ux3 from "./assets/images/user-experience-design/3.jpg";
import u1 from "./assets/images/user-experience-design/u1.png";
import u2 from "./assets/images/user-experience-design/u2.png";
import u3 from "./assets/images/user-experience-design/u3.png";
import u4 from "./assets/images/user-experience-design/u4.png";
import illu1 from "./assets/images/illu/1.jpg";
import illu2 from "./assets/images/illu/2.jpg";
import illu3 from "./assets/images/illu/3.jpg";
import illu4 from "./assets/images/illu/4.jpg";
import illu5 from "./assets/images/illu/5.jpg";
import illu6 from "./assets/images/illu/6.jpg";
import illu7 from "./assets/images/illu/7.jpg";
import illu8 from "./assets/images/illu/8.jpg";
import illu9 from "./assets/images/illu/9.jpg";
import illu10 from "./assets/images/illu/10.jpg";
import illu11 from "./assets/images/illu/11.jpg";
import logo1jpg from "./assets/images/logo/1.jpg";
import logo2jpg from "./assets/images/logo/2.jpg";
import logo3jpg from "./assets/images/logo/3.jpg";
import logo4jpg from "./assets/images/logo/4.jpg";
import logo5jpg from "./assets/images/logo/5.jpg";
import logo6jpg from "./assets/images/logo/6.jpg";
import logo7jpg from "./assets/images/logo/7.jpg";
import logo1png from "./assets/images/logo/1.png";
import logo2png from "./assets/images/logo/2.png";
import logo3png from "./assets/images/logo/3.png";
import digital1 from "./assets/images/digital/1.jpg";
import digital2 from "./assets/images/digital/2.jpg";
import digital3 from "./assets/images/digital/3.jpg";
import digital4 from "./assets/images/digital/4.jpg";
import digital5 from "./assets/images/digital/5.jpg";
import digital6 from "./assets/images/digital/6.jpg";
import digital7 from "./assets/images/digital/7.jpg";
import digital11 from "./assets/images/digital/11.jpg";
import digital12 from "./assets/images/digital/12.jpg";
import m1 from "./assets/images/3d-modular-buildings/1.png";
import m2 from "./assets/images/3d-modular-buildings/2.png";
import m3 from "./assets/images/3d-modular-buildings/3.png";
import m4 from "./assets/images/3d-modular-buildings/4.png";
import m5 from "./assets/images/3d-modular-buildings/5.png";
import m6 from "./assets/images/3d-modular-buildings/6.jpg";
import m7 from "./assets/images/3d-modular-buildings/7.png";
import m8 from "./assets/images/3d-modular-buildings/8.jpg";
import m9 from "./assets/images/3d-modular-buildings/9.png";
import m10 from "./assets/images/3d-modular-buildings/10.png";
import m11 from "./assets/images/3d-modular-buildings/11.jpg";
import m12 from "./assets/images/3d-modular-buildings/12.png";
import m13 from "./assets/images/3d-modular-buildings/13.png";
import m14 from "./assets/images/3d-modular-buildings/14.png";
import m15 from "./assets/images/3d-modular-buildings/15.png";
import m16 from "./assets/images/3d-modular-buildings/16.png";
import m17 from "./assets/images/3d-modular-buildings/17.png";

function TabPanel({ value, index, children }) {
  return value === index ? <Box sx={{ pt: 4 }}>{children}</Box> : null;
}

export const Portfolio = () => {
  const [tab, setTab] = useState(0);

  return (
    <>
      <section className="portfolio-page-section py-5 dark">
        <div className="hero-3d-bg">
          <Hero3D />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="title">
                <div className="d-flex align-items-end">
                  <div className="hero-subtitle me-2">Our Best</div>
                </div>
                <div className="d-flex gap-2 align-items-end">
                  <div className="category-content">work</div>
                  <div className="what-we-do">
                    <RevealText text="A showcase of our best work in branding, UI/UX, motion design, and development." />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="portfolio-layers">
                <img src="../src/protfolio/protfolio.svg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <div className="clearfix"></div>

      <section className="portfolio-additional-section mt-0 pt-1 pb-1 dark padding-bottom-100">
        <Dvideo />
      </section>

      <section className="section-portfolio pb-5 dark">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="about-additional-section-wrapper brand-section">
                <div
                  className="v-title text-center"
                  style={{ maxWidth: "1000px", margin: "0 auto" }}
                >
                  We have done
                  <span> lots of works,</span> lets check some
                </div>
              </div>
            </div>

            {/* ✅ FIXED TABS: Removed 'centered' to fix MUI Error */}
            <Tabs
              value={tab}
              onChange={(e, v) => setTab(v)}
              variant="scrollable"
              scrollButtons="auto"
              className="tabs-portfolio"
              sx={{
                mt: 3,
                "& .MuiTabs-flexContainer": { justifyContent: "center" },
              }}
            >
              <Tab label="Digital Branding" />
              <Tab label="Motion Graphics" />
              <Tab label="UX Design" />
              <Tab label="Illustrations" />
              <Tab label="Logo Designs" />
              <Tab label="3D Modelling" />
              <Tab label="Wedding Videos" />
            </Tabs>
          </div>
        </div>

        <div className="container">
          {/* ================= DIGITAL BRANDING ================= */}
          <TabPanel value={tab} index={0}>
            <LightGallery
              speed={500}
              plugins={[lgZoom, lgThumbnail]}
              elementClassNames="row tab-content"
            >
              {[
                logo11,
                logo9,
                logo10,
                b1,
                b2,
                b3,
                b4,
                b5,
                b6,
                b7,
                b8,
                b9,
                b10,
                b11,
                s1,
                s2,
                s3,
                s4,
                s5,
                s6,
                s7,
                s8,
                s9,
                l1,
                l2,
                l3,
                l4,
                l5,
                l6,
                l7,
              ].map((img, i) => (
                <a key={i} href={img} className="col-md-4 col-sm-6 mb-4">
                  <img src={img} className="img-fluid" alt="Brand" />
                </a>
              ))}
            </LightGallery>
          </TabPanel>

          {/* ================= MOTION GRAPHICS ================= */}
          <TabPanel value={tab} index={1}>
            <LightGallery
              plugins={[lgVideo]}
              elementClassNames="row tab-content"
            >
              {[
                "HBtEq2Cy2Uo",
                "5jurqGqhz0U",
                "5lF8KOXTT2A",
                "w7Kppi-J5Qk",
                "_kNtiiFIO14",
                "NbHNY_H7kLo",
                "UCIUXnQJEp8",
                "FWxX0AtEDQk",
                "70R3BuFtp60",
              ].map((id, i) => (
                <a
                  key={i}
                  className="col-lg-4 col-md-6 mb-4"
                  data-src={`https://www.youtube.com/watch?v=${id}`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                    className="img-fluid"
                    alt="video"
                  />
                </a>
              ))}
            </LightGallery>
          </TabPanel>

          {/* ================= UX DESIGN ================= */}
          <TabPanel value={tab} index={2}>
            <LightGallery
              plugins={[lgZoom]}
              elementClassNames="row tab-content"
            >
              {[ux1, ux2, ux3, u1, u2, u3, u4].map((img, i) => (
                <a key={i} href={img} className="col-md-4 col-sm-6 mb-4">
                  <img src={img} className="img-fluid" alt="UX Design" />
                </a>
              ))}
              {/* Behance Embeds */}
              {[
                "179250173",
                "179250001",
                "163851641",
                "163851289",
                "163852021",
              ].map((id, i) => (
                <div key={i} className="col-md-4 col-sm-6 mb-4">
                  <iframe
                    src={`https://www.behance.net/embed/project/${id}?ilo0=1`}
                    height="320"
                    width="100%"
                    allowFullScreen
                    loading="lazy"
                    frameBorder="0"
                  />
                </div>
              ))}
            </LightGallery>
          </TabPanel>

          {/* ================= ILLUSTRATIONS ================= */}
          <TabPanel value={tab} index={3}>
            <LightGallery
              plugins={[lgZoom]}
              elementClassNames="row tab-content"
            >
              {[
                illu1,
                illu2,
                illu3,
                illu4,
                illu5,
                illu6,
                illu7,
                illu8,
                illu9,
                illu10,
                illu11,
              ].map((img, i) => (
                <a key={i} href={img} className="col-md-4 col-sm-6 mb-4">
                  <img src={img} className="img-fluid" alt="Illustration" />
                </a>
              ))}
            </LightGallery>
          </TabPanel>

          {/* ================= LOGO ================= */}
          <TabPanel value={tab} index={4}>
            <LightGallery elementClassNames="row tab-content">
              {[
                logo1jpg,
                logo2jpg,
                logo3jpg,
                logo4jpg,
                logo5jpg,
                logo6jpg,
                logo7jpg,
                logo1png,
                logo2png,
                logo3png,
              ].map((img, i) => (
                <a key={i} href={img} className="col-md-4 col-sm-6 mb-4">
                  <img src={img} className="img-fluid" alt="Logo" />
                </a>
              ))}
            </LightGallery>
          </TabPanel>

          {/* ================= 3D MODELLING ================= */}
          <TabPanel value={tab} index={5}>
            <LightGallery elementClassNames="row tab-content">
              {[
                digital1,
                digital2,
                digital3,
                digital4,
                digital5,
                digital6,
                digital7,
                digital11,
                digital12,
                m1,
                m2,
                m3,
                m4,
                m5,
                m6,
                m7,
                m8,
                m9,
                m10,
                m11,
                m12,
                m13,
                m14,
                m15,
                m16,
                m17,
              ].map((img, i) => (
                <a key={i} href={img} className="col-md-4 col-sm-6 mb-4">
                  <img src={img} className="img-fluid" alt="3D Model" />
                </a>
              ))}
            </LightGallery>
          </TabPanel>

          {/* ================= WEDDING VIDEOS ================= */}
          <TabPanel value={tab} index={6}>
            <LightGallery
              plugins={[lgVideo]}
              elementClassNames="row tab-content"
            >
              {[
                "Enm6CnRRoXc",
                "sNgwO7etfVM",
                "nyJ495Lfw9Y",
                "S7eKLLMK_mM",
                "2Ks5aSE1I44",
              ].map((id, i) => (
                <a
                  key={i}
                  className="col-lg-4 col-md-6 mb-4"
                  data-src={`https://www.youtube.com/watch?v=${id}`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                    className="img-fluid"
                    alt="Wedding Video"
                  />
                </a>
              ))}
            </LightGallery>
          </TabPanel>
        </div>
      </section>
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
    </>
  );
};
