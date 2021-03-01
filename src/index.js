module.exports = function check(str, bracketsConfig) {
  let leftArr = [];

  for (let i = 0; i < str.length; i++) {
      if (str[i] === '(' || str[i] === '[' || str[i] === '{' || str[i] === '|') {
          leftArr.push(str[i]);
      }

      let leftArrLength = leftArr.length;

      if (str[i] === ')' && leftArr[leftArrLength - 1] === '(') {
          leftArr.pop();
      } else if (str[i] === '}' && leftArr[leftArrLength - 1] === '{') {
          leftArr.pop();
      } else if (str[i] === ']' && leftArr[leftArrLength - 1] === '[') {
          leftArr.pop();
      }  else if (str[i] === '|' && leftArr[leftArrLength - 1] === '|') {
        leftArr.pop();
      } else if (str[i] === ')' || str[i] === '}' || str[i] === ']' || str[i] === '|') {
        return false;
      }
  }
  return leftArr.length === 0;
}

