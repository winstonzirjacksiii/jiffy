import React from 'react';
import Giphy from '../utilities/giphy';
import GifGrid from '../components/GifGrid';
import TrendingForm from '../components/TrendingForm';

import GifFormatter from '../utilities/gifFormatter';


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: []
    }

    this.getTrendingData = this.getTrendingData.bind(this);
  }

  componentDidMount() {
    this.getTrendingData({count: "10"});
  }

  getTrendingData({count, rating}) {
    Giphy.getTrendingGifs(count, rating).then((results) => {
      const newResults = results.map(GifFormatter);

      if (results.length) this.setState({gifs: newResults});
    });
  }

  render() {
    return (
      <main>
        <TrendingForm handleSubmit={this.getTrendingData} />
        <GifGrid gifs={this.state.gifs} freshStart={true} />
      </main>
    );
  }
}

export default Main;