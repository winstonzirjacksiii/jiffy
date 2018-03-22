import React from 'react';

function WithOnScrollGen(Component) {
  class WithOnScroll extends React.Component {
    componentDidMount() {
      window.addEventListener("scroll", this.onScroll);
    }
    componentWillUnmount() {
      window.removeEventListener("scroll", this.onScroll);
    }
    onScroll() {
      if ( (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 320) && this.props.content.length) {
        this.props.callback();
      }
    }
    render() {
      return (
        <Component {...this.props} />
      );
    }
  }

  return WithOnScroll;
}

export default WithOnScrollGen;