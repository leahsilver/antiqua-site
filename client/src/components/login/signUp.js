import { useState, useEffect } from "react";
import { validateEmail, validateP } from "../../validations/validations.js";
import InputLabel from "../input label/inputLabel.js";
import "./login.css";

const fields = {
  Password: "Password",
  Email: "Email",
};

function SignUp(props) {
  const { changeName, onClick } = props;
  const [state, setState] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Password: "",
    Confirm: "",
  });
  const [submit, setSubmit] = useState(true);
  const [exist, setExist] = useState(true);
  const [users, setUser] = useState([]);
  const getUsers = async () => {
    fetch(`http://localhost:3080/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);
  function submition(event) {
    const valid = !validateEmail(state.Email);
    for (let index = 0; index < users.length; index++) {
      if (state.Email == users[index].Email) {
        if (state.Password == users[index].Password) {
          state.FirstName = users[index].FirstName;
          state.LastName = users[index].LastName;
          state.Phone = users[index].Phone;
        }
      }
    }

    if (state.FirstName == "" && valid) {
      setExist(false);
    } else {
      setExist(true);
    }

    const require = state.Email !== "" && state.Password != "";
    const canSubmit = !state.FirstName == "" && valid && require;
    event.preventDefault();
    if (canSubmit) {
      changeName(state);
      onClick();
    } else {
    }
    setSubmit(require);
  }

  function onInputChange(field, event) {
    setState({ ...state, [field]: event.target.value });
  }

  return (
    <div>
      <form onSubmit={submition} className="wra">
        {!exist && submit && <p>the user dosent exist</p>}
        <InputLabel
          type="text"
          name="Email"
          placeholder={fields.Email}
          onChange={onInputChange}
          isValid={() => validateEmail(state.Email)}
        />

        <InputLabel
          type="password"
          name="Password"
          placeholder={fields.Password}
          onChange={onInputChange}
          isValid={() => validateP()}
        />

        <button type="submit" className="button">
          SIGN IN
        </button>
      </form>
      {!submit && <div className="anote"> all the fields must be filled </div>}
    </div>
  );
}
export default SignUp;
