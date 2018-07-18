import React from 'react';
import IpsumText from './IpsumText';
import quotes from '../quotes.js';
import addLogo from '../add.svg';
import subtractLogo from '../subtract.svg';

// TODO:
// Add quote animation

// =====================
// HELPERS
// =====================

let results = [];

const filterQuotes = (character, paragraphs) => {
  let quoteList;
  if (character === 'All') {
    quoteList = quotes;
  } else {
    quoteList = quotes.filter((quote) => {
      return quote.character === character;
    });
  }
  for (let i = 0; i < paragraphs; i++) {
    let item = quoteList[Math.floor(Math.random() * quoteList.length)];
    results.push(item.quote);
  }
};

const resetResults = () => {
  results = [];
};

// =====================

class IpsumForm extends React.Component {
  state = {
    character: 'All',
    paragraphs: 3,
    value: ''
  };

  handleParagraphChange = (e) => {
    const target = e.target;
    this.setState({ paragraphs: target.value });
  };

  handleMinus = (e) => {
    e.preventDefault();
    if (this.state.paragraphs <= 0) {
      return;
    } else {
      this.setState({ paragraphs: this.state.paragraphs - 1 });
    }
  };

  handlePlus = (e) => {
    e.preventDefault();
    this.setState({ paragraphs: this.state.paragraphs + 1 });
  };

  handleSelectChange = (e) => {
    const target = e.target;
    this.setState({ character: target.value });
  };

  handleReset = () => {
    resetResults();
    this.setState({
      character: 'All',
      paragraphs: 1,
      value: ''
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    filterQuotes(this.state.character, this.state.paragraphs);
    this.setState({
      value: results
    });
  };

  render() {
    return (
      <div>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <div className="form-options">
            <div className="form-character">
              <label>
                <strong>Select Your Character:</strong>
              </label>
              <select
                value={this.state.character}
                onChange={this.handleSelectChange}
                name="characterPick"
              >
                <option value="All">All</option>
                <option value="Michael Scott">Michael Scott</option>
                <option value="Dwight Schrute">Dwight Schrute</option>
                <option value="Jim Halpert">Jim Halpert</option>
                <option value="Andy Bernard">Andy Bernard</option>
                <option value="Creed Bratton">Creed Bratton</option>
              </select>
            </div>
            <div className="length">
              <label>
                <strong>Paragraphs:</strong>
              </label>
              <div className="length-buttons">
                <button className="button-counter" onClick={this.handleMinus}>
                  <img src={subtractLogo} alt="subtraction symbol" />
                </button>
                <input
                  onChange={this.handleParagraphChange}
                  value={this.state.paragraphs}
                  name="paragraphLength"
                  type="text"
                />
                <button className="button-counter" onClick={this.handlePlus}>
                  <img src={addLogo} alt="addition symbol" />
                </button>
              </div>
            </div>
          </div>
          <hr />
          <input
            id="submit"
            type="submit"
            value="Bibity Boppity Give Me The Zoppity"
          />
        </form>
        <br />
        <IpsumText value={this.state.value} handleReset={this.handleReset} />
      </div>
    );
  }
}

export default IpsumForm;
