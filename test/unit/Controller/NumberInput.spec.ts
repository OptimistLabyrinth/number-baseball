import { expect } from 'chai'
import * as sinon from 'sinon'

import NumberInputController from '../../../src/Controller/NumberInputController'

describe('NumberInput 클래스', () => {
  describe('setUserInput 메소드', () => {
    let spy: sinon.SinonSpy | null = null

    beforeEach(() => {
      if (spy !== null) {
        throw new Error('invalid sinon spy: failed to restore')
      }
      spy = sinon.spy(NumberInputController.prototype, 'setUserInput')
    })
    afterEach(() => {
      if (spy === null) {
        throw new Error('invalid sinon spy: failed to setup')
      }
      spy.restore()
      spy = null
    })

    it('성공 시 NumberInput 객체의 userInput 필드의 값은 입력값과 동일하다', () => {
      if (spy === null) {
        throw new Error('invalid sinon spy: null')
      }
      const numberInputController = new NumberInputController()
      const userInput = '123'
      numberInputController.setUserInput(userInput)
      expect(spy.calledOnce).to.be.equal(true)
      expect(numberInputController.userInput).to.be.equal(userInput)
    })
  })
})
