function validateName(name) {
  if (/^[A-Za-z\s]+$/.test(name) || name === "") {
    return false;
  }
  return "invalid name";
}

function validateEmail(email) {
  if (email === "") return true;
  var valid = /\S+@\S+\.\S+/;
  return valid.test(email) ? false : "invalid email";
}

function validatePhone(number) {
  if (number === "") return true;
  if (
    number.length < 9 ||
    number.length > 10 ||
    isNaN(number) ||
    number[0] !== "0"
  )
    return "invalid phone";
  return false;
}

function validatePassword(password, confirm) {
  if (password == confirm) {
    return false;
  }
  return "invalid confirm password";
}
function validateP() {
  return false;
}
export {
  validateName,
  validatePassword,
  validateEmail,
  validatePhone,
  validateP,
};
