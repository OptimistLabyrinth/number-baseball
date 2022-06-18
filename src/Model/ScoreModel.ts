import { ScoreDto } from '../dto/ScoreDto'

export default class ScoreModel {
  numberToGuess: string

  constructor(numberToGuess: string) {
    this.numberToGuess = numberToGuess
  }

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
