import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarouselSlide from './carousel/CarouselSlide';
import CardImage from './card-image/CardImage';
import { deleteItems, getItems } from '../actions/ItemsAction';

class Home extends Component {
  componentWillMount() {
    this.props.getItems();
  }

  deleteItems = () => {
    this.props.deleteItems();
  };

  render() {
    return (
      <>
        <CarouselSlide />
        <br />
        <CardImage />
        <br />
        <button onClick={this.deleteItems}> Resetear </button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  deleteItems: () => dispatch(deleteItems()),
  getItems: () => dispatch(getItems()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
