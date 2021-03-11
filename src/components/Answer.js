import React, { Component, useState } from "react";
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
export default Answer;