import { ScoreDto } from '../dto/ScoreDto'

export default class ScoreModel {
  measure(userInput: string): ScoreDto {
    const score: ScoreDto = {
      error: null,
      strike: 0,
      ball: 0,
      nothing: 0,
    }
    return score
  }
}
