import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit({
      term: this.state.text, 
      count: 20,
      rating: "R"
    });
  }

  render () {
    return (
      <form className="m-form" id="searchForm" onSubmit={this.handleFormSubmit.bind(this)}>
        <input id="searchField" name="term" type="text" value={this.state.text} onChange={this.handleChange.bind(this)} />
        <button type="submit">Search</button>
      </form>
    );
  }
};

export default SearchForm;
