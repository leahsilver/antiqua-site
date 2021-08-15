import React, { useState } from "react";

import "./inputLabel.css";
function InputLabel(props) {
  const { type, placeholder, name, onChange, isValid, value } = props;
  const [error, setError] = useState(null);
  function validate() {
    setError(isValid());
  }
  return (
    <div>
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        onChange={(event) => onChange(name, event)}
        onBlur={validate}
        defaultValue={value}
      ></input>
      <div className="eerror">{error && <div> {error} </div>}</div>
    </div>
  );
}

export default InputLabel;
