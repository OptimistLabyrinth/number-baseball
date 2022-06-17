import { createInterface } from 'readline'
import { stdin, stdout } from 'process'

export default async function question(message: string): Promise<string> {
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