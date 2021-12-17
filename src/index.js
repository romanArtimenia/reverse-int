module.exports = function reverse(n) {
    let str = n.toString();
  if (str.startsWith("-")){
    str = str.slice(1)
  } 
 return str.split('').reverse().join('');
 
}


