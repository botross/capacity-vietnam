'use client'
import React, { useState } from "react";
import Image from "next/image";
import { trainingDetailsData, trainingPrograms } from "../../data/trainingDetails";

export default function TrainingDetails() {
  const [activeTraining, setActiveTraining] = useState(trainingDetailsData[0]);

  const handleTrainingClick = (training) => {
    setActiveTraining(training);
  };

  const filteredPrograms = trainingPrograms.filter(program => 
    program.category === activeTraining.title
  );

  return (
    <section className="flat-training-details" id="training-programs">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={117}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
          <div className="col-md-4">
            <div className="side-bar-training-details mg-bottom30">
              <div className="widget-nav-tab">
                <ul className="tab-training link-style5">
                  {trainingDetailsData.map((training) => (
                    <li 
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleTrainingClick(training);
                    }}
                    key={training.id}>
                      <a 
                        className={activeTraining.id === training.id ? "active" : ""}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTrainingClick(training);
                        }}
                      >
                        <i className={`fa ${training.id === 1 ? 'fa-building' : 'fa-users'}`} style={{ marginRight: '10px' }}></i>
                        {training.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="widget-contact-training-details mg-bottom-25">
              <div className="sidebar-title mg-bottom-25">
                <h2 className="section-heading-jost-size28 text-pri2-color">
                  Get Started
                </h2>
              </div>
              <div className="contact-info-box">
                <div className="contact-item">
                  <i className="fa fa-phone" style={{ color: 'var(--primary-color4)', marginRight: '10px' }}></i>
                  <span className="desc-box">036 655 7520</span>
                </div>
                <div className="contact-item">
                  <i className="fa fa-envelope" style={{ color: 'var(--primary-color4)', marginRight: '10px' }}></i>
                  <span className="desc-box">training@capacityvietnam.com</span>
                </div>
                <div className="contact-item">
                  <i className="fa fa-map-marker" style={{ color: 'var(--primary-color4)', marginRight: '10px' }}></i>
                  <span className="desc-box">N02-T3 Ngoai Giao Doan, Xuan Dinh Ward, Hanoi City</span>
                </div>
              </div>
              <a href="/contact" className="btn-training-contact">
                <i className="fa fa-calendar" style={{ marginRight: '8px' }}></i>
                Schedule Training
              </a>
            </div>

            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={30}
              data-smobile={30}
            />
          </div>
          <div className="col-md-8">
            <article className="content-training-details">
              {/* Training Header */}
              <div className="training-header mg-bottom-40">
                <h2 className="section-heading-jost-size34 text-pri2-color mg-bottom-20">
                  {activeTraining.title}
                </h2>
                <div className="training-header-accent"></div>
              </div>

              {/* Dual Images Section */}
              <div className="training-images-section mg-bottom-50">
                <div className="images-grid">
                  <div className="main-image-container">
                    <div className="image-wrapper">
                      <Image
                        alt={`${activeTraining.title} - Main`}
                        src={activeTraining.images.main}
                        width={400}
                        height={300}
                        className="training-image main-image"
                      />
                      <div className="image-overlay">
                        <span className="image-label">{activeTraining.title}</span>
                      </div>
                    </div>
                  </div>
                  <div className="secondary-image-container">
                    <div className="image-wrapper">
                      <Image
                        alt={`${activeTraining.title} - Secondary`}
                        src={activeTraining.images.secondary}
                        width={300}
                        height={300}
                        className="training-image secondary-image"
                      />
                      <div className="image-overlay">
                        <span className="image-label">{activeTraining.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Training Description */}
              <div className="training-description-section mg-bottom-50">
                <div className="description-container">
                  <p className="section-desc enhanced-description">
                    {activeTraining.description}
                  </p>
                </div>
              </div>

              {/* Training Info Cards */}
              <div className="training-info-cards mg-bottom-50">
                <div className="row">
                  <div className="col-md-6">
                    <div className="info-card">
                      <div className="info-card-header">
                        <i className="fa fa-clock-o"></i>
                        <h4>Duration</h4>
                      </div>
                      <p>{activeTraining.duration}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-card">
                      <div className="info-card-header">
                        <i className="fa fa-laptop"></i>
                        <h4>Format</h4>
                      </div>
                      <p>{activeTraining.format}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Specializations Box */}
              <div className="training-specializations mg-bottom-40">
                <h3 className="section-heading-jost-size20 text-pri2-color mg-bottom-20">
                  Key Focus Areas
                </h3>
                <div className="specializations-grid">
                  {activeTraining.specializations.map((specialization, index) => (
                    <div key={index} className="specialization-item">
                      <span className="specialization-badge">
                        {specialization}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div className="training-audience mg-bottom-40">
                <h3 className="section-heading-jost-size20 text-pri2-color mg-bottom-20">
                  Target Audience
                </h3>
                <div className="audience-list">
                  {activeTraining.targetAudience.map((audience, index) => (
                    <div key={index} className="audience-item">
                      <i className="fa fa-user"></i>
                      <span>{audience}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div className="training-benefits mg-bottom-40">
                <h3 className="section-heading-jost-size20 text-pri2-color mg-bottom-20">
                  Program Benefits
                </h3>
                <div className="benefits-list">
                  {activeTraining.benefits.map((benefit, index) => (
                    <div key={index} className="benefit-item">
                      <i className="fa fa-check-circle"></i>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Programs */}
              {filteredPrograms.length > 0 && (
                <div className="available-programs mg-bottom-40">
                  <h3 className="section-heading-jost-size20 text-pri2-color mg-bottom-20">
                    Available Programs
                  </h3>
                  <div className="programs-grid">
                    {filteredPrograms.map((program) => (
                      <div key={program.id} className="program-card">
                        <div className="program-header">
                          <h4>{program.title}</h4>
                          <div className="program-meta">
                            <span className="duration">
                              <i className="fa fa-clock-o"></i> {program.duration}
                            </span>
                            <span className="participants">
                              <i className="fa fa-users"></i> {program.participants}
                            </span>
                          </div>
                        </div>
                        <p className="program-description">{program.description}</p>
                        <div className="program-topics">
                          <h5>Key Topics:</h5>
                          <ul>
                            {program.keyTopics.map((topic, index) => (
                              <li key={index}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonials */}
              {activeTraining.testimonials && activeTraining.testimonials.length > 0 && (
                <div className="training-testimonials mg-bottom-40">
                  <h3 className="section-heading-jost-size20 text-pri2-color mg-bottom-20">
                    What Our Clients Say
                  </h3>
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <i className="fa fa-quote-left"></i>
                      <p>"{activeTraining.testimonials[0].quote}"</p>
                    </div>
                    <div className="testimonial-author">
                      <strong>{activeTraining.testimonials[0].author}</strong>
                      <span>{activeTraining.testimonials[0].position}</span>
                    </div>
                  </div>
                </div>
              )}
            </article>
          </div>
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={172}
              data-mobile={100}
              data-smobile={60}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
