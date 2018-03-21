import React from 'react';
import Giphy from '../modules/giphy';
import GifGrid from '../components/GifGrid';
import SearchForm from '../components/SearchForm';

import GifFormatter from '../modules/gifFormatter';

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
      if (results.length) {
        const newResults = results.map(GifFormatter);

        this.setState({gifs: newResults}); 
      }
    });
  }

  render() {

    return (
      <main>
        <p className="App-intro">
          You're on the main page.
        </p>
        <SearchForm handleSubmit={this.handleFormSubmit.bind(this)} />
        <GifGrid gifs={this.state.gifs}/>
      </main>
    );
  }
}

export default Main;