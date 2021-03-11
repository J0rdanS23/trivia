import React, { Component, useState } from "react";
function NextQuestion(props){
  return(
    <div className="NextQuestion"><button onClick={props.addOne}>Next Question</button></div>
  );
}
export default NextQuestion;