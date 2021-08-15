import ReactImageMagnify from "react-image-magnify";
import { useLocation } from "react-router";
import React, { useState } from "react";
import "./bigItem.css";
function BigImage(props) {
  const { onClick } = props;
  const url = useLocation();
  const details = url.state.details;
  const get = url.state.get;
  const src=url.state.src;
  const [getNow, setGetNow] = useState(false);
  function a() {
    onClick({
      name: details.name,
      price: details.price,
      src: src
    });
    setGetNow(true);
  }
  return (
    <div>
      <h2 className="h1-to-big">h1</h2>‏‏
      <ReactImageMagnify
        style={{ top: 20 }}
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: false,
            src: src,
            width: 490,
            height: 600,
          },
          largeImage: {
            src: src,
            width: 1200,
            height: 1400,
          },
        }}
      />{" "}
      <div className="info">
        {" "}
        <div className="name"> {details.name}</div>
        <div className="details">
          {details["artist"] && (
            <div className="information">artist: {details["artist"]}</div>
          )}
          {details["year"] && (
            <div className="information">year: {details["year"]}</div>
          )}
          {details["kind"] && (
            <div className="information">kind: {details["kind"]}</div>
          )}
          {details["size"] && (
            <div className="information">size: {details["size"]}</div>
          )}
          {details["details"] && (
            <div className="information">
              more information: {details["details"]}
            </div>
          )}
        </div>{" "}
        <div className="price">${details.price}</div>{" "}
        <button
          id="button"
          disabled={get || getNow || details.buy == "true" ? true : false}
          className="myButton"
          onClick={() => a()}
        >
          {details.buy == "true"
            ? "sold"
            : get || getNow
            ? "Added sucess"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
export default BigImage;
