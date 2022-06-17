import UserInputView from './UserInputView'

export default class View {
  private userInputView: UserInputView

  constructor() {
    this.userInputView = new UserInputView()
  }

  async run() {
    await this.userInputView.number()
  }
}
