import React, { Component } from "react";
import RandomWeighted from "./RandomWeighted";
import RegularCard from "./RegularCard";
import MultiCard from "./MultiCard";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faSpinner);

class FlashCard extends Component {
  constructor(props) {
    super(props);
    this.apiHostRoot = `https://aws-services.robertbunch.dev/services`;
    this.state = {
      flipClass: "",
      questionData: "",
      ready: false,
    };
  }

  componentDidMount() {
    // this.newCard();
  }

  flip = (e) => {
    let newFlip = this.state.flipClass === "" ? "flip" : "";
    this.setState({ flipClass: newFlip });
  };

  newCard = () => {
    let path;
    // console.log(this.props.cardStyle);

    const cardStyle = this.props.cardStyle;
    if (cardStyle === "Random" || cardStyle === "Regular") {
      path = this.apiHostRoot + "/all";
    } else if (cardStyle === "Weighted") {
      path = this.apiHostRoot + "/weighted";
    } else {
      path = this.apiHostRoot + "/multi";
    }
    axios.get(path).then((response) => {
      // console.log(response.data);
      this.setState({ questionData: response.data, ready: true });
    });
  };

  render() {
    if (!this.state.ready) {
      this.newCard();
      return (
        <div>
          <FontAwesomeIcon icon="spinner" size="4x" spin />
        </div>
      );
    }

    const cardStyle = this.props.cardStyle;
    let card;
    if (cardStyle === "Multi") {
      card = <MultiCard questionData={this.state.questionData} />;
    } else if (cardStyle === "Regular") {
      card = <RegularCard questionData={this.state.questionData} />;
    } else {
      card = <RandomWeighted questionData={this.state.questionData} />;
    }

    return (
      <div>
        <div className="row align-items-center card-holder">
          <div
            onClick={this.flip}
            className={`col-sm-6 offset-sm-3 card mb-3 ${this.state.flipClass}`}>
            {card}
          </div>
        </div>
        <button onClick={this.newCard} className="btn btn-primary btn-lg">
          Next Question!
        </button>
      </div>
    );
  }
}

export default FlashCard;
