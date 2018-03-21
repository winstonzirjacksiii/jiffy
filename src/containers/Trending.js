import React from 'react';
import Giphy from '../modules/giphy';
import GifCard from '../components/GifCard';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      currOffset: 0,
      loadMore: false
    }
  }
  handleTrendingClick() {
    Giphy.getTrendingGifs().then((results) => {
      if (results.length) this.setState({gifs: results});
    });
  }

  render() {
    const gifCards = this.state.gifs.map((gifObj, index) => <GifCard key={index} gifObj={gifObj} />);

    return (
      <main>
        <p className="App-intro">
          You're now on the trending page.
          <button onClick={this.handleTrendingClick.bind(this)}>Trending</button>
        </p>
        <section>{gifCards}</section>
      </main>
    );
  }
}

export default Main;