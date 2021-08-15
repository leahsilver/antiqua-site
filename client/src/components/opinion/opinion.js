import React, { useEffect, useState } from "react";
import Rating from "@material-ui/lab/Rating";

import Box from "@material-ui/core/Box";
import "./opinion.css";

export default function Opinioin() {
  const [val, setState] = useState({ val: "", rating: 3 });
  const [modalShow, setModal] = useState(false);
  const [average, setAverage] = useState(0);
  const [opinion, setOpinion] = useState([]);
  const getOpinions = async () => {
    fetch(`http://localhost:3080/opinion`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setOpinion(res);
      });
  };
  useEffect(() => {
    getOpinions();
  }, []);
  function addRes() {
    if (val !== "") {
      addRespond(val);
    }
    setModal(false);
  }

  const addRespond = async (res) => {
    await fetch("http://localhost:3080/opinion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    });
    getOpinions()
  };
  function calAverage() {
    let aver = 0;
    opinion.map((item) => {
      aver += 1 * item.rating;
    });
    aver = aver / opinion.length;

    setAverage(aver);
  }
  useEffect(() => {
    calAverage();
  });
  return (
    <div>
      <h1 className="hedopinion">OPINION</h1>{" "}
      <button
        className="btn-add-respond"
        style={{ color: "black" }}
        type="button"
        onClick={() => {
          setModal(true);
        }}
      >
        new opinion{" "}
      </button>
      <p className="aver-p">average</p>
      <Rating
        className="half-rating-read1"
        value={average}
        precision={0.5}
        readOnly
      />
      {modalShow && (
        <div className="respond">
          {" "}
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating
              precision={0.5}
              name="simple-controlled"
              value={val.rating}
              onChange={(event, newValue) => {
                setState({ ...val, rating: event.target.value });
              }}
            />
          </Box>
          <form>
            <div className="form-group">
              <textarea
                className="area-form-control"
                id="message-text"
                onChange={(e) => {
                  setState({ ...val, val: e.target.value });
                }}
              ></textarea>
            </div>
            <button
              style={{ color: "black" }}
              type="button"
              className="btn-send2"
              data-dismiss="modal"
              onClick={() => addRes()}
            >
              send
            </button>
            <button
              className="btn-send3"
              style={{ color: "black" }}
              type="button"
              onClick={() => setModal(false)}
            >
              cancel
            </button>
          </form>
        </div>
      )}
      {opinion &&
        opinion
          .slice(0)
          .reverse()
          .map((item) => {
            return (
              <div className="respond">
                {" "}
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Rating name="read-only" value={item.rating} readOnly />
                </Box>
                {item.val}
              </div>
            );
          })}
    </div>
  );
}
