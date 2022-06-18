import Model from '../Model'

export default class NumberInputController {
  userInput = ''

  constructor(userInput: string) {
    this.userInput = userInput
  }

  validateUserInput(): boolean {
    const numberInputModel = new Model.NumberInputModel()
    return numberInputModel.validate(this.userInput)
  }
}
