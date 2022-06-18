import { expect } from 'chai'
import * as sinon from 'sinon'

import ScoreModel from '../../../src/Model/ScoreModel'

describe('ScoreModel 클래스', () => {
  describe('constructor', () => {
    // prettier-ignore
    it('ScoreModel 객체 생성 성공 시 ' + 'numberToGuess 필드의 값은 생성자 파라미터와 동일하다',() => {
      const numberToGuess = '789'
      const scoreModel = new ScoreModel(numberToGuess)
      expect(scoreModel.numberToGuess).to.be.equal(numberToGuess)
    },
    )
  })

  describe('measure 메소드', () => {
    let spy: sinon.SinonSpy | null = null

    beforeEach(() => {
      if (spy !== null) {
        throw new Error('invalid sinon spy: failed to restore')
      }
      spy = sinon.spy(ScoreModel.prototype, 'measure')
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
      const numberToGuess = '123'
      const scoreModel = new ScoreModel(numberToGuess)
      const userInput = '123'
      scoreModel.measure(userInput)
      expect(spy.calledOnce).to.be.equal(true)
    })
  })
})
