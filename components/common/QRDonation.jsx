import React from 'react';
import Image from 'next/image';

const QRDonation = () => {
  return (
    <section style={{
      paddingTop: "100px",
      paddingBottom: "100px",
      background: "#fff",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "5%",
        width: "100px",
        height: "100px",
        background: "linear-gradient(45deg, #1D4976, #2E5984)",
        borderRadius: "50%",
        opacity: "0.1",
        transform: "translateY(-10px)"
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "15%",
        right: "8%",
        width: "80px",
        height: "80px",
        background: "linear-gradient(45deg, #4A6FA5, #1D4976)",
        borderRadius: "50%",
        opacity: "0.1",
        transform: "translateY(5px)"
      }}></div>

      <div
        style={{
          alignSelf: "center",
          margin: "0 auto",
        }}
        className="container col-lg-6">
        <div className="row justify-content-center ">
          <div className="flex-1">
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <div style={{
                color: "#1D4976",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "16px",
                position: "relative"
              }}>
                <span style={{
                  background: "linear-gradient(90deg, #1D4976, #4A6FA5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  EASY DONATION
                </span>
              </div>
              <h2 style={{
                fontSize: "3rem",
                fontWeight: "700",
                color: "#1D4976",
                marginBottom: "20px",
                lineHeight: "1.2"
              }}>Scan & Support Our Mission</h2>
              <p style={{
                fontSize: "1.25rem",
                color: "#666",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.6"
              }}>
                Make a secure donation in seconds by scanning the QR code below with your mobile banking app
              </p>
            </div>

            {/* Main QR Code Card */}
            <div style={{
              background: "white",
              borderRadius: "24px",
              padding: "60px 40px",
              boxShadow: "0 25px 50px rgba(29, 73, 118, 0.15)",
              border: "1px solid rgba(29, 73, 118, 0.1)",
              position: "relative",
              overflow: "hidden"
            }}>
              {/* Card decorative elements */}
              <h3 style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#1D4976",
                marginBottom: "50px",
                textAlign: "center",
              }}>How to Donate</h3>

              <div style={{
                position: "absolute",
                top: "-50px",
                right: "-50px",
                width: "150px",
                height: "150px",
                background: "linear-gradient(135deg, #1D4976, #4A6FA5)",
                borderRadius: "50%",
                opacity: "0.05"
              }}></div>
              <div style={{
                position: "absolute",
                bottom: "-30px",
                left: "-30px",
                width: "100px",
                height: "100px",
                background: "linear-gradient(135deg, #2E5984, #1D4976)",
                borderRadius: "50%",
                opacity: "0.05"
              }}></div>

              <div 
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #1D4976, #2E5984)",
                borderRadius: "18px",
                padding: "30px",
                gap: "30px",
              }}
              className="row align-items-center justify-content-center py-5">
                {/* QR Code Section */}

                  <div
                    style={{
                      color: "white",
                  
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        marginBottom: "18px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <i className="fa fa-university" style={{ marginRight: "10px" }}></i>
                      Local Donations in Vietnam
                    </h4>
                    <div style={{ fontSize: "15px", lineHeight: "1.7", opacity: 0.95 }}>
                      <div style={{ marginBottom: "10px" }}>
                        <strong>Account Name:</strong> CONG TY TNHH CapacityVietnam
                      </div>
                      <div style={{ marginBottom: "10px" }}>
                        <strong>Bank:</strong> Vietcombank Tay Ho Tay
                      </div>
                      <div style={{ marginBottom: "10px" }}>
                        <strong>Account Number:</strong> 1022190665
                      </div>
                      <div>
                        <strong>Reference:</strong> Donation
                      </div>
                    </div>
                  </div>
                  <div
                      style={{
                        borderRadius: "14px",
                        width: "200px",
                        height: "200px",
                      }}
                    >
                      <div
                        style={{
                          width: "200px",
                          height: "200px",
                          background:
                            "linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)",
                          backgroundSize: "20px 20px",
                          borderRadius: "10px",
                          border: "2px solid #fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#000",
                          textAlign: "center",
                          lineHeight: "1.4",
                        }}
                      >
                        QR CODE
                        <br />
                        PLACEHOLDER
                        <br />
                        <span style={{ fontSize: "12px", opacity: "0.6" }}>
                          Replace with actual QR
                        </span>
                      </div>
                    </div>  


              </div>

              {/* Additional Donation Methods */}
              <div className="row" style={{ marginTop: "60px" }}>
                <div className="col-lg-6 col-md-6" style={{ marginBottom: "30px" }}>
                  <div style={{
                    background: "white",
                    padding: "30px",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    border: "2px solid #1D4976",
                    height: "100%",
                    textAlign: "center"
                  }}>
                    <div style={{
                      width: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, #1D4976, #2E5984)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px auto",
                      boxShadow: "0 8px 25px rgba(29, 73, 118, 0.3)"
                    }}>
                      <i className="fa fa-file-text" style={{
                        fontSize: "24px",
                        color: "white"
                      }}></i>
                    </div>
                    <h4 style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      color: "#1D4976",
                      marginBottom: "15px"
                    }}>Tax-Deductible</h4>
                    <p style={{
                      fontSize: "0.95rem",
                      color: "#666",
                      lineHeight: "1.6",
                      marginBottom: "20px"
                    }}>
                      For Australian donors or if you need a receipt for tax purposes.
                    </p>
                    <a
                      href="https://projects.acci.org.au/donations/p22-p107/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        background: "linear-gradient(135deg, #1D4976, #2E5984)",
                        color: "white",
                        padding: "12px 24px",
                        borderRadius: "25px",
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "0.9rem",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 15px rgba(29, 73, 118, 0.3)"
                      }}
                    >
                      Donate Now
                    </a>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6" style={{ marginBottom: "30px" }}>
                  <div style={{
                    background: "white",
                    padding: "30px",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    border: "2px solid #2E5984",
                    height: "100%",
                    textAlign: "center"
                  }}>
                    <div style={{
                      width: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, #2E5984, #4A6FA5)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px auto",
                      boxShadow: "0 8px 25px rgba(46, 89, 132, 0.3)"
                    }}>
                      <i className="fa fa-paypal" style={{
                        fontSize: "24px",
                        color: "white"
                      }}></i>
                    </div>
                    <h4 style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      color: "#2E5984",
                      marginBottom: "15px"
                    }}>PayPal</h4>
                    <p style={{
                      fontSize: "0.95rem",
                      color: "#666",
                      lineHeight: "1.6",
                      marginBottom: "20px"
                    }}>
                      Give internationally through PayPal - secure and convenient.
                    </p>
                    <a
                      href="https://paypal.me/capacityvietnam?country.x=VN"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        background: "linear-gradient(135deg, #2E5984, #4A6FA5)",
                        color: "white",
                        padding: "12px 24px",
                        borderRadius: "25px",
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "0.9rem",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 15px rgba(46, 89, 132, 0.3)"
                      }}
                    >
                      Donate via PayPal
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div style={{
              textAlign: "center",
              marginTop: "40px",
              padding: "20px",
              background: "rgba(29, 73, 118, 0.05)",
              borderRadius: "12px",
              border: "1px solid rgba(29, 73, 118, 0.1)"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px"
              }}>
                <i className="fa fa-shield" style={{
                  color: "#1D4976",
                  fontSize: "20px",
                  marginRight: "10px"
                }}></i>
                <span style={{
                  color: "#1D4976",
                  fontWeight: "600",
                  fontSize: "16px"
                }}>Secure & Safe</span>
              </div>
              <p style={{
                margin: "0",
                color: "#666",
                fontSize: "14px",
                lineHeight: "1.5"
              }}>
                All donations are processed through secure banking channels.
                Your transaction is protected and will appear on your bank statement.
              </p>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default QRDonation;
