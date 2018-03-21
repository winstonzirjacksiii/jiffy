import React from 'react';
import Giphy from '../modules/giphy';
import GifCard from '../components/GifCard';
import SearchForm from '../components/SearchForm';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      currOffset: 0,
      loadMore: false
    };
  }

  handleFormSubmit({term, count, rating}) {
    Giphy.searchGifs(term, count,rating).then((results) => {
      if (results.length) this.setState({gifs: results});
    });
  }

  render() {
    const gifCards = this.state.gifs.map((gifObj, index) => <GifCard key={index} gifObj={gifObj} />);

    return (
      <main>
        <p className="App-intro">
          You're on the main page.
        </p>
        <SearchForm handleSubmit={this.handleFormSubmit.bind(this)} />
        <section>{gifCards}</section>
      </main>
    );
  }
}

export default Main;