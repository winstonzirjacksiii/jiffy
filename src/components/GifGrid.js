import React from 'react';
import GifCard from '../components/GifCard';

class GifGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      loadedGifs: []
    }
  }

  onLoad(currGif) {
    this.setState({
      loading: true,
      loadedGifs: [...this.state.loadedGifs, currGif]}
    );
  }

  componentWillUpdate() {
    if (this.state.loadedGifs.length === this.props.gifs.length) this.setState({loading:false});
  }

  render() {
    const gifImages = this.props.gifs.map((gifObj, index) => <img key={index} src={gifObj.src} onLoad={this.onLoad.bind(this, gifObj)} alt={`dummy loader for: ${gifObj.title}`} />),
          gifCards = this.state.loadedGifs.map((gifObj, index) => <GifCard key={index} gifObj={gifObj} />);
  
    return (
      <section>
        <div className="m-gif-grid">
          {gifCards}
        </div>
        <div className="m-hidden">
          {gifImages}
        </div>
      </section>
    );
  }
}

export default GifGrid;