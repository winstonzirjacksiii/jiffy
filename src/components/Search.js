import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super();
    this.state = { input: '' }
  }

  handleInput() {
    //this is for updating input.
    //input is included in state in-case we want to auto-search at somepoint  
  }

  handleSubmit() {

  }

  render() {
    return (
      <form>
        <label for="searchInput">Search:</label>
        <input id="searchInput" type="text" />
        <button type="submit">Search</button>
      </form>
    );
  }
}