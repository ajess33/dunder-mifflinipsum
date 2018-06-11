import React from 'react';

class IpsumForm extends React.Component {
  state = {
    character: 'Any',
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

  handleSubmit = (e) => {
    console.log('submitted');
    console.log(this.state.character);
    console.log(this.state.paragraphs);
    e.preventDefault();
    e.nativeEvent.stopImmediatePropigation();
  };

  render() {
    return (
      <div className="ipsumForm">
        <form onSubmit={this.handleSumbit}>
          <p>Select Your Character</p>
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
            <p>How many paragraphs?</p>
            <input
              onChange={this.handleInputChange}
              name="paragraphLength"
              type="text"
            />
          </div>
          <input type="submit" value="Bibity Boppity Give Me The Zoppity" />
        </form>
      </div>
    );
  }
}

export default IpsumForm;
