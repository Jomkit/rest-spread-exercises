describe('filterOutOdds() tests', function() {
    it('should take any number of number parameters and filter out odd values', function() {
        expect(filterOutOdds(1,2,3,4,5,6,7)).toEqual([2,4,6]);
    })
    it('should accept an unspecified number of parameters and return an array', function() {
        expect(filterOutOdds(1,44,23,531,2,34)).toBeInstanceOf(Array);
        expect(filterOutOdds(1,44,23,531,2,34)).toEqual([44, 2, 34]);
    })
})

describe('findMin() tests', function(){
    it('Should take any number of parameters, and return the minimum number', function(){
        expect(findMin(144,23,55,120)).toEqual(23);
    })
})

describe('mergeObjects() tests', function(){
    it('should take two objects and return a new object containing all keys and values of the first two', function(){
        expect(mergeObjects({a:1, b:2}, {c:3, d:4})).toBeInstanceOf(Object);
        expect(mergeObjects({a:1, b:2}, {c:3, d:4})).toEqual({a:1, b:2, c:3, d:4});
        })
})

describe('doubleAndReturnArgs() tests', function(){
    it('should take an array and a variable number of args, then return a new array that contains the first array values and the arguments doubled', function(){
        expect(doubleAndReturnArgs([1,2,3],4,4)).toEqual([1,2,3,8,8]);
        expect(doubleAndReturnArgs([2],10,4)).toEqual([2,20,8]);
    })
})