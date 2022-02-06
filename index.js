function myButton (){
    var score = 0;
    var currentAnswer1 =document.first.quiz1.value;
    var currentAnswer2 =document.first.quiz2.value;
    var currentAnswer3 =document.first.quiz3.value;
    var currentAnswer4 =document.first.quiz4.value;
    var currentAnswer5 =document.first.quiz5.value;
    var result=document.getElementById("text");
    if (currentAnswer1=="Undefined"){score+=20};
    if (currentAnswer2=="Programming"){score+=20};
    if (currentAnswer3=="Functions"){score+=20};
    if (currentAnswer4=="Script"){score+=20};
    if(currentAnswer5=="Macro"){score+=20};
    quiz.style.display= "none";
  
  if(score==100){
    result.textContent="Your score is 100%.Excellent!";
  }
  else if (score==80){
    result.textContent="Your score is 80%. Excellent!";
  }
  else if (score==60){
    result.textContent="Your score is 60%. Fair!";
  }
  else{
    result.textContent="Your score is below average.Retake test!";
  }
}