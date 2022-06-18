import Model from '../model'

export default class NumberToGuessController {
  generate(): string {
    const numberToGuessModel = new Model.NumberToGuessModel()
    return numberToGuessModel.generate()
  }
}
