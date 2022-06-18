import { expect } from 'chai'
import * as sinon from 'sinon'

// eslint-disable-next-line
import NumberToGuessController from '../../../src/Controller/NumberToGuessController'

describe('NumberToGuessController 클래스', () => {
  describe('generate 메소드', () => {
    let spy: sinon.SinonSpy | null = null

    beforeEach(() => {
      if (spy !== null) {
        throw new Error('invalid sinon spy: failed to restore')
      }
      spy = sinon.spy(NumberToGuessController.prototype, 'generate')
    })
    afterEach(() => {
      if (spy === null) {
        throw new Error('invalid sinon spy: failed to setup')
      }
      spy.restore()
      spy = null
    })

    it('결과값 문자열은 길이가 3 이다', () => {
      if (spy === null) {
        throw new Error('invalid sinon spy: null')
      }
      const numberToGuessController = new NumberToGuessController()
      const result = numberToGuessController.generate()
      expect(spy.calledOnce).to.be.equal(true)
      expect(result.length).to.be.equal(3)
    })
    // prettier-ignore
    it(
      '사용자가 맞춰야 하는 문자열의 개별 요소는 ' +
      '전부 1 ~ 9 중의 하나로 이루어져 있어야 한다',
      () => {
        if (spy === null) {
          throw new Error('invalid sinon spy: null')
        }
        const numberToGuessController = new NumberToGuessController()
        const result = numberToGuessController.generate()
        let isValid = true
        const possibleCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        for (const character of result) {
          if (!possibleCharacters.find((each) => each === character)) {
            isValid = false
            break
          }
        }
        expect(spy.calledOnce).to.be.equal(true)
        expect(isValid).to.be.equal(true)
      },
    )
  })
})
