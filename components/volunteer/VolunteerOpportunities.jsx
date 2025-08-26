import React from "react";
import Link from "next/link";
import Image from "next/image";

const VolunteerOpportunities = () => {
    const opportunities = [
        {
            id: "english-club",
            title: "English Club Volunteer",
            status: "OPEN",
            icon: "fa-comments",
            color: "var(--primary-color2)", // #68b0aa
            description: "Join our English conversation program to help community members improve their language skills while building confidence.",
            responsibilities: [
                "Coordinate small groups participating in English conversation discussions",
                "Help organize English club activities like Big Day Out and annual meetings",
                "Develop databases and statistics on club activities and results",
                "Support community engagement through language learning"
            ],
            commitment: "Flexible schedule",
            location: "Community centers"
        },
        {
            id: "foreign-volunteer",
            title: "International Volunteer Teams",
            status: "RECRUITING",
            icon: "fa-globe",
            color: "var(--primary-color)", // #2d5175
            description: "Join short-term international volunteer teams for intensive community support projects in rural Vietnam.",
            responsibilities: [
                "Participate in 7-10 day intensive volunteer programs",
                "Support mental health education in underserved rural areas",
                "Engage in fundraising activities in your home country",
                "Experience life-changing cultural exchange"
            ],
            commitment: "7-10 days",
            location: "Rural communities",
            note: "Self-funded opportunity with maximum 8 people per team"
        },
        {
            id: "life-skills-training",
            title: "Life Skills Training Facilitator",
            status: "ONGOING",
            icon: "fa-graduation-cap",
            color: "var(--accent-color)", // #d4a574
            description: "Empower vulnerable community members through practical life skills education and personal development workshops.",
            responsibilities: [
                "Deliver life skills training to vulnerable populations",
                "Develop educational materials and resources",
                "Provide mentorship and ongoing support",
                "Track progress and outcomes of participants"
            ],
            commitment: "Weekly sessions",
            location: "Community centers"
        },
        {
            id: "professional-training",
            title: "Mental Health Professional Trainer",
            status: "HIGH PRIORITY",
            icon: "fa-user-md",
            color: "var(--primary-color4)", // #5a8b89
            description: "Share your expertise by training local healthcare workers in mental health care practices and techniques.",
            responsibilities: [
                "Provide professional mental health care training",
                "Develop training curricula and materials",
                "Mentor local healthcare professionals",
                "Support capacity building initiatives"
            ],
            commitment: "Monthly workshops",
            location: "Healthcare facilities",
            requirements: "Licensed mental health professional"
        }
    ];

    return (
        <section style={{
            paddingTop: "120px",
            paddingBottom: "100px",
            background: "#F0FBFF", // #e8f4f8
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Background decoration */}
            <div style={{
                position: "absolute",
                top: "-50%",
                right: "-20%",
                width: "40%",
                height: "200%",
                background: "radial-gradient(circle, rgba(45, 81, 117, 0.05) 0%, transparent 70%)",
                borderRadius: "50%",
                zIndex: 1
            }}></div>

            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                {/* Section Header */}
                <div className="row">
                    <div className="col-md-12">
                        <div style={{ textAlign: "center", marginBottom: "80px" }}>
                            <div className="section-subtitle" style={{
                                display: "inline-flex",
                                alignItems: "center",
                                backgroundColor: "rgba(45, 81, 117, 0.1)",
                                padding: "8px 20px",
                                borderRadius: "25px",
                                marginBottom: "24px"
                            }}>
                                <i className="fa fa-hands-helping" style={{
                                    color: "var(--primary-color)",
                                    fontSize: "16px",
                                    marginRight: "8px"
                                }}></i>
                                <span>JOIN HANDS WITH US</span>
                            </div>

                            <h2 className="section-title" style={{
                                textAlign: "center",
                                marginBottom: "24px"
                            }}>
                                Current Volunteer Opportunities
                            </h2>

                            <p className="section-desc" style={{
                                fontSize: "1.25rem",
                                maxWidth: "700px",
                                margin: "0 auto",
                                lineHeight: "1.6",
                                textAlign: "center"
                            }}>
                                Join our mission to transform mental health care in Vietnam. We're actively recruiting passionate volunteers for these specialized positions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Opportunities Grid */}
                <div className="row">
                    {opportunities.map((opportunity, index) => (
                        <div key={opportunity.id} className="col-lg-6 col-md-12" style={{ marginBottom: "40px" }}>
                            <div style={{
                                backgroundColor: "white",
                                borderRadius: "20px",
                                padding: "20px",
                                height: "100%",
                                position: "relative",
                                overflow: "hidden"
                            }} className="volunteer-opportunity-card">

                                {/* Status Badge */}
                                {/* <div style={{
                                    position: "absolute",
                                    top: "20px",
                                    right: "20px",
                                    backgroundColor: opportunity.color,
                                    color: "white",
                                    padding: "6px 12px",
                                    borderRadius: "15px",
                                    fontSize: "0.75rem",
                                    fontWeight: "600",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.5px"
                                }}>
                                    {opportunity.status}
                                </div> */}

                                {/* Icon and Title */}
                                <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>

                                    <div>
                                        <h3 style={{
                                            fontSize: "1.5rem",
                                            fontWeight: "700",
                                            color: "#1e293b",
                                            margin: "0",
                                            lineHeight: "1.2"
                                        }}>
                                            {opportunity.title}
                                        </h3>
                                        {opportunity.requirements && (
                                            <span style={{
                                                fontSize: "0.85rem",
                                                color: "#64748b",
                                                fontStyle: "italic",
                                                marginBottom: "-10px"
                                            }}>
                                                {opportunity.requirements}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Description */}
                                <p style={{
                                    fontSize: "1rem",
                                    color: "#64748b",
                                    lineHeight: "1.6",
                                    marginBottom: "15px"
                                }}>
                                    {opportunity.description}
                                </p>

                                {/* Details */}
                                <div style={{ marginBottom: "15px" }}>
                                    <div style={{ display: "flex", gap: "20px", marginBottom: "15px", flexWrap: "wrap" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <i className="fa fa-clock-o" style={{ color: "#64748b", marginRight: "8px" }}></i>
                                            <span style={{ fontSize: "0.9rem", color: "#64748b" }}>
                                                <strong>Commitment:</strong> {opportunity.commitment}
                                            </span>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <i className="fa fa-map-marker" style={{ color: "#64748b", marginRight: "8px" }}></i>
                                            <span style={{ fontSize: "0.9rem", color: "#64748b" }}>
                                                <strong>Location:</strong> {opportunity.location}
                                            </span>
                                        </div>
                                    </div>

                                    {opportunity.note && (
                                        <div style={{
                                            backgroundColor: "#f1f5f9",
                                            padding: "4px 16px",
                                            borderRadius: "10px",
                                            borderLeft: `4px solid ${opportunity.color}`,
                                            fontSize: "0.85rem",
                                            color: "#475569",
                                            marginTop: "-10px"
                                        }}>
                                            <i className="fa fa-info-circle" style={{ marginRight: "8px", color: opportunity.color }}></i>
                                            {opportunity.note}
                                        </div>
                                    )}
                                </div>

                                {/* Responsibilities */}
                                <div style={{ marginBottom: "10px" }}>
                                    <h4 style={{
                                        fontSize: "1rem",
                                        fontWeight: "600",
                                        color: "#1e293b",
                                        marginBottom: "6px"
                                    }}>Key Responsibilities:</h4>
                                    <ul style={{
                                        listStyle: "none",
                                        padding: "0",
                                        margin: "0"
                                    }}>
                                        {opportunity.responsibilities.slice(0, 3).map((responsibility, idx) => (
                                            <li key={idx} style={{
                                                fontSize: "0.9rem",
                                                color: "#64748b",
                                                marginBottom: "4px",
                                                paddingLeft: "20px",
                                                position: "relative"
                                            }}>
                                                {responsibility}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Apply Button */}
                                {/* <Link href="/contact" style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    backgroundColor: opportunity.color,
                                    color: "white",
                                    padding: "14px 28px",
                                    borderRadius: "25px",
                                    textDecoration: "none",
                                    fontWeight: "600",
                                    fontSize: "0.95rem",
                                    transition: "all 0.3s ease",
                                    boxShadow: `0 8px 25px ${opportunity.color}30`
                                }}>
                                    <i className="fa fa-paper-plane" style={{ marginRight: "8px", fontSize: "14px" }}></i>
                                    Apply for This Position
                                </Link> */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Information */}
                <div className="row" style={{ marginTop: "60px" }}>
                    <div className="col-md-12">
                        <div style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                            padding: "50px",
                            textAlign: "center",
                            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
                            border: "2px solid rgba(29, 73, 118, 0.1)"
                        }}>
                            <h3 className="section-heading-jost-size28" style={{
                                color: "var(--primary-color5)",
                                marginBottom: "20px"
                            }}>
                                Ready to Get Started?
                            </h3>
                            <p className="section-desc" style={{
                                fontSize: "1.125rem",
                                marginBottom: "30px",
                                maxWidth: "600px",
                                margin: "0 auto 30px auto",
                                lineHeight: "1.6"
                            }}>
                                Contact us to introduce yourself and learn more about these volunteer opportunities.
                                Together, we can support rural communities where mental health education programs are most needed.
                            </p>

                            <div style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "30px",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: "30px"
                            }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <i className="fa fa-envelope" style={{
                                        color: "var(--primary-color)",
                                        fontSize: "18px",
                                        marginRight: "10px"
                                    }}></i>
                                    <div>
                                        <div style={{ fontSize: "0.9rem", color: "var(--primary-color2)", fontWeight: "500" }}>Email</div>
                                        <a href="mailto:info@capacityvietnam.com" style={{
                                            color: "var(--primary-color)",
                                            textDecoration: "none",
                                            fontWeight: "600"
                                        }}>
                                            info@capacityvietnam.com
                                        </a>
                                    </div>
                                </div>

                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <i className="fa fa-phone" style={{
                                        color: "var(--primary-color)",
                                        fontSize: "18px",
                                        marginRight: "10px"
                                    }}></i>
                                    <div>
                                        <div style={{ fontSize: "0.9rem", color: "var(--primary-color2)", fontWeight: "500" }}>Phone</div>
                                        <a href="tel:+84356557520" style={{
                                            color: "var(--primary-color)",
                                            textDecoration: "none",
                                            fontWeight: "600"
                                        }}>
                                            +84 356 557 520
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <Link href="/contact" className="btn btn2 button-style" style={{
                                display: "inline-flex",
                                alignItems: "center",
                                textDecoration: "none",
                                boxShadow: "0 12px 35px rgba(45, 81, 117, 0.3)"
                            }}>
                                <i className="fa fa-heart" style={{ marginRight: "10px" }}></i>
                                Start Your Volunteer Journey
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .volunteer-opportunity-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.12) !important;
        }
      `}</style>
        </section>
    );
};

export default VolunteerOpportunities;
