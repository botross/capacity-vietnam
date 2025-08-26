import React from "react";
import Image from "next/image";
export default function Facts() {
  return (
    <section 
style={{
  backgroundColor: "#fff"
}}
    className="flat-counter">
      <div className="container">
        <div className="col-md-12">
          <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '80px',
            marginBottom: '80px',
          }}
          className="counter-content-left wow fadeInLeft">
            <Image
              className="background-counter"
              alt="images"
              src="/images/Counter/the-man-working-tree.png"
              width={870}
              height={540}
            />
            <div
            style={{
              borderRadius: "16px",
              boxShadow: "0 20px 40px rgba(45, 81, 117, 0.1)",
              border: "2px solid 000",
            }}
            className="content-left-box">
              <h2 className="title-main">
                We are nice people with a lot of experience.
              </h2>
              <p className="section-desc">
                Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz,
                vex nymphs. Waltz, bad nymph
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
