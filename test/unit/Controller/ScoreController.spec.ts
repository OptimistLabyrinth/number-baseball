import { expect } from 'chai'
import * as sinon from 'sinon'

import ScoreController from '../../../src/controller/ScoreController'

describe('ScoreController 클래스', () => {
  describe('constructor', () => {
    it(
      'ScoreController 객체 생성 성공 시 ' +
        'userInput, numberToGuess 필드 각각이 생성자 파라미터와 동일하다',
      () => {
        const userInput = '123'
        const numberToGuess = '345'
        const scoreController = new ScoreController(userInput, numberToGuess)
        expect(scoreController.userInput).to.be.equal(userInput)
        expect(scoreController.numberToGuess).to.be.equal(numberToGuess)
      },
    )
  })

  describe('measure 메소드', () => {
    let spy: sinon.SinonSpy | null = null

    beforeEach(() => {
      if (spy !== null) {
        throw new Error('invalid sinon spy: failed to restore')
      }
      spy = sinon.spy(ScoreController.prototype, 'measure')
    })
    afterEach(() => {
      if (spy === null) {
        throw new Error('invalid sinon spy: failed to setup')
      }
      spy.restore()
      spy = null
    })

    // TODO 호출 완료 대신에 의미있는 테스트 케이스로 수정해야함
    it('호출 완료', () => {
      if (spy === null) {
        throw new Error('invalid sinon spy: null')
      }
      const userInput = '123'
      const numberToGuess = '345'
      const scoreController = new ScoreController(userInput, numberToGuess)
      scoreController.measure()
      expect(spy.calledOnce).to.be.equal(true)
    })
  })
})
