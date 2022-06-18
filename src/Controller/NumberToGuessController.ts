import Model from '../Model'

export default class NumberToGuessController {
  create(): string {
    const numberToGuessModel = new Model.NumberToGuessModel()
    return numberToGuessModel.create()
  }
}
