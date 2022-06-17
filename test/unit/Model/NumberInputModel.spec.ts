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
    it('파라미터 userInput 길이가 3 이 아니면 결과값 false 이다', () => {
      if (spy === null) {
        throw new Error('invalid sinon spy: null')
      }
      const numberInputModel = new NumberInputModel()
      const userInput = '1001'
      const valid = numberInputModel.validate(userInput)
      expect(spy.calledOnce).to.be.equal(true)
      expect(valid).to.be.equal(false)
    })
    it('파라미터 userInput 개별 요소가 하나라도 1 ~ 9 가 아니면 결과값 false 이다', () => {
      if (spy === null) {
        throw new Error('invalid sinon spy: null')
      }
      const numberInputModel = new NumberInputModel()
      const userInput = 'abc'
      const valid = numberInputModel.validate(userInput)
      expect(spy.calledOnce).to.be.equal(true)
      expect(valid).to.be.equal(false)
    })
  })
})
