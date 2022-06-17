import View from './View'

main()

async function main() {
  const numberInput = await View.UserInput.number()
  console.log({
    numberInput,
  })
}
