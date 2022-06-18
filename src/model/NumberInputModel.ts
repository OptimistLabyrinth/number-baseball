import NumberConst from '../const/NumberConst'

export default class NumberInputModel {
  validate(userInput: string): boolean {
    if (userInput.length !== NumberConst.LENGTH) return false
    for (const each of userInput) {
      if (!NumberConst.POSSIBLE_CHARACTERS.find((x) => x === each)) {
        return false
      }
    }
    return true
  }
}
