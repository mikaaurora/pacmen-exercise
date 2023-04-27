let pos = 0
const pacArray = [
  ['PacMan1.png', 'PacMan2.png'],
  ['PacMan3.png', 'PacMan4.png']
]
let pageWidth = window.innerWidth
let direction = 0
let focus = 0

function Run() {
  let img = document.getElementById('PacMan')
  let imgWidth = img.width
  focus = (focus + 1) % 2
  direction = checkPageBounds(direction, imgWidth)
  img.src = pacArray[direction][focus]
  if (direction) {
    pos -= 20
    img.style.left = pos + 'px'
  } else {
    pos += 20
    img.style.left = pos + 'px'
  }
  // Use setTimeout to call Run every 1000 millesecs

  setInterval(Run, 1000, pos, pageWidth)
}

function checkPageBounds(direction, imgWidth) {
  //
  // Complete this to reverse direction on hitting page bounds
  //
  if (direction === 0 && pos + imgWidth > pageWidth) direction = 1
  if (direction === 1 && pos < 0) direction = 0

  return direction
}
