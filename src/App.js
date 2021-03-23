import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar ';
import { hot } from "react-hot-loader";
import Bucket from "./components/Bucket";
import viewBucket from "./components/viewBucket";
import { Switch, Route } from 'react-router-dom';
import { GlobalProvider } from "./context/GlobalState";
import AddBucket from './components/AddnewBucket';

const App = () => {

    return (
        <div className="App">
            <GlobalProvider>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Bucket} />
                    <Route path="/add-new" component={AddBucket} />
                    <Route path="/bucket/:bucketID" component={viewBucket} />
                </Switch>
            </GlobalProvider>
        </div >
    )
}
export default hot(module)(App);