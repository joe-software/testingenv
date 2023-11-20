const emptyStr = require('./emptyStr')

test('returns true if the string is empty', () => {
    expect(emptyStr("")).toBe(true)
})