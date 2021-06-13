//imports
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';
import axios from '../../servises/axios.servise'
//class declaretion
class DeliveryItemView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Delivery: this.props.delivery
        }
    }

    render() {
        return (
            //partial view
            <div className="col-md-4" >
                <div className="card bg-dark text-light">
                    <div className="card-header  text-warning">
                        <h1 className="text-center">{this.state.Delivery.type}</h1>
                    </div>
                    <div className="card-body">
                        <h5 className="text-center">Owner : {this.state.Delivery.owner}</h5>
                        <h5 className="text-center">Description : {this.state.Delivery.description}</h5>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary mr-3" onClick={()=> {
                            const {history} = this.props;
                            history.push(`/product/${this.state.Delivery._id}`);
                        }}> View Vehicles</button>
                     <button className="btn btn-warning " onClick={()=> {
                            const {history} = this.props;
                            history.push(`/cost/${this.state.Delivery._id}`);
                        }}> View Delivery Cost</button>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

//exports
export default withRouter(DeliveryItemView);