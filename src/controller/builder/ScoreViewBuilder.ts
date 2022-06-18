import { ScoreModelDto } from '../../dto/ScoreModelDto'
import ScoreView from '../../view/score-view/ScoreView'

export default class ScoreViewBuilder {
  score: ScoreModelDto

  constructor(score: ScoreModelDto) {
    this.score = { ...score }
  }

  build(): ScoreView {
    return new ScoreView()
  }
}
