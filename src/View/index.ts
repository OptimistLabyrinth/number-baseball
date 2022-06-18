import NumberInputView from './NumberInputView'
import Controller from '../Controller'

export default class View {
  async run() {
    const numberInputView = new NumberInputView()
    const numberInput = await numberInputView.request()

    // prettier-ignore
    const numberInputController = new Controller.NumberInputController(
      numberInput,
    )
    const validNumberInput = numberInputController.validateUserInput()
    if (!validNumberInput) {
      numberInputView.respondInvalidInput()
      return
    }
  }
}
