'use client'
import React, { useState } from "react";
import Image from "next/image";

export default function PsychologicalSupport() {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            id: 1,
            title: "Individual Counselling",
            icon: "fa-user",
            color: "var(--primary-color4)",
            description: "Professional one-on-one counselling sessions with licensed practitioners, available in English or Vietnamese, delivered online, on-site, or in hybrid formats.",
            features: [
                "Licensed practitioners with English or Vietnamese expertise",
                "Online, on-site, or hybrid delivery options",
                "Flexible scheduling + follow-up support",
                "Confidential and safe environment",
                "Evidence-based therapeutic approaches",
                "Crisis intervention and support"
            ],
            benefits: [
                "Personalized mental health support",
                "Flexible delivery methods",
                "Bilingual support available",
                "Professional follow-up care"
            ],
            image: "/images/training/community-education-1.jpg"
        },
        {
            id: 2,
            title: "Group Support",
            icon: "fa-users",
            color: "var(--primary-color2)",
            description: "Peer support groups and team healing sessions designed to foster connection, shared learning, and collective healing in a supportive group environment.",
            features: [
                "Peer support groups",
                "Team healing sessions",
                "Workplace conflict resolution",
                "Group therapy sessions",
                "Shared experience learning",
                "Community building activities"
            ],
            benefits: [
                "Reduced isolation and loneliness",
                "Shared learning and support",
                "Team building and cohesion",
                "Cost-effective group therapy"
            ],
            image: "/images/training/community-education-2.jpg"
        }
    ];

    const deliveryOptions = [
        {
            title: "Online Delivery",
            icon: "fa-laptop",
            description: "Secure video sessions from anywhere",
            features: ["Secure video platform", "Flexible scheduling", "No travel required", "Digital resources"]
        },
        {
            title: "On-Site Delivery",
            icon: "fa-building",
            description: "In-person sessions at your workplace",
            features: ["Private consultation rooms", "Familiar environment", "Team integration", "Immediate support"]
        },
        {
            title: "Hybrid Delivery",
            icon: "fa-mobile",
            description: "Combination of online and on-site sessions",
            features: ["Flexible scheduling", "Best of both worlds", "Adaptable to needs", "Comprehensive support"]
        }
    ];

    const supportTypes = [
        {
            title: "Workplace Stress",
            description: "Managing work-related stress and pressure",
            icon: "fa-briefcase"
        },
        {
            title: "Team Conflicts",
            description: "Resolving workplace conflicts and improving communication",
            icon: "fa-handshake-o"
        },
        {
            title: "Personal Challenges",
            description: "Supporting personal issues affecting work performance",
            icon: "fa-heart"
        },
        {
            title: "Crisis Intervention",
            description: "Immediate support during mental health crises",
            icon: "fa-life-ring"
        }
    ];

    return (
        <section className="psychological-support">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <div className="section-badge">
                        <i className="fa fa-heart"></i>
                        <span>Psychological Support</span>
                    </div>
                    <h2 className="section-title">
                        Individual & Group
                        <span className="title-accent">Counselling</span>
                    </h2>
                    <p className="section-description">
                        Professional psychological support services including individual counselling, group support, and workplace conflict resolution with flexible delivery options.
                    </p>
                </div>

                <div className="row">
                    {/* Main Services */}
                    <div className="col-lg-8">
                        <div className="services-overview">
                            {/* Service Navigation */}
                            <div className="service-navigation">
                                <div className="nav-tabs">
                                    {services.map((service, index) => (
                                        <button
                                            key={service.id}
                                            className={`nav-tab ${activeService === index ? 'active' : ''}`}
                                            onClick={() => setActiveService(index)}
                                        >
                                            <div className="tab-icon" style={{ backgroundColor: service.color }}>
                                                <i className={`fa ${service.icon}`}></i>
                                            </div>
                                            <div className="tab-content">
                                                <h4>{service.title}</h4>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Active Service Content */}
                            <div className="service-content">
                                <div className="service-header">
                                    <div className="service-icon" style={{ backgroundColor: services[activeService].color }}>
                                        <i className={`fa ${services[activeService].icon}`}></i>
                                    </div>
                                    <div className="service-info">
                                        <h3 className="service-title">{services[activeService].title}</h3>
                                        <p className="service-description">{services[activeService].description}</p>
                                    </div>
                                </div>

                                <div className="service-details">
                                    <div className="features-section">
                                        <h4>Service Features:</h4>
                                        <ul className="features-list">
                                            {services[activeService].features.map((feature, index) => (
                                                <li key={index}>
                                                    <i className="fa fa-check-circle" style={{ color: services[activeService].color }}></i>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="benefits-section">
                                        <h4>Key Benefits:</h4>
                                        <ul className="benefits-list">
                                            {services[activeService].benefits.map((benefit, index) => (
                                                <li key={index}>
                                                    <i className="fa fa-star" style={{ color: services[activeService].color }}></i>
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4">
                        <div className="support-sidebar">
                            {/* Delivery Options */}
                            <div className="sidebar-section">
                                <h4 className="sidebar-title">
                                    <i className="fa fa-cogs"></i>
                                    Delivery Options
                                </h4>
                                <div className="delivery-options">
                                    {deliveryOptions.map((option, index) => (
                                        <div key={index} className="delivery-option">
                                            <div className="option-icon">
                                                <i className={`fa ${option.icon}`}></i>
                                            </div>
                                            <div className="option-content">
                                                <h5>{option.title}</h5>
                                                <p>{option.description}</p>
                                                <ul className="option-features">
                                                    {option.features.map((feature, idx) => (
                                                        <li key={idx}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Support Types */}
                            <div className="sidebar-section">
                                <h4 className="sidebar-title">
                                    <i className="fa fa-list"></i>
                                    Areas of Support
                                </h4>
                                <div className="support-types">
                                    {supportTypes.map((type, index) => (
                                        <div key={index} className="support-type">
                                            <div className="type-icon">
                                                <i className={`fa ${type.icon}`}></i>
                                            </div>
                                            <div className="type-content">
                                                <h5>{type.title}</h5>
                                                <p>{type.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="sidebar-cta">
                                <h4>Need Support?</h4>
                                <p>Our licensed practitioners are ready to provide professional psychological support tailored to your needs.</p>
                                <a href="/contact" className="btn-primary-full">
                                    <i className="fa fa-phone"></i>
                                    Get Support Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Expert Qualifications */}
                <div className="expert-qualifications">
                    <div className="qualifications-header">
                        <h3>Our Expert Practitioners</h3>
                        <p>Licensed professionals with proven international and local expertise</p>
                    </div>
                    <div className="qualifications-grid">
                        <div className="qualification-item">
                            <div className="qual-icon">
                                <i className="fa fa-graduation-cap"></i>
                            </div>
                            <div className="qual-content">
                                <h4>Licensed Practitioners</h4>
                                <p>All our counsellors are fully licensed and certified mental health professionals</p>
                            </div>
                        </div>
                        <div className="qualification-item">
                            <div className="qual-icon">
                                <i className="fa fa-globe"></i>
                            </div>
                            <div className="qual-content">
                                <h4>Bilingual Support</h4>
                                <p>Expertise in both English and Vietnamese for comprehensive cultural competency</p>
                            </div>
                        </div>
                        <div className="qualification-item">
                            <div className="qual-icon">
                                <i className="fa fa-clock-o"></i>
                            </div>
                            <div className="qual-content">
                                <h4>Flexible Scheduling</h4>
                                <p>Available for immediate support and flexible follow-up sessions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
