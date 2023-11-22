// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

function smileyCount(arr){
    if(arr.constructor != Array){
        return false
    }
    let count = 0
    arr.forEach(item => {
        let correctFormat = true
        if(item.length > 3){
            correctFormat = false
        }
        if(item[0] != ':' && item[0] != ';'){
            correctFormat = false    
        }
        if(item.length == 3 && item[1] != '~' && item[1] != '-'){
            correctFormat = false
        }
        if(item[item.length -1] != 'D' && item[item.length -1] != ')'){
            correctFormat = false
        }
        if(correctFormat == true){
            count = count + 1
        }
    })
    return count
}
smileyCount(':)', ':-)', ':^)', ':~)')

test('is an array', () => {
    expect(smileyCount('')).toBe(false)
    expect(smileyCount(6)).toBe(false)
    expect(smileyCount([])).not.toBe(false)
})
test('if smiley length is over 3 it is not valid', () => {
    expect(smileyCount([':--)', ':-)'])).toBe(1)
})
test('check if eyes are : or ;', () => {
    expect(smileyCount([':)', ';)', 'o)'])).toBe(2)
})
test('if the smiley has a nose it must be - or ~', () => {
    expect(smileyCount([':)', ':-)', ':^)', ':~)'])).toBe(3)
})
test('if the smiley has ) or D for a mouth', () => {
    expect(smileyCount([':-)', ':j', ';~D', ':D'])).toBe(3)
})


