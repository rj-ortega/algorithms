const sinon = require('sinon')
const assert = require('assert')
// const recursion = require('../recursion')
const { printItems: print, filter, reverseString } = require('../recursion')

describe('recursion', () => {
  it('should print all items in an array', () => {
    const spy = sinon.spy(console, 'log')
    const input = ['cat', 'dog', 'bird', 'fish']
    // recursion.printItems(input)
    print(input)
    assert.equal(spy.callCount, input.length)
  })
  it('should filter an array with items that contain a letter', () => {
    const input = ['cat', 'dog', 'bird', 'fish']
    const expected = ['bird', 'fish']
    // const output = recursion.filter(input)
    const output = filter(input, 'i')
    assert.deepEqual(output, expected)
  })
  it('should reverse a word', () => {
    const input = 'hello'
    const expected = 'olleh'
    // const output = recursion.reverseString(input)
    const output = reverseString(input)
    assert.equal(output, expected)
  })
})
