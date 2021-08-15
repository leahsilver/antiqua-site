import { useEffect, useState } from "react";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateP,
} from "../../validations/validations.js";
import InputLabel from "../input label/inputLabel.js";
import "../login/login.css";
import "./payment.css";
import { Link } from "react-router-dom";

const fields = {
  FirstName: "First Name",
  LastName: "Last Name",
  Password: "Password",
  Email: "Email",
  Phone: "Phone",
  Confirm: "Confirm Password",
};

function Payment(props) {
  const { user } = props;
  const [info, setInfo] = useState({
    FirstName: user.FirstName,
    LastName: user.LastName,
    Email: user.Email,
    Phone: user.Phone,
    Password: user.Password,
    Confirm: "",
    streetAdress: "",
    City: "",
  });
  const [submit, setSubmit] = useState(true);
  useEffect(() => {
    setInfo({
      FirstName: user.FirstName,
      LastName: user.LastName,
      Email: user.Email,
      Phone: user.Phone,
      Password: user.Password,
      Confirm: "",
      streetAdress: "",
      City: "",
    });
  }, []);
  function submition(event) {
    const valid =
      !validateName(info.FirstName) &&
      !validateName(info.LastName) &&
      !validateEmail(info.Email) &&
      !validatePhone(info.Phone);
    const require =
      info.FirstName !== "" &&
      info.LastName !== "" &&
      info.Email !== "" &&
      info.Phone !== "" &&
      info.streetAdress != "" &&
      info.City != "";
    const canSubmit = valid && require;

    if (!canSubmit) {
      event.preventDefault();
    }
    setSubmit(require);
  }

  function onInputChange(field, event) {
    setInfo({ ...info, [field]: event.target.value });
  }

  return (
    <>
      <h1 className="h1-pay">h1</h1>
      <div class="login-wrap">
        <form className="form" onSubmit={submition}>
          <h3> BILLING DETAILS</h3>
          <InputLabel
            type="text"
            name="FirstName"
            value={user.FirstName}
            placeholder={fields.FirstName}
            onChange={onInputChange}
            isValid={() => validateName(info.FirstName)}
          />
          <InputLabel
            type="text"
            name="LastName"
            value={user.LastName}
            placeholder={fields.LastName}
            onChange={onInputChange}
            isValid={() => validateName(info.LastName)}
          />
          <InputLabel
            type="text"
            name="Email"
            value={user.Email}
            placeholder={fields.Email}
            onChange={onInputChange}
            isValid={() => validateEmail(info.Email)}
          />
          <InputLabel
            type="text"
            name="Phone"
            value={user.Phone}
            placeholder={fields.Phone}
            onChange={onInputChange}
            isValid={() => validatePhone(info.Phone)}
          />
          <InputLabel
            type="text"
            name="streetAdress"
            placeholder="Street Adress"
            onChange={onInputChange}
            isValid={() => validateP}
          />
          <InputLabel
            type="text"
            name="City"
            placeholder="City"
            onChange={onInputChange}
            isValid={() => validateP}
          />
          <Link to="/pay" onClick={submition}>
            <button className="button" type="submit">
              PAY
            </button>
          </Link>
          {!submit && (
            <div className="anote"> all the fields must be filled </div>
          )}
        </form>
      </div>
    </>
  );
}
export default Payment;
