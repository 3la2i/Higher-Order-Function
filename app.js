// //  q1 for loop
// function powerOfTwoFor(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let power = Math.pow(2, arr[i]);
//         result.push(power);
//     }
//     return result;
// }

// let inputArray = [0, 1, 2, 3, 4];
// let outputArrayFor = powerOfTwoFor(inputArray);
// console.log(outputArrayFor);

//q1 for each

// function powerOfTwoForEach(arr) {
//     let result = [];
//     arr.forEach(function(number) {
//         let power = Math.pow(2, number);
//         result.push(power);
//     });
//     return result;
// }

// let outputArrayForEach = powerOfTwoForEach(inputArray);
// console.log(outputArrayForEach);

// q1 map

// function powerOfTwoMap(arr) {
//     return arr.map(function(number) {
//         return Math.pow(2, number);
//     });
// }

// let outputArrayMap = powerOfTwoMap(inputArray);
// console.log(outputArrayMap);

// // q2
// function evenOrOdd(arr) {
//   return arr.map(function (element) {
//     if (typeof element === "number") {
//       if (element % 2 === 0) {
//         return "even";
//       } else {
//         return "odd";
//       }
//     } else {
//       return "N/A";
//     }
//   });
// }

// const inputArray = [1, 2, 3, "alaa", 4, 5,];
// const resultArray = evenOrOdd(inputArray);

// console.log(resultArray);

// // q3
// let names = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];

// names.forEach(function(name) {
//     console.log(name);
// });
