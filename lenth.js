// let text = "Hello World!";
// let length = text.length;
// console.log(length)

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);
// console.log(result)
function checkAdult(age) {
  return age >= 18;
}
console.log(result)