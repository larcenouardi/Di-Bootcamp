import "./App.css";
import { Component } from "react";
import superheroes from "./superheroes.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      cardDesk: superheroes.superheroes,
      score: 0,
      maxScore: 0,
    };
  }

  handleClick = (event) => {
    const id = parseInt(event.target.id || event.target.parentElement.id);
    let { cardDesk, score, maxScore } = this.state;

    cardDesk = cardDesk.map((element) => {
      if (element.id === id) {
        if (!element.clicked) {
          score = score + 1;
          maxScore = Math.max(score, maxScore);
          return { ...element, clicked: true };
        } else {
          score = 0;
          cardDesk = cardDesk.map((element) => ({
            ...element,
            clicked: false,
          }));
        }
      }
      return element;
    });

    cardDesk = cardDesk.sort((a, b) => 0.5 - Math.random());

    this.setState({
      cardDesk,
      score,
      maxScore,
    });
  };

  render() {
    const { score, maxScore, cardDesk } = this.state;

    return (
      <>
        <h1>Superheroes Memory Game</h1>
        <h2>
          Score: {score} Top score: {maxScore}
        </h2>
        <h3>
          Get points by clicking on an image but don't click on any more than
          once!
        </h3>
        <div className="cardDesk">
          {cardDesk.map((value) => (
            <div
              className="card"
              key={value.id}
              id={value.id}
              onClick={this.handleClick}
            >
              <div
                className="image"
                style={{ backgroundImage: `url(${value.image})` }}
              ></div>
              <div>Name: {value.name}</div>
              <div>Occupation: {value.occupation}</div>
            </div>
          ))}
        </div>
      </>
    );
  }
}