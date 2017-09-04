document.addEventListener('DOMContentLoaded', () => {

const card = document.getElementById('card')

window.addEventListener('mousemove', e => {

  const maxRotation = 0.1

  // convert mouse position to proportions
  const mouseXAmount = e.clientX / window.innerWidth
  const mouseYAmount = e.clientY / window.innerHeight

  const xRotation = (mouseXAmount * maxRotation * 2) - maxRotation
  const yRotation = ((mouseYAmount * maxRotation * 2) - maxRotation) * -1

  card.style.transform = `rotate3d(${clean(yRotation)}, ${clean(xRotation)}, 0, 20deg)`
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
