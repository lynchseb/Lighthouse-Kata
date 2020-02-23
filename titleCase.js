const titleCase = (string) => {
  if (string === "") {
    return string;
  }
  let newString = string.split(" ");
  let result = [];
  let finalResult;

  for (let letter of newString) {
    result.push(letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase());
    finalResult = result.join(" ");
  }
  return finalResult;
};

console.log(titleCase("this is an example"));
titleCase("");
titleCase("test");
titleCase("i r cool");
titleCase("WHAT HAPPENS HERE");
titleCase("A");
titleCase("wHaT HApPeNS HERE");
