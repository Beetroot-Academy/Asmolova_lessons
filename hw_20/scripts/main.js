//min

//1

/*
1. function newFunction() {}
2. let newFunction = function () {}
3. let newFunction = () =>
*/

//2

// function argumentsAmount(...num) {
//     return num.length;
// }
// console.log(argumentsAmount(9, 5, 3, 6))

//3

// function takesNum(a, b) {
//     if (a < b) {
//         return -1
//     }
//     else if (a > b) {
//         return 1
//     }
//     else if (a = b) {
//         return 0
//     }
// }
// console.log(takesNum(2, 5))
// console.log(takesNum(29, 18))
// console.log(takesNum(5, 5))


//4

// function calcFactorial(a) {
//     let result = 1;

//     while (a){
//         result *= a--;
//     }
//     return result
// }
// console.log(calcFactorial(8))

//5

// function takesNum(num1, num2, num3) {
//     let result;
//     result = '' + num1 +num2 + num3;
//     return result;
// }
// console.log(takesNum(1, 4, 9))

//6

// function squareRect(length, width) {
//     let result;
//     result = length * width;
//     if (width == undefined) {
//         result = length * 4
//     }
//     return result;
// }

// console.log(squareRect(5, 8))
// console.log(squareRect(5))

// norm

//1

// function perfectNum(a) {
//     let result = 0;
//     for(let i = 1; i <= a / 2; i++) {
//         if (a % i == 0) {
//             result += i
//         }
//     }

//     if (result === a && result !== 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // console.log(perfectNum(6))

// //2

// function diapasonNum(min, max) {
//     for (let i = min; i <= max; i++) {
//         if (i % 2 === 0) {
//             if (perfectNum(i)) {
//                 console.log(`${i} is perfect`)
//             }
//         }
//     }
// }

// console.log(diapasonNum(1, 9000))