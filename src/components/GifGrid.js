import React from 'react';
import GifCard from '../components/GifCard';
import LoadingAnim from '../components/LoadingAnim';

class GifGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      loadedGifs: []
    }
  }

  componentWillReceiveProps(){
    if (this.props.freshStart) {
      this.setState({
        loading: true,
        loadedGifs: []
      });
    }
  }

  onLoad(currGif) {
    console.log("onload", currGif);
    const loading = this.state.loadedGifs.length+1 < this.props.gifs.length ? true : false;
    this.setState({
      loading,
      loadedGifs: [...this.state.loadedGifs, currGif]}
    );
  }

  render() {
    const gifImages = this.props.gifs.map((gifObj, index) => <img key={index} src={gifObj.src} onLoad={this.onLoad.bind(this, gifObj)} alt={`dummy loader for: ${gifObj.title}`} />),
          gifCards = this.state.loadedGifs.map((gifObj, index) => <GifCard key={index} gifObj={gifObj} />),
          loadedClass = this.state.loading ? "m-gifs-container is-loading" : "m-gifs-container";
  
    return (
      <section className={loadedClass}>
        <div className="m-gif-grid">
          {gifCards}
        </div>
        <div className="m-hidden">
          {gifImages}
        </div>
        {
          this.state.loading &&
          <LoadingAnim />
        }
      </section>
    );
  }
}

export default GifGrid;