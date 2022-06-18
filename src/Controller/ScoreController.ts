import Model from '../Model'
import { ScoreDto } from '../dto/ScoreDto'

export default class ScoreController {
  userInput = ''

  constructor(userInput: string) {
    this.userInput = userInput
  }

  measure(): ScoreDto {
    const scoreModel = new Model.ScoreModel()
    return scoreModel.measure(this.userInput)
  }
}
