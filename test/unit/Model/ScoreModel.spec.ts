import { expect } from 'chai'
import * as sinon from 'sinon'

import ScoreModel from '../../../src/model/ScoreModel'
import NumberConst from '../../../src/const/NumberConst'

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

  describe('measure 메소드 (sinon.spy 사용)', () => {
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

    // prettier-ignore
    it(
      '정상적으로 실행 시 결과값 error 는 null 이고 ' +
        '결과값 ScoreDto 객체의 strike, ball, nothing 의 총 합은 ' +
        `${NumberConst.LENGTH}` +
        ' 이다',
      () => {
        if (spy === null) {
          throw new Error('invalid sinon spy: null')
        }
        const numberToGuess = '123'
        const scoreModel = new ScoreModel(numberToGuess)
        const userInput = '123'
        const resultScore = scoreModel.measure(userInput)
        const sumOfScores =
          resultScore.strikes + resultScore.balls + resultScore.nothings
        expect(spy.calledOnce).to.be.equal(true)
        expect(resultScore.error).to.be.null
        expect(sumOfScores).to.be.equal(NumberConst.LENGTH)
      },
    )
    // prettier-ignore
    it(
      '필드 numberToGuess 와 파라미터 userInput 값이 동일하다면 ' +
        '결과값의 strikes === 3, balls === 0, nothings === 0 이다',
      () => {
        if (spy === null) {
          throw new Error('invalid sinon spy: null')
        }
        const numberToGuess = '123'
        const scoreModel = new ScoreModel(numberToGuess)
        const userInput = '123'
        const resultScore = scoreModel.measure(userInput)
        expect(spy.calledOnce).to.be.equal(true)
        expect(resultScore.error).to.be.null
        expect(resultScore.strikes).to.be.equal(3)
        expect(resultScore.balls).to.be.equal(0)
        expect(resultScore.nothings).to.be.equal(0)
      },
    )
    // prettier-ignore
    it(
      '필드 numberToGuess 와 파라미터 userInput 에서 ' +
        '세 개의 동일한 숫자를 발견하지만 위치가 모두 틀린 경우 ' +
      '결과값의 strikes === 0, balls === 3, nothings === 0 이다',
      () => {
        if (spy === null) {
          throw new Error('invalid sinon spy: null')
        }
        const numberToGuess = '135'
        const scoreModel = new ScoreModel(numberToGuess)
        const userInput = '351'
        const resultScore = scoreModel.measure(userInput)
        expect(spy.calledOnce).to.be.equal(true)
        expect(resultScore.error).to.be.null
        expect(resultScore.strikes).to.be.equal(0)
        expect(resultScore.balls).to.be.equal(3)
        expect(resultScore.nothings).to.be.equal(0)
      },
    )
    // prettier-ignore
    it(
      '필드 numberToGuess 와 파라미터 userInput 에서 ' +
        '세 개의 숫자가 모두 다르다면 ' +
        '결과값의 strikes === 0, balls === 0, nothings === 3 이다',
      () => {
        if (spy === null) {
          throw new Error('invalid sinon spy: null')
        }
        const numberToGuess = '345'
        const scoreModel = new ScoreModel(numberToGuess)
        const userInput = '678'
        const resultScore = scoreModel.measure(userInput)
        expect(spy.calledOnce).to.be.equal(true)
        expect(resultScore.error).to.be.null
        expect(resultScore.strikes).to.be.equal(0)
        expect(resultScore.balls).to.be.equal(0)
        expect(resultScore.nothings).to.be.equal(3)
      },
    )
    // prettier-ignore
    it(
      '필드 numberToGuess 와 파라미터 userInput 에서 ' +
      '두 개는 숫자&위치 일치하고 한 개는 전혀 다른 숫자라면 ' +
      '결과값의 strikes === 2, balls === 0, nothings === 1 이다',
      () => {
        if (spy === null) {
          throw new Error('invalid sinon spy: null')
        }
        const numberToGuess = '123'
        const scoreModel = new ScoreModel(numberToGuess)
        const userInput = '124'
        const resultScore = scoreModel.measure(userInput)
        expect(spy.calledOnce).to.be.equal(true)
        expect(resultScore.error).to.be.null
        expect(resultScore.strikes).to.be.equal(2)
        expect(resultScore.balls).to.be.equal(0)
        expect(resultScore.nothings).to.be.equal(1)
      },
    )
    // prettier-ignore
    it(
      '필드 numberToGuess 와 파라미터 userInput 에서 ' +
      '한 개는 숫자&위치 일치하고 두 개는 숫자만 일치하면 ' +
      '결과값의 strikes === 1, balls === 2, nothings === 0 이다',
      () => {
        if (spy === null) {
          throw new Error('invalid sinon spy: null')
        }
        const numberToGuess = '345'
        const scoreModel = new ScoreModel(numberToGuess)
        const userInput = '354'
        const resultScore = scoreModel.measure(userInput)
        expect(spy.calledOnce).to.be.equal(true)
        expect(resultScore.error).to.be.null
        expect(resultScore.strikes).to.be.equal(1)
        expect(resultScore.balls).to.be.equal(2)
        expect(resultScore.nothings).to.be.equal(0)
      },
    )
    // prettier-ignore
    it(
      '필드 numberToGuess 와 파라미터 userInput 에서 ' +
      '한 개는 숫자&위치 일치하고 한 개는 숫자만 일치하고 나머지 한 개는 전혀 다른 숫자라면 ' +
      '결과값의 strikes === 1, balls === 1, nothings === 1 이다',
      () => {
        if (spy === null) {
          throw new Error('invalid sinon spy: null')
        }
        const numberToGuess = '146'
        const scoreModel = new ScoreModel(numberToGuess)
        const userInput = '162'
        const resultScore = scoreModel.measure(userInput)
        expect(spy.calledOnce).to.be.equal(true)
        expect(resultScore.error).to.be.null
        expect(resultScore.strikes).to.be.equal(1)
        expect(resultScore.balls).to.be.equal(1)
        expect(resultScore.nothings).to.be.equal(1)
      },
    )
    // prettier-ignore
    it(
      '필드 numberToGuess 와 파라미터 userInput 에서 ' +
      '한 개는 숫자&위치 일치하고 두 개는 전혀 다른 숫자라면 ' +
      '결과값의 strikes === 1, balls === 0, nothings === 2 이다',
      () => {
        if (spy === null) {
          throw new Error('invalid sinon spy: null')
        }
        const numberToGuess = '915'
        const scoreModel = new ScoreModel(numberToGuess)
        const userInput = '987'
        const resultScore = scoreModel.measure(userInput)
        expect(spy.calledOnce).to.be.equal(true)
        expect(resultScore.error).to.be.null
        expect(resultScore.strikes).to.be.equal(1)
        expect(resultScore.balls).to.be.equal(0)
        expect(resultScore.nothings).to.be.equal(2)
      },
    )
    // prettier-ignore
    it(
      '필드 numberToGuess 와 파라미터 userInput 에서 ' +
      '두 개는 숫자만 일치하고 한 개는 전혀 다른 숫자라면 ' +
      '결과값의 strikes === 0, balls === 2, nothings === 1 이다',
      () => {
        if (spy === null) {
          throw new Error('invalid sinon spy: null')
        }
        const numberToGuess = '437'
        const scoreModel = new ScoreModel(numberToGuess)
        const userInput = '793'
        const resultScore = scoreModel.measure(userInput)
        expect(spy.calledOnce).to.be.equal(true)
        expect(resultScore.error).to.be.null
        expect(resultScore.strikes).to.be.equal(0)
        expect(resultScore.balls).to.be.equal(2)
        expect(resultScore.nothings).to.be.equal(1)
      },
    )
    // prettier-ignore
    it(
      '필드 numberToGuess 와 파라미터 userInput 에서 ' +
      '한 개는 숫자만 일치하고 두 개는 전혀 다른 숫자라면 ' +
      '결과값의 strikes === 0, balls === 1, nothings === 2 이다',
      () => {
        if (spy === null) {
          throw new Error('invalid sinon spy: null')
        }
        const numberToGuess = '852'
        const scoreModel = new ScoreModel(numberToGuess)
        const userInput = '368'
        const resultScore = scoreModel.measure(userInput)
        expect(spy.calledOnce).to.be.equal(true)
        expect(resultScore.error).to.be.null
        expect(resultScore.strikes).to.be.equal(0)
        expect(resultScore.balls).to.be.equal(1)
        expect(resultScore.nothings).to.be.equal(2)
      },
    )
  })

  describe('measure 메소드 (sinon.stub 사용)', () => {
    let stub: sinon.SinonStub | null = null

    beforeEach(() => {
      if (stub !== null) {
        throw new Error('invalid sinon stub: failed to restore')
      }
      stub = sinon.stub(ScoreModel.prototype, 'measure')
    })
    afterEach(() => {
      if (stub === null) {
        throw new Error('invalid sinon stub: failed to setup')
      }
      stub.restore()
      stub = null
    })

    // prettier-ignore
    it(
      '결과값의 strikes, balls, nothings 값이 전부 0 이라면 ' +
        'error 는 오류 메시지를 담은 문자열 타입이다',
      () => {
        if (stub === null) {
          throw new Error('invalid sinon stub: null')
        }
        stub.returns({
          error: '오류 메시지',
          strikes: 0,
          balls: 0,
          nothings: 0,
        })
        const resultScore = stub()
        expect(stub.calledOnce).to.be.equal(true)
        expect(typeof resultScore.error).to.be.equal('string')
        expect(resultScore.strikes).to.be.equal(0)
        expect(resultScore.balls).to.be.equal(0)
        expect(resultScore.nothings).to.be.equal(0)
      },
    )
  })
})
