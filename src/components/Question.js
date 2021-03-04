function Question(){

  //var numOfChoices = data[questionNumber].question.choice.length();
  /* var answers = "";
  for(var i = 0; i < numOfChoices; i++){
    answers += "<Answer text=\"
  }
  */

 var answersChoices = data[questionNumber].question.choices.map((choice) => {
    
  if(data[questionNumber][data[questionNumber].correct_choice_index] == choice){
    return(
      <Answer text={choice} onClick={() => true}/>
    )
  }else{
  return(
    <Answer text={choice} onClick={() => false}/>
  )}
});

return (
<div className="Question">{text}
  {answersChoices}
</div>
);
}
export default Question;