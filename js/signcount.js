// https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca

function signCount(arr){
let allNumbers = true

arr.forEach(item => {
    if(typeof item != 'number'){
        allNumbers = false
    }
})

if(!allNumbers || arr.length < 1){
    return false
}
}

module.exports = signCount