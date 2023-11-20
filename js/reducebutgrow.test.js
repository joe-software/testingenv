// const reducebutgrow = require('./reducebutgrow')

// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

function reducebutgrow(arr){
    if(arr.constructor !== Array || arr.length == 0){
        return false
    }

    let totalCounter = 1;
    arr.forEach(element => {
        totalCounter = totalCounter * element
    });
    return totalCounter
}

test('return false if prop is not an array', () => {
    expect(reducebutgrow(" ")).toBe(false)
    expect(reducebutgrow(4)).toBe(false)
    expect(reducebutgrow(true)).toBe(false)
    expect(reducebutgrow([1])).not.toBe(!false)
})

test('return false if array empty', () => {
    expect(reducebutgrow([])).toBe(false)  

})

test('return the sum of array elements', () => {
    expect(reducebutgrow([3,2,2,3])).toBe(36)
    expect(reducebutgrow([3,3,2,2])).toBe(36)
    expect(reducebutgrow([2,2])).toBe(4)

})

