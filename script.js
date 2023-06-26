// When clikcing the arrows it slides the next image

//we want the body itself
const body = document.body

const slides = document.querySelectorAll('.slide')

const leftBtn = document.getElementById('left')

const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > slides.length -1) {
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()

})
  
leftBtn.addEventListener('click', () => {
    activeSlide--

    if(activeSlide < 0) {
        //set activeSlide to the end
        activeSlide = slides.length -1
    }

    setBgToBody()
    setActiveSlide()

})

setBgToBody()

function setBgToBody (){
    // Deleted hard coded bg in cs
    // active slide starts at 0
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach(slide => 
        slide.classList.remove('active'))

        slides[activeSlide].classList.add('active')
}

