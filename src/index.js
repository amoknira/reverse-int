module.exports = function reverse (n) {
  str = n.toString();
  let i = 0;
  // 
  let result = '';
  while (i < str.length) {
    // link on reverse order
    result = `${str[i]}${result}`;
    // or concatenation:
    // result = str[i] + result;
    i = i + 1;
    console.log(result);
  }
  // regexp for '-', g = global, search all inputs of '-'
  return Number(result.replaceAll(/[\-]/g, ''));
}
