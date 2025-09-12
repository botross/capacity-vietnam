'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WorkplaceSolutions() {

    const solutions = [
        {
            id: 1,
            title: "Workplace Wellbeing Training for Managers",
            subtitle: "Workplace Wellbeing Courses & Workshops",
            icon: "fa-user-tie",
            color: "#fff",
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
            color: "#fff",
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
            color: "#fff",
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
        },
        {
            id: 4,
            title: "Your Mental Health Experts",
            subtitle: "35+ Years Combined Experience",
            icon: "fa-user-md",
            color: "#fff",
            description: "Our experienced team of international and local mental health professionals deliver trusted workplace wellbeing programs and support services.",
            features: [
                "35+ years of combined experience",
                "Proven international + local expertise",
                "Licensed counsellors and trainers",
                "Cross-cultural competency specialists",
                "Bilingual Vietnamese/English delivery"
            ],
            topics: [
                "Leadership in mental health training",
                "Cross-cultural counselling",
                "Employee Assistance Programs (EAP)",
                "Workplace wellbeing strategies"
            ],
            image: "/images/training/mental-health-experts.jpg"
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
                        <span className="title-accent">{" "}Solutions</span>
                    </h2>
                    <p className="section-description">
                        Transform your workplace with our evidence-based mental health programs designed for managers, employees, and organizations.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="solutions-grid">
                    {solutions.map((solution, index) => (
                        <div key={solution.id} className={`solution-card solution-${index + 1}`}>
                            <div className="card-content">
                                <div className="card-badge">
                                    <span>{solution.subtitle}</span>
                                </div>
                                <h3 className="card-title">{solution.title}</h3>
                                <p
                                    style={{
                                        marginBottom: "20px"
                                    }}
                                    className="card-description">{solution.description}</p>

                                {/* Features List */}
                                <div className="features-section">
                                    <h4 className="features-title">Key Features:</h4>
                                    <ul className="features-list">
                                        {solution.features.map((feature, idx) => (
                                            <li
                                                style={{
                                                    marginBottom: "-5px"
                                                }}
                                                key={idx} className="feature-item">
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



                            {/* Card Footer */}
                            <div className="card-footer">
                                <a 
                                className="learn-more-btn" >
                                    <Link
                                    style={{
                                        color: solution.color,
                                
                                    }}
                                    href={`/training/${solution.id}`}>
                                        Learn More
                                        <i className="fa fa-arrow-right"></i>
                                    </Link>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
