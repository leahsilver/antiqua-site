import React from "react";
import a from "../../images/gray-painted-background1.jpg";
import "./aboutUs.css";

export default function AboutUs() {
  return (
    <div
      className="image-back"
      style={{
        backgroundImage: `url(${a})`,
      }}
    >
      <div className="div-text-about">
        <h1 className="h1-text-about">About us</h1>
        <p className="p-text-about">
          {" "}
          Antiqa, the leading antiquities gallery online for over 20 years, is
          based in Israel We specialise in authentic ancient art from Egypt, the
          Mediterranean, Mesopotamia and Islamic Art. For over 50 years our
          regular clients have included private collectors throughout the world
          as well as galleries and Judaism. We do our own research on items and
          also seek the opinions of museums, scholars and other experts. Each
          item comes with a Certificate of Authenticity for culture, period,
          material and size and we provide a lifetime authenticity refund.
        </p>
      </div>
    </div>
  );
}
