import { combineReducers } from "redux";
import { authenticateReducer } from "../modules/authentications/reducers/index.js";
import { businessReducer } from "../modules/businesses/reducers/index";
import { BookingReducer } from "../modules/bookings/reducers/index";
import navReducer from "../modules/core/reducers/index.js";
import { orderReducer } from "../modules/orders/reducers/index";
import { productReducer } from "../modules/products/reducers/index";
import { settingsReducer } from "../modules/settings/reducers/index";
import { orderTemplateReducer } from "../modules/order-templates/reducers/index";
import { inventoryReducer } from "../modules/inventories/reducers/index";
import { discountReducer } from "../modules/discounts/reducers/index";
import { discoverReducer } from "../modules/discovers/reducers/index";
import { supplierReducer } from "../modules/suppliers/reducers/index";
import { customerReducer } from "../modules/customers/reducers/index";
import { employeeReducer } from "../modules/employees/reducers/index";
import { branchReducer } from "../modules/branches/reducers/index";
import { dashboardReducer } from "../modules/dashboard/reducers/index";
import { chatReducer } from "../modules/chat/reducers";
import { reducer as network } from "react-native-offline";

const appReducers = combineReducers({
  auth: authenticateReducer,
  business: businessReducer,
  nav: navReducer,
  Bookings: BookingReducer,
  orders: orderReducer,
  settings: settingsReducer,
  orderTemplate: orderTemplateReducer,
  products: productReducer,
  inventory: inventoryReducer,
  discounts: discountReducer,
  discover: discoverReducer,
  suppliers: supplierReducer,
  customers: customerReducer,
  employees: employeeReducer,
  branch: branchReducer,
  dashboard: dashboardReducer,
  chats: chatReducer,
  network
});

const reducers = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  if (action.type === "FLAG") {
    state.flag = action.payload;
  }
  if (action.type === "RESET_MODULE") {
    Object.keys(state).map(item => {
      if (item !== action.payload && item !== "auth" && item !== "business") {
        state[item] = undefined;
      }
    });
  }
  return appReducers(state, action);
};

export default reducers;
