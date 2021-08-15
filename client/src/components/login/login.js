import { useEffect, useState } from "react";
import {
  validateName,
  validatePassword,
  validateEmail,
  validatePhone,
  validateP,
} from "../../validations/validations.js";
import InputLabel from "../input label/inputLabel.js";
import "./login.css";
const fields = {
  FirstName: "First Name",
  LastName: "Last Name",
  Password: "Password",
  Email: "Email",
  Phone: "Phone",
  Confirm: "Confirm Password",
};
const addUser = async (userDetails) => {
  await fetch("  http://localhost:3080/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  });
};

function LoginForm(props) {
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
    const valid =
      !validateName(state.FirstName) &&
      !validateName(state.LastName) &&
      !validateEmail(state.Email) &&
      !validatePhone(state.Phone);
    const require =
      state.FirstName !== "" &&
      state.LastName !== "" &&
      state.Email !== "" &&
      state.Phone !== "";
    let nowExist = false;
    console.log(users);
    for (let index = 0; index < users.length; index++) {
      if (state.Email == users[index].Email) {
        nowExist = true;
      }
    }
    if (nowExist) setExist(false);
    else setExist(true);
    const canSubmit = !nowExist && valid && require;
    if (!canSubmit) {
      event.preventDefault();
    } else {
      addUser(state);
      changeName(state);
      event.preventDefault();
      onClick();
    }
    setSubmit(require);
  }

  function onInputChange(field, event) {
    setState({ ...state, [field]: event.target.value });
  }

  return (
    <div>
      <form onSubmit={submition} className="wra">
        {!exist && submit && <p>there is a user with this mail</p>}
        <InputLabel
          type="text"
          name="FirstName"
          placeholder={fields.FirstName}
          onChange={onInputChange}
          isValid={() => validateName(state.FirstName)}
        />
        <InputLabel
          type="text"
          name="LastName"
          placeholder={fields.LastName}
          onChange={onInputChange}
          isValid={() => validateName(state.LastName)}
        />
        <InputLabel
          type="text"
          name="Email"
          placeholder={fields.Email}
          onChange={onInputChange}
          isValid={() => validateEmail(state.Email)}
        />
        <InputLabel
          type="text"
          name="Phone"
          placeholder={fields.Phone}
          onChange={onInputChange}
          isValid={() => validatePhone(state.Phone)}
        />
        <InputLabel
          type="password"
          name="Password"
          placeholder={fields.Password}
          onChange={onInputChange}
          isValid={() => validateP()}
        />
        <InputLabel
          type="password"
          name="Confirm"
          placeholder={fields.Confirm}
          onChange={onInputChange}
          isValid={() => validatePassword(state.Password, state.Confirm)}
        />
        <button className="button" type="submit">
          SIGN UP
        </button>
      </form>
      {!submit && <div className="anote"> all the fields must be filled </div>}
    </div>
  );
}
export default LoginForm;
