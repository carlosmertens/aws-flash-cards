import React from "react";
import "./App.css";
import QuizBar from "./components/QuizBar";

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
    // Console log test
    console.log(this.state.cardStyle);
    return (
      <div className="App">
        <QuizBar userChoice={this.userChoice} />
      </div>
    );
  }
}

export default App;
