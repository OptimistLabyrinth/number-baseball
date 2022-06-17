import { expect } from 'chai'
import * as sinon from 'sinon'

import NumberInputModel from '../../../src/Model/NumberInputModel'

describe('NumberInputModel 클래스', () => {
  describe('validate 메소드', () => {
    let spy: sinon.SinonSpy | null = null

    beforeEach(() => {
      if (spy !== null) {
        throw new Error('invalid sinon spy: failed to restore')
      }
      spy = sinon.spy(NumberInputModel.prototype, 'validate')
    })
    afterEach(() => {
      if (spy === null) {
        throw new Error('invalid sinon spy: failed to setup')
      }
      spy.restore()
      spy = null
    })

    it('성공 시 결과값은 true 이다', () => {
      if (spy === null) {
        throw new Error('invalid sinon spy: null')
      }
      const numberInputModel = new NumberInputModel()
      const userInput = '123'
      const valid = numberInputModel.validate(userInput)
      expect(spy.calledOnce).to.be.equal(true)
      expect(valid).to.be.equal(true)
    })
  })
})
