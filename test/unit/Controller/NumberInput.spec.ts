import { expect } from 'chai'
import * as sinon from 'sinon'

import NumberInput from '../../../src/Controller/NumberInput'

describe('NumberInput 클래스', () => {
  describe('setUserInput 메소드', () => {
    it('성공 시 NumberInput 객체의 userInput 필드의 값은 입력값과 동일하다', async () => {
      const numberInput = new NumberInput()
      const userInput = '123'
      numberInput.setUserInput(userInput)
      expect(numberInput.userInput).to.be.equal(userInput)
    })
  })
})
