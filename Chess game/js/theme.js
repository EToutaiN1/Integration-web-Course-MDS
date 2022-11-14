const pieceWrapper = document.querySelectorAll('.piece-wrapper');

const blueShadow = document.querySelectorAll('.blue');
const redShadow = document.querySelectorAll('.red');

console.log(blueShadow);

pieceWrapper[0].addEventListener('mouseover', () => {
    for (let i = 0; i < blueShadow.length; i++) {
        blueShadow[i].style.transitionDelay = `${i}00ms`;
        blueShadow[i].style.transform = 'translate(20%, -20%)'
        blueShadow[i].style.opacity = '1'
    }
})

pieceWrapper[1].addEventListener('mouseover', () => {
    for (let i = 0; i < redShadow.length; i++) {
        redShadow[i].style.transitionDelay = `${i}00ms`;
        redShadow[i].style.transform = 'translate(20%, -20%)'
        redShadow[i].style.opacity = '1'
    }
})

pieceWrapper[0].addEventListener('mouseout', () => {
    blueShadow.forEach(shadow =>{
        shadow.style.transform = 'translate(0%, 0%)'
        shadow.style.opacity = '0'
    })
})

pieceWrapper[1].addEventListener('mouseout', () => {
    redShadow.forEach(shadow =>{
        shadow.style.transform = 'translate(0%, 0%)'
        shadow.style.opacity = '0'
    })
})