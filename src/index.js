module.exports = function check(str, bracketsConfig) {
  let open = 0;
  let close = 0;

  bracketsConfig.forEach((pattern) => {
    for (i = 0; i < str.length; i++) {
      if (str[i] === pattern[0] && str[i] === pattern[1]) {
        open++;
        close++;
      }
      else if (str[i] === pattern[0]) {
        open++;
      }
      else if (str[i] === pattern[1]) {
        close++;
      }
    }
  })

  if (open === close) {
    return true;
  } else {
    return false;
  }
}
