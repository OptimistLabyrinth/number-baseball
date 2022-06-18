import { ScoreModelDto } from '../../dto/ScoreModelDto'
import ScoreView from '../../view/score-view/ScoreView'
import ErrorScoreView from '../../view/score-view/ErrorScoreView'
import BallsOnlyScoreView from '../../view/score-view/BallsOnlyScoreView'
import NothingScoreView from '../../view/score-view/NothingScoreView'
import StrikesAndBallsScoreView from '../../view/score-view/StrikesAndBallsScoreView'
import StrikesOnlyScoreView from '../../view/score-view/StrikesOnlyScoreView'

export default class ScoreViewBuilder {
  score: ScoreModelDto

  constructor(score: ScoreModelDto) {
    this.score = { ...score }
  }

  build(): ScoreView {
    if (this.score.error !== null) {
      return new ErrorScoreView()
    }
    if (this.score.strikes === 3) {
      return new StrikesOnlyScoreView()
    }
    if (0 < this.score.strikes && 0 < this.score.balls) {
      return new StrikesAndBallsScoreView()
    }
    if (this.score.strikes === 0 && 0 < this.score.balls) {
      return new BallsOnlyScoreView()
    }
    return new NothingScoreView()
  }
}
