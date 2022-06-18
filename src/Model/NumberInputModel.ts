export default class NumberInputModel {
  private possibleCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  validate(userInput: string): boolean {
    if (userInput.length !== 3) return false
    for (const each of userInput) {
      if (!this.possibleCharacters.find((x) => x === each)) {
        return false
      }
    }
    return true
  }
}
