import { stdin, stdout } from 'process'
import { createInterface } from 'readline'

export default class UserInputView {
  private async question(message: string): Promise<string> {
    return new Promise((resolve) => {
      const readLine = createInterface({
        input: stdin,
        output: stdout,
      })
      readLine.question(message, (userInput) => {
        resolve(userInput)
        readLine.close()
      })
    })
  }

  async number(): Promise<string> {
    return await this.question('숫자를 입력하세요: ')
  }
}
