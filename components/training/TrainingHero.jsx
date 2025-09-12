'use client'
import React from "react";
import Image from "next/image";

export default function TrainingHero() {
    return (
        <section className="workplace-wellness-hero">
            {/* Animated Background Elements */}
            <div className="hero-bg-elements">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
                <div className="floating-shape shape-4"></div>
            </div>

            <div className="container">
                <div className="row align-items-center min-vh-100">
                    <div className="col-lg-6 col-md-12">
                        <div className="hero-content">
                            {/* Company Badge */}
                            <div className="company-badge">
                                <div className="badge-icon">
                                    <i className="fa fa-building"></i>
                                </div>
                                <span className="badge-text">CapacityVietnam</span>
                            </div>

                            {/* Main Headline */}
                            <h1 className="hero-title">
                                Your Workplace
                                <span className="title-highlight">Wellness Partner</span>
                            </h1>

                            {/* Value Propositions */}
                            <div className="value-props">
                                <div className="value-item">
                                    <div className="value-icon">
                                        <i className="fa fa-users"></i>
                                    </div>
                                    <div className="value-text">
                                        <h3>Better employees</h3>
                                        <p>happier, more engaged, more productive</p>
                                    </div>
                                </div>
                                <div className="value-item">
                                    <div className="value-icon">
                                        <i className="fa fa-trophy"></i>
                                    </div>
                                    <div className="value-text">
                                        <h3>Better managers/leaders</h3>
                                        <p>visionary, more motivating, more inspiring</p>
                                    </div>
                                </div>
                            </div>

                            {/* Key Stats */}
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <div className="stat-number">35+</div>
                                    <div className="stat-label">Years Combined Experience</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">85%+</div>
                                    <div className="stat-label">Increased Confidence</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">100%</div>
                                    <div className="stat-label">Bilingual Support</div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="hero-cta">
                                <a href="#workplace-solutions" className="btn-primary">
                                    <i className="fa fa-rocket"></i>
                                    Explore Solutions
                                </a>
                                <a href="/contact" className="btn-secondary">
                                    <i className="fa fa-calendar"></i>
                                    Schedule Consultation
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="hero-visual">
                            {/* Main Visual Container */}
                            <div className="visual-container">
                                {/* Central Image */}
                                <div className="main-image-wrapper">
                                    <Image
                                        alt="Workplace Wellness Training"
                                        src="/images/training/hero-training.jpg"
                                        width={500}
                                        height={400}
                                        className="main-hero-image"
                                    />
                                    <div className="image-overlay-gradient"></div>
                                </div>

                                {/* Floating Cards */}
                                <div className="floating-card card-1">
                                    <div className="card-icon">
                                        <i className="fa fa-graduation-cap"></i>
                                    </div>
                                    <div className="card-content">
                                        <h4>Manager Training</h4>
                                        <p>4 modules in 1 day</p>
                                    </div>
                                </div>

                                <div className="floating-card card-2">
                                    <div className="card-icon">
                                        <i className="fa fa-heart"></i>
                                    </div>
                                    <div className="card-content">
                                        <h4>Employee Wellness</h4>
                                        <p>6 modules over 2 days</p>
                                    </div>
                                </div>

                                <div className="floating-card card-3">
                                    <div className="card-icon">
                                        <i className="fa fa-users"></i>
                                    </div>
                                    <div className="card-content">
                                        <h4>Group Support</h4>
                                        <p>Peer support groups</p>
                                    </div>
                                </div>

                                {/* Success Badge */}
                                <div className="success-badge">
                                    <div className="badge-content">
                                        <div className="success-rate">85%+</div>
                                        <div className="success-text">Report Increased Confidence</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}
