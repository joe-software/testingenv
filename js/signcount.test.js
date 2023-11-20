const signCount = require('./signcount')

test('Array is not empty', () => {
    expect(signCount([])).toBe(false)
})
test('Array only contains numbers', () => {
    expect(signCount(['2', {}])).toBe(false)
})