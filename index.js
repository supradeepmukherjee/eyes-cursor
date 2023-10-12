let xStart = 0
// let xStart = 300
let yStart = 0
let xEnd = window.innerWidth
let yEnd = window.innerHeight
let xFractional, yFractional, xCurrent, yCurrent
let xRange = xEnd - xStart
let yRange = yEnd - yStart
window.addEventListener('mousemove', (e) => {
    xCurrent = e.clientX - xStart
    yCurrent = e.clientY - yStart
    xFractional = (xCurrent / xRange)
    yFractional = (yCurrent / yRange)
    let pupilCurrentX = pupilStart + (xFractional * pupilRange)
    let pupilCurrentY = pupilStart + (yFractional * pupilRange)
    pupilsArr.forEach(pupilCurrent => {
        pupilCurrent.style.transform = `translate(${pupilCurrentX}px, ${pupilCurrentY}px)`
    });
})
let pupils = document.getElementsByClassName('pupil')
let pupilsArr = Array.from(pupils)
let pupilStart = -100
let pupilRange = 200 // 250px - 50px 

window.addEventListener('resize',()=>{
    xEnd = window.innerWidth
    yEnd = window.innerHeight
    xRange = xEnd - xStart
    yRange = yEnd - yStart
})