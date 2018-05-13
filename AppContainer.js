"use strict";

import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { store } from "./app/store";
import { AsyncStorage, View, ActivityIndicator } from "react-native";
import App from "./App";

export default class AppContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
