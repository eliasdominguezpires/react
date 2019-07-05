import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Card,
    Button,
    CardTitle,
    CardText
} from 'reactstrap';
import { simpleAction } from '../actions/simpleAction';

class About extends Component {
    simpleAction = (event) =>{
        return this.props.simpleAction()
    }

    render() {        
        return (
            <>
                <div className="page-header">
                    <h1>About</h1>
                    <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </Card>
                    <Card body className="text-center">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </Card>
                    <Card body className="text-right">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <pre>
                            {
                                JSON.stringify(this.props)
                            }
                        </pre>
                        <Button onClick={this.simpleAction}>Go somewhere</Button>
                    </Card>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(About);