function capitalize(str) {
  let temp = str;
  let c = str.charAt(0);
  temp = temp.slice(1, temp.length);
  c = c.toUpperCase();
  return c + temp;
}

module.exports = capitalize;