'use client'
import React, { useState } from "react";
import Image from "next/image";
import { servicesDetailsData } from "../../data/servicesDetails";

export default function ServiceDetails() {
  const [activeService, setActiveService] = useState(servicesDetailsData[0]);

  const handleServiceClick = (service) => {
    setActiveService(service);
  };

  return (
    <section className="flat-service-details">
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
            <div className="side-bar-services-details mg-bottom30">
              <div className="widget-nav-tab">
                <ul className="tab-service link-style5">
                  {servicesDetailsData.map((service) => (
                    <li 
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleServiceClick(service);
                    }}
                    key={service.id}>
                      <a 
                        className={activeService.id === service.id ? "active" : ""}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleServiceClick(service);
                        }}
                      >
                        {service.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="widget-contact-services-details mg-bottom-25">
              <div className="sidebar-title mg-bottom-25">
                <h2 className="section-heading-jost-size28 text-pri2-color">
                  Contact us
                </h2>
              </div>
              <ul className="widget-sidebar-contact-us text-pri2-color">
                <li>
                  <span className="icon-telephone section-heading-jost-size20">Phone:</span>
                  <span className="info-contact-us desc-box">036 655 7520</span>
                </li>
                <li>
                  <span className="icon-location section-heading-jost-size20">Address:</span>
                  <span className="info-contact-us desc-box">N02-T3 Ngoai Giao Doan, Xuan Dinh Ward, Hanoi City </span>
                </li>
                <li>
                  <span className="icon-email section-heading-jost-size20">Email:</span>
                  <span className="info-contact-us desc-box">info@capacityvietnam.com</span>
                </li>
              </ul>
            </div>

            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={30}
              data-smobile={30}
            />
          </div>
          <div className="col-md-8">
            <article 
              className="content-service-details clickable-service-box"
            >
              {/* Service Header */}
              <div className="service-header mg-bottom-40">
                <h2 className="section-heading-jost-size34 text-pri2-color mg-bottom-20">
                  {activeService.title}
                </h2>
                <div className="service-header-accent"></div>
              </div>

              {/* Dual Images Section */}
              <div className="service-images-section mg-bottom-50">
                <div className="images-grid">
                  <div className="main-image-container">
                    <div className="image-wrapper">
                      <Image
                        alt={`${activeService.title} - Main`}
                        src={activeService.images.main}
                        width={400}
                        height={300}
                        className="service-image main-image"
                      />
                      <div className="image-overlay">
                        <span className="image-label">{activeService.title}</span>
                      </div>
                    </div>
                  </div>
                  <div className="secondary-image-container">
                    <div className="image-wrapper">
                      <Image
                        alt={`${activeService.title} - Secondary`}
                        src={activeService.images.secondary}
                        width={300}
                        height={300}
                        className="service-image secondary-image"
                      />
                      <div className="image-overlay">
                        <span className="image-label">{activeService.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Description */}
              <div className="service-description-section mg-bottom-50">
                <div className="description-container">
                  <p className="section-desc enhanced-description">
                    {activeService.description}
                  </p>
                </div>
              </div>
              
              {/* Specializations Box */}
              <div className="service-specializations mg-bottom-40">
                <h3 className="section-heading-jost-size20 text-pri2-color mg-bottom-20">
                  Specializations
                </h3>
                <div className="specializations-grid">
                  {activeService.specializations.map((specialization, index) => (
                    <div key={index} className="specialization-item">
                      <span className="specialization-badge">
                        {specialization}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
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
