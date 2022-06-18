import { expect } from 'chai'
import * as sinon from 'sinon'

// eslint-disable-next-line
import ScoreViewBuilder from '../../../../src/controller/builder/ScoreViewBuilder'
import { ScoreModelDto } from '../../../../src/dto/ScoreModelDto'
import ErrorScoreView from '../../../../src/view/score-view/ErrorScoreView'
// eslint-disable-next-line
import BallsOnlyScoreView from '../../../../src/view/score-view/BallsOnlyScoreView'
import NothingScoreView from '../../../../src/view/score-view/NothingScoreView'
// eslint-disable-next-line
import StrikesAndBallsScoreView from '../../../../src/view/score-view/StrikesAndBallsScoreView'
// eslint-disable-next-line
import StrikesOnlyScoreView from '../../../../src/view/score-view/StrikesOnlyScoreView'

describe('ScoreViewBuilder 클래스', () => {
  describe('constructor', () => {
    it(
      'ScoreViewBuilder 객체 쌩성 성공 시 ' +
        'score 필드의 모든 프로퍼티 값은 ' +
        '생성자 파라미터 score 의 모든 프로퍼티 값과 동일하다',
      () => {
        const score: ScoreModelDto = {
          error: '',
          strikes: 0,
          balls: 0,
          nothings: 0,
        }
        const scoreViewBuilder = new ScoreViewBuilder(score)
        const scoreField = scoreViewBuilder.score
        expect(scoreField.error).to.be.equal(score.error)
        expect(scoreField.strikes).to.be.equal(score.strikes)
        expect(scoreField.balls).to.be.equal(score.balls)
        expect(scoreField.nothings).to.be.equal(score.nothings)
      },
    )
  })

  describe('build 메소드', () => {
    let spy: sinon.SinonSpy | null = null

    beforeEach(() => {
      if (spy !== null) {
        throw new Error('invalid sinon spy: failed to restore')
      }
      spy = sinon.spy(ScoreViewBuilder.prototype, 'build')
    })
    afterEach(() => {
      if (spy === null) {
        throw new Error('invalid sinon spy: failed to setup')
      }
      spy.restore()
      spy = null
    })

    it(
      '필드 score 객체의 내용이 { error: \'오류 메시지를 담은 문자열\' } 이면 ' +
        'ErrorScoreView 객체를 리턴한다',
      () => {
        if (spy === null) {
          throw new Error('invalid sinon spy: null')
        }
        const score: ScoreModelDto = {
          error: '오류 메시지',
          strikes: 0,
          balls: 0,
          nothings: 0,
        }
        const scoreViewBuilder = new ScoreViewBuilder(score)
        const result = scoreViewBuilder.build()
        expect(spy.calledOnce).to.be.equal(true)
        expect(result instanceof ErrorScoreView).to.be.equal(true)
      },
    )
    it(
      '필드 score 객체의 내용이 { error: null, strikes: 3 } 이면 ' +
        'StrikesOnlyScoreView 객체를 리턴한다',
      () => {
        if (spy === null) {
          throw new Error('invalid sinon spy: null')
        }
        const score: ScoreModelDto = {
          error: null,
          strikes: 3,
          balls: 0,
          nothings: 0,
        }
        const scoreViewBuilder = new ScoreViewBuilder(score)
        const result = scoreViewBuilder.build()
        expect(spy.calledOnce).to.be.equal(true)
        expect(result instanceof StrikesOnlyScoreView).to.be.equal(true)
      },
    )
    it(
      '필드 score 객체의 내용이 ' +
        '{ error: null, strikes: \'1 이상\', balls: \'1 이상\' } 이면 ' +
        'StrikesAndBallsScoreView 객체를 리턴한다',
      () => {
        if (spy === null) {
          throw new Error('invalid sinon spy: null')
        }
        const score: ScoreModelDto = {
          error: null,
          strikes: 1,
          balls: 1,
          nothings: 0,
        }
        const scoreViewBuilder = new ScoreViewBuilder(score)
        const result = scoreViewBuilder.build()
        expect(spy.calledOnce).to.be.equal(true)
        expect(result instanceof StrikesAndBallsScoreView).to.be.equal(true)
      },
    )
    it(
      '필드 score 객체의 내용이 ' +
        '{ error: null, strikes: 0, balls: \'1 이상\' } 이면 ' +
        'BallsOnlyScoreView 객체를 리턴한다',
      () => {
        if (spy === null) {
          throw new Error('invalid sinon spy: null')
        }
        const score: ScoreModelDto = {
          error: null,
          strikes: 0,
          balls: 2,
          nothings: 0,
        }
        const scoreViewBuilder = new ScoreViewBuilder(score)
        const result = scoreViewBuilder.build()
        expect(spy.calledOnce).to.be.equal(true)
        expect(result instanceof BallsOnlyScoreView).to.be.equal(true)
      },
    )
    it(
      '필드 score 객체의 내용이 { error: null, strikes: 0, balls: 0 } 이면 ' +
        'NothingScoreView 객체를 리턴한다',
      () => {
        if (spy === null) {
          throw new Error('invalid sinon spy: null')
        }
        const score: ScoreModelDto = {
          error: null,
          strikes: 0,
          balls: 0,
          nothings: 3,
        }
        const scoreViewBuilder = new ScoreViewBuilder(score)
        const result = scoreViewBuilder.build()
        expect(spy.calledOnce).to.be.equal(true)
        expect(result instanceof NothingScoreView).to.be.equal(true)
      },
    )
  })
})
