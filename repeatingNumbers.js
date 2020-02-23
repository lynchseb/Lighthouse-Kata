let repeatNumbers = function(data) {
  let result = ""
  for (i in data) {
    if (i > 0) {
      result += ", "
    }
    for (let k = 0; k < data[i][1]; k++) {
    result += data[i][0];
    } 
  };
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
 
