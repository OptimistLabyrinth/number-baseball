import * as crypto from 'crypto'

export default class NumberToGuessModel {
  generate(): string {
    const numbers: number[] = []
    while (numbers.length < 3) {
      const randomNumber = crypto.randomInt(1, 10)
      if (!numbers.find((each) => each === randomNumber)) {
        numbers.push(randomNumber)
      }
    }
    return numbers.join('')
  }
}
