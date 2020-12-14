function capitalizeFirstLetters(string) {
  if (string.length <= 0) {
    return "";
  } else {
    return string
      .toLowerCase()
      .split(" ")
      .map((x) => x[0].toUpperCase() + x.slice(1))
      .join(" ");
  }
}

module.exports = capitalizeFirstLetters;
