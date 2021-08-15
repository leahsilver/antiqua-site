import React from "react";
import "./cart.css";
import { BsX } from "react-icons/bs";


function Cart(props) {
  const { list, payment, reduce } = props;

  return (
    <div>
      {list.map((item) => {
        return (
          <div>
            {item.name && (
              <div className="wrap">
                <div className="title">
                  <BsX role="button" onClick={() => reduce(item)} />
                  <div className="nam">{item["name"]}</div>
                </div>
                <div className="pric">${item["price"]}</div>

                <img className="image" src={item["src"]}></img>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
