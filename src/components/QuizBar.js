import React from "react";
import QuizType from "./QuizType";

function QuizBar(props) {
  return (
    <div className="quiz-bar">
      <h1>Choose your study type</h1>
      <ul className="nav nav-pills nav-fill">
        <QuizType icon="dice" quizType="Random" />
        <QuizType icon="font" quizType="Multi" />
        <QuizType icon="file-alt" quizType="Regular" />
        <QuizType icon="dumbbell" quizType="Weighted" />
      </ul>
    </div>
  );
}

export default QuizBar;
