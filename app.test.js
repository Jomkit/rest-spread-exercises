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