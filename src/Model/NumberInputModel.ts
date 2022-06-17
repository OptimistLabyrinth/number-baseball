export default class NumberInputModel {
  validate(userInput: string) {
    if (userInput.length !== 3)
      return false
    return true
  }
}
