import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  return <div className="app">Trivia!</div>;
}

var questionNumber = 0;

function Question({text}) {
  return (
  <div className="question">
    <Question text = {text}/>
    <Question text = "test"/>
  </div>
  );
}


export default App;
