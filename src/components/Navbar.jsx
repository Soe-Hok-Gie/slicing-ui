import React from "react";

const Navbar = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <nav className="nav-custom">
          <div className="nav-left">
            <div className="nav-logo">
              <img src="/assets/img/frog.svg" alt="" />
            </div>
            <div className="nav-links-custom">
              <div className="nav-link-custom">
                <a href="" className="link-secondary fw-bold">
                  Beranda
                </a>
                <a href="" className="link-secondary fw-bold">
                  Silabus
                </a>
                <a href="" className="link-secondary fw-bold">
                  Testimonial
                </a>
              </div>
            </div>
          </div>
          <div className="nav-right">
            <button className="btn-primary-custom">Daftar Sekarang</button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
