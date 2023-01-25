function stringLength(str) {
  const l = str.length;
  if(l>0 && l<=10) {
    return l;
  } else {
    throw new Error('String does not valid');
  }
}

function reverseString(str) {
  const temp = [];
  for(let i =0; i< str.length; i+=1) {
    temp.push(str.charAt(i));
  }
  let result = '';
  for(let i = temp.length-1; i>=0; i-=1) {
    result  += temp[i];
  }
  return result;
}

module.exports = {stringLength, reverseString};