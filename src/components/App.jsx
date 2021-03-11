import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";
import Answer from './Answer';
import Question from './Question';
import NextQuestion from './NextQuestion';
function App() {
  let[questionNumber, setNumber] = useState(0);
  let[questionAnswered, setAnswer] = useState("The correct answer was not answered");

  console.log({questionNumber})
  var questionData = data[questionNumber].question;
  const changeAnswer = () => setAnswer("The correct answer is " + questionData.choices[questionData.correct_choice_index]);
  function updateQuestion(){
    if (questionNumber === 3) {
      //restart back to index 0
      setNumber(0);
    } else {
      //increment number
      setNumber(questionNumber + 1);
      setAnswer("The correct answer was not answered");
    }
  }

  var displayAnswer = "";
  var answersChoices = data[questionNumber].question.choices;
  var correctChoiceIndex = data[questionNumber].question.correct_choice_index;
  console.log(correctChoiceIndex);
  var correctAnswer = data[questionNumber].question.choices[correctChoiceIndex];

  function checkAnswer(correct, choice){
    console.log("In checkAnswer");
    setAnswer("The correct answer is " + correctAnswer);
    if(correct){
      displayAnswer = `Correct! You clicked ${choice}, which is the correct answer!`;
    }else{
      displayAnswer = `Wrong! You clicked ${choice}, the correct answer is ${questionData.choices[questionData.correct_choice_index]}!`;
    }
  }
 

  return (
  <div className="app">Trivia!
    <Question text={questionData.text} choices={answersChoices} correctChoiceIndex={correctChoiceIndex} questionNumber={questionNumber} checkAnswer={checkAnswer}/>
    {displayAnswer}
    <button onClick={changeAnswer}>Click for Correct Answer</button>
    {questionAnswered}
    <NextQuestion addOne={updateQuestion}/>
  </div>
  );
}

/*

function Question({text, answers, questionNumber}) {

  //var numOfChoices = data[questionNumber].question.choice.length();
  /* var answers = "";
  for(var i = 0; i < numOfChoices; i++){
    answers += "<Answer text=\"
  }
  */

//   var answersChoices = data[questionNumber].question.choices.map((choice) => {
    
//     if(data[questionNumber].choices[data[questionNumber].correct_choice_index] == choice){
//       return(
//         <Answer text={choice} handleClick={() => checkAnswer(true, choice)}/>
//       )
//     }else{
//     return(
//       <Answer text={choice} handleClick={() => checkAnswer(false, choice)}/>
//     )}
//   });

//   return (
//   <div className="Question">{text}
//     {answersChoices}
//   </div>
//   );
// }

// function NextQuestion({addOne}){
//   return(
//     <div className="NextQuestion"><button onClick={addOne}>Next Question</button></div>
//   );
// }

// function Answer({text, handleClick}){
//   /*var answersChoices = data[questionNumber].question.choices.map((choice) => {
//     return(
//       <Answer text={choice}/>
//     )
//       });*/
//   return(
//     <div className="Answer" onClick={handleClick}>{text}</div>
//   );
// }



export default App;
