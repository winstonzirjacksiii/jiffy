import React from 'react';

class GifCard extends React.Component{
  constructor(props) {
    super(props);

    this.state = {toggled: false}
  }

  handleClick() {
    this.setState({toggled: !this.state.toggled});
  }

  render() {
    const {src, srcLrg, title, url, username} = this.props.gifObj;
    const toggleClass = this.state.toggled ? "is-active" : "";

    return (
      <article onClick={this.handleClick.bind(this)} className="m-gif-card e-smack">
        <img src={src} alt={title} />
        {
          this.state.toggled &&
          <img src={srcLrg} alt={title} className="m-gif-card--img-lrg" />
        }
        <div className={`m-toggle ${toggleClass}`}>
          <a href={url} target="_blank" className="m-gif-card--content">
            <div class="m-gif-card--text">
              <h2>{title}</h2>
              {
                username &&
                <h4>{`@${username}`}</h4>
              }
            </div>
          </a>
        </div>
      </article>
    );
  }

}

export default GifCard;