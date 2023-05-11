// const color = "red";
// const point = {
//   x: 5,
//   y: 10,
//   //color: color,
//   color,
//   ["prop_" + 42]: 42,
//   toString() {
//     return "X=" + this.x + ", Y=" + this.y + ", color=" + this.color;
//   },
// };

// console.log("The point is " + point);
// console.log("The dynamic property is " + point.prop_42);


let obj = {
  'name': 'JavaScript'
}
console.log(obj + ", type: " + typeof (obj))

let str = JSON.stringify(obj);
console.log(str + ", type: " + typeof (str))

let str2 = '{"name": "JavaScript"}';
console.log(str2 + ", type: " + typeof (str2))

let obj2 = JSON.parse(str2);
console.log(obj2 + ", type: " + typeof (obj2))

