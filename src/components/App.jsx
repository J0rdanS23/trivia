import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  return (

  <div className="app">Trivia!
    <Question text = {data[questionNumber].question.text}/>
    <NextQuestion/>
  </div>
  );
}

var questionNumber = 0;

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
    <div className="NextQuestion"><button>Next Question</button></div>
  );
}

function Answer({text}){
  return(
    <div className="Answer">{text}</div>
  );
}

console.log("Hello, world!");


export default App;
