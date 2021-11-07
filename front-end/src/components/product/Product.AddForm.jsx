//imports
import axios from '../../servises/axios.servise';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'
//class declaration
export default class ProductAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: '',
            name: '',
            amount: null,
            inStock: null,
            deliveries: [],
            options: [],
            selectedDeliveries: []
        }
    }

    // initialze the methods that need done at opening the component
    componentDidMount() {
        axios.get(`${process.env.API_URL}delivery`)
            .then(response => {
                this.setState({ deliveries: response.data.data }, () => {
                    let data = [];
                    this.state.deliveries.map((item, index) => {
                        let delivery = {
                            value: item._id,
                            label: item.type + " " + item.owner,
                        }
                        data.push(delivery)
                    })
                    this.setState({ options: data });
                })
            })
    }

    // onChange handler for select
    onDeliverySelect(e) {
        this.setState({ selectedDeliveries: e ? e.map(item => item.value) : [] });
        console.log(this.state.selectedDeliveries);
    }

    // onChange handler for select
    onChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(this.state.name);
    }

    // insert data
    save() {

        //object cration with values
        const product = {
            "code": this.state.code,
            "name": this.state.name,
            "amount": this.state.amount,
            "inStock": this.state.inStock,
            "deliveries": this.state.selectedDeliveries
        }

        // back-end calling for insert values
        axios.post(`${process.env.API_URL}product`, product)
            .then(response => {
                window.location.reload();
                console.log(response.data);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <br /><br />
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 bg-dark text-light">
                                <h1 className="text-center">Add Product Form</h1>
                                {/* form start */}
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Code</label>
                                                <input type="text" className="form-control" name="code" onChange={event => { this.onChange(event) }} placeholder="Enter here..." />
                                            </div>
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input type="text" className="form-control" name="name" onChange={event => { this.onChange(event) }} placeholder="Enter here..." />
                                            </div>
                                            <div className="form-group">
                                                <label>Amount</label>
                                                <input type="number" className="form-control" name="amount" onChange={event => { this.onChange(event) }} placeholder="Enter here..." />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Stock Count</label>
                                                <input type="number" className="form-control" name="inStock" onChange={event => { this.onChange(event) }} placeholder="Enter here..." />
                                            </div>

                                            {/* in here already Implemented select multiple deliveris for a product
                                            but it not need to use this scenario */}

                                            {/* <div className="text-dark">
                                                <label htmlFor="deliveries" className="form-label text-light">Select Deliveries</label>
                                                <Select
                                                    options={this.state.options}
                                                    isMulti
                                                    onChange={(event) => { this.onDeliverySelect(event) }}
                                                    className='basic-multi-select'
                                                />
                                            </div> */}
                                            <p className="text-warning">NOTE :</p>
                                            <p className="text-info">in here already Implemented the select multiple deliveris for a product</p>
                                            <p className="text-info">but it commented because it not need to use this scenario</p>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                    <div className="col-md-3"></div>
                                        <div className="col-md-4">
                                            <Link to="/product"><button type="button" className="btn btn-warning">Cancel</button></Link>
                                        </div>
                                        <div className="col-md-4">
                                            <Link to="/product"><button type="button" className="btn btn-info" onClick={() => { this.save() }}>Submit</button></Link>
                                        </div>
                                    </div>
                                    <br />
                                </form>
                                {/* form end */}
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>
            </div>
        )
    }
}