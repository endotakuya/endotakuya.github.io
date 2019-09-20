var typeText = document.getElementById('js-type-text')

var typewriter = new Typewriter(typeText, {
  loop: true
})

typewriter.typeString('Hello!')
  .pauseFor(2500)
  .deleteAll()
  .typeString("I'm Enta.")
  .pauseFor(2500)
  .deleteChars(5)
  .typeString('Engineer.')
  .pauseFor(2500)
  .start()