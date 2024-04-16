function stringToDate(value) {
  const parts = value.split("/");
  const date = new Date(parts[2], parts[1] - 1, parts[0]);
  return date;
}

function dateToString(date) {
  let dd = date.getDate();
  let mm = date.getMonth() + 1; // January is 0!
  let yyyy = date.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  return `${dd}/${mm}/${yyyy}`;
}

module.exports = { stringToDate, dateToString };