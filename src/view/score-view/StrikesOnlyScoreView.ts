import ScoreView from './ScoreView'
import { ScoreModelDto } from '../../dto/ScoreModelDto'

export default class StrikesOnlyScoreView implements ScoreView {
  run(): string {
    return ''
  }
}
