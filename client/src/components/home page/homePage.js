import React from "react";
import a from "../../images/back.jpeg";

import "./homePage.css";
import { Link } from "react-router-dom";
function HomePage() {

    return (
        <div
            className="image2"
            style={{
                backgroundImage: `url(${a})`,
            }}
        >
          <h1 className="h1home">h1</h1>
            <Link className="button-home-1" to="/department">
                SHOP NOW
            </Link>
        </div>
       
    );
}

export default HomePage;
