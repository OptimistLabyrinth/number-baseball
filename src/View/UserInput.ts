import { stdin, stdout } from 'process'
import { createInterface } from 'readline'

async function question(message: string): Promise<string> {
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

async function number(): Promise<string> {
  const numberInput = await question('숫자를 입력하세요: ')
  return numberInput
}

const UserInput = {
  number,
}

export default UserInput
