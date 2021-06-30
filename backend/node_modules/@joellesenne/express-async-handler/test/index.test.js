const chai = require('chai')

/**
 * @load modules UTILS
 */
const asyncHandler = require('../lib/index')

const { expect } = chai

describe('asyncHandler', () => {
  it('should catch exceptions of a function passed into it', async () => {
    const error = new Error('catch me!', 404)
    const foo = asyncHandler(() => {
      throw error
    })
    expect(foo).to.throw(error)
  })
})
