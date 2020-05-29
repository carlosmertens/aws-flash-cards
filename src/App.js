import React from "react";
import "./App.css";
import QuizBar from "./components/QuizBar";
import FlashCard from "./components/FlashCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardStyle: "Random",
    };
  }

  userChoice = (cardStyle) => {
    this.setState({ cardStyle });
  };

  render() {
    // console.log(this.state.cardStyle);
    return (
      <div className="App align-items-center d-flex">
        <div className="container">
          <QuizBar userChoice={this.userChoice} />
          <FlashCard cardStyle={this.state.cardStyle} />
        </div>
      </div>
    );
  }
}

export default App;
