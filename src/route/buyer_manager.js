import React, { Component } from "react";
import { Platform, ScrollView, View, Text, Image } from "react-native";
import { StackNavigator, DrawerNavigator, TabNavigator, NavigationAction } from "react-navigation";
import { NavigationBarIcon } from "../modules/common";
import GlobalStyles, { Font } from "../config/styles";
import Translations from "../config/translations";
import { ModalSelectionWindow, TransitionConfiguration } from "../modules/common";

import Splash from "../modules/authentications/containers/Splash";
import GroupChatDetailsComponent from "../modules/chat/components/GroupChatDetailsComponent";
import BuyerBookingDetailContainer from "../modules/bookings/containers/BuyerBookingDetailContainer";
import LoginContainer from "../modules/authentications/containers/LoginContainer";
import TokenContainer from "../modules/authentications/containers/TokenContainer";
import PasswordContainer from "../modules/authentications/containers/PasswordContainer";
import SignupContainer from "../modules/authentications/containers/SignupContainer";
import BusinessTypeContainer from "../modules/businesses/containers/BusinessTypeContainer";
import MapContainer from "../modules/businesses/containers/MapContainer";
import BusinessInfoContainer from "../modules/businesses/containers/BusinessInfoContainer";
import BusinessList from "../modules/businesses/containers/BusinessList";
import BranchList from "../modules/businesses/containers/BranchList";
import BookingListContainer from "../modules/bookings/containers/BookingListContainer";
import BookingDetailsContainer from "../modules/bookings/containers/BookingDetailsContainer";
import DrawerContainer from "./../modules/core/containers/DrawerContainer.js";
import BookingCreateContainer from "../modules/bookings/containers/BookingCreateContainer";
import OrderCreateContainer from "../modules/orders/containers/OrderCreateContainer";
import OrderCustomerContactContainer from "../modules/orders/containers/OrderCustomerContactContainer";
import OrderDetailsContainer from "../modules/orders/containers/OrderDetailContainer";
import OrderListContainer from "../modules/orders/containers/OrderListContainer";
import SettingsHome from "../modules/settings/components/SettingsHome";
import Help from "../modules/settings/components/Help";
import HelpDetailsContainer from "../modules/settings/containers/HelpDetailsContainer";
import PrivacyContainer from "../modules/settings/containers/PrivacyContainer";
import ProfileContainer from "../modules/settings/containers/ProfileContainer";
import Terms from "../modules/settings/components/Terms";
import ProductListContainer from "../modules/products/containers/ProductListContainer";
import ProductDetailsContainer from "../modules/products/containers/ProductDetailsContainer";
import DiscoverProductDetailsContainer from "../modules/discovers/containers/DiscoverProductDetailContainer";
import ProductCreationContainer from "../modules/products/containers/ProductCreationContainer";
import ProductEditingContainer from "../modules/products/containers/ProductEditingContainer";
import OrderTemplateListContainer from "../modules/order-templates/containers/OrderTemplateListContainer";
import OrderTemplateDetailsContainer from "../modules/order-templates/containers/OrderTemplateDetailsContainer";
import OrderTemplateCreateContainer from "../modules/order-templates/containers/OrderTemplateCreateContainer";
import ReferralContainer from "../modules/settings/containers/ReferralContainer";
import QRcode from "../modules/settings/containers/QRcodeContainer";

import InventoryListContainer from "../modules/inventories/containers/InventoryListContainer";
import InventoryDetailsContainer from "../modules/inventories/containers/InventoryDetailsContainer";
import InventoryCreateContainer from "../modules/inventories/containers/InventoryCreateContainer";
import DiscountListContainer from "../modules/discounts/containers/DiscountListContainer";
import DiscountEditContainer from "../modules/discounts/containers/DiscountEditContainer";
import CustomerListContainer from "../modules/customers/containers/CustomerListContainer";
import CustomerCreationContainer from "../modules/customers/containers/CustomerCreationContainer";
import CustomerDetailsContainer from "../modules/customers/containers/CustomerDetailsContainer";
import CustomerEditingContainer from "../modules/customers/containers/CustomerEditingContainer";
import SupplierListContainer from "../modules/suppliers/containers/SupplierListContainer";
import SupplierCreationContainer from "../modules/suppliers/containers/SupplierCreationContainer";
import SupplierDetailsContainer from "../modules/suppliers/containers/SupplierDetailsContainer";
import SupplierEditingContainer from "../modules/suppliers/containers/SupplierEditingContainer";
import BusinessDetailsContainer from "../modules/businesses/containers/BusinessDetailsContainer";
import EmployeeListContainer from "../modules/employees/containers/EmployeeListContainer";
import EmployeeAppliedListContainer from "../modules/employees/containers/EmployeeAppliedListContainer";
import DiscountCreateContainer from "../modules/discounts/containers/DiscountCreateContainer";
import ChatContactCreationContainer from "../modules/chat/containers/ChatContactCreationContainer";
import ArticleListContainer from "../modules/discovers/containers/ArticleListContainer";
import ArticleDetailsContainer from "../modules/discovers/containers/ArticleDetailsContainer";
import SupplierEditContainer from "../modules/suppliers/containers/SupplierEditContainer";
import SupplierInfoContainer from "../modules/suppliers/containers/SupplierInfoContainer";
import EditMapContainer from "../modules/suppliers/containers/EditMapContainer";
import CustomerEditContainer from "../modules/customers/containers/CustomerEditContainer";
import CustomerInfoContainer from "../modules/customers/containers/CustomerInfoContainer";
import EditMapContainerCustomer from "../modules/customers/containers/EditMapContainer";
import CustomerContactListContainer from "../modules/customers/containers/CustomerContactListContainer";
import SupplierContactListContainer from "../modules/suppliers/containers/SupplierContactListContainer";
import EmployeeCreateContainer from "../modules/employees/containers/EmployeeCreateContainer";
import EmployeeDetailsContainer from "../modules/employees/containers/EmployeeDetailsContainer";
import CreateContactContainer from "../modules/contact/containers/CreateContactContainer";
import SupplierContactCreationContainer from "../modules/suppliers/containers/SupplierContactCreationContainer";
import EkkHeroProfileContainer from "../../app/modules/ekkhero/containers/ekkHeroProfileContainer";
import DashboardContainer from "../modules/dashboard/containers/DashboardContainer";
import EmployeeContactCreateContainer from "../modules/employees/containers/EmployeeContactCreateContainer";
import EmployeeContactListContainer from "../modules/employees/containers/EmployeeContactListContainer";
import DiscountProductListContainer from "../modules/discounts/containers/DiscountProductListContainer";
import DiscountCustomerListContainer from "../modules/discounts/containers/DiscountCustomerListContainer";
import BranchListContainer from "../modules/branches/containers/BranchListContainer";
import BranchDetailsContainer from "../modules/branches/containers/BranchDetailsContainer";
import BranchCreationContainer from "../modules/branches/containers/BranchCreationContainer";
import BranchEditingContainer from "../modules/branches/containers/BranchEditingContainer";
import TokenContainerChangePassword from "../modules/authentications/containers/TokenContainerChangePassword";
import SignupChangePasswordContainer from "../modules/authentications/containers/SignupChangePasswordContainer";
import TermsContainer from "../modules/settings/containers/TermsContainer";
import OrderCustomerListContainer from "../modules/orders/containers/OrderCustomerListContainer";
import OrderSupplierListContainer from "../modules/orders/containers/OrderSupplierListContainer";
import ProductDataListContainer from "../modules/products/containers/ProductDataListContainer";
import ProductDataDetailsContainer from "../modules/products/containers/ProductDataDetailsContainer";
import ProductDataCreationContainer from "../modules/products/containers/ProductDataCreationContainer";
import OrderProductListContainer from "../modules/orders/containers/OrderProductListContainer";
import OrderEditContainer from "../modules/orders/containers/OrderEditContainer";
import ChatListContainer from "../modules/chat/containers/ChatListContainer";
import PrivateChatDetailsComponent from "../modules/chat/components/PrivateChatDetailsComponent";
import EmployeeBranchListContainer from "../modules/employees/containers/EmployeeBranchListContainer";
import ChatSettingsComponent from "../modules/chat/components/ChatSettingsComponent";
import ChatMembersSelectionComponent from "../modules/chat/components/ChatMembersSelectionComponent";
import InventoryProductListContainer from "../modules/inventories/containers/InventoryProductListContainer";
import InventoryEditContainer from "../modules/inventories/containers/InventoryEditContainer";
import NotificationListContainer from "../modules/notification/containers/NotificationListContainer";
import EditBusinessType from "../modules/businesses/containers/EditBusinessProfileContainer/EditBusinessType";
import EditBusinessBranch from "../modules/businesses/containers/EditBusinessProfileContainer/EditBusinessBranch";
import EditMap from "../modules/businesses/containers/EditBusinessProfileContainer/EditMap";
import OrderSummaryContainer from "../modules/dashboard/containers/OrderSummaryContainer";
import PackVariantListContainer from "../modules/products/containers/PackVariantListContainer";
import SellerDetailContainer from "../modules/discovers/containers/SellerDetailContainer";

const _navigationOptions = (title, headerLeft = null, headerRight = null) => ({
  title: title,
  headerStyle: { backgroundColor: GlobalStyles.COLOR_PRIMARY },
  headerTitleStyle: [Font("normal", "bold", "medium"), { color: GlobalStyles.COLOR_LIGHTEST }],
  headerLeft: headerLeft,
  headerRight: headerRight
});

const LoginStack = StackNavigator(
  {
    login: {
      screen: LoginContainer,
      navigationOptions: {
        title: "Login"
      }
    },
    signup: {
      screen: SignupContainer,
      navigationOptions: {
        title: "Sign"
      }
    },
    token: {
      screen: TokenContainer,
      navigationOptions: {
        title: "Token"
      }
    },
    password: {
      screen: PasswordContainer,
      navigationOptions: {
        title: "Password"
      }
    }
  },
  {
    headerMode: "none"
  }
);

// const EmployeeTab = TabNavigator(
// 	{
// 		Active: {
// 			screen: EmployeeListContainer
// 		},
// 		Applied: {
// 			screen: EmployeeAppliedListContainer
// 		}
// 	},
// 	{
// 		tabBarPosition: "top",
// 		animationEnabled: true,
// 		tabBarOptions: {
// 			indicatorStyle: {
// 				backgroundColor: GlobalStyles.COLOR_PRIMARY
// 			},
// 			activeTintColor: GlobalStyles.COLOR_PRIMARY,
// 			inactiveTintColor: GlobalStyles.COLOR_DARK,
// 			labelStyle: {
// 				fontSize: 11
// 			},
// 			style: {
// 				backgroundColor: GlobalStyles.COLOR_LIGHTEST,
// 				height: Platform.OS === "ios" ? 44 : 46
// 			}
// 		}
// 	}
// );

let currentHomeTab = "";

class DiscoverScreen extends Component {
  static navigationOptions = {
    tabBarOnPress: (previousScene, jumpToIndex) => {
      currentHomeTab = Translations["drawer_discover"];
      jumpToIndex(1);
    },
    tabBarLabel: Translations["drawer_discover"],
    tabBarIcon: ({ tintColor, focused }) => (
      <Image
        style={{ height: 20, width: 20 }}
        source={
          Platform.OS === "ios"
            ? focused
              ? require("../../public/images/discover.png")
              : require("../../public/images/discover_white.png")
            : require("../../public/images/discover_white.png")
        }
      />
    )
  };

  render = () => {
    return <ArticleListContainer navigation={this.props.navigation} />;
  };
}

class ChatScreen extends Component {
  static navigationOptions = {
    tabBarOnPress: (previousScene, jumpToIndex) => {
      currentHomeTab = Translations["drawer_chats"];
      jumpToIndex(2);
    },
    tabBarLabel: Translations["drawer_chats"],
    tabBarIcon: ({ tintColor, focused }) => (
      <Image
        style={{ height: 25, width: 25 }}
        source={
          Platform.OS === "ios"
            ? focused
              ? require("../../public/images/chat.png")
              : require("../../public/images/chat_white.png")
            : require("../../public/images/chat_white.png")
        }
      />
    )
  };

  render = () => {
    return <ChatListContainer navigation={this.props.navigation} />;
  };
}

class OrderScreen extends Component {
  static navigationOptions = {
    tabBarOnPress: (previousScene, jumpToIndex) => {
      currentHomeTab = Translations["drawer_orders"];
      jumpToIndex(3);
    },
    tabBarLabel: Translations["drawer_orders"],
    tabBarIcon: ({ tintColor, focused }) => (
      <Image
        style={{ height: 25, width: 25 }}
        source={
          Platform.OS === "ios"
            ? focused
              ? require("../../public/images/order.png")
              : require("../../public/images/order_white.png")
            : require("../../public/images/order_white.png")
        }
      />
    )
  };

  render = () => {
    return <OrderListContainer navigation={this.props.navigation} />;
  };
}

// class BookingScreen extends Component {
// 	static navigationOptions = {
// 		tabBarOnPress: (previousScene, jumpToIndex) => {
// 			currentHomeTab = Translations["drawer_bookings"];
// 			jumpToIndex(2);
// 		},
// 		tabBarLabel: Translations["drawer_bookings"],
// 		tabBarIcon: ({ tintColor, focused }) => (
// 			<Image
// 				style={{ height: 17.5, width: 17.5 }}
// 				source={
// 					Platform.OS === "ios"
// 						? focused ? require("../../public/images/booking.png") : require("../../public/images/booking_white.png")
// 						: require("../../public/images/booking_white.png")
// 				}
// 			/>
// 		)
// 	};

// 	render = () => {
// 		return <BookingListContainer navigation={this.props.navigation} />;
// 	};
// }

class DashboardScreen extends Component {
  static navigationOptions = {
    tabBarOnPress: (previousScene, jumpToIndex) => {
      currentHomeTab = Translations["drawer_dashboard"];
      jumpToIndex(0);
    },
    tabBarLabel: Translations["drawer_dashboard"],
    tabBarIcon: ({ tintColor, focused }) => (
      <Image
        style={{ height: 20, width: 20 }}
        source={
          Platform.OS === "ios"
            ? focused
              ? require("../../public/images/dashboard.png")
              : require("../../public/images/dashboard_white.png")
            : require("../../public/images/dashboard_white.png")
        }
      />
    )
  };

  render = () => {
    return <DashboardContainer navigation={this.props.navigation} />;
  };
}

const HomeTabs = TabNavigator(
  {
    dashboard: {
      screen: DashboardScreen
    },
    discover: {
      screen: DiscoverScreen
    },
    chat: {
      screen: ChatScreen
    },
    order: {
      screen: OrderScreen
    }
    // booking: {
    //   screen: BookingScreen
    // }
  },
  Platform.OS === "ios"
    ? {
        tabBarPosition: "bottom",
        animationEnabled: true,
        lazy: true,
        swipeEnabled: true,
        initialRouteName: "dashboard",
        tabBarOptions: {
          showLabel: false,
          activeTintColor: GlobalStyles.COLOR_DARKEST,
          inactiveTintColor: GlobalStyles.COLOR_LIGHTEST,
          activeBackgroundColor: GlobalStyles.COLOR_LIGHTEST,
          inactiveBackgroundColor: GlobalStyles.COLOR_PRIMARY,
          labelStyle: Font("normal", "bold", "small"),
          tabStyle: {
            paddingTop: GlobalStyles.PADDING * 0.5,
            paddingBottom: GlobalStyles.PADDING * 0.5
          }
        }
      }
    : {
        tabBarPosition: "bottom",
        animationEnabled: true,
        lazy: true,
        swipeEnabled: true,
        initialRouteName: "dashboard",
        tabBarOptions: {
          inactiveTintColor: GlobalStyles.COLOR_LIGHTEST,
          showIcon: true,
          showLabel: false,
          labelStyle: Font("normal", "bold", "smallest"),
          tabStyle: {
            paddingTop: GlobalStyles.PADDING * 0.5,
            paddingBottom: GlobalStyles.PADDING * 0.5
          },
          style: { backgroundColor: GlobalStyles.COLOR_PRIMARY },
          indicatorStyle: { backgroundColor: GlobalStyles.COLOR_LIGHTEST }
        }
      }
);

const DrawerScreens = StackNavigator(
  {
    splash: {
      screen: Splash,
      navigationOptions: {
        header: null
      }
    },
    home: {
      screen: HomeTabs,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          currentHomeTab === "" ? Translations["drawer_dashboard"] : currentHomeTab,
          <NavigationBarIcon type="MENU" onPress={() => navigation.navigate("DrawerOpen")} />,
          <View style={{ flexDirection: "row" }}>
            {/* <NavigationBarIcon
					    type="BARCODE"
					    onPress={() => {
					      alert("This feature is currently under construction.");
					    }}
					  /> */}
            {/* <NavigationBarIcon
              type="NOTIFICATION"
              onPress={() => navigation.navigate("notificationList")}
            /> */}
          </View>
        )
    },
    bookingList: {
      screen: BookingListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["booking"],
          <NavigationBarIcon
            type="MENU"
            onPress={() => {
              navigation.navigate("DrawerOpen");
            }}
          />
        )
    },
    signup: {
      screen: SignupContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["authentication_change_password"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    bookingDetails: {
      screen: BookingDetailsContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["booking_booking_details"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    buyerBookingDetail: {
      screen: BuyerBookingDetailContainer,
      navigationOptions: ({ navigation }) => {
        return _navigationOptions(
          Translations["booking_booking_details"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <View style={{ flexDirection: "row" }}>
            {navigation.state.params.bookingDetail ? (
              navigation.state.params.bookingDetail.IsAccepted ||
              navigation.state.params.bookingDetail.IsRejected ||
              navigation.state.params.bookingDetail.BookingStatus === "Completed" ||
              navigation.state.params.bookingDetail.BookingStatus === "Cancelled" ? null : (
                <View style={{ flexDirection: "row" }}>
                  <NavigationBarIcon
                    type="DONE"
                    onPress={() => {
                      navigation.state.params.reqForBookingAccept();
                    }}
                  />
                  <NavigationBarIcon
                    type="REJECT"
                    onPress={() => {
                      navigation.state.params.reqForBookingReject();
                    }}
                  />
                </View>
              )
            ) : null}
          </View>
        );
      }
    },
    settings: {
      screen: SettingsHome,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          navigation.state.params ? "Select Language" : "Settings",
          !navigation.state.params ? (
            <NavigationBarIcon type="MENU" onPress={() => navigation.navigate("DrawerOpen")} />
          ) : (
            <NavigationBarIcon
              type="BACK"
              onPress={() => {
                // navigation.state.params.onGoBack();
                navigation.goBack();
              }}
            />
          )
        )
    },
    help: {
      screen: Help,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["settings_help"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    terms: {
      screen: TermsContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["settings_terms_and_conditions"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    helpDetails: {
      screen: HelpDetailsContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["settings_help_details"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    privacy: {
      screen: PrivacyContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["settings_privacy_policy"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    profile: {
      screen: ProfileContainer
    },
    referral: {
      screen: ReferralContainer,
      navigationOptions: {
        header: null
      }
    },
    screen2: {
      screen: BusinessTypeContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["business_create_business"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <NavigationBarIcon
            type="DONE"
            onPress={() => {
              navigation.state.params.onSubmit();
            }}
          />
        )
    },
    screenMap: {
      screen: EditMapContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["business_select_location"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <NavigationBarIcon
            type="DONE"
            onPress={() => {
              console.warn("=====" + JSON.stringify(navigation.state.params.data.data));
              // navigation.state.params.onGoBack(navigation.state.params.location);
              // navigation.goBack();
              // navigation.state.params.onSubmit();
              navigation.navigate("supplierInfo", {
                location: navigation.state.params.location,
                data: navigation.state.params.data.data,
                newData: navigation.state.params.newData
              });
              // console.warn(JSON.stringify(navigation));
            }}
          />
        )
    },
    screenMapCustomer: {
      screen: EditMapContainerCustomer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["business_select_location"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <NavigationBarIcon
            type="DONE"
            onPress={() => {
              console.warn("=====" + JSON.stringify(navigation.state.params.data.data));
              // navigation.state.params.onGoBack(navigation.state.params.location);
              // navigation.goBack();
              // navigation.state.params.onSubmit();
              navigation.navigate("customerInfo", {
                location: navigation.state.params.location,
                data: navigation.state.params.data.data,
                newData: navigation.state.params.newData
              });
              // console.warn(JSON.stringify(navigation));
            }}
          />
        )
    },
    screen3: {
      screen: MapContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["business_select_location"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <NavigationBarIcon
            type="DONE"
            onPress={() => {
              // console.warn("=====" + JSON.stringify(navigation.state.params.location));
              // navigation.state.params.onGoBack(navigation.state.params.location);
              // navigation.goBack();
              // navigation.state.params.onSubmit();
              navigation.navigate("screen4", {
                location: navigation.state.params.location
              });
              // console.warn(JSON.stringify(navigation));
            }}
          />
        )
    },
    branchEditMap: {
      screen: MapContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["business_select_location"],
          <NavigationBarIcon
            type="BACK"
            onPress={() => {
              navigation.state.params.goBack(navigation.state.params.location);
              navigation.goBack();
            }}
          />
        )
    },
    branchCreationMap: {
      screen: MapContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["business_select_location"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <NavigationBarIcon
            type="DONE"
            onPress={() => {
              // console.warn("=====" + JSON.stringify(navigation.state.params.location));
              // navigation.state.params.onGoBack(navigation.state.params.location);
              // navigation.goBack();
              // navigation.state.params.onSubmit();
              navigation.navigate("branchCreation", {
                location: navigation.state.params.location
              });
              // console.warn(JSON.stringify(navigation));
            }}
          />
        )
    },
    supplierInfo: {
      screen: SupplierInfoContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Supplier Edit",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <NavigationBarIcon
            type="DONE"
            onPress={() => {
              navigation.state.params.onSubmit();
            }}
          />
        )
    },
    customerInfo: {
      screen: CustomerInfoContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Customer Edit",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <NavigationBarIcon
            type="DONE"
            onPress={() => {
              navigation.state.params.onSubmit();
            }}
          />
        )
    },
    screen4: {
      screen: BusinessInfoContainer
    },
    bussinessSelect: {
      screen: BusinessList,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Select Business",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    branchSelect: {
      screen: BusinessList,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Select Branch",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    orderList: {
      screen: OrderListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["orders"],
          <NavigationBarIcon
            type="MENU"
            onPress={() => {
              navigation.navigate("DrawerOpen");
            }}
          />
        )
    },
    orderDetails: {
      screen: OrderDetailsContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["order_order_details"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <View>
            {navigation.state.params.order_status == "Paid" ||
            navigation.state.params.order_status == "Cancel" ? null : (
              <View style={{ flexDirection: "row" }}>
                {navigation.state.params.order_status == "Delivered" ||
                navigation.state.params.order_status == "Partially_Delivered" ||
                navigation.state.params.order_status == "Returned_Items" ? null : (
                  <NavigationBarIcon
                    type="DELIVER"
                    onPress={() => navigation.state.params.onDeliver()}
                  />
                )}
                <NavigationBarIcon type="PAY" onPress={() => navigation.state.params.onPay()} />
                <NavigationBarIcon
                  type="REJECT"
                  onPress={() => navigation.state.params.onReject()}
                />
              </View>
            )}
          </View>
        )
    },
    productList: {
      screen: ProductListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Products",
          <NavigationBarIcon
            type="MENU"
            onPress={() => {
              navigation.navigate("DrawerOpen");
            }}
          />
          // <NavigationBarIcon
          // 	type="ADD"
          // 	onPress={() => {
          // 		navigation.navigate(
          // 			"modalSelectionWindow",
          // 			{
          // 				routeName: "modalSelectionWindow",
          // 				params: {
          // 					transition: "TransitionFromBelow"
          // 				}
          // 			}
          // 		);
          // 	}}
          // />
        )
    },
    variantDetails: {
      screen: ProductDetailsContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Variant Details",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    packDetails: {
      screen: ProductDetailsContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Pack Details",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    packVariantList: {
      screen: PackVariantListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Products",
          <NavigationBarIcon
            type="BACK"
            onPress={() => {
              navigation.goBack();
            }}
          />
        )
    },
    offerDetails: {
      screen: ProductDetailsContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Offer Details",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    DiscoverVariantDetails: {
      screen: DiscoverProductDetailsContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Variant Details",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <NavigationBarIcon
            type="ORDER_ALTERNATE"
            onPress={() => navigation.state.params.onSubmit()}
          />
        )
    },
    DiscoverPackDetails: {
      screen: DiscoverProductDetailsContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Pack Details",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <NavigationBarIcon
            type="ORDER_ALTERNATE"
            onPress={() => navigation.state.params.onSubmit()}
          />
        )
    },
    DiscoverOfferDetails: {
      screen: DiscoverProductDetailsContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Offer Details",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <NavigationBarIcon
            type="ORDER_ALTERNATE"
            onPress={() => navigation.state.params.onSubmit()}
          />
        )
    },
    variantCreation: {
      screen: ProductCreationContainer
    },
    packCreation: {
      screen: ProductCreationContainer
    },
    offerCreation: {
      screen: ProductCreationContainer
    },
    variantEditing: {
      screen: ProductEditingContainer
    },
    packEditing: {
      screen: ProductEditingContainer
    },
    offerEditing: {
      screen: ProductEditingContainer
    },

    orderTemplateList: {
      screen: OrderTemplateListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Order Templates",
          <NavigationBarIcon
            type="MENU"
            onPress={() => {
              navigation.navigate("DrawerOpen");
            }}
          />
        )
    },
    orderTemplateDetails: {
      screen: OrderTemplateDetailsContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Order Template Details",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    orderTemplateCreate: {
      screen: OrderTemplateCreateContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Create Order Template",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    modalSelectionWindow: {
      screen: ModalSelectionWindow,
      navigationOptions: {
        header: null
      }
    },
    inventoryList: {
      screen: InventoryListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["inventory"],
          <NavigationBarIcon type="MENU" onPress={() => navigation.navigate("DrawerOpen")} />
        )
    },
    inventoryCreate: {
      screen: InventoryCreateContainer
    },

    inventoryDetails: {
      screen: InventoryDetailsContainer
    },
    inventoryProductList: {
      screen: InventoryProductListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["inventory_select_products"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    inventoryEdit: {
      screen: InventoryEditContainer
    },
    discountList: {
      screen: DiscountListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Discounts",
          <NavigationBarIcon type="MENU" onPress={() => navigation.navigate("DrawerOpen")} />
        )
    },
    discountEdit: {
      screen: DiscountEditContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Edit Discount",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <View style={{ flexDirection: "row" }}>
            <NavigationBarIcon
              type="DONE"
              onPress={() => {
                navigation.state.params.onSubmit();
              }}
            />
            <NavigationBarIcon
              type="REJECT"
              onPress={() => {
                navigation.state.params.onReject();
              }}
            />
          </View>
        )
    },
    discountCreate: {
      screen: DiscountCreateContainer
    },
    customerList: {
      screen: CustomerListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["customers"],
          <NavigationBarIcon type="MENU" onPress={() => navigation.navigate("DrawerOpen")} />
        )
    },
    customerCreation: {
      screen: CustomerCreationContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["customer_create_customer"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <NavigationBarIcon
            type="DONE"
            onPress={() => {
              navigation.state.params.onSubmit();
            }}
          />
        )
    },
    editBusinessTypeDetail: {
      screen: EditBusinessType
    },
    editBusinessBranchDetail: {
      screen: EditBusinessBranch
    },
    editMap: {
      screen: EditMap,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["business_edit_location"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <NavigationBarIcon
            type="DONE"
            onPress={() => {
              navigation.navigate("editBusinessBranchDetail", {
                location: navigation.state.params.location
              });
            }}
          />
        )
    },
    customerEdit: {
      screen: CustomerEditContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["customer_edit_customer"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <NavigationBarIcon
            type="DONE"
            onPress={() => {
              navigation.state.params.onSubmit();
            }}
          />
        )
    },
    articleList: {
      screen: ArticleListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Discover",
          <NavigationBarIcon type="MENU" onPress={() => navigation.navigate("DrawerOpen")} />
        )
    },
    articleDetails: {
      screen: ArticleDetailsContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["dashboard_articles"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    customerDetails: {
      screen: CustomerDetailsContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["customer_customer_details"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <NavigationBarIcon
            type="EDIT"
            onPress={() => {
              navigation.navigate("customerEdit");
            }}
          />
        )
    },
    employeeTab: {
      screen: EmployeeListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["employees"],
          <NavigationBarIcon type="MENU" onPress={() => navigation.navigate("DrawerOpen")} />
        )
    },
    employeeCreate: {
      screen: EmployeeCreateContainer
    },
    employeeDetails: {
      screen: EmployeeDetailsContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["employee_employee_details"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    supplierList: {
      screen: SupplierListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["suppliers"],
          <NavigationBarIcon type="MENU" onPress={() => navigation.navigate("DrawerOpen")} />
        )
    },
    supplierCreation: {
      screen: SupplierCreationContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["supplier_create_supplier"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <NavigationBarIcon
            type="DONE"
            onPress={() => {
              navigation.state.params.onSubmit();
            }}
          />
        )
    },
    supplierEdit: {
      screen: SupplierEditContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["supplier_edit_supplier"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <NavigationBarIcon
            type="DONE"
            onPress={() => {
              navigation.state.params.onSubmit();
            }}
          />
        )
    },
    supplierDetails: {
      screen: SupplierDetailsContainer
    },
    businessDetails: {
      screen: BusinessDetailsContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["business_business_profile"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
          // <NavigationBarIcon
          // 	type="EDIT"
          // 	onPress={() => {
          // 		navigation.navigate("businessEditing");
          // 	}}
          // />
        )
    },
    customerContactList: {
      screen: CustomerContactListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["customer_customer_contacts"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    contactCreation: {
      screen: CreateContactContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["customer_create_contact"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    ekkHeroProfile: {
      screen: EkkHeroProfileContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["settings_my_profile"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <NavigationBarIcon
            type="DONE"
            onPress={() => {
              navigation.state.params.onSubmit();
            }}
          />
        )
    },
    supplierContactList: {
      screen: SupplierContactListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["supplier_supplier_contacts"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    employeeContactCreate: {
      screen: EmployeeContactCreateContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["employee_create_contact"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    employeeContactList: {
      screen: EmployeeContactListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["employee_select_contact"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    employeeBranchList: {
      screen: EmployeeBranchListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["employee_select_branch"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    discountProductList: {
      screen: DiscountProductListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Select Product",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    discountCustomerList: {
      screen: DiscountCustomerListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Select Customer",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },

    branchList: {
      screen: BranchListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["branch_business_branches"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.navigate("settings")} />
        )
    },
    branchDetails: {
      screen: BranchDetailsContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["branch_business_branch_details"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    branchCreation: {
      screen: BranchCreationContainer
    },
    branchEditing: {
      screen: BranchEditingContainer
    },
    tokenChangePassword: {
      screen: TokenContainerChangePassword,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["authentication_verify_token"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    signupChangePassword: {
      screen: SignupChangePasswordContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["authentication_change_password"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },

    orderSupplierList: {
      screen: OrderSupplierListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["order_select_supplier"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    productDataList: {
      screen: ProductDataListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["settings_added_product_data"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },

    orderCreation: {
      screen: OrderCreateContainer
    },

    supplierContactCreation: {
      screen: SupplierContactCreationContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Create Contact",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },

    productDataDetails: {
      screen: ProductDataDetailsContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["settings_product_data_details"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },

    orderEdit: {
      screen: OrderEditContainer
    },

    orderCustomerList: {
      screen: OrderCustomerListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["order_select_customer"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },

    productDataCreation: {
      screen: ProductDataCreationContainer
    },
    orderProductList: {
      screen: OrderProductListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          Translations["order_select_product"],
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    chatContactCreation: {
      screen: ChatContactCreationContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Contact creation",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    chatList: {
      screen: ChatListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Chat History",
          <NavigationBarIcon type="MENU" onPress={() => navigation.navigate("DrawerOpen")} />
        )
    },
    privateChatDetails: {
      screen: PrivateChatDetailsComponent
    },
    groupChatDetails: {
      screen: GroupChatDetailsComponent
    },
    chatSettings: {
      screen: ChatSettingsComponent,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Chat Settings",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
          // <NavigationBarIcon
          // 	type="DONE"
          // 	onPress={() => {
          // 		// navigation.state.params.onSubmit();
          // 	}}
          // />
        )
    },
    chatMembersSelection: {
      screen: ChatMembersSelectionComponent,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Select Contacts",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <NavigationBarIcon type="DONE" onPress={() => navigation.state.params.onSubmit()} />
        )
    },
    notificationList: {
      screen: NotificationListContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          "Notifications",
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
        )
    },
    orderSummary: {
      screen: OrderSummaryContainer,
      navigationOptions: ({ navigation }) =>
        _navigationOptions(
          moment(navigation.state.params.day).format("DD MMM, YYYY"),
          <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />,
          <NavigationBarIcon type="SAVE" onPress={() => {}} />
        )
    },
    sellerDetail: {
      screen: SellerDetailContainer
    }
  }
  // {
  // 	transitionConfig: TransitionConfiguration
  // }
);

const DrawerStack = DrawerNavigator(
  {
    home: {
      screen: DrawerScreens
    }
  },
  {
    headerMode: "float",
    contentComponent: props => (
      <ScrollView>
        <DrawerContainer {...props} />
      </ScrollView>
    ),
    drawerWidth: GlobalStyles.DEVICE_WIDTH < 1024 ? GlobalStyles.DEVICE_WIDTH * 0.75 : 0.5
  }
);

export default (Root = StackNavigator(
  {
    // qrCode: {
    //   screen: QRcode
    // },
    // orderTemplateCreate: {
    //   screen: OrderTemplateCreateContainer,
    //   navigationOptions: ({ navigation }) =>
    //     _navigationOptions(
    //       "Create Order Template",
    //       <NavigationBarIcon type="BACK" onPress={() => navigation.goBack()} />
    //     )
    // },

    app: {
      screen: DrawerStack
    },
    auth: {
      screen: LoginStack
    }
  },
  {
    headerMode: "none"
  }
));
