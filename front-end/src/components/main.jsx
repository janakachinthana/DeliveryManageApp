//imports
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Delivery from './delivery/Delivery';
import Product from './product/Product';
import DeliveryAddForm from './delivery/DeliveryAddForm';
import ProductAddForm from './product/Product.AddForm';
import Welcome from './welcome';
import Cost from './Cost/Cost';


//class Declaretion 
export default class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* set all sub routing */}
                <Switch>
                    <Route exact path="/">
                        <Welcome />
                    </Route>
                    <Route exact path="/delivery">
                        <Delivery />
                    </Route>
                    <Route path="/delivery/Add">
                        <DeliveryAddForm />
                    </Route>
                    <Route exact path="/product">
                        <Product
                            status={true} />
                    </Route>
                    <Route exact path="/product/Add">
                        <ProductAddForm />
                    </Route>
                    <Route exact path="/product/:id" render={(props) => <Product {...props} status={false} />} />
                    <Route exact path="/cost/:id" render={(props) => <Cost {...props} />} />
                    {/* <Route exact path="/product/remove/:id" render={(props) => <Vehicle {...props} isDeleted={true} status={true} />} /> */}
                    <Route exact path="/cost">
                        <Cost />
                    </Route>
                </Switch>

            </div>
        );
    }
}

