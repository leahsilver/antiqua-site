import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./product.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
function Product(props) {
  const { onClick, details, list, src } = props;

  const [get, setGet] = useState(false);
  useEffect(() => {
    list?.find((item) => details.name === item.name)
      ? setGet(true)
      : setGet(false);
  }, [list]);
  return (
    <div>
      <MDBCol style={{ width: "17rem" }}>
        <MDBCard
          className={details.buy ? "card-sold" : "card-regular"}
          style={{ height: "27rem" }}
        >
          <Link
            to={{
              state: {
                details: details,
                get: get,
                src: src,
              },
              pathname: `/bigItem`,
            }}
          >
            <MDBCardImage
              className="img-fluid"
              src={src}
              style={{
                display: " block",
                marginLeft: "auto",
                marginRight: "auto",
                minWidth: "15rem",
                height: "15rem",
              }}
              waves
            />{" "}
          </Link>
          <MDBCardBody>
            <MDBCardTitle>{details.name}</MDBCardTitle>
            <MDBCardText className="about">{details.about} </MDBCardText>
            <button
              style={{
                display: details.buy ? "none" : "block",
              }}
              disabled={get || details.buy ? true : false}
              className="myButton"
              onClick={() =>
                onClick({
                  name: details.name,
                  price: details.price,
                  src: src,
                })
              }
            >
              {details.buy
                ? "sold"
                : get
                ? "Added sucess"
                : "Add to Cart"}
            </button>{" "}
            {details.buy && <div className="div-sold">sold</div>}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
}

export default Product;
