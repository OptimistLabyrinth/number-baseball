import { expect } from 'chai'
import * as sinon from 'sinon'

import ScoreController from '../../../src/Controller/ScoreController'

describe('ScoreController 클래스', () => {
  describe('constructor', () => {
    it('ScoreController 객체 생성 성공 시 userInput 필드의 값은 생성자 파라미터와 동일하다', () => {
      const userInput = '123'
      const scoreController = new ScoreController(userInput)
      expect(scoreController.userInput).to.be.equal(userInput)
    })
  })

  describe('giveForUserInput 메소드', () => {
    let spy: sinon.SinonSpy | null = null

    beforeEach(() => {
      if (spy !== null) {
        throw new Error('invalid sinon spy: failed to restore')
      }
      spy = sinon.spy(ScoreController.prototype, 'giveForUserInput')
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
      const scoreController = new ScoreController(userInput)
      scoreController.giveForUserInput()
      expect(spy.calledOnce).to.be.equal(true)
    })
  })
})
