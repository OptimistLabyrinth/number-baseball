import Model from '../Model'

export default class NumberInputController {
  userInput = ''

  setUserInput(userInput: string): void {
    this.userInput = userInput
  }

  validateUserInput(): boolean {
    const numberInputModel = new Model.NumberInputModel()
    return numberInputModel.validate(this.userInput)
  }
}
