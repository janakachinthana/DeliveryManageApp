//imports
import axios from '../../servises/axios.servise';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'

//class declaretion
export default class DeliveryAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            owner: '',
            description: '',
            products: [],
            options: [],
            selectedProducts: []
        }
    }

      // initialze the methods that need done at opening the component
      componentDidMount() {
        axios.get(`${process.env.API_URL}product`)
            .then(response => {
                this.setState({ products: response.data.data }, () => {
                    let data = [];
                    this.state.products.map((item, index) => {
                        let product = {
                            value: item._id,
                            label: item.code + " " + item.name + " Rs: " + item.amount + " /=",
                        }
                        data.push(product)
                    })
                    this.setState({ options: data });
                })
            })
    }

     // onChange handler for select
     onProductSelect(e) {
        this.setState({ selectedProducts: e ? e.map(item => item.value) : [] });
        console.log(this.state.selectedProducts);
    }

    //onChange Handler for any of keyboard input
    onChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(this.state.type);
    }

    // back-end calling for insert data
    save() {
        const delivery = {
            "type": this.state.type,
            "owner": this.state.owner,
            "description": this.state.description,
            "products": this.state.selectedProducts
        }
        axios.post(`${process.env.API_URL}delivery`, delivery)
            .then(response => {
                console.log(response.data);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <br /><br /><br /><br /><br />
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4 bg-dark text-light">
                                <h1 className="text-center">Add Delivery Form</h1>
                                {/* start form */}
                                <form>
                                    <div className="form-group">
                                        <label>Type</label>
                                        <input type="text" className="form-control" name="type" onChange={event => { this.onChange(event) }} placeholder="Enter here..." />
                                    </div>
                                    <div className="form-group">
                                        <label>Owner</label>
                                        <input type="text" className="form-control" name="owner" onChange={event => { this.onChange(event) }} placeholder="Enter here..." />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input type="text" className="form-control" name="description" onChange={event => { this.onChange(event) }} placeholder="Enter here..." />
                                    </div>
                                    <div className="form-group text-dark">
                                        <label>Select Products</label>
                                        <Select
                                            options={this.state.options}
                                            isMulti
                                            onChange={(event) => { this.onProductSelect(event) }}
                                            className='basic-multi-select'
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <Link to="/delivery"><button type="button" className="btn btn-warning">Cancel</button></Link>

                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4">
                                            <Link to="/delivery"><button type="button" className="btn btn-info" onClick={() => { this.save() }}>Submit</button></Link>
                                        </div>
                                    </div>
                                    <br /><br />
                                </form>
                                {/* end form */}
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>
            </div>
        )
    }
}