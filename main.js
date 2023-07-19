//1.Գրել ծրագիր, որը տրված տողի բառերը պահում է որպես զանգվածի առանձին էլեմենտներ:

// let str =
//   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus temporibus soluta autem repellat fugit!";

// function splits(str) {
//     return arr = str.split(" ");
// }
// console.log(splits(str));

// 2.Գրել ծրագիր, որն ընդունում է ամբողջ թվերի զանգվածը որպես մուտքագրում և վերադարձնում է նոր զանգված, որի բոլոր զույգ թվերը հանված են:

// let arr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
//   42, 43, 44, 45, 46, 47, 48, 49, 50,
// ];

// function odd(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// console.log(odd(arr));

// 3.Գրել ծրագիր, որ ընդունում է ամբողջ թվերի զանգված եւ վերադարձնում է մինիմումը;

// let arr = [];

// for (let i = 1; i <= 50; i++) {
//   arr.push(Math.ceil(Math.random() * 10) + i);
// }

// // console.log(arr);

// function min(arr) {
//   return Math.min(...arr);
// }

// console.log(min(arr));

// 4.Գրել ծրագիր, որը զանգվածի զույգ էլեմենտները դասավորում է սկզբից իսկ կենտերը վերջից նույն զանգվածի մեջ:

// let arr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
//   42, 43, 44, 45, 46, 47, 48, 49, 50,
// ];

// function evenAfterOdd(arr) {
//   let evenArr = [];
//   let oddArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       evenArr.push(arr[i]);
//     } else oddArr.push(arr[i]);
//   }
//   let newArr = [...evenArr, ...oddArr];
//   return newArr;
// }

// console.log(evenAfterOdd(arr));

// 5.Գրել ծրագիր, որը թվերի զանգվածից վերադարձնում է միայն 3-ի բաժանվող թվեր:

// let arr = [
//   51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
//   70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
//   89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
// ];

// function divisorsThree(arr) {
//   let newArr = new Array();
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 == 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(divisorsThree(arr));

// 6.Գրել ծրագիր, որը ստանում է 2 զանգված և վերադարձնում մեկ զանգված սորտավորված:

// let arr1 = [
//   1, 25, 22, 23, 15, 12, 29, 48, 47, 37, 10, 17, 49, 38, 6, 26, 18, 33, 45, 32,
//   46, 2, 27, 39, 31, 3, 19, 5, 34, 14, 30, 44, 4, 50, 28, 13, 20, 9, 40, 36, 7,
//   8, 16, 24, 35, 41, 43, 11, 42, 21,
// ];
// let arr2 = [
//   77, 51, 100, 62, 66, 69, 86, 56, 78, 89, 90, 82, 83, 74, 54, 61, 59, 88, 52,
//   99, 70, 81, 55, 76, 63, 53, 60, 57, 80, 71, 79, 73, 65, 85, 84, 87, 75, 58,
//   64, 96, 93, 97, 94, 72, 67, 92, 68, 95, 91, 98,
// ];

// function mergeSortedArray(arr1, arr2) {
//   arr1.sort((a, b) => a - b);
//   arr2.sort((a, b) => a - b);
//   let newArr = arr1.concat(arr2);
//   return newArr;
// }

// console.log(mergeSortedArray(arr1, arr2));

// 7.Գրել ծրագիր, որը կրկնվող տարրերը հեռացնում է զանգվածից:

// let arr = [
//   1, 25, 22, 23, 15, 12, 29, 48, 47, 37, 10, 17, 49, 38, 6, 26, 18, 33, 45, 32,
//   46, 2, 27, 39, 31, 3, 19, 5, 34, 14, 30, 44, 4, 50, 28, 13, 20, 9, 40, 36, 7,
//   8, 16, 24, 35, 41, 43, 11, 42, 21, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
// ];

// function removeRepeat(arr) {
//   arr.sort((a, b) => a - b);
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(removeRepeat(arr));

// 8.Գրել ծրագիր, որը վերադարձնում է զանգվածի մեջ ամենաշատ կրկրնվող տարրերը:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 4, 9, 9, 1];

function mostRepeat(arr) {
  let count = 0;
  let sortedArr = arr.sort((a, b) => a - b);
  
  let elem;

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] == sortedArr[i + 1]) {
      console.log(sortedArr[i]);
      count++;
    }
  }
  return count;
}

console.log(mostRepeat(arr));

//9.Գրել ծրագիր, որն ընդունում է թվերի զանգված և յուրաքանչյուր տարր բազմապատկում 2-ով:

// let arr = [
//   1, 25, 22, 23, 15, 12, 29, 48, 47, 37, 10, 17, 49, 38, 6, 26, 18, 33, 45, 32,
// ];

// function multiplicationByTwo(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * 2);
//   }
//   return newArr;
// }

// console.log(multiplicationByTwo(arr));

// 10.Գրել ծրագիր, որը մուտքագրում է թվերի զանգված և վերադարձնում զանգվածի բոլոր թվերի գումարը:

// let arr = [
//   1, 25, 22, 23, 15, 12, 29, 48, 47, 37, 10, 17, 49, 38, 6, 26, 18, 33, 45, 32,
// ];

// function sumArr(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumArr(arr));

// 11.Գրել ծրագիր, որը մուտքագրում է թվերի զանգված և վերադարձնում այդ զանգվածը հակառակ տեսքով:

// let arr = [
//   1, 25, 22, 23, 15, 12, 29, 48, 47, 37, 10, 17, 49, 38, 6, 26, 18, 33, 45, 32,
// ];

// function reversArr(arr) {
//   let reversArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversArr.push(arr[i]);
//   }
//   return reversArr;
// }

// console.log(reversArr(arr));

// 12.Գրել ծրագիր, որը մուտքագրում է թվերի զանգված և վերադարձնում զանգվածի բոլոր թվերի միջինը:(Oրինակ` let arr = [1,2,3,4,5]; // 3)
// let arr = [1, 2, 3, 4, 5];

// function averageArr(arr) {
//   let sum = 0;
//   let average = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     average = sum / arr.length;
//   }
//   return average;
// }

// console.log(averageArr(arr));

//13.Գրել ծրագիր, որը մուտքագրում է տողերի զանգված և վերադարձնում նոր զանգված, որը պարունակում է միայն 5-ից ավելի կամ հավասար տողեր:

// let strArr = [
//   "Lorem",
//   "ipsum",
//   "dolor",
//   "sit",
//   "amet",
//   "consectetur",
//   "adipisicing",
//   "elit.",
//   "Corrupti",
//   "nihil,",
//   "atque",
//   "aperiam",
//   "laudantium",
//   "illum",
//   "ab",
//   "officiis",
//   "nulla",
//   "id,",
//   "impedit",
//   "vitae",
//   "commodi",
//   "eaque",
//   "ea",
//   "recusandae",
//   "doloribus",
//   "maxime",
//   "incidunt",
//   "ipsam",
//   "minus,",
//   "repellat",
//   "minima",
//   "iste",
//   "quasi",
//   "tempore.",
//   "Provident",
//   "et",
//   "tempora",
//   "reiciendis",
//   "cum",
//   "modi",
//   "quia",
//   "architecto",
//   "aut",
//   "quam",
//   "vitae",
//   "natus",
//   "iusto",
//   "repellendus,",
//   "magnam",
//   "nobis",
// ];

// function greaterEqualFive(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length >= 5) {
//       //   console.log(arr[i]);

//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(greaterEqualFive(strArr));

//14.Գրել ծրագիր, որը մուտքագրում է թվերի զանգված և վերադարձնում երկրորդ ամենամեծ թիվը:

// let arr = [
//   1, 25, 22, 23, 15, 12, 29, 48, 47, 37, 10, 17, 49, 38, 6, 26, 18, 33, 45, 32,
//   46, 27, 39, 31, 3, 19, 5, 34, 14, 30, 44, 4, 50, 28, 13, 20, 9, 40, 36, 7, 8,
//   16, 24, 35, 41, 43, 11, 42, 21, 1, 3, 4, 5, 6, 7, 8, 9, 10,
// ];

// function greaterSecondNumber(arr) {
//   arr.sort((a, b) => a - b);
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr[1];
// }

// console.log(greaterSecondNumber(arr));

// 15. Գրել ծրագիր, որը վերադարձնում է զանգվածի այն տարրերը, որոն տիպը ‘’number’' է և որոնց արժեքը 0-ից մեծ է:

// let arr = [
//   "-1",
//   25,
//   -22,
//   true,
//   null,
//   23,
//   -15,
//   "12",
//   29,
//   19,
//   "str",
//   -5,
//   34,
//   14,
//   undefined,
//   30,
//   44,
//   4,
//   "log",
//   50,
//   -28,
//   -48,
//   47,
//   false,
//   37,
//   -10,
//   17,
//   49,
//   38,
// ];

// function sortPositiveNumber(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && typeof arr[i] == "number") {
//       //   console.log(arr[i]);
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(sortPositiveNumber(arr));

// 16. Գրել ծրագիր, որը վերադարձնում է զանգվածի այն տարրերը, որոն տիպը ‘’string’' է և որոնց երկարությունը (length) մեծ է 2-ից:

// let arr = [
//   "-1",
//   25,
//   -22,
//   true,
//   null,
//   23,
//   "Lorem",
//   "ipsum",
//   "dolor",
//   "sit",
//   "amet",
//   "consectetur",
//   "adipisicing",
//   "elit.",
//   "Corrupti",
//   "nihil,",
//   "atque",
//   "aperiam",
//   "laudantium",
//   "illum",
//   "ab",
//   "officiis",
//   "nulla",
//   "id,",
//   "impedit",
//   "vitae",
//   "commodi",
//   "eaque",
//   "ea",
//   "recusandae",
//   "doloribus",
//   "maxime",
//   "incidunt",
//   "ipsam",
//   "minus,",
//   "repellat",
//   "minima",
//   "iste",
//   -15,
//   "12",
//   29,
//   19,
//   "str",
//   -5,
//   34,
//   14,
//   undefined,
//   30,
//   44,
//   4,
//   "log",
//   false,
// ];

// function stringSorter(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string" && arr[i].length > 2) {
//       //   console.log(arr[i]);
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(stringSorter(arr));
