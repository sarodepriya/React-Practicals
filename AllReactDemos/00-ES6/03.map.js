var colors = ["red", "green", "blue"];

// function capitalize(val) {
//   return val.toUpperCase();
// }
// var capitalizedColors = colors.map(capitalize);
// console.log(capitalizedColors);

// let capitalizedColors = colors.map(
//   (color) => {
//     return color.toLocaleUpperCase();
//   }
// );
// console.log(capitalizedColors);

let capitalizedColors = colors.map(
  color => color.toLocaleUpperCase()
);
console.log(capitalizedColors);

colors.forEach(
  color => console.log(color.toLocaleUpperCase)
);
