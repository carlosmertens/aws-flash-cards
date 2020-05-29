import React, { Component } from "react";
import RandomWeighted from "./RandomWeighted";
import RegularCard from "./RegularCard";
import MultiCard from "./MultiCard";

class FlashCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipClass: "",
    };
  }

  flip = (e) => {
    let newFlip = this.state.flipClass === "" ? "flip" : "";
    this.setState({ flipClass: newFlip });
  };

  render() {
    return (
      <div>
        <div className="row align-items-center card-holder">
          <div
            onClick={this.flip}
            className={`col-sm-6 offset-sm-3 card mb-3 ${this.state.flipClass}`}>
            <RandomWeighted />
          </div>
        </div>
      </div>
    );
  }
}

export default FlashCard;
