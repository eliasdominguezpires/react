import React from 'react';
import { connect } from 'react-redux';

import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from 'reactstrap';
import CarouselSlide from '../carousel/CarouselSlide';

const CardImage = () => (
  <>
    <CardDeck>
      <Card>
        <CarouselSlide />
        <CardBody>
          <CardTitle>Flor Imperial</CardTitle>
          <CardSubtitle>200.000</CardSubtitle>
          <CardText>Arreglos Varios</CardText>
          <Button>Quiero comprar</Button>
        </CardBody>
      </Card>
      <Card>
        <CarouselSlide />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This card has supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button>Quiero comprar</Button>
        </CardBody>
      </Card>
      <Card>
        <CarouselSlide />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural
            lead-in to additional content.
          </CardText>
          <Button>Quiero comprar</Button>
        </CardBody>
      </Card>
    </CardDeck>
  </>
);

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardImage);
