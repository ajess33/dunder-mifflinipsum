// TODO:
// Add reset logic for form
// Style random quotes in textarea if more than one
// Add more quotes

import React from 'react';
import IpsumText from './IpsumText';
import quotes from '../quotes.js';

// =====================
// HELPERS
// =====================

const results = [];

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
    results.push(item.quote + '\n \n');
  }
  console.log(results);
};

// =====================

class IpsumForm extends React.Component {
  state = {
    character: 'All',
    paragraphs: 1,
    value: ''
  };

  handleInputChange = (e) => {
    const target = e.target;
    this.setState({ paragraphs: target.value });
  };

  handleSelectChange = (e) => {
    const target = e.target;
    this.setState({ character: target.value });
  };

  handleReset = (e) => {
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
        <form onSubmit={this.handleSubmit}>
          <div className="form-options">
            <div className="form-character">
              <p>Select Your Character:</p>
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
              <p>How Many Paragraphs?</p>
              <input
                onChange={this.handleInputChange}
                value={this.state.paragraphs}
                name="paragraphLength"
                type="text"
              />
            </div>
          </div>
          <hr />
          <input
            id="submit"
            type="submit"
            value="Bibity Boppity Give Me The Zoppity"
          />
          <button onClick={this.handleReset}>Reset</button>
        </form>
        <br />
        <IpsumText value={this.state.value} handleReset={this.handleReset} />
      </div>
    );
  }
}

export default IpsumForm;
