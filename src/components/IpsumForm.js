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
  // TODO: handle All
  if (character === 'All') {
    quoteList = quotes;
    console.log(quoteList);
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
      paragraphs: null,
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
          <p>Select Your Character:</p>
          <select
            value={this.state.character}
            onChange={this.handleSelectChange}
            name="characterPick"
          >
            <option value="All">All</option>
            <option value="Michael Scott">Michael Scott</option>
            <option value="Dwight Shrute">Dwight Shrute</option>
            <option value="Jim Halpert">Jim Halpert</option>
            <option value="Andy Bernard">Andy Bernard</option>
            <option value="Creed Bratton">Creed Bratton</option>
          </select>
          <div className="length">
            <p>How Many Paragraphs?</p>
            <input
              onChange={this.handleInputChange}
              name="paragraphLength"
              type="text"
            />
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
        <IpsumText
          person={this.state.character}
          length={this.state.paragraphs}
          value={this.state.value}
          handleSubmit={this.handleSubmit}
          handleReset={this.handleReset}
        />
      </div>
    );
  }
}

export default IpsumForm;
