import { expect } from 'chai'
import * as sinon from 'sinon'

import NumberToGuessModel from '../../../src/Model/NumberToGuessModel'
import NumberConst from '../../../src/const/NumberConst'

describe('NumberToGuessModel 클래스', () => {
  describe('generate 메소드', () => {
    let spy: sinon.SinonSpy | null = null

    beforeEach(() => {
      if (spy !== null) {
        throw new Error('invalid sinon spy: failed to restore')
      }
      spy = sinon.spy(NumberToGuessModel.prototype, 'generate')
    })
    afterEach(() => {
      if (spy === null) {
        throw new Error('invalid sinon spy: failed to setup')
      }
      spy.restore()
      spy = null
    })

    // prettier-ignore
    it(
      '사용자가 맞춰야 하는 문자열은 길이가 ' +
        `${NumberConst.LENGTH}` +
        ' 이다',
      () => {
        if (spy === null) {
          throw new Error('invalid sinon spy: null')
        }
        const numberToGuessModel = new NumberToGuessModel()
        const result = numberToGuessModel.generate()
        expect(spy.calledOnce).to.be.equal(true)
        expect(result.length).to.be.equal(NumberConst.LENGTH)
      },
    )
    // prettier-ignore
    it(
      '사용자가 맞춰야 하는 문자열의 개별 요소는 ' +
        '전부 1 ~ 9 중의 하나로 이루어져 있어야 한다',
      () => {
        if (spy === null) {
          throw new Error('invalid sinon spy: null')
        }
        const numberToGuessModel = new NumberToGuessModel()
        const result = numberToGuessModel.generate()
        let isValid = true
        const possibleCharacters = [...NumberConst.POSSIBLE_CHARACTERS]
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
    it('사용자가 맞춰야 하는 세 자리의 숫자에는 중복되는 숫자가 없다', () => {
      if (spy === null) {
        throw new Error('invalid sinon spy: null')
      }
      const numberToGuessModel = new NumberToGuessModel()
      const result = numberToGuessModel.generate()
      const charactersInNumberSet = new Set()
      for (const character of result) {
        charactersInNumberSet.add(character)
      }
      expect(spy.calledOnce).to.be.equal(true)
      expect(charactersInNumberSet.size).to.be.equal(NumberConst.LENGTH)
    })
  })
})
