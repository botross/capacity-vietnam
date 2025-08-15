import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <section className="flat-about-home2">
      <div className="container-fluid">
        <div className="row">
          <div className="image-about-home2">
            <Image
              alt="images"
              src="/images/home/close-up-planting-flowers-pot.jpg"
              width={645}
              height={739}
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={148}
                  data-mobile={60}
                  data-smobile={60}
                />
                <div className="about-content-left themesflat-counter">
                  <h5 className="section-subtitle">ABOUT US</h5>
                  <h2 className="section-title">Supporting Mental Wellness</h2>
                  <p className="section-desc">
                    Capacity Vietnam is dedicated to providing comprehensive mental health support and building awareness throughout Vietnamese communities
                  </p>
                  <div className="about-history-box wow fadeInLeft">
                    <div className="icon-about">
                      <span className="tf-icon-about icon-admin-sys" />
                      <div className="about-count-year section-heading-jost-size20 fw-600">
                        8+ YEARS
                      </div>
                    </div>
                    <p className="section-desc about-box-right">
                      Supporting mental health recovery and building awareness in Vietnam
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={121}
                  data-mobile={100}
                  data-smobile={80}
                />
                <div className="about-content-right wow fadeInRight">
                  <div className="about-right-list link-style3">
                    <div className="features-box">
                      <span className="icon-about-right" />
                      <div className="content-features">
                        <h3 className="section-heading-jost-size20 fw-600">
                          Individual Counseling
                        </h3>
                        <p className="section-desc white">
                          Professional one-on-one therapy sessions for personal mental health recovery
                        </p>
                      </div>
                    </div>
                    <div className="features-box box-2">
                      <span className="icon-about-right" />
                      <div className="content-features">
                        <h3 className="section-heading-jost-size20 fw-600">
                          Family Therapy
                        </h3>
                        <p className="section-desc white">
                          Supporting families through mental health challenges and strengthening relationships
                        </p>
                      </div>
                    </div>
                    <div className="features-box box-2">
                      <span className="icon-about-right" />
                      <div className="content-features">
                        <h3 className="section-heading-jost-size20 fw-600">
                          Corporate Training
                        </h3>
                        <p className="section-desc white">
                          Mental health awareness and wellness programs for workplace environments
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={0}
                  data-mobile={60}
                  data-smobile={60}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
