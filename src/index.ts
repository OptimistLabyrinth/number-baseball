import messageModule from './message'

main()

function main() {
  const message = messageModule.get()
  console.log(message)
}
