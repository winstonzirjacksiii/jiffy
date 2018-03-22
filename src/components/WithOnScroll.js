import React from 'react';
import debounce from '../utilities/debouncer';

const WithOnScrollGen = Component => 
  class WithOnScroll extends React.Component {
    constructor(props) {
      super();

      this.debouncedOnScroll = debounce(this.onScroll.bind(this), 500, false);
    }
    componentDidMount() {
      window.addEventListener("scroll", this.debouncedOnScroll);
    }
    componentWillUnmount() {
      window.removeEventListener("scroll", this.debouncedOnScroll);
    }
    onScroll() {
      if ( this.props &&
          (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 250) && 
           this.props[this.props.content].length &&
           !this.props.isLoading) {
        this.props.callback();
      }
    }
    render() {
      return (
        <Component {...this.props} />
      );
    }
  };

export default WithOnScrollGen;
