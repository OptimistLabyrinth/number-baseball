import { expect } from 'chai'
import * as sinon from 'sinon'

// eslint-disable-next-line
import ScoreViewBuilder from '../../../../src/controller/builder/ScoreViewBuilder'
import { ScoreModelDto } from '../../../../src/dto/ScoreModelDto'

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
})
