import utils from './utils'

export default class NumberInputView {
  async request(): Promise<string> {
    return await utils.question('숫자를 입력하세요: ')
  }
}
