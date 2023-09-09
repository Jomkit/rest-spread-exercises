/* Refactor the Following Code into ES2015 */
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

/* Refactored ES2015 Ver. */
function filterOutOdds(...nums){
    return nums.filter((num) => num % 2 === 0);
}

/* Write a function called findMin that accepts a variable number
   of arguments and returns the smallest argument */
function findMin(...nums){
    return Math.min(...nums);
}