import * as crypto from 'crypto'
import NumberConst from '../const/NumberConst'

export default class NumberToGuessModel {
  generate(): string {
    const numbers: number[] = []
    while (numbers.length < NumberConst.LENGTH) {
      const randomNumber = crypto.randomInt(1, 10)
      if (!numbers.find((each) => each === randomNumber)) {
        numbers.push(randomNumber)
      }
    }
    return numbers.join('')
  }
}
