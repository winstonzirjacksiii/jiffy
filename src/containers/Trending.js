import React from 'react';
import Giphy from '../modules/giphy';
import GifGrid from '../components/GifGrid';

import GifFormatter from '../modules/gifFormatter';


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: []
    }
  }

  componentDidMount() {
    this.getTrendingData();
  }

  getTrendingData() {
    Giphy.getTrendingGifs().then((results) => {
      const newResults = results.map(GifFormatter);

      if (results.length) this.setState({gifs: newResults});
    });
  }

  render() {
    return (
      <main>
        <p className="App-intro">
          You're now on the trending page.
          <button onClick={this.getTrendingData.bind(this)}>Update Trending Maybe?</button>
        </p>
        <GifGrid gifs={this.state.gifs}/>
      </main>
    );
  }
}

export default Main;