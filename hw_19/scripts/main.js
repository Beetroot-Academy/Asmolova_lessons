// min

// 1
// let userAge = +prompt(`What is your age?`);

// if (userAge >= 0 && userAge <= 11) {
//     alert(`Hello, baby`);
// } else if ( userAge >= 12 && userAge <= 17 ) {
//     alert(`Hello, teenager`);
// } else if ( userAge >= 18 && userAge <= 59) {
//     alert(`Hello, adult`);
// } else if (userAge >= 60 ) {
//     alert(`Hello, pensioner`)
// } else {
//     alert(`Buy`)
// }


//2
// let userNumber = +prompt(`Input number from 0-9`);

// switch (userNumber) {
//     case 0: alert(`Your symbol )`); break;
//     case 1: alert(`Your symbol !`); break;
//     case 2: alert(`Your symbol @`); break;
//     case 3: alert(`Your symbol #`); break;
//     case 4: alert(`Your symbol $`); break;
//     case 5: alert(`Your symbol %`); break;
//     case 6: alert(`Your symbol ^`); break;
//     case 7: alert(`Your symbol &`); break; 
//     case 8: alert(`Your symbol *`); break;
//     case 9: alert(`Your symbol (`); break;
//     default: alert(`Not that`); 
// }

//3
// let numericFirst = +prompt(`Enter first number in your ranger`);
// let numericLast = +prompt(`Enter last number in your ranger`);
// let numericSum = 0;

// for (let i = numericFirst; i <= numericLast; i++) {
//     numericSum += i;
// }
// alert(`Summ - ${numericSum}`);

//4
// let numFiirst = +prompt(`Enter first numer`);
// let numSecond = +prompt(`Enter second number`);
// let divider;

// for(let i = 1; ; i++ ) {
//     if (i > numFiirst && i > numSecond) break;
//     if (numFiirst % i == 0 && numSecond % i == 0) divider = i;
// }
// alert(` Your biggest divider is ${divider}`);

//5
// let userNum = +prompt(`Enter your num`);

// for(let i = 1; ; i++) {
//     if (userNum % i == 0 ) {
//         alert(`${i} is divider ${userNum}`);
//     }
// }

//norm

//1 не зрозуміла як робити
// let userPalindrom = +prompt (`Enter a five-digit number`);
// let n = 0;
// function palindrom(reverseuserNumber) {
//     const len = Math.floor(reverseuserNumber.length / 2);
//     for (let i = 0; i < len; i++)
//     if (reverseuserNumber[i] !== reverseuserNumber[reverseuserNumber.length - i - 1]) {
//         return false;
//         alert(`${userNumber} is not palindrom`)
//     }
//     return true;
//     alert(`${userNumber} is palindrom`)
// }
// for (let i =0; i < Math.floor(userPalindrom.length / 2); i++) {
//     if (userPalindrom.charAt(i) == userPalindrom.charAt(userPalindrom.length - 1 - i)) {
//         n++;
//     } else {
//         break
//     }
// }

// if (n == Math.floor(userPalindrom / 2)) {
//     alert(`${userPalindrom} is palindrom`);
// } else {
//     alert(`${userPalindrom} is not palindrom`)
// }

//2

// let userBuy = +prompt(`Enter purchase amount`);

// if (userBuy >= 200 && userBuy < 300) {
//     alert(`Your amound to be paid ${userBuy - (userBuy * 0.03)}`);
// }
// else if (userBuy >= 300 && userBuy < 500) {
//     alert(`Your amound to be paid ${userBuy - (userBuy * 0.05)}`);
// }
// else if (userBuy >= 500) {
//     alert(`Your amound to be paid ${userBuy - (userBuy * 0.07)}`);
// }
// else (userBuy < 200); {
//     alert('You don`t have a discount' );
// }

//3

// let userNumber = +prompt(`Enter 10 numbers`);
// let posNum = 0;
// let negNum = 0;
// let zeroNum = 0;
// let oddNum = 0;
// let evenNum = 0;

// for (let i = 0; i <= 10; i++) {
//     if (userNumber > 0) {
//         posNum++
//     }
//     else if (userNumber < 0) {
//         negNum++
//     }
//     else if (userNumber == 0) {
//         zeroNum++
//     }
//     else if (userNumber % 2 == 0) {
//         oddNum++
//     } else {
//         evenNum++
//     }
// }
// alert(`Your enter ${posNum} positive number, ${negNum} negative number, ${zeroNum} zero, ${oddNum} odd numbers and ${evenNum} even numbers`)

//4

// let week = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Saturday`, `Sunday`];
// let day = 0;
// let mess;

// do {
//     mess = confirm(`${week[day]}. Do you want to see the next day`);
//     if (day == week.length - 1) {
//         day = 0
//     } else {
//         day++
//     }
// } while (mess == true);