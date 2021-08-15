import React from "react";
import { Card, CardColumns, Modal } from "react-bootstrap";
import "./departmemt.css";
import { Link } from "react-router-dom";

export default function Departments() {
  return (
    <div className="rap">
      <Card className="ard">
        <img src="art.jpg" className="mg"></img>
        <Card.Body className="body">
          <Link to="/art">
            <button className="button-dep">ART</button>
          </Link>
        </Card.Body>
      </Card>
      <Card className="ard">
        <img src="judaica.jpg" className="mg"></img>
        <Card.Body className="body">
          <Link to="/judaica">
            <button className="button-dep">JUDAICA</button>
          </Link>
        </Card.Body>
      </Card>
      <Card className="ard">
        <img src="stamps.jpg" className="mg"></img>
        <Card.Body className="body">
          <Link to="/stamps">
            <button className="button-dep">STAMPS</button>
          </Link>
        </Card.Body>
      </Card>
      <Card className="ard">
        <img src="coins.jpg" className="mg"></img>
        <Card.Body className="body">
          <Link to="/coins">
            <button className="button-dep">COINS</button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
