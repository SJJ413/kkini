	window.onload = () => {
  const panelFaqContainer = document.querySelectorAll(".panel-faq-container");
  let panelFaqAnswer = document.querySelectorAll(".panel-faq-answer");
  let triangle = document.querySelectorAll(".triangle");
  for( let i=0; i < panelFaqContainer.length; i++ ) {
    panelFaqContainer[i].addEventListener('click', function() { 
      panelFaqAnswer[i].classList.toggle('active');
	  console.log(triangle[i].text);
    });
  };
  
  
}

