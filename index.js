const body = document.querySelector('body')

const crearNieve = () => {
    let copo = document.createElement("i")
    let x = innerWidth * Math.random()
    let size = (Math.random() * 8) + 2
    let z = Math.round(Math.random()) * 100
    let delay = Math.random() * 5
    let anima = (Math.random() * 10) + 5

    copo.style.left = x + "px"
    copo.style.width = size + "px"
    copo.style.height = size + "px"
    copo.style.zIndex = z
    copo.style.animationDelay = delay + "s"
    copo.style.animationDuration = anima + "s"

    body.appendChild(copo)

    setTimeout(() => {
        copo.remove()
    }, anima * 900)

}

setInterval(crearNieve, 70)


const screen = document.getElementById('')
keys = document.getElementById('')


// const petalos1 = document.querySelector("body")
// const rain = () => {
//     let img = 0

//     while (img <= 50) {
//         let goup = document.querySelector("img")
//         let x = innerWidth * Math.random()
//         let time = 30 * Math.random()

//         goup.style.animationDuration = time + "s"
//         goup.style.animationDelay = time + "s"
//         goup.style.left = x + 'px'

//         body.appendChild(goup)
//         img++
//     }
// }
// rain()