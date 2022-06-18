import { expect } from 'chai'
import * as sinon from 'sinon'

import ScoreModel from '../../../src/Model/ScoreModel'

describe('ScoreModel 클래스', () => {
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

    it('호출 성공', () => {
      if (spy === null) {
        throw new Error('invalid sinon spy: null')
      }
      const scoreModel = new ScoreModel()
      const userInput = '123'
      scoreModel.measure(userInput)
      expect(spy.calledOnce).to.be.equal(true)
    })
  })
})
