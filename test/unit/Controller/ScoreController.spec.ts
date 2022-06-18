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
})
