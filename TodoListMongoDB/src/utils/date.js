function stringToDate(value) {
  const parts = value.split("/");
  const date = new Date(parts[2], parts[1] - 1, parts[0]);
  return date;
}

module.exports = stringToDate;
