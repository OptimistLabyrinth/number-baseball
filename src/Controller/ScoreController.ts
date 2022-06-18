import Model from '../Model'
import { ScoreDto } from '../dto/ScoreDto'

export default class ScoreController {
  userInput = ''
  numberToGuess = ''

  constructor(userInput: string, numberToGuess: string) {
    this.userInput = userInput
    this.numberToGuess = numberToGuess
  }

  measure(): ScoreDto {
    const scoreModel = new Model.ScoreModel(this.numberToGuess)
    return scoreModel.measure(this.userInput)
  }
}
