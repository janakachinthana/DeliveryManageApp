//imports
import React, { Component } from 'react';
import DeliveryItemView from './DeliveryItemView';
import axios from '../../servises/axios.servise';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


//class declaretion
export default class Delivery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Deliveries: []
        }
    }

    // initialze the methods that need done at opening the component
    componentDidMount() {

        //calling back-end for retrieve data
        axios.get(`${process.env.API_URL}delivery`)
            .then(response => {
                this.setState({ Deliveries: response.data.data });
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <hr />
                        <h1 className="text-center">Deliveries</h1>

                        {/* nevigate to the add new form */}
                        <Link to="/delivery/Add" className="btn btn-success">Add New</Link>
                        <hr />
                        <div className="row">
                            {this.state.Deliveries.map((delivery) => {
                                return (

                                    // calling patial view
                                    <DeliveryItemView
                                        key={delivery._id}
                                        delivery={delivery} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}