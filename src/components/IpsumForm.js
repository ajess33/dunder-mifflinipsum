// TODO:
// write methods for select buttons

import React from 'react';
import IpsumText from './IpsumText';

class IpsumForm extends React.Component {
  state = {
    character: 'All',
    paragraphs: 1,
    ipsumDisplayed: false
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
      ipsumDisplayed: false
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      ipsumDisplayed: true
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
            <option value="Michael">Michael</option>
            <option value="Dwight">Dwight</option>
            <option value="Jim">Jim</option>
            <option value="Andy">Andy</option>
            <option value="Creed">Creed</option>
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
        {this.state.ipsumDisplayed === true && (
          <IpsumText
            person={this.state.character}
            length={this.state.paragraphs}
          />
        )}
      </div>
    );
  }
}

export default IpsumForm;
