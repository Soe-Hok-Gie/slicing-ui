import React from "react";
import "./Style.css";

const Hero = () => {
  return (
    <div className="container">
      {" "}
      <div className="row">
        <div className="col-lg-6">
          <h1 className="h1-custom">Lorem ipsum dolor sit amet.</h1>
          <p className="p-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla eligendi, nobis vero consectetur velit?</p>
          <button className="btn-primary-custom">Daftar Sekarang</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
