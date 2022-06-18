import utils from './utils'

export default class NumberInputView {
  async request(): Promise<string> {
    return await utils.question('숫자를 입력하세요: ')
  }

  respondInvalidInput() {
    console.log('오류!! 1 ~ 9 세 자리 숫자만 입력해주세요')
  }
}
