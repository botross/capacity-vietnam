import React from "react";

export default function Contact() {
  return (
    <section className="flat-contact-page">
      <div className="container">
        <div className="row">
          <div className="col-md-5 wow fadeInUp">
            <div className="contact-left">
              <h3 className="section-subtitle mg-bottom-22" style={{ color: 'var(--primary-color)' }}>GET IN TOUCH</h3>
              <h2 className="section-title mg-bottom-15" style={{ color: 'var(--primary-color)' }}>
                Reach out for mental health support and guidance.
              </h2>
              <p className="section-desc mg-bottom-60" style={{ color: 'var(--primary-color)' }}>
                Contact Capacity Vietnam for professional mental health support and counseling services
                throughout Vietnam. We're here to help.
              </p>
              <div className="address-box mg-bottom30">
                <div className="contact-location icon-map" />
                <div className="info">
                  <h3 className="section-heading-jost-size20" style={{ color: 'var(--primary-color)' }}>Our Address</h3>
                  <p className="desc-box" style={{ color: 'var(--primary-color)' }}>
                    2 St, Loskia sripur, amukara.
                  </p>
                </div>
              </div>
              <div className="address-box mg-bottom30">
                <div className="contact-phone icon-phone" />
                <div className="info">
                  <h3 className="section-heading-jost-size20" style={{ color: 'var(--primary-color)' }}>Our Phone</h3>
                  <p className="desc-box" style={{ color: 'var(--primary-color)' }}>000 2324 39493</p>
                </div>
              </div>
              <div className="address-box">
                <div className="contact-mail icon-mail" />
                <div className="info">
                  <h3 className="section-heading-jost-size20" style={{ color: 'var(--primary-color)' }}>Our Email</h3>
                  <p className="desc-box" style={{ color: 'var(--primary-color)' }}>name@website.com</p>
                </div>
              </div>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={30}
              data-smobile={30}
            />
          </div>
          <div className="col-md-7 wow fadeInUp">
            <div className="contact-right">
              <form
                method="post"
                className="form-contact-right"
                id="contactform"
                action="./contact/contact-process.php"
                acceptCharset="utf-8"
                noValidate="novalidate"
              >
                <div className="input-row">
                  <div className="input-name">
                    <label htmlFor="name" className="heading-features" style={{ color: 'var(--primary-color)' }}>
                      Name (required)
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="input-contact"
                      type="text"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="input-phone">
                    <label htmlFor="phone" className="heading-features" style={{ color: 'var(--primary-color)' }}>
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      className="input-contact"
                      type="text"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-email">
                    <label id="email" className="heading-features" style={{ color: 'var(--primary-color)' }}>
                      Email address (required)
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="input-contact"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="input-services">
                    <label htmlFor="services" className="heading-features" style={{ color: 'var(--primary-color)' }}>
                      Services (required)
                    </label>
                    <select
                      className="input-contact input-select"
                      name="services"
                      id="services"
                    >
                      <option value={0}>Choose services</option>
                      <option value={1}>Capacity Vietnam</option>
                      <option value={2}>Capacity Vietnam</option>
                      <option value={3}>Capacity Vietnam</option>
                    </select>
                  </div>
                </div>
                <div className="input-message">
                  <label htmlFor="message" className="heading-features" style={{ color: 'var(--primary-color)' }}>
                    Your message*
                  </label>
                  <textarea
                    name="message"
                    className="input-contact-message"
                    id="message"
                    placeholder="Your Message"
                    defaultValue={""}
                  />
                </div>
                <div className="button">
                  <button type="submit" className="btn btn-left">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
