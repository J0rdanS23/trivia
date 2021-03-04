import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";
//import Answer from './Answer';
//import Question from './Question';
//import NextQuestion from './NextQuestion';
function App() {
  let[questionNumber, setNumber] = useState(1);
  let[questionAnswered, setAnswer] = useState("The correct answer was not answered");
  var questionData = data[questionNumber].question;
  const changeAnswer = setAnswer("The correct answer is " + questionData.choices[questionData.correct_choice_index]);
  function updateQuestion(props) {
    setNumber(questionNumber + 1);
    setAnswer("The correct answer was not answered");
  }

  var displayAnswer;
  if(questionAnswered !== "The correct answer was not answered"){
    displayAnswer
  }

 

  return (
  <div className="app">Trivia!
    <Question text={questionData.text} questionNumber={questionNumber}/>
    <button onClick={()=> changeAnswer}>Click for Correct Answer</button>
    {questionAnswered}
    <NextQuestion addOne={updateQuestion()}/>
    <div>{displayAnswer}</div>
  </div>
  );
}


function checkAnswer(correct, choice){
  setAnswer("The correct answer is " + data[questionNumber].choices[data[questionNumber].correct_choice_index]);
  if(correct){
    return(`Correct! You clicked ${choice}, which is the correct answer!`);
  }else{
    return(`Wrong! You clicked ${choice}, the correct answer is ${questionData.choices[questionData.correct_choice_index]}!`);
  }
}



function Question({text, answers, questionNumber}) {

  //var numOfChoices = data[questionNumber].question.choice.length();
  /* var answers = "";
  for(var i = 0; i < numOfChoices; i++){
    answers += "<Answer text=\"
  }
  */

  var answersChoices = data[questionNumber].question.choices.map((choice) => {
    
    if(data[questionNumber].choices[data[questionNumber].correct_choice_index] == choice){
      return(
        <Answer text={choice} handleClick={() => checkAnswer(true, choice)}/>
      )
    }else{
    return(
      <Answer text={choice} handleClick={() => checkAnswer(false, choice)}/>
    )}
  });

  return (
  <div className="Question">{text}
    {answersChoices}
  </div>
  );
}

function NextQuestion({addOne}){
  return(
    <div className="NextQuestion"><button onClick={addOne}>Next Question</button></div>
  );
}

function Answer({text, handleClick}){
  /*var answersChoices = data[questionNumber].question.choices.map((choice) => {
    return(
      <Answer text={choice}/>
    )
      });*/
  return(
    <div className="Answer" onClick={handleClick}>{text}</div>
  );
}



export default App;
