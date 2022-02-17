import React from "react";
import "./Style.css";

const Hero = () => {
  return (
    <div className="container">
      {" "}
      <div className="row mt-5">
        <div className="col-lg-6">
          <h1 className="h1-custom">
            Pelatihan <i>Parenting</i> Terbaik di Indonesia
          </h1>
          <p className="p-secondary">Mari kita sadar akan pentingnya pelatihan untuk menjadi orang tua agar menghasilkan karakter anak yang unggul.</p>
          <button className="btn-primary-custom mt-3">Daftar Sekarang</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
