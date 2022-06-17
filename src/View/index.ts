import UserInputView from './UserInputView'
import Controller from '../Controller'

export default class View {
  async run() {
    const userInputView = new UserInputView()
    const numberInput = await userInputView.number()

    const numberInputController = new Controller.NumberInputController()
    numberInputController.setUserInput(numberInput)
  }
}
