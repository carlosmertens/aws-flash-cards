import React from "react";
import "./App.css";
import QuizBar from "./components/QuizBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <QuizBar />
      </div>
    );
  }
}

export default App;
