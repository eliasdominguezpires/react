import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from '../AppRoutes';
import Header from './Header';

import 'bootstrap/dist/css/bootstrap.css';

import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-lg-center">
          <Col lg={10} >
            <Header />
          </Col>
        </Row>
        <Row className="justify-content-lg-center">
          <Col lg={10}>
            <Main />
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    );
  };
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
