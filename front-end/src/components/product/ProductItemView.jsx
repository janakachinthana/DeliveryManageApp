//imports
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from '../../servises/axios.servise'
//class declaration
class ProductItemView extends Component{

    constructor(props){
        super(props);
        this.state = {
            Product: this.props.Product
        }
    }

    render(){
        return(
            // partial view
            <div className="col-md-4" >
                <div className="card bg-dark ">
                    <div className="card-header">
                    <h1 className="text-center text-warning">{this.state.Product.name}</h1>
                    </div>
                    <div className="card-body text-light">
                        <h4 className="text-center">Code: {this.state.Product.code}</h4>
                        <h4 className="text-center">Amount: {this.state.Product.amount}</h4>
                        <h4 className="text-center">Stock Count: {this.state.Product.inStock}</h4>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

//exports
export default withRouter(ProductItemView);