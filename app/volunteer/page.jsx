'use client'

import Pagetitle from "@/components/common/Pagetitle";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Topbar from "@/components/headers/Topbar";
import VolunteerOpportunities from "@/components/volunteer/VolunteerOpportunities";
import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function VolunteerPage() {
  return (
    <>
      <div className="boxed blog">
        <Topbar />
        <Header2 />
   
        
        {/* Volunteer Impact Hero Section with Image */}
        <section style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "white" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div style={{ paddingRight: "40px" }}>
                  <div className="section-subtitle" style={{ marginBottom: "16px" }}>
                    VOLUNTEER IMPACT
                  </div>
                  <h2 className="section-title" style={{ marginBottom: "24px" }}>
                    Making a Real Difference Together
                  </h2>
                  <p className="section-desc" style={{ marginBottom: "30px", fontSize: "1.1rem" }}>
                    Our volunteers are the heart of our mission. From English conversation clubs to professional mental health training, 
                    every contribution helps build stronger, more resilient communities across Vietnam.
                  </p>
                  <div style={{ display: "flex", gap: "30px", marginBottom: "30px" }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ 
                        fontSize: "2.5rem", 
                        fontWeight: "700", 
                        color: "var(--primary-color)",
                        marginBottom: "8px"
                      }}>12+</div>
                      <div style={{ color: "var(--primary-color2)", fontSize: "0.9rem", fontWeight: "500" }}>
                        Active Volunteers
                      </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ 
                        fontSize: "2.5rem", 
                        fontWeight: "700", 
                        color: "var(--primary-color)",
                        marginBottom: "8px"
                      }}>25</div>
                      <div style={{ color: "var(--primary-color2)", fontSize: "0.9rem", fontWeight: "500" }}>
                        Communities Served
                      </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ 
                        fontSize: "2.5rem", 
                        fontWeight: "700", 
                        color: "var(--primary-color)",
                        marginBottom: "8px"
                      }}>5000+</div>
                      <div style={{ color: "var(--primary-color2)", fontSize: "0.9rem", fontWeight: "500" }}>
                        Lives Impacted
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div style={{ position: "relative" }}>
                  <Image
                    src="/images/services/smiley-colleagues-having-meeting-office.jpg"
                    alt="Volunteers working together in a meeting"
                    width={600}
                    height={400}
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                      borderRadius: "16px",
                      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)"
                    }}
                  />
                  <div style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    padding: "16px 20px",
                    borderRadius: "12px",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)"
                  }}>
                    <div style={{ fontSize: "0.85rem", color: "var(--primary-color2)", fontWeight: "500" }}>
                      Latest Achievement
                    </div>
                    <div style={{ fontSize: "1rem", color: "var(--primary-color)", fontWeight: "600" }}>
                      Rural Mental Health Program Launch
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Volunteer Opportunities Section */}
        <VolunteerOpportunities />
        
        {/* Hero Section */}
        {/* <section className="flat-about" style={{ marginBottom: "100px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={121}
                  data-mobile={60}
                  data-smobile={60}
                />
              </div>
              <div className="col-lg-6">
                <div className="about-post center bd-radius-50-image">
                  <Image
                    className="main-post-about"
                    alt="Volunteer helping others"
                    src="/images/team/staff1.jpg"
                    width={500}
                    height={500}
                    style={{
                      width: '500px',
                      height: '500px',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      borderRadius: '50%',
                      aspectRatio: '1/1',
                    }}
                  />
                  <div className="about-count-box themesflat-counter">
                    <div className="box">
                      <div className="inner-about-count-box">
                        <span className="number-count number">100+</span>
                        <div className="caption-number-count">
                          Active Volunteers
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="about-content-title wow fadeInUp">
                    <div className="section-subtitle">MAKE A DIFFERENCE</div>
                    <div className="section-title">
                      Your Time Can Change Lives
                    </div>
                    <div className="section-desc">
                      At Capacity Vietnam, we believe that mental health support should be accessible to everyone. 
                      Our volunteers are the heart of our mission, providing compassionate care and support to those 
                      who need it most. Whether you're a licensed professional or someone passionate about mental health advocacy, 
                      there's a place for you in our community.
                    </div>
                  </div>
                  <div id="volunteer-benefits" className="about-desc-box">
                    <div className="about-desc">
                      <div
                        style={{ marginBottom: '60px' }}
                        className="about-box-nd1 wow fadeInLeft mb-2"
                      >
                        <Image
                          src="/images/Brain Power Icon with Plus Sign.png"
                          width={100}
                          height={100}
                          style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'cover',
                            objectPosition: 'center',
                          }}
                          alt="Professional Development"
                        />
                        <div className="inner-box">
                          <h3
                            style={{
                              color: '#1D4976',
                              lineHeight: '25px',
                            }}
                            className="section-heading-jost-size20 item-1"
                          >
                            Professional Development
                          </h3>
                          <p
                            style={{
                              color: '#1D4976',
                              lineHeight: '25px',
                            }}
                            className="section-desc"
                          >
                            Gain valuable experience and training
                          </p>
                        </div>
                      </div>
                      <div className="about-box-nd1 wow fadeInLeft">
                        <Image
                          src="/images/Brain Power Icon with Plus Sign 2.png"
                          width={100}
                          height={100}
                          style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'cover',
                            objectPosition: 'center',
                          }}
                          alt="Community Impact"
                        />
                        <div className="inner-box">
                          <h3
                            style={{
                              color: '#1D4976',
                              lineHeight: '25px',
                            }}
                            className="section-heading-jost-size20 item-2"
                          >
                            Community Impact
                          </h3>
                          <p
                            style={{
                              color: '#1D4976',
                              lineHeight: '25px',
                            }}
                            className="section-desc"
                          >
                            Be part of meaningful change
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Volunteer Opportunities Section */}
        {/* <section style={{ paddingTop: "100px", paddingBottom: "100px", backgroundColor: "#f8f9fa" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div style={{ textAlign: "center", marginBottom: "60px" }}>
                  <div style={{
                    color: "#1D4976",
                    fontSize: "14px",
                    fontWeight: "600",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginBottom: "16px"
                  }}>OPPORTUNITIES</div>
                  <h2 style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    color: "#1D4976",
                    marginBottom: "20px",
                    lineHeight: "1.2"
                  }}>Ways to Get Involved</h2>
                  <p style={{
                    fontSize: "1.125rem",
                    color: "#666",
                    maxWidth: "600px",
                    margin: "0 auto",
                    lineHeight: "1.6"
                  }}>
                    Choose from various volunteer opportunities that match your skills and interests
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {[
                {
                  image: "/images/services/portrait-woman-gardening.jpg",
                  title: "Peer Support Volunteer",
                  desc: "Provide emotional support and companionship to individuals on their mental health journey. Share your lived experience to help others feel less alone."
                },
                {
                  image: "/images/services/smiley-colleagues-having-meeting-office.jpg",
                  title: "Administrative Support",
                  desc: "Help with office tasks, event planning, data entry, and other behind-the-scenes work that keeps our organization running smoothly."
                },
                {
                  image: "/images/services/medium-shot-woman-holding-plant-pot.jpg",
                  title: "Community Outreach",
                  desc: "Help spread awareness about mental health resources in your community. Participate in events, workshops, and educational programs."
                },
                {
                  image: "/images/services/close-up-planting-flowers-pot.jpg",
                  title: "Crisis Support Volunteer",
                  desc: "Provide immediate support to individuals in crisis situations. Requires specialized training and commitment to our emergency response protocols."
                },
                {
                  image: "/images/services/box-flowers-green-garden.jpg",
                  title: "Licensed Counselor",
                  desc: "Offer your professional expertise to provide therapy and counseling services. Perfect for licensed mental health professionals wanting to give back."
                },
                {
                  image: "/images/services/medium-shot-woman-plant-pot.jpg",
                  title: "Training & Workshop Leader",
                  desc: "Lead educational workshops and training sessions for community members, families, and corporate clients on mental health awareness and wellness."
                }
              ].map((opportunity, index) => (
                <div key={index} className="col-lg-4 col-md-6" style={{ marginBottom: "30px" }}>
                  <div style={{
                    backgroundColor: "white",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    border: "1px solid #e9ecef",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                  }}>
                    <div style={{ position: "relative", overflow: "hidden" }}>
                      <Image
                        alt={opportunity.title}
                        src={opportunity.image}
                        width={370}
                        height={250}
                        style={{
                          width: "100%",
                          height: "250px",
                          objectFit: "cover",
                          transition: "transform 0.3s ease"
                        }}
                      />
                      <div style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "linear-gradient(to bottom, transparent 0%, rgba(29, 73, 118, 0.8) 100%)"
                      }}></div>
                    </div>
                    <div style={{
                      padding: "30px 25px",
                      flex: "1",
                      display: "flex",
                      flexDirection: "column"
                    }}>
                      <h4 style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        color: "#1D4976",
                        marginBottom: "15px",
                        lineHeight: "1.3"
                      }}>{opportunity.title}</h4>
                      <p style={{
                        fontSize: "0.95rem",
                        color: "#666",
                        lineHeight: "1.6",
                        marginBottom: "25px",
                        flex: "1"
                      }}>{opportunity.desc}</p>
                      <Link href="/contact" style={{
                        display: "inline-block",
                        backgroundColor: "#1D4976",
                        color: "white",
                        padding: "12px 24px",
                        borderRadius: "25px",
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "0.9rem",
                        textAlign: "center",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 15px rgba(29, 73, 118, 0.3)"
                      }}>
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Volunteer Training Section with Images */}
        <section style={{ paddingTop: "100px", paddingBottom: "80px", backgroundColor: "#fff" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div style={{ textAlign: "center", marginBottom: "60px" }}>
                  <div className="section-subtitle" style={{ marginBottom: "16px" }}>
                    VOLUNTEER TRAINING
                  </div>
                  <h2 className="section-title" style={{ marginBottom: "20px" }}>
                    Professional Development & Support
                  </h2>
                  <p className="section-desc" style={{ maxWidth: "700px", margin: "0 auto" }}>
                    We provide comprehensive training and ongoing support to ensure our volunteers are well-prepared and confident in their roles.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginBottom: "60px" }}>
              <div className="col-lg-3 col-md-6" style={{ marginBottom: "30px" }}>
                <div style={{ textAlign: "center" }}>
                  <Image
                    src="/images/services/portrait-woman-gardening.jpg"
                    alt="Training session"
                    width={250}
                    height={200}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      marginBottom: "20px",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                    }}
                  />
                  <h4 className="section-heading-jost-size20" style={{ color: "var(--primary-color)", marginBottom: "12px" }}>
                    Initial Training
                  </h4>
                  <p className="section-desc" style={{ fontSize: "0.9rem" }}>
                    Comprehensive orientation and skill-building workshops
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6" style={{ marginBottom: "30px" }}>
                <div style={{ textAlign: "center" }}>
                  <Image
                    src="/images/services/medium-shot-woman-holding-plant-pot.jpg"
                    alt="Ongoing support"
                    width={250}
                    height={200}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      marginBottom: "20px",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                    }}
                  />
                  <h4 className="section-heading-jost-size20" style={{ color: "var(--primary-color)", marginBottom: "12px" }}>
                    Ongoing Support
                  </h4>
                  <p className="section-desc" style={{ fontSize: "0.9rem" }}>
                    Regular check-ins and additional training opportunities
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6" style={{ marginBottom: "30px" }}>
                <div style={{ textAlign: "center" }}>
                  <Image
                    src="/images/services/close-up-planting-flowers-pot.jpg"
                    alt="Mentorship program"
                    width={250}
                    height={200}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      marginBottom: "20px",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                    }}
                  />
                  <h4 className="section-heading-jost-size20" style={{ color: "var(--primary-color)", marginBottom: "12px" }}>
                    Mentorship
                  </h4>
                  <p className="section-desc" style={{ fontSize: "0.9rem" }}>
                    Paired with experienced volunteers for guidance
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6" style={{ marginBottom: "30px" }}>
                <div style={{ textAlign: "center" }}>
                  <Image
                    src="/images/services/box-flowers-green-garden.jpg"
                    alt="Community connection"
                    width={250}
                    height={200}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      marginBottom: "20px",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                    }}
                  />
                  <h4 className="section-heading-jost-size20" style={{ color: "var(--primary-color)", marginBottom: "12px" }}>
                    Community
                  </h4>
                  <p className="section-desc" style={{ fontSize: "0.9rem" }}>
                    Join a supportive network of like-minded volunteers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section style={{ paddingTop: "100px", paddingBottom: "100px", backgroundColor: "#F0FBFF" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div style={{ textAlign: "center", marginBottom: "60px" }}>
                  <div className="section-subtitle" style={{ marginBottom: "16px" }}>
                    REQUIREMENTS
                  </div>
                  <h2 className="section-title" style={{ marginBottom: "20px" }}>
                    What We Look For
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              {[
                { icon: "fa-heart", title: "Compassion", desc: "A genuine desire to help others and make a positive impact in their lives." },
                { icon: "fa-clock-o", title: "Commitment", desc: "Ability to commit to regular volunteer hours and attend required training sessions." },
                { icon: "fa-users", title: "Communication", desc: "Strong interpersonal skills and ability to communicate effectively with diverse groups." },
                { icon: "fa-shield", title: "Confidentiality", desc: "Understanding of privacy and confidentiality requirements in mental health settings." }
              ].map((requirement, index) => (
                <div key={index} className="col-lg-3 col-md-6" style={{ marginBottom: "30px" }}>
                  <div style={{
                    backgroundColor: "#fff",
                    padding: "40px 30px",
                    borderRadius: "16px",
                    textAlign: "center",
                    height: "100%",
                    border: "2px solid rgba(45, 81, 117, 0.1)",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column"
                  }}>
                    <div style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 25px auto",
                      boxShadow: "0 8px 25px rgba(45, 81, 117, 0.15)",
                      border: "3px solid var(--primary-color)"
                    }}>
                      <i className={`fa ${requirement.icon}`} style={{
                        fontSize: "32px",
                        color: "var(--primary-color)"
                      }}></i>
                    </div>
                    <h4 className="section-heading-jost-size20" style={{
                      color: "var(--primary-color)",
                      marginBottom: "15px"
                    }}>{requirement.title}</h4>
                    <p className="section-desc" style={{
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      margin: "0",
                      flex: "1"
                    }}>{requirement.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div style={{
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #2d5175 0%, #1a3a52 50%, #2d5175 100%)',
                  padding: '60px 40px',
                  borderRadius: '20px',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(45, 81, 117, 0.3)'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat',
                    zIndex: 1
                  }}></div>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <h3 style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      marginBottom: '16px',
                      lineHeight: '1.3',
                      margin: '0 0 16px 0'
                    }}>Ready to Make a Difference?</h3>
                    <p style={{
                      fontSize: '1.125rem',
                      opacity: '0.9',
                      marginBottom: '32px',
                      maxWidth: '500px',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      lineHeight: '1.6'
                    }}>
                      Take the first step towards becoming a volunteer with Capacity Vietnam. 
                      Together, we can transform mental health care in our communities.
                    </p>
                    <Link href="/contact" style={{
                      position: 'relative',
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      color: 'white',
                      padding: '16px 32px',
                      borderRadius: '50px',
                      fontWeight: '600',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      overflow: 'hidden',
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}>
                      Start Your Application
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer1 />
      </div>
    </>
  );
}
