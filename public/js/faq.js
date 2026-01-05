const questionBtn = document.querySelectorAll('.faq-toggle');
const faqAnswer = document.querySelectorAll('.answer-text');


function faqQuestion(i) {
  if (questionBtn[i].classList.toggle('active')){
    faqAnswer[i].style.display = 'none'
  } else {
    faqAnswer[i].style.display = 'block'
  }
}

for(let i = 0; i < questionBtn.length; i++){
  questionBtn[i].addEventListener('click', function(){
    faqQuestion(i)
  })
}
