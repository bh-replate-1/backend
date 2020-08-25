module.exports = {
  intToBoolean,
  booleanToInt,
};

function intToBoolean(int) {
  return int === 1 ? true : false;
}

function booleanToInt(bool) {
  return bool === true ? 1 : 0;
}
