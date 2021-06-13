//imports
import axios from '../../servises/axios.servise'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'

// class declaration
export default class Cost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            DeliveryCost: null,
        }

    }


    // initialze the methods that need done at opening the component
    componentDidMount() {

        const id = this.props?.match?.params?.id;

        //calling back-end to get data
        axios.get(`${process.env.API_URL}cost/${id}`)
            .then(response => {
                console.log(response.data);
                this.setState({ DeliveryCost: response.data.data });
            });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <br /><br /><br />
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 bg-dark text-light">
                            <h1 className="text-center">Delivery Cost Page</h1>
                            <br /><br /><br />
                            <h1 className="text-center bg-info text-warning" >Cost : <h1 className="text-center bg-info text-danger">{this.state.DeliveryCost} /=</h1></h1>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}