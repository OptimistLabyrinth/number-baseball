import Model from '../Model'

export default class NumberToGuessController {
  generate(): string {
    const numberToGuessModel = new Model.NumberToGuessModel()
    return numberToGuessModel.generate()
  }
}
