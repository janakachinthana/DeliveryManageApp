//imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../servises/axios.servise';
import ProductItemView from './ProductItemView';

//calss declaretion
export default class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Products: [],
            status: this.props.status,
            hedding: 'Products'
        }
    }

    // initialze the methods that need done at opening the component
    componentDidMount() {

        //get id form url
        const id = this.props?.match?.params?.id;

        //check the route by using props for retrieve data
        this.state.status ? // used elvis operator

            //calling back-end to get all data
            axios.get(`${process.env.API_URL}product`)
                .then(response => {
                    this.setState({ Products: response.data.data });
                })
            :
            //calling back-end to get data
            axios.get(`${process.env.API_URL}delivery/${id}`)
                .then(response => {
                    console.log(response.data.data);
                    this.setState({ Products: response.data.data, status: true });
                });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <hr />
                        <h1 className="text-center">{this.state.hedding}</h1>

                        {/* navigate to the add form */}
                        <Link to="/product/Add" className="btn btn-success">Add New Product</Link>
                        <hr />
                        <div className="row">
                            {this.state.Products.map((product) => {
                                return (
                                    // calling partial view
                                    <ProductItemView
                                        key={product._id}
                                        Product={product} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}