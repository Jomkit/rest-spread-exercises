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

/*  Write a function mergeObjects that accepts two objects and returns a 
new object which contains all the keys and values of the first object and second */

function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}

/* Write function doubleAndReturnArgs() which accepts an array and variable number
   of arguments. The function should return a new array with the original array
   values and all of the additional arguments doubled */

function doubleAndReturnArgs(arr, ...rest){
    return [...arr, ...rest.map((a) => a * 2)];
}


/**************************** SECTION ****************************/
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    const idxRmv = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idxRmv), ...items.slice(idxRmv + 1)];
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({...obj, [key]: val})


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2})


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => ({...obj, [key]: val})