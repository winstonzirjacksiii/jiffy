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
    const {src, title, url, username} = this.props.gifObj;
    const toggleClass = this.state.toggled ? "is-active" : "";

    return (
      <article onClick={this.handleClick.bind(this)} className="m-gif-card e-smack">
        <img src={src} alt={title} />
        <div className={`m-toggle ${toggleClass}`}>
          <div className="m-gif-card--content">
            <a href={url} target="_blank">
              <h2>{title}</h2>
              <h4>{`@${username}`}</h4>
            </a>
          </div>
        </div>
      </article>
    );
  }

}

export default GifCard;