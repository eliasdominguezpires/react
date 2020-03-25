import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText } from 'reactstrap';
import { simpleAction } from '../actions/simpleAction';

class About extends PureComponent {
  simpleAction = () => this.props.simpleAction();

  render() {
    const estados = this.props.simpleReducer.result;
    console.log({estados});
    return (
      <>
        <div className="page-header">
          <h1>About</h1>
          <Card body>
            <CardTitle>{estados}</CardTitle>
            <CardText>
              <pre>
                { JSON.stringify(this.props) }
              </pre>
            </CardText>
            <button onClick={this.simpleAction}>Setear Render </button>
          </Card>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);
