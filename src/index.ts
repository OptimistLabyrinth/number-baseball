import UserInput from './View/UserInput'

main()

async function main() {
  const numberInput = await UserInput.number()
  console.log({
    numberInput,
  })
}
