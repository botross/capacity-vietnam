"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import toggleSearch from "@/utlis/toggleSearch";
import Nav from "./Nav";
import MobileMenuToggle from "./MobileMenuToggle";
import MobileNav from "./MobileNav";
export default function Header2() {
  return (
    <header id="header" className="header header-style2 bg-color">
      <div className="container-fluid">
        <div className="row">
          <div className="header-wrap">
            <div className="col-md-3">
              <div className="inner-header">
                <div className="logo-header">
                  <Link href={`/`} title="">
                    <Image
                      alt="images"
                      src="/icon/logo.png"
                      width={135}
                      height={35}
                    />
                  </Link>
                </div>
                {/* /#logo */}
                <MobileMenuToggle />
                {/* //mobile menu button */}
              </div>
            </div>
            {/* /.col-md-3 */}
            <div className="col-md-6">
              <div className="nav-wrap">
                <nav id="mainnav" className="mainnav">
                  <ul className="menu">
                    <Nav />
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-md-3">
              <div className="site-header-right">
                <div className="header-inner">
                  <div className="button link-style2">
                    <Link
                      style={{
                        padding: "10px 20px",
                        borderRadius: "20px",
                        backgroundColor: "#fff",
                        fontSize: "16px",
                        fontWeight: "500",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                      href={`/contact`} className="read-more btn-read-more btn-3 ">
                      Contact Us
                    </Link>

                  </div>
                </div>
              </div>
              {/* header right */}
            </div>
          </div>
          {/* /.header-wrap */}
        </div>
        {/* /.row */}
      </div>
      <MobileNav />
      {/* /.container */}
    </header>
  );
}
