import { expect } from 'chai'
import * as sinon from 'sinon'

// eslint-disable-next-line
import NumberInputController from '../../../src/Controller/NumberInputController'

describe('NumberInputController 클래스', () => {
  describe('constructor', () => {
    // prettier-ignore
    it(
      'NumberInputController 객체 생성 성공 시 ' +
        'userInput 필드의 값은 생성자 파라미터와 동일하다',
      () => {
        const userInput = '123'
        const numberInputController = new NumberInputController(userInput)
        expect(numberInputController.userInput).to.be.equal(userInput)
      },
    )
  })

  describe('validateUserInput 메소드', () => {
    let spy: sinon.SinonSpy | null = null

    beforeEach(() => {
      if (spy !== null) {
        throw new Error('invalid sinon spy: failed to restore')
      }
      spy = sinon.spy(NumberInputController.prototype, 'validateUserInput')
    })
    afterEach(() => {
      if (spy === null) {
        throw new Error('invalid sinon spy: failed to setup')
      }
      spy.restore()
      spy = null
    })

    it('userInput 에 이상없으면 true 를 반환한다', () => {
      if (spy === null) {
        throw new Error('invalid sinon spy: null')
      }
      const userInput = '123'
      const numberInputController = new NumberInputController(userInput)
      const result = numberInputController.validateUserInput()
      expect(spy.calledOnce).to.be.equal(true)
      expect(result).to.be.equal(true)
    })
    it('userInput 길이가 3이 아니라면 false 를 반환한다', () => {
      if (spy === null) {
        throw new Error('invalid sinon spy: null')
      }
      const userInput = '9876'
      const numberInputController = new NumberInputController(userInput)
      const result = numberInputController.validateUserInput()
      expect(spy.calledOnce).to.be.equal(true)
      expect(result).to.be.equal(false)
    })
    it('userInput 가 1 ~ 9 아닌 문자열이 하나라도 포함하고 있다면 false 를 반환한다', () => {
      if (spy === null) {
        throw new Error('invalid sinon spy: null')
      }
      const userInput = '0a?'
      const numberInputController = new NumberInputController(userInput)
      const result = numberInputController.validateUserInput()
      expect(spy.calledOnce).to.be.equal(true)
      expect(result).to.be.equal(false)
    })
  })
})
