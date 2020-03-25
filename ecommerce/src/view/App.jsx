
import React from 'react';
import { connect } from 'react-redux';

import { Container, Row, Col } from 'reactstrap';
import Main from '../AppRoutes';
import Header from './Header';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <Container fluid>
    <Row className="justify-content-lg-center">
      <Col lg={10}>
        <Header />
      </Col>
    </Row>
    <Row className="justify-content-lg-center">
      <Col lg={10}>
        <Main />
      </Col>
    </Row>
    <Row>
      <p> Footer </p>
    </Row>
  </Container>
);

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
