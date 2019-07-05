import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarouselSlide from './carousel/CarouselSlide';
import CardImage from './card-image/CardImage';

class Home extends Component {
  render() {
    return (
      <>
        <div className="page-header"><h1 className="page-title">Home</h1></div>
        <div style={{ aling: 'center' }}>
          <CarouselSlide />
        </div>
        <br />
        <CardImage />
        <br />
        <CardImage />
      </>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  //simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);