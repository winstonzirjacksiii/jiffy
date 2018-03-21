import React from 'react';
import Giphy from '../utilities/giphy';
import GifGrid from '../components/GifGrid';
import SearchForm from '../components/SearchForm';

import GifFormatter from '../utilities/gifFormatter';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      currOffset: 0,
      loadMore: false
    };
  }

  handleFormSubmit({term, count, rating, offset}) {
    Giphy.searchGifs(term, count, rating, offset).then((results) => {
      if (results.length) {
        const newResults = results.map(GifFormatter);

        this.setState({gifs: newResults}); 
      }
    });
  }

  render() {

    return (
      <main>
        <SearchForm handleSubmit={this.handleFormSubmit.bind(this)} />
        <GifGrid gifs={this.state.gifs}/>
      </main>
    );
  }
}

export default Main;