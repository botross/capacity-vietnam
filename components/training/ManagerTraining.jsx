'use client'
import React, { useState } from "react";
import Image from "next/image";

export default function ManagerTraining() {
    const [activeModule, setActiveModule] = useState(0);

    const modules = [
        {
            id: 1,
            title: "Understanding Mental Health Issues",
            duration: "2 hours",
            description: "Comprehensive overview of mental health in the workplace, common conditions, and their impact on performance and team dynamics.",
            topics: [
                "Mental health awareness and stigma reduction",
                "Common workplace mental health conditions",
                "Signs and symptoms to recognize",
                "Impact on productivity and team dynamics",
                "Legal and ethical considerations"
            ],
            outcomes: [
                "Increased awareness of mental health issues",
                "Better recognition of warning signs",
                "Reduced stigma in the workplace"
            ]
        },
        {
            id: 2,
            title: "Psychological Safety & Employee Support",
            duration: "2 hours",
            description: "Learn how to create and maintain psychologically safe environments where employees feel comfortable discussing mental health concerns.",
            topics: [
                "Creating psychologically safe environments",
                "Building trust and open communication",
                "Supporting employees in distress",
                "Confidentiality and privacy considerations",
                "Resource identification and referral"
            ],
            outcomes: [
                "Enhanced team psychological safety",
                "Improved employee support skills",
                "Better workplace communication"
            ]
        },
        {
            id: 3,
            title: "Leadership Challenges and Isolation",
            duration: "2 hours",
            description: "Address the unique mental health challenges faced by leaders and managers, including isolation, stress, and decision-making pressure.",
            topics: [
                "Leadership stress and burnout",
                "Decision-making under pressure",
                "Managing team conflicts",
                "Work-life balance for leaders",
                "Seeking support as a manager"
            ],
            outcomes: [
                "Better stress management for leaders",
                "Improved decision-making skills",
                "Enhanced leadership resilience"
            ]
        },
        {
            id: 4,
            title: "Listening and Empathy",
            duration: "2 hours",
            description: "Develop essential communication skills including active listening, empathy, and effective support techniques for team members.",
            topics: [
                "Active listening techniques",
                "Empathetic communication",
                "Non-judgmental support approaches",
                "Difficult conversations about mental health",
                "Boundaries and professional limits"
            ],
            outcomes: [
                "Enhanced communication skills",
                "Improved empathy and understanding",
                "Better conflict resolution abilities"
            ]
        }
    ];

    const flexibleWorkshops = [
        {
            title: "Communication Strategies",
            duration: "2 hours",
            format: "Lunch-and-learn"
        },
        {
            title: "Mental Distress and Stigma",
            duration: "2 hours",
            format: "Team-building integration"
        },
        {
            title: "Substance Uses and Performance",
            duration: "2 hours",
            format: "Lunch-and-learn"
        },
        {
            title: "Overthinking Management",
            duration: "2 hours",
            format: "Team-building integration"
        }
    ];

    return (
        <section className="manager-training">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <div className="section-badge">
                        <i className="fa fa-user-tie"></i>
                        <span>Manager Training</span>
                    </div>
                    <h2 className="section-title">
                        Workplace Wellbeing Courses & Workshops
                        <span className="title-accent">for Managers</span>
                    </h2>
                    <p className="section-description">
                        Empower your leaders with comprehensive mental health training to create psychologically safe workplaces and support their teams effectively.
                    </p>
                </div>

                <div className="row">
                    {/* Main Course Overview */}
                    <div className="col-lg-8">
                        <div className="course-overview">
                            <div className="course-header">
                                <div className="course-badge">
                                    <i className="fa fa-graduation-cap"></i>
                                    <span>Intensive Training Program</span>
                                </div>
                                <h3 className="course-title">Workplace Wellbeing Manager Course</h3>
                                <div className="course-meta">
                                    <div className="meta-item">
                                        <i className="fa fa-clock-o"></i>
                                        <span>4 modules in 1 intensive day (8 hours)</span>
                                    </div>
                                    <div className="meta-item">
                                        <i className="fa fa-users"></i>
                                        <span>Maximum 20 participants</span>
                                    </div>
                                    <div className="meta-item">
                                        <i className="fa fa-certificate"></i>
                                        <span>Certificate of completion</span>
                                    </div>
                                </div>
                            </div>

                            {/* Module Navigation */}
                            <div className="module-navigation">
                                <div className="nav-tabs">
                                    {modules.map((module, index) => (
                                        <button
                                            key={module.id}
                                            className={`nav-tab ${activeModule === index ? 'active' : ''}`}
                                            onClick={() => setActiveModule(index)}
                                        >
                                            <div className="tab-number">{module.id}</div>
                                            <div className="tab-content">
                                                <h4>{module.title}</h4>
                                                <span>{module.duration}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Active Module Content */}
                            <div className="module-content">
                                <div className="module-header">
                                    <h3 className="module-title">{modules[activeModule].title}</h3>
                                    <div className="module-duration">{modules[activeModule].duration}</div>
                                </div>
                                <p className="module-description">{modules[activeModule].description}</p>

                                <div className="module-details">
                                    <div className="topics-section">
                                        <h4>Topics Covered:</h4>
                                        <ul className="topics-list">
                                            {modules[activeModule].topics.map((topic, index) => (
                                                <li key={index}>
                                                    <i className="fa fa-check-circle"></i>
                                                    <span>{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="outcomes-section">
                                        <h4>Learning Outcomes:</h4>
                                        <ul className="outcomes-list">
                                            {modules[activeModule].outcomes.map((outcome, index) => (
                                                <li key={index}>
                                                    <i className="fa fa-star"></i>
                                                    <span>{outcome}</span>
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
                        <div className="training-sidebar">
                            {/* Flexible Workshops */}
                            <div className="sidebar-section">
                                <h4 className="sidebar-title">
                                    <i className="fa fa-calendar"></i>
                                    Flexible 2-Hour Workshops
                                </h4>
                                <p className="sidebar-description">
                                    Perfect for lunch-and-learn formats and team-building integration
                                </p>
                                <div className="workshops-list">
                                    {flexibleWorkshops.map((workshop, index) => (
                                        <div key={index} className="workshop-item">
                                            <div className="workshop-header">
                                                <h5>{workshop.title}</h5>
                                                <span className="workshop-duration">{workshop.duration}</span>
                                            </div>
                                            <div className="workshop-format">{workshop.format}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Success Metrics */}
                            <div className="sidebar-section">
                                <h4 className="sidebar-title">
                                    <i className="fa fa-chart-line"></i>
                                    Success Metrics
                                </h4>
                                <div className="metrics-grid">
                                    <div className="metric-item">
                                        <div className="metric-number">85%+</div>
                                        <div className="metric-label">Report Increased Confidence</div>
                                    </div>
                                    <div className="metric-item">
                                        <div className="metric-number">90%+</div>
                                        <div className="metric-label">Would Recommend</div>
                                    </div>
                                    <div className="metric-item">
                                        <div className="metric-number">95%+</div>
                                        <div className="metric-label">Satisfaction Rate</div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="sidebar-cta">
                                <h4>Ready to Get Started?</h4>
                                <p>Transform your leadership team with our comprehensive manager training program.</p>
                                <a href="/contact" className="btn-primary-full">
                                    <i className="fa fa-calendar"></i>
                                    Schedule Training
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
