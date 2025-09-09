'use client'
import React from "react";
import Image from "next/image";

export default function ExpertTeam() {
    const experts = [
        {
            id: 1,
            name: "Rhianon Walls",
            title: "Co-Founder & Director",
            experience: "30+ years mental health experience",
            qualifications: [
                "MC Counselling (Australia)",
                "EAP Professional & Senior Trainer",
                "Pioneer of Vietnamese Mental Health First Aid adaptation"
            ],
            specialties: [
                "Mental Health First Aid Training",
                "Employee Assistance Programs",
                "Cross-cultural Mental Health",
                "Leadership Development"
            ],
            image: "/images/team/team-1.jpg",
            color: "var(--primary-color4)"
        },
        {
            id: 2,
            name: "Nguyen Thi Giang (Esther)",
            title: "Professional Counselor/Trainer",
            experience: "Master of Arts in Counseling (Korea)",
            qualifications: [
                "Master of Arts in Counseling (Korea)",
                "Bilingual Vietnamese/English",
                "Cross-cultural competency specialist"
            ],
            specialties: [
                "Individual Counseling",
                "Cross-cultural Therapy",
                "Bilingual Support",
                "Cultural Competency Training"
            ],
            image: "/images/team/team-2.jpg",
            color: "var(--primary-color2)"
        },
        {
            id: 3,
            name: "Nguyen Ngoc Kieu Nga (Deborah)",
            title: "Professional Counselor/Trainer",
            experience: "Master of Clinical Counseling (Singapore)",
            qualifications: [
                "Master of Clinical Counseling (Singapore)",
                "Bilingual Vietnamese/English",
                "Cross-cultural competency specialist"
            ],
            specialties: [
                "Clinical Counseling",
                "Group Therapy",
                "Workplace Mental Health",
                "Team Building & Healing"
            ],
            image: "/images/team/team-3.jpg",
            color: "var(--primary-color3)"
        }
    ];

    const teamStats = [
        {
            number: "35+",
            label: "Years Combined Experience",
            icon: "fa-calendar"
        },
        {
            number: "100%",
            label: "Bilingual Support",
            icon: "fa-globe"
        },
        {
            number: "3",
            label: "Expert Practitioners",
            icon: "fa-users"
        },
        {
            number: "1000+",
            label: "Lives Transformed",
            icon: "fa-heart"
        }
    ];

    return (
        <section className="expert-team" id="expert-team">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <div className="section-badge">
                        <i className="fa fa-users"></i>
                        <span>Your Mental Health Experts</span>
                    </div>
                    <h2 className="section-title">
                        Combined 35+ Years Experience
                        <span className="title-accent">Proven International + Local Expertise</span>
                    </h2>
                    <p className="section-description">
                        Meet our team of licensed mental health professionals who bring together decades of experience in both international and Vietnamese contexts.
                    </p>
                </div>

                {/* Team Stats */}
                <div className="team-stats">
                    <div className="stats-grid">
                        {teamStats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <div className="stat-icon">
                                    <i className={`fa ${stat.icon}`}></i>
                                </div>
                                <div className="stat-content">
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Expert Cards */}
                <div className="experts-grid">
                    {experts.map((expert, index) => (
                        <div key={expert.id} className={`expert-card expert-${index + 1}`}>
                            {/* Expert Image */}
                            <div className="expert-image">
                                <div className="image-wrapper">
                                    <Image
                                        alt={expert.name}
                                        src={expert.image}
                                        width={300}
                                        height={300}
                                        className="expert-photo"
                                    />
                                    <div className="image-overlay" style={{ background: `linear-gradient(135deg, ${expert.color}20, transparent)` }}>
                                        <div className="overlay-content">
                                            <div className="expert-badge" style={{ backgroundColor: expert.color }}>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Expert Info */}
                            <div className="expert-info">
                                <div className="expert-header">
                                    <h3 className="expert-name">{expert.name}</h3>
                                    <h4 className="expert-title">{expert.title}</h4>
                                    <p className="expert-experience">{expert.experience}</p>
                                </div>

                                {/* Qualifications */}
                                <div className="qualifications-section">
                                    <h5 className="section-title">
                                        <i className="fa fa-graduation-cap"></i>
                                        Qualifications
                                    </h5>
                                    <ul className="qualifications-list">
                                        {expert.qualifications.map((qual, idx) => (
                                            <li key={idx}>
                                                <i className="fa fa-check-circle" style={{ color: expert.color }}></i>
                                                <span>{qual}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Specialties */}
                                <div className="specialties-section">
                                    <h5 className="section-title">
                                        <i className="fa fa-star"></i>
                                        Specialties
                                    </h5>
                                    <div className="specialties-grid">
                                        {expert.specialties.map((specialty, idx) => (
                                            <div key={idx} className="specialty-tag" style={{ borderColor: expert.color }}>
                                                <span>{specialty}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Button */}
                                <div className="expert-cta">
                                    <a href="/contact" className="expert-contact-btn" style={{ borderColor: expert.color, color: expert.color }}>
                                        <i className="fa fa-envelope"></i>
                                        Contact {expert.name.split(' ')[0]}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Team Philosophy */}
                <div className="team-philosophy">
                    <div className="philosophy-content">
                        <div className="philosophy-icon">
                            <i className="fa fa-lightbulb-o"></i>
                        </div>
                        <div className="philosophy-text">
                            <h3>Our Approach</h3>
                            <p>
                                We combine international best practices with deep local understanding to provide culturally sensitive, 
                                evidence-based mental health support. Our team's diverse backgrounds and extensive experience ensure 
                                that every client receives personalized, professional care that respects their cultural context while 
                                delivering world-class therapeutic outcomes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="team-cta">
                    <div className="cta-content">
                        <h3>Ready to Work with Our Experts?</h3>
                        <p>Schedule a consultation with our experienced team to discuss your organization's mental health needs.</p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn-primary-large">
                                <i className="fa fa-calendar"></i>
                                Schedule Consultation
                            </a>
                            <a href="#workplace-solutions" className="btn-secondary-large">
                                <i className="fa fa-arrow-up"></i>
                                View Our Solutions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
