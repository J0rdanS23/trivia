import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let[questionNumber, setNumber] = useState(0);
  let[questionAnswered, setAnswer] = useState("The correct answer was not answered");
  const changeAnswer = setAnswer("The correct answer is " + questionData.choices[questionData.correct_choice_index]);
  
  return (

  <div className="app">Trivia!
    <Question text = {questionData.text}/>
    <button onClick={() => changeAnswer}>Click for Correct Answer</button>
    {questionAnswered}
    <NextQuestion/>
  </div>
  );
}


var questionNumber = 0;
var questionData = data[questionNumber].question;

function Question({text, answers}) {
  //var numOfChoices = data[questionNumber].question.choice.length();
  /* var answers = "";
  for(var i = 0; i < numOfChoices; i++){
    answers += "<Answer text=\"
  }
  */

  var answersChoices = data[questionNumber].question.choices.map((choice) => {
return(
  <Answer text={choice}/>
)
  });

  return (
  <div className="Question">{text}
    {answersChoices}
  </div>
  );
}

function NextQuestion(){
  return(
    <div className="NextQuestion"><button onClick={null}>Next Question</button></div>
  );
}

function Answer({text}){
  return(
    <div className="Answer">{text}</div>
  );
}

console.log("Hello, world!");


export default App;
