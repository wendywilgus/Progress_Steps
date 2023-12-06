const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

   progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

   //if the current active circle is number 1, we want the previous button to be disabled.  If the current active circle is the last button, we want the next button to be disabled. Otherwise, we want both buttons to be active. 
   if(currentActive === 1) {
    prev.disabled = true
   } else if(currentActive === circles.length) {
    next.disabled = true
   } else {
    prev.disabled = false
    next.disabled = false
   }
}