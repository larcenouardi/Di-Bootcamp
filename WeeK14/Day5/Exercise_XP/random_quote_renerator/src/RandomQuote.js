import React from "react";
import quotes from './QuotesDatabase';
import './RandomQuote.css';

class RandomQuote extends React.Component {
  constructor() {
    super();

    this.state = {
      quote: {
        quote: "Be kind whenever possible. It is always possible.",
        author: "Dalai Lama"
      },
      color: '#ff5287'
    }
  }

  getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  randomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  generateQuote = () => {
    this.setState({
      quote: this.getRandomQuote(),
      color: this.randomColor()
    });
  }

  render() {
    return (
      <div className="container">
        <p className="title" style={{ color: this.state.color }}>{this.state.quote.quote}</p>
        <p className="author" style={{ color: this.state.color }}>{this.state.quote.author}</p>
        <button className="button" style={{ backgroundColor: this.state.color }} onClick={this.generateQuote}>New Quote</button>
      </div>
    );
  }
}

export default RandomQuote;