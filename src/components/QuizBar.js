import React from "react";
import QuizType from "./QuizType";

function QuizBar(props) {
  const quizArray = [
    { icon: "dice", type: "Random" },
    { icon: "file-alt", type: "Regular" },
    { icon: "dumbbell", type: "Weighted" },
    { icon: "font", type: "Multi" },
  ];

  // Map through the array and create a quiz type crad with QuizType component
  // Pass through the props
  const quizTypes = quizArray.map((typeItem, index) => {
    return (
      <QuizType
        key={index}
        icon={typeItem.icon}
        quizType={typeItem.type}
        userChoice={props.userChoice}
      />
    );
  });

  return (
    <div className="quiz-bar">
      <h1>Choose your study type</h1>
      <ul className="nav nav-pills nav-fill">{quizTypes}</ul>
    </div>
  );
}

export default QuizBar;
