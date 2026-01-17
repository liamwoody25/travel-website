const questionBtn = document.querySelectorAll('.faq-toggle');
const faqAnswer = document.querySelectorAll('.answer-text');
const offScreen = document.querySelector('.left-screen-menu');
const burgerSwitch = document.querySelector('.ham-burger');


function faqQuestion(i) {
  if (questionBtn[i].classList.toggle('active')){
    faqAnswer[i].style.display = 'none'
  } else {
    faqAnswer[i].style.display = 'block'
  }
}

function hamBurgerMenu() {
  if (burgerSwitch.classList.toggle('active')) {
    offScreen.classList.toggle('active')
  } else {
    offScreen.classList.toggle('active')
  }
}

for(let i = 0; i < questionBtn.length; i++){
  questionBtn[i].addEventListener('click', function(){
    faqQuestion(i)
  })
}

burgerSwitch.addEventListener('click' ,function(){
  hamBurgerMenu()
})
