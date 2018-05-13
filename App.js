"use strict";

import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { store } from "./app/store";
import { NavigationActions } from "react-navigation";
import Root from "./app/route/index.js";
import SellerRoute from "./app/route/sellerRoute";
import SellerStaffRoute from "./app/route/seller_staff";
import SellerManagerRoute from "./app/route/seller_manager";
import BuyerStaffRoute from "./app/route/buyer_staff";
import BuyerManagerRoute from "./app/route/buyer_manager";
import BuyerRoute from "./app/route/buyerRoute";
import EkkHero from "./app/route/ekkHero";
import GlobalFont from "react-native-global-font";
import { AsyncStorage, View, ActivityIndicator, BackHandler, Text, Alert } from "react-native";
import { BarsLoader, EmptyListView } from "./app/modules/common/index";
import { withNetworkConnectivity } from "react-native-offline";
import Snackbar from "react-native-snackbar";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      business_group: null,
      loaded: false
    };
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.network.isConnected === false) {
      Alert.alert("Warning !!", "No internet connection");
    }
  };
  componentWillMount() {
    AsyncStorage.getItem("userBusinesses")
      .then(value => {
        if (value != null) {
          store.dispatch({ type: "USER_BUSINESS", payload: JSON.parse(value) });
          return AsyncStorage.getItem("userProfile");
        }
      })
      .then(value => {
        store.dispatch({ type: "USER_DATA", payload: JSON.parse(value) });
        this.setState({
          loaded: true
        });
      })
      .catch(err => {
        this.setState({
          loaded: true
        });
        console.log("App.JS ===>", err);
      });

    GlobalFont.applyGlobal("Nunito-Regular");
  }
  alertMessage = message => {
    Snackbar.show({
      title: message,
      duration: Snackbar.LENGTH_SHORT
    });
  };
  render() {
    if (this.state.loaded) {
      if (this.props.userBusiness) {
        if (
          this.props.userBusiness.business_group === "Buyer" &&
          this.props.userBusiness.role === "Admin"
        ) {
          console.log("In -------------------------------- buyerRoute");
          return <BuyerRoute />;
        } else if (
          this.props.userBusiness.business_group === "Seller" &&
          this.props.userBusiness.role === "Admin"
        ) {
          console.log("In -------------------------------- SellerRoute");
          return <SellerRoute />;
        } else if (
          this.props.userBusiness.business_group === "Seller" &&
          this.props.userBusiness.role === "Staff"
        ) {
          console.log("In -------------------------------- SellerStaffRoute");
          return <SellerStaffRoute />;
        } else if (
          this.props.userBusiness.business_group === "Seller" &&
          this.props.userBusiness.role === "Manager"
        ) {
          console.log("In -------------------------------- SellerManagerRoute");

          return <SellerManagerRoute />;
        } else if (
          this.props.userBusiness.business_group === "Buyer" &&
          this.props.userBusiness.role === "Staff"
        ) {
          console.log("In -------------------------------- BuyerStaffRoute");

          return <BuyerStaffRoute />;
        } else if (
          this.props.userBusiness.business_group === "Buyer" &&
          this.props.userBusiness.role === "Manager"
        ) {
          console.log("In -------------------------------- BuyerStaffRoute");

          return <BuyerManagerRoute />;
        }
      } else {
        if (this.props.userProfile.RowKey) {
          console.log("In -------------------------------- EkkHero");
          return <EkkHero />;
        }
        console.log("In -------------------------------- Root");

        return <Root />;
      }
    } else {
      return <BarsLoader />;
    }
  }
}
const mapStateToProps = store => {
  return {
    userProfile: store.auth.userProfile ? store.auth.userProfile : null,
    userBusiness: store.auth.userBusinessess ? store.auth.userBusinessess[0] : null,
    network: store.network
  };
};
App = withNetworkConnectivity({
  withRedux: true // It won't inject isConnected as a prop in this case
})(App);

export default connect(mapStateToProps, null)(App);
