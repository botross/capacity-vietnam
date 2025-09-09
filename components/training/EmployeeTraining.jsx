'use client'
import React, { useState } from "react";
import Image from "next/image";

export default function EmployeeTraining() {
    const [activeModule, setActiveModule] = useState(0);

    const modules = [
        {
            id: 1,
            title: "Understanding Mental Health Issues",
            duration: "2 hours",
            description: "Comprehensive introduction to mental health awareness, common conditions, and their impact on personal and professional life.",
            topics: [
                "Mental health awareness and education",
                "Common mental health conditions",
                "Signs and symptoms recognition",
                "Impact on work performance",
                "Breaking down stigma and myths"
            ],
            outcomes: [
                "Increased mental health literacy",
                "Better self-awareness",
                "Reduced stigma and judgment"
            ]
        },
        {
            id: 2,
            title: "Stress Management",
            duration: "2 hours",
            description: "Practical techniques and strategies for managing workplace stress, building resilience, and maintaining work-life balance.",
            topics: [
                "Understanding stress and its effects",
                "Stress identification and triggers",
                "Coping strategies and techniques",
                "Time management and prioritization",
                "Relaxation and mindfulness practices"
            ],
            outcomes: [
                "Improved stress management skills",
                "Better work-life balance",
                "Enhanced personal resilience"
            ]
        },
        {
            id: 3,
            title: "Burnout Prevention",
            duration: "2 hours",
            description: "Learn to recognize early signs of burnout and implement effective prevention strategies to maintain long-term wellbeing.",
            topics: [
                "Understanding burnout and its stages",
                "Early warning signs and symptoms",
                "Prevention strategies and techniques",
                "Setting healthy boundaries",
                "Recovery and restoration practices"
            ],
            outcomes: [
                "Better burnout recognition",
                "Improved prevention strategies",
                "Enhanced long-term wellbeing"
            ]
        },
        {
            id: 4,
            title: "Building Resilience",
            duration: "2 hours",
            description: "Develop personal resilience skills to bounce back from challenges and maintain mental health during difficult times.",
            topics: [
                "Understanding resilience and its components",
                "Building emotional resilience",
                "Cognitive flexibility and adaptability",
                "Social support networks",
                "Growth mindset development"
            ],
            outcomes: [
                "Increased personal resilience",
                "Better adaptability to change",
                "Stronger support networks"
            ]
        },
        {
            id: 5,
            title: "Work-Life Integration",
            duration: "2 hours",
            description: "Strategies for creating healthy boundaries between work and personal life while maintaining productivity and satisfaction.",
            topics: [
                "Work-life balance vs. integration",
                "Setting healthy boundaries",
                "Time management strategies",
                "Technology and digital wellness",
                "Personal values and priorities"
            ],
            outcomes: [
                "Better work-life integration",
                "Improved boundary setting",
                "Enhanced life satisfaction"
            ]
        },
        {
            id: 6,
            title: "Emotional Maturity in the Workplace",
            duration: "2 hours",
            description: "Develop emotional intelligence and maturity skills for better workplace relationships and professional growth.",
            topics: [
                "Emotional intelligence fundamentals",
                "Self-awareness and self-regulation",
                "Empathy and social skills",
                "Conflict resolution and communication",
                "Professional emotional maturity"
            ],
            outcomes: [
                "Enhanced emotional intelligence",
                "Better workplace relationships",
                "Improved communication skills"
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
            title: "Advocating for Yourself",
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
        <section className="employee-training">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <div className="section-badge">
                        <i className="fa fa-users"></i>
                        <span>Employee Training</span>
                    </div>
                    <h2 className="section-title">
                        Workplace Wellbeing Courses & Workshops
                        <span className="title-accent">for Employees</span>
                    </h2>
                    <p className="section-description">
                        Comprehensive employee wellness program designed to build resilience, manage stress, and create a mentally healthy workplace culture.
                    </p>
                </div>

                <div className="row">
                    {/* Main Course Overview */}
                    <div className="col-lg-8">
                        <div className="course-overview">
                            <div className="course-header">
                                <div className="course-badge">
                                    <i className="fa fa-graduation-cap"></i>
                                    <span>Comprehensive Training Program</span>
                                </div>
                                <h3 className="course-title">Workplace Wellbeing Employee Course</h3>
                                <div className="course-meta">
                                    <div className="meta-item">
                                        <i className="fa fa-clock-o"></i>
                                        <span>6 modules over 2 days (12 hours total)</span>
                                    </div>
                                    <div className="meta-item">
                                        <i className="fa fa-users"></i>
                                        <span>Maximum 25 participants</span>
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
                                <p>Empower your employees with comprehensive wellness training that builds resilience and creates a healthier workplace.</p>
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
