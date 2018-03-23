import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: "10",
      lastSubmit: "10"
    };
  }

  handleChange(event) {
    this.setState({count: event.target.value});
  }

  handleFormSubmit(event) {
    const {count, lastSubmit} = this.state;
    event.preventDefault();

    if (count !== lastSubmit) {
      console.log("handleSubmit");
      this.props.handleSubmit({
        count: this.state.count,
        rating: "R"
      });
    }
  }

  render () {
    return (
      <form className="m-form" id="searchForm" onSubmit={this.handleFormSubmit.bind(this)}>
        <select id="searchCount" onChange={this.handleChange.bind(this)}>
          <option value="10" defaultValue>10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <button type="submit">Search</button>
      </form>
    );
  }
};

export default SearchForm;
