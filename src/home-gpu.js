// GPU Version
document.addEventListener('DOMContentLoaded', () => {

const card = document.getElementById('card')

window.addEventListener('mousemove', e => {

  const maxXRotation = 0.07
  const maxYRotation = 0.07

  // convert mouse position to proportions
  const mouseXAmount = e.clientX / window.innerWidth
  const mouseYAmount = e.clientY / window.innerHeight

  const xRotation = (mouseXAmount * maxXRotation * 2) - maxXRotation
  const yRotation = ((mouseYAmount * maxYRotation * 2) - maxYRotation) * -1

  card.style.transform = `rotateY(${clean(xRotation)}turn) rotateX(${clean(yRotation)}turn)`
  console.log(card.style.transform)

})

function clean(number) {
  let str = number.toString()
  if (str.indexOf('-') === -1) {
    return str.substring(0, 4)
  }
  return str.substring(0, 5)
}

})
