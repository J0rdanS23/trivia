import React, { Component, useState } from "react";
import Answer from './Answer';
//import App from './App';
function Question(props){

  //var numOfChoices = data[questionNumber].question.choice.length();
  /* var answers = "";
  for(var i = 0; i < numOfChoices; i++){
    answers += "<Answer text=\"
  }
  */

return (
<div className="Question">{props.text}
  {props.choices.map((choice, i) => {
  console.log("in answerChoice.map");
  console.log("index:", i);
  console.log("Correct index", props.correctChoiceIndex);
  if(props.correctChoiceIndex === i){
    return (
      <Answer key={i} text={choice} handleClick={() => {props.checkAnswer(true, choice)}}/>
    )
  } else {
    //console.log("inside else statement");
    return (
      <Answer text={choice} key={i} handleClick={() => {
        props.checkAnswer(false, choice)}
      }/>
    )
  }
})}
</div>
);
}
export default Question;