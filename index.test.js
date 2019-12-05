const core = require('@actions/core')
const github = require('@actions/github')

const index = require('./index')

beforeEach(() => {
    jest.resetModules()
})

describe('Index Tests', () => {
    it('passes through to validate that it compiles at least', async () => {
        expect(1).toEqual(1)
    })
})
