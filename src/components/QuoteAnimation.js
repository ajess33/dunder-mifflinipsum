import React from 'react';
import shortQuotes from '../shortQuotes.js';
import '../animation.css';

class QuoteAnimation extends React.Component {
  state = {
    quote: ''
  };

  randomQuote = () => {
    let quote = shortQuotes[Math.floor(Math.random() * shortQuotes.length)];
    this.setState({
      quote: quote
    });
  };

  componentDidMount() {
    this.interval = this.randomQuote();
    this.interval = setInterval(() => this.randomQuote(), 8000);
  }

  render() {
    return (
      <div className="animation-container">
        <p className="quote">{this.state.quote.quote}</p>
        <p className="author">- {this.state.quote.character}</p>
      </div>
    );
  }
}

export default QuoteAnimation;
