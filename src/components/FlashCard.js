import React, { Component } from "react";
import RandomWeighted from "./RandomWeighted";

class FlashCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Flash Card Component</h1>
        <RandomWeighted />
      </div>
    );
  }
}

export default FlashCard;
