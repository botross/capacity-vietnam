'use client'
import React from "react";
import Image from "next/image";

export default function CounsellingHero() {
    return (
        <section style={{
            paddingTop: "120px",
            paddingBottom: "100px",
            background: "linear-gradient(135deg, #F0FBFF 0%, #ffffff 100%)",
            position: "relative",
            overflow: "hidden",
            marginBottom: "50px"
        }}>
            {/* Background decoration */}
            <div style={{
                position: "absolute",
                top: "-20%",
                right: "-10%",
                width: "30%",
                height: "140%",
                background: "radial-gradient(circle, rgba(45, 81, 117, 0.05) 0%, transparent 70%)",
                borderRadius: "50%",
                zIndex: 1
            }}></div>

            <div style={{
                position: "absolute",
                bottom: "-30%",
                left: "-15%",
                width: "40%",
                height: "160%",
                background: "radial-gradient(circle, rgba(104, 176, 170, 0.03) 0%, transparent 70%)",
                borderRadius: "50%",
                zIndex: 1
            }}></div>

            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div style={{ paddingRight: "40px" }}>
                            {/* Badge */}
                            <div style={{
                                display: "inline-flex",
                                alignItems: "center",
                                backgroundColor: "rgba(45, 81, 117, 0.1)",
                                padding: "8px 20px",
                                borderRadius: "25px",
                                marginBottom: "24px"
                            }}>
                                <i className="fa fa-heart" style={{
                                    color: "var(--primary-color)",
                                    fontSize: "16px",
                                    marginRight: "8px"
                                }}></i>
                                <span style={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    color: "var(--primary-color)",
                                    letterSpacing: "1px"
                                }}>PROFESSIONAL COUNSELLING</span>
                            </div>

                            {/* Main Title */}
                            <h1 style={{
                                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                                fontWeight: "700",
                                color: "var(--primary-color)",
                                lineHeight: "1.2",
                                marginBottom: "24px",
                                fontFamily: "'Jost', sans-serif"
                            }}>
                                Transform Your Life Through
                                <span style={{
                                    display: "block",
                                    background: "linear-gradient(135deg, var(--primary-color2) 0%, var(--primary-color) 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text"
                                }}>
                                    Expert Counselling
                                </span>
                            </h1>

                            {/* Description */}
                            <p style={{
                                fontSize: "1.25rem",
                                lineHeight: "1.6",
                                color: "var(--primary-color2)",
                                marginBottom: "40px",
                                maxWidth: "500px"
                            }}>
                                Professional mental health support tailored to your unique needs. Our licensed therapists provide evidence-based counselling to help you overcome challenges and achieve lasting well-being.
                            </p>

                            {/* Key Features */}
                            <div style={{ marginBottom: "40px" }}>
                                <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                                    <div style={{
                                        backgroundColor: "var(--primary-color2)",
                                        color: "white",
                                        width: "24px",
                                        height: "24px",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "12px",
                                        marginRight: "15px"
                                    }}>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <span style={{ fontSize: "1rem", color: "var(--primary-color)", fontWeight: "500" }}>
                                        Licensed & Experienced Therapists
                                    </span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                                    <div style={{
                                        backgroundColor: "var(--primary-color2)",
                                        color: "white",
                                        width: "24px",
                                        height: "24px",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "12px",
                                        marginRight: "15px"
                                    }}>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <span style={{ fontSize: "1rem", color: "var(--primary-color)", fontWeight: "500" }}>
                                        Evidence-Based Therapeutic Approaches
                                    </span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div style={{
                                        backgroundColor: "var(--primary-color2)",
                                        color: "white",
                                        width: "24px",
                                        height: "24px",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "12px",
                                        marginRight: "15px"
                                    }}>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <span style={{ fontSize: "1rem", color: "var(--primary-color)", fontWeight: "500" }}>
                                        Confidential & Safe Environment
                                    </span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                                <a href="/contact" style={{
                                    backgroundColor: "transparent",
                                    color: "var(--primary-color)",
                                    padding: "8px 32px",
                                    borderRadius: "25px",
                                    textDecoration: "none",
                                    fontWeight: "600",
                                    fontSize: "1rem",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    border: "2px solid var(--primary-color)",
                                    transition: "all 0.3s ease"
                                }}>
                                    <i className="fa fa-phone" style={{ marginRight: "8px", fontSize: "14px" }}></i>
                                    Book Consultation
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div style={{ textAlign: "center", position: "relative" }}>
                            {/* Main Image */}
                            <div style={{
                                position: "relative",
                                borderRadius: "20px",
                                overflow: "hidden",
                                boxShadow: "0 20px 60px rgba(45, 81, 117, 0.15)",
                                background: "white",
                                padding: "8px"
                            }}>
                                <Image
                                    alt="Professional Counselling Session"
                                    src="/images/counselling/hero.jpg"
                                    width={500}
                                    height={400}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        borderRadius: "15px",
                                        objectFit: "cover"
                                    }}
                                />

                                {/* Floating Stats */}
                                <div style={{
                                    position: "absolute",
                                    top: "20px",
                                    right: "20px",
                                    backgroundColor: "white",
                                    padding: "15px 20px",
                                    borderRadius: "15px",
                                    boxShadow: "0 10px 30px rgba(45, 81, 117, 0.2)",
                                    textAlign: "center"
                                }}>
                                    <div style={{
                                        fontSize: "24px",
                                        fontWeight: "700",
                                        color: "var(--primary-color)",
                                        lineHeight: "1"
                                    }}>500+</div>
                                    <div style={{
                                        fontSize: "12px",
                                        color: "var(--primary-color2)",
                                        fontWeight: "600"
                                    }}>Clients Helped</div>
                                </div>

                                <div style={{
                                    position: "absolute",
                                    bottom: "20px",
                                    left: "20px",
                                    backgroundColor: "var(--primary-color2)",
                                    color: "white",
                                    padding: "15px 20px",
                                    borderRadius: "15px",
                                    boxShadow: "0 10px 30px rgba(104, 176, 170, 0.3)",
                                    textAlign: "center"
                                }}>
                                    <div style={{
                                        fontSize: "24px",
                                        fontWeight: "700",
                                        lineHeight: "1"
                                    }}>98%</div>
                                    <div style={{
                                        fontSize: "12px",
                                        fontWeight: "600",
                                        opacity: "0.9"
                                    }}>Success Rate</div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div style={{
                                position: "absolute",
                                top: "-20px",
                                left: "-20px",
                                width: "60px",
                                height: "60px",
                                backgroundColor: "var(--primary-color3)",
                                borderRadius: "50%",
                                opacity: "0.3",
                                zIndex: -1
                            }}></div>
                            <div style={{
                                position: "absolute",
                                bottom: "-30px",
                                right: "-30px",
                                width: "80px",
                                height: "80px",
                                backgroundColor: "var(--primary-color2)",
                                borderRadius: "50%",
                                opacity: "0.2",
                                zIndex: -1
                            }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        a:hover {
          transform: translateY(-2px);
        }
        a[href="#services"]:hover {
          box-shadow: 0 12px 35px rgba(45, 81, 117, 0.4) !important;
        }
        a[href="/contact"]:hover {
          background-color: var(--primary-color) !important;
          color: white !important;
        }
      `}</style>
        </section>
    );
}
