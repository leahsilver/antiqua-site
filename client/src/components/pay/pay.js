import React, { useState } from "react";
import Paypal from "../paypal/paypal";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./pay.css";
export default function Pay(props) {
  const { payment, updateStock } = props;
  const [ship, setShip] = useState();

  function onChange(e) {
    setShip(e.target.value);
  }
  return (
    <div>
      {" "}
      <h1 classname="margina">a</h1>
      {payment > 0 && (
        <div className="order">
          <h3>YOUR ORDER</h3>
          <p>subtotal: {payment}</p> <p>Shipping:</p>{" "}
          <RadioGroup
            aria-label="gender"
            name="gender1"
            onChange={(e) => onChange(e)}
            defaultValue="Registered mail"
          >
            <FormControlLabel
              value="Registered mail"
              control={<Radio color="brown" />}
              label="Registered mail: 10$"
            />
            <FormControlLabel
              value="Courier service"
              control={<Radio color="brown" />}
              label="Courier service: 30$"
            />
          </RadioGroup>
          <p>
            total:{" "}
            {ship === "Courier service" ? payment * 1 + 30 : payment * 1 + 10}
          </p>{" "}
          <Paypal
            total={
              ship === "Courier service" ? payment * 1 + 30 : payment * 1 + 10
            }
            onSuccess={updateStock}
          />
        </div>
      )}{" "}
      {payment === 0 && (
        <h1 style={{ marginLeft: "27%" }}>You have not ordered products yet</h1>
      )}
    </div>
  );
}
