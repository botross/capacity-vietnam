import Pagetitle from "@/components/common/Pagetitle";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Topbar from "@/components/headers/Topbar";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Counter from "@/components/common/Counter";
import QRDonation from "@/components/common/QRDonation";

export const metadata = {
  title: "Donate - Capacity Vietnam",
  description: "Support our mission to provide accessible mental health care across Vietnam. Your donation helps us reach more people in need.",
};

export default function DonatePage() {
  return (
    <>
      <div className="boxed blog">
        <Topbar />
        <Header2 />
        {/* <Pagetitle
          pageName="Support Our Mission"
          pageDescription="Your generous donation helps us provide essential mental health services to those who need them most. Together, we can build a healthier, more supportive Vietnam."
          overlayImage="/images/home/woman-and-tree.jpg"
          backgroundPosition="center 35%"
        />
         */}


        {/* QR Code Donation Section */}
        <QRDonation />

        {/* Why Your Support Matters Section */}
        <section style={{ 
          paddingTop: "100px", 
          paddingBottom: "100px", 
          background: "#F0FBFF",
          position: "relative"
        }}>
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
                  }}>WHY YOUR SUPPORT MATTERS</div>
                  <h2 style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    color: "#1D4976",
                    marginBottom: "20px",
                    lineHeight: "1.2"
                  }}>Every Donation Creates Real Impact</h2>
                  <p style={{
                    fontSize: "1.125rem",
                    color: "#666",
                    maxWidth: "600px",
                    margin: "0 auto",
                    lineHeight: "1.6"
                  }}>
                    Your generous contribution directly supports our mental health programs and helps us reach more people in need across Vietnam
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              {[
                {
                  icon: "fa-heart",
                  title: "Crisis Intervention",
                  desc: "Immediate support for individuals experiencing mental health crises, providing emergency counseling and stabilization services when they need it most.",
                  stat: "24/7",
                  statLabel: "Support Available",
                  color: "#1D4976"
                },
                {
                  icon: "fa-users",
                  title: "Community Programs",
                  desc: "Educational workshops, support groups, and awareness campaigns that reduce stigma and promote mental health literacy in local communities.",
                  stat: "25+",
                  statLabel: "Communities Served",
                  color: "#2E5984"
                },
                {
                  icon: "fa-home",
                  title: "Individual Support",
                  desc: "Comprehensive individual therapy and counseling services that strengthen relationships and build supportive home environments for recovery.",
                  stat: "500+",
                  statLabel: "Individuals Helped",
                  color: "#4A6FA5"
                },
                {
                  icon: "fa-graduation-cap",
                  title: "Professional Training",
                  desc: "Training programs for healthcare workers, teachers, and community leaders to identify and respond to mental health challenges effectively.",
                  stat: "200+",
                  statLabel: "Professionals Trained",
                  color: "#1D4976"
                },
              ].map((item, index) => (
                <div key={index} className="col-xl-4 col-lg-6 col-md-6" style={{ marginBottom: "40px", display: "flex" }}>
                  <div style={{
                    backgroundColor: "white",
                    padding: "30px 30px",
                    borderRadius: "25px",
                    height: "100%",
                    border: "1px solid " + "#1D4976",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    height: "250px"
                  }}>
                    {/* Background decoration */}
                    <div style={{
                      position: "absolute",
                      top: "-20px",
                      right: "-20px",
                      width: "80px",
                      height: "80px",
                      background: `linear-gradient(135deg, ${item.color}, ${item.color}88)`,
                      borderRadius: "50%",
                      opacity: "0.1"
                    }}></div>

                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px"
                    }}>
                      <div style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: item.color,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "20px",
                        boxShadow: `0 8px 25px ${item.color}33`
                      }}>
                        <i className={`fa ${item.icon}`} style={{
                          fontSize: "24px",
                          color: "white"
                        }}></i>
                      </div>
                      <div>
                        <h4 style={{
                          fontSize: "1.5rem",
                          fontWeight: "700",
                          color: item.color,
                          margin: "0 0 5px 0",
                          lineHeight: "1.2"
                        }}>{item.stat}</h4>
                        <p style={{
                          fontSize: "0.85rem",
                          color: "#666",
                          margin: "0",
                          fontWeight: "500"
                        }}>{item.statLabel}</p>
                      </div>
                    </div>

                    <h4 style={{
                      fontSize: "1.25rem",
                      fontWeight: "600",
                      color: "#1D4976",
                      marginBottom: "15px",
                      lineHeight: "1.3"
                    }}>{item.title}</h4>
                    
                    <p style={{
                      fontSize: "0.95rem",
                      color: "#666",
                      lineHeight: "1.6",
                      margin: "0",
                      flex: "1"
                    }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stories Section */}
        <section style={{ 
          paddingTop: "100px", 
          paddingBottom: "100px", 
          backgroundColor: "white",
          position: "relative"
        }}>
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
                  }}>IMPACT STORIES</div>
                  <h2 style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    color: "#1D4976",
                    marginBottom: "20px",
                    lineHeight: "1.2"
                  }}>See How Your Donation Helps</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {[
                {
                  quote: "Thanks to the support from donors, I was able to access counseling when I needed it most. The sessions helped me overcome my anxiety and return to work with confidence.",
                  name: "Individual",
                  location: "Hanoi"
                },
                {
                  quote: "The couple counseling program saved our marriage and helped us through a difficult time. We're grateful for the donors who made this possible.",
                  name: "Couple Counseling",
                  location: "Hanoi"
                },
                {
                  quote: "The community program program funded by donations has created a more supportive community where participants feel comfortable learning about and discussing mental health.",
                  name: "Program Participant",
                  location: "Ho Chi Minh City"
                }
              ].map((story, index) => (
                <div key={index} className="col-lg-4 col-md-6" style={{ marginBottom: "30px" }}>
                  <div style={{
                    backgroundColor: "white",
                    padding: "40px 30px",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    border: "1px solid #e9ecef",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative"
                  }}>
                    <div style={{
                      fontSize: "60px",
                      color: "#1D4976",
                      opacity: "0.1",
                      position: "absolute",
                      top: "20px",
                      left: "30px",
                      fontFamily: "serif"
                    }}>"</div>
                    <div style={{
                      fontSize: "1.1rem",
                      lineHeight: "1.7",
                      color: "#555",
                      marginBottom: "30px",
                      fontStyle: "italic",
                      flex: "1",
                      paddingTop: "20px"
                    }}>
                      {story.quote}
                    </div>
                    <div style={{
                      borderTop: "2px solid #1D4976",
                      paddingTop: "20px"
                    }}>
                      <h5 style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        color: "#1D4976",
                        margin: "0 0 5px 0"
                      }}>{story.name}</h5>
                      <p style={{
                        fontSize: "0.9rem",
                        color: "#888",
                        margin: "0"
                      }}>{story.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Ways to Give Section */}
        <section style={{ 
          paddingTop: "100px", 
          paddingBottom: "100px", 
          backgroundColor: "#F0FBFF",
          position: "relative"
        }}>
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
                  }}>OTHER WAYS TO GIVE</div>
                  <h2 style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    color: "#1D4976",
                    marginBottom: "20px",
                    lineHeight: "1.2"
                  }}>Beyond Financial Donations</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {[
                { icon: "fa-gift", title: "In-Kind Donations", desc: "Office supplies, furniture, technology, or professional services that support our operations.", color: "linear-gradient(135deg, #1D4976, #2E5984)" },
                { icon: "fa-building", title: "Corporate Sponsorship", desc: "Partner with us through corporate social responsibility programs and employee giving campaigns.", color: "linear-gradient(135deg, #2E5984, #4A6FA5)" },
                { icon: "fa-calendar", title: "Fundraising Events", desc: "Organize or participate in fundraising events in your community to support our mission.", color: "linear-gradient(135deg, #4A6FA5, #1D4976)" },
                { icon: "fa-share-alt", title: "Spread Awareness", desc: "Share our mission on social media and help us reach more people who need our services.", color: "linear-gradient(135deg, #1D4976, #4A6FA5)" }
              ].map((item, index) => (
                <div key={index} className="col-lg-3 col-md-6" style={{ marginBottom: "30px" }}>
                  <div style={{
                    backgroundColor: "white",
                    padding: "40px 30px",
                    borderRadius: "16px",
                    textAlign: "center",
                    height: "100%",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    border: "1px solid #e9ecef",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column"
                  }}>
                    <div style={{
                      width: "80px",
                      height: "80px",
                      background: item.color,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 25px auto",
                      boxShadow: "0 8px 25px rgba(29, 73, 118, 0.3)"
                    }}>
                      <i className={`fa ${item.icon}`} style={{
                        fontSize: "32px",
                        color: "white"
                      }}></i>
                    </div>
                    <h4 style={{
                      fontSize: "1.25rem",
                      fontWeight: "600",
                      color: "#1D4976",
                      marginBottom: "15px",
                      lineHeight: "1.3"
                    }}>{item.title}</h4>
                    <p style={{
                      fontSize: "0.95rem",
                      color: "#666",
                      lineHeight: "1.6",
                      margin: "0",
                      flex: "1"
                    }}>{item.desc}</p>
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
                  background: 'linear-gradient(135deg, #1D4976 0%, #2E5984 50%, #4A6FA5 100%)',
                  padding: '60px 40px',
                  borderRadius: '20px',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(29, 73, 118, 0.3)'
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
                    }}>Your Support Changes Lives</h3>
                    <p style={{
                      fontSize: '1.125rem',
                      opacity: '0.9',
                      marginBottom: '32px',
                      maxWidth: '500px',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      lineHeight: '1.6'
                    }}>
                      Join us in building a Vietnam where mental health care is accessible to everyone. 
                      Your donation today creates hope for tomorrow.
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
                      Donate Now
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
