import { expect } from 'chai'
import * as sinon from 'sinon'

import NumberInputModel from '../../../src/Model/NumberInputModel'

describe('NumberInputModel 클래스', () => {
  describe('validate 메소드', () => {
    it('성공 시 결과값은 true 이다', () => {
      const numberInputModel = new NumberInputModel()
      const userInput = '123'
      const valid = numberInputModel.validate(userInput)
      expect(valid).to.be.equal(true)
    })
  })
})
