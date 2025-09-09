'use client'
import React from "react";
import Image from "next/image";

export default function WorkplaceSolutions() {
    const solutions = [
        {
            id: 1,
            title: "Workplace Wellbeing Training for Managers",
            subtitle: "Workplace Wellbeing Courses & Workshops",
            icon: "fa-user-tie",
            color: "var(--primary-color4)",
            description: "Empower your leaders with comprehensive mental health training to create psychologically safe workplaces and support their teams effectively.",
            features: [
                "4 modules in 1 intensive day (8 hours)",
                "Understanding Mental Health Issues",
                "Psychological safety & employee support",
                "Leadership challenges and isolation",
                "Listening and empathy skills",
                "Flexible 2-Hour Workshops available"
            ],
            topics: [
                "Communication strategies",
                "Mental distress and stigma",
                "Substance uses and performance",
                "Overthinking management"
            ],
            image: "/images/training/corporate-training-1.jpg"
        },
        {
            id: 2,
            title: "Workplace Wellbeing Training for Employees",
            subtitle: "Workplace Wellbeing Courses & Workshops",
            icon: "fa-users",
            color: "var(--primary-color2)",
            description: "Comprehensive employee wellness program designed to build resilience, manage stress, and create a mentally healthy workplace culture.",
            features: [
                "6 modules over 2 days (12 hours total)",
                "Understanding mental health issues",
                "Stress management techniques",
                "Burnout prevention strategies",
                "Building personal resilience",
                "Work-life integration skills"
            ],
            topics: [
                "Communication strategies",
                "Mental distress and stigma",
                "Advocating for yourself",
                "Overthinking management"
            ],
            image: "/images/training/corporate-training-2.jpg"
        },
        {
            id: 3,
            title: "Psychological Support Services",
            subtitle: "Individual & Group Counselling",
            icon: "fa-heart",
            color: "var(--primary-color3)",
            description: "Professional psychological support services including individual counselling, group support, and workplace conflict resolution.",
            features: [
                "Individual Counselling (Online, on-site, or hybrid)",
                "Licensed practitioners with English or Vietnamese expertise",
                "Flexible scheduling + follow-up support",
                "Group Support & Peer support groups",
                "Team healing sessions",
                "Workplace conflict resolution"
            ],
            topics: [
                "Individual therapy sessions",
                "Group support programs",
                "Team building & healing",
                "Conflict resolution"
            ],
            image: "/images/training/community-education-1.jpg"
        }
    ];

    return (
        <section className="workplace-solutions" id="workplace-solutions">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <div className="section-badge">
                        <i className="fa fa-lightbulb-o"></i>
                        <span>Comprehensive Solutions</span>
                    </div>
                    <h2 className="section-title">
                        Comprehensive Mental Health
                        <span className="title-accent">Solutions</span>
                    </h2>
                    <p className="section-description">
                        Transform your workplace with our evidence-based mental health programs designed for managers, employees, and organizations.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="solutions-grid">
                    {solutions.map((solution, index) => (
                        <div key={solution.id} className={`solution-card solution-${index + 1}`}>
                            {/* Card Header */}
                            <div className="card-header">
                                <div className="card-icon" style={{ backgroundColor: solution.color }}>
                                    <i className={`fa ${solution.icon}`}></i>
                                </div>
                                <div className="card-badge">
                                    <span>{solution.subtitle}</span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="card-content">
                                <h3 className="card-title">{solution.title}</h3>
                                <p className="card-description">{solution.description}</p>

                                {/* Features List */}
                                <div className="features-section">
                                    <h4 className="features-title">Key Features:</h4>
                                    <ul className="features-list">
                                        {solution.features.map((feature, idx) => (
                                            <li key={idx} className="feature-item">
                                                <i className="fa fa-check-circle" style={{ color: solution.color }}></i>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Topics */}
                                <div className="topics-section">
                                    <h4 className="topics-title">Topics Covered:</h4>
                                    <div className="topics-grid">
                                        {solution.topics.map((topic, idx) => (
                                            <div key={idx} className="topic-tag" style={{ borderColor: solution.color }}>
                                                <span>{topic}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Card Image */}
                            <div className="card-image">
                                <div className="image-wrapper">
                                    <Image
                                        alt={solution.title}
                                        src={solution.image}
                                        width={400}
                                        height={300}
                                        className="solution-image"
                                    />
                                    <div className="image-overlay" style={{ background: `linear-gradient(135deg, ${solution.color}20, transparent)` }}>
                                        <div className="overlay-content">
                                            <div className="overlay-icon" style={{ backgroundColor: solution.color }}>
                                                <i className={`fa ${solution.icon}`}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="card-footer">
                                <div className="success-metric">
                                    <div className="metric-number" style={{ color: solution.color }}>85%+</div>
                                    <div className="metric-text">Report Increased Confidence</div>
                                </div>
                                <a href="/contact" className="learn-more-btn" style={{ borderColor: solution.color, color: solution.color }}>
                                    Learn More
                                    <i className="fa fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="solutions-cta">
                    <div className="cta-content">
                        <h3>Ready to Transform Your Workplace?</h3>
                        <p>Join hundreds of organizations that have improved their workplace culture with our comprehensive mental health solutions.</p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn-primary-large">
                                <i className="fa fa-calendar"></i>
                                Schedule Consultation
                            </a>
                            <a href="#expert-team" className="btn-secondary-large">
                                <i className="fa fa-users"></i>
                                Meet Our Experts
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
