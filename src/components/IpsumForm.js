import React from 'react';

class IpsumForm extends React.Component {
  state = {
    character: 'Any',
    length: '',
    type: 'Paragraphs'
  };

  render() {
    return (
      <div className="ipsumForm">
        <form>
          <p>Select Your Character</p>
          <select>
            <option value="All" selected>
              All
            </option>
            <option value="Michael">Michael</option>
            <option value="Dwight">Dwight</option>
            <option value="Jim">Jim</option>
            <option value="Andy">Andy</option>
            <option value="Creed">Creed</option>
          </select>
          <input type="text" />
          <input type="radio" value="Words" value="Words" />
          <input type="radio" value="Paragraphs" value="Paragraphs" />
        </form>
      </div>
    );
  }
}

export default IpsumForm;
