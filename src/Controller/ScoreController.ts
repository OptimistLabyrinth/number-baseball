import Model from '../Model'
import { ScoreModelDto } from '../dto/ScoreModelDto'

export default class ScoreController {
  userInput = ''
  numberToGuess = ''

  constructor(userInput: string, numberToGuess: string) {
    this.userInput = userInput
    this.numberToGuess = numberToGuess
  }

  measure() {
    const scoreModel = new Model.ScoreModel(this.numberToGuess)
    const score = scoreModel.measure(this.userInput)
  }
}
