import React from 'react';

import Giphy from '../utilities/giphy';
import GifGrid from '../components/GifGrid';
import SearchForm from '../components/SearchForm';
import WithOnScroll from '../components/WithOnScroll';

import GifFormatter from '../utilities/gifFormatter';

class Main extends React.Component {
  constructor(props) {
    super();

    this.state = {
      gifs: [],
      term: "",
      count: "",
      rating: "",
      loadMore: false,
      isLoading: false
    };
  }

  handleFormSubmit({term, count, rating, offset}) {
    this.setState({
      term,
      count,
      rating,
      isLoading: true
    });

    Giphy.searchGifs(term, count, rating, offset).then((results) => {
      if (results.length) {
        const newResults = results.map(GifFormatter);

        this.setState({
          gifs: newResults,
          isLoading: false
        }); 
      }
    });
  }

  handleScroll() {
    const { term, count, rating, gifs } = this.state;

    this.setState({isLoading: true});

    Giphy.searchGifs(term, count, rating, gifs.length).then((results) => {
      if (results.length) {
        const newResults = results.map(GifFormatter);

        this.setState({
          gifs: [...this.state.gifs, ...newResults],
          isLoading: false
        }); 
      }
    });
  }

  render() {
    return (
      <main>
        <SearchForm handleSubmit={this.handleFormSubmit.bind(this)} />
        <GifGridWithOnScroll gifs={this.state.gifs}
                             content="gifs" 
                             isLoading={this.state.isLoading} 
                             callback={this.handleScroll.bind(this)} 
        />
      </main>
    );
  }
}


const GifGridWithOnScroll = WithOnScroll(GifGrid);

export default Main;