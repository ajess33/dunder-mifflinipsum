import React from 'react';
import IpsumText from './IpsumText';
import quotes from '../quotes.js';

// TODO:
// Add proptypes
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
    paragraphs: 1,
    value: ''
  };

  handleParagraphChange = (e) => {
    const target = e.target;
    this.setState({ paragraphs: target.value });
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
        <form onSubmit={this.handleSubmit}>
          <div className="form-options">
            <div className="form-character">
              <label>Select Your Character:</label>
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
              <label>Paragraphs:</label>
              <input
                onChange={this.handleParagraphChange}
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
        </form>
        <br />
        <IpsumText value={this.state.value} handleReset={this.handleReset} />
      </div>
    );
  }
}

export default IpsumForm;
