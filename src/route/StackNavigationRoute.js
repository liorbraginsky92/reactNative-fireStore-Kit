import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import { StackNavigator, DrawerNavigator, TabNavigator } from "react-navigation";
import BusinessTypeContainer from "../modules/businesses/containers/BusinessTypeContainer";

import DrawerContainer from "../modules/core/containers/DrawerContainer.js";

// const DrawerStack = StackNavigator({
//   AuthScreen: {screen: Signup},
//   MobileLogin: { screen: MobileLogin },
//   ArticleListContainer: {screen: ArticleListContainer}
// }, {
//   headerMode: 'float',
//   title: 'stack nest'
// })

const openSidebar = navigation => {
  navigation.navigate("DrawerOpen");
};

const tabs = TabNavigator({
  first: {
    screen: BusinessTypeContainer
  },
  second: {
    screen: BusinessTypeContainer
  }
});

export default (StackNavigationRoute = DrawerNavigator(
  {
    tabs: {
      screen: tabs,
      navigationOptions: ({ navigation }) => ({
        title: "Home",
        headerLeft: (
          <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => openSidebar(navigation)}>
            <Text>+</Text>
          </TouchableOpacity>
        )
      })
    }
    // have to add tab navigator for this component
    // business: {
    //   screen: DrawerContainer
    // }
  },
  {
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: "#E53935" },
      headerTintColor: "white"
    })
  }
));
