// prettier-ignore
const DEVELOPMENT = {
  ekkpass: 'http://ekkpassv2t.azurewebsites.net',
  ekkbiz: 'http://ekkbizv2t.azurewebsites.net',
  ekkproduct: 'http://ekkproductt.azurewebsites.net',
  blob: 'http://ekkfilest.azurewebsites.net',
  ekkrtc: 'http://ekkrtc-t.azurewebsites.net',
  ekkorder: 'http://ekkorder.azurewebsites.net',
  ekkhistory: 'https://ekkhistorytest.azurewebsites.net',
  ekknotify: 'http://ekknotifytest.azurewebsites.net',
  ekkinventory: 'http://ekkinventory.azurewebsites.net',
  ekkbooking: 'http://ekkbookingtest.azurewebsites.net',
  ekkchat: 'http://ekkchattest.azurewebsites.net'
};
// prettier-ignore
const STAGE = {
  ekkpass: 'http://ekkpassv2s.azurewebsites.net',
  ekkbiz: 'http://ekkbizv2s.azurewebsites.net',
  ekkproduct: 'http://ekkproductstage.azurewebsites.net',
  blob: 'http://ekkfilest.azurewebsites.net',
  ekkrtc: 'http://ekkrtc-s.azurewebsites.net',
  ekkorder: 'http://ekkorderstage.azurewebsites.net',
  ekkhistory: 'https://ekkhistorytest.azurewebsites.net',
  ekknotify: 'http://ekknotifytest.azurewebsites.net',
  ekkinventory: 'http://ekkinventorystage.azurewebsites.net',
  ekkbooking: 'https://ekkbookingstage.azurewebsites.net',
  ekkchat: 'http://ekkchattest.azurewebsites.net',
};
// prettier-ignore
const PRODUCTION = {
  ekkpass: 'http://saepp2.azurewebsites.net',
  ekkbiz: 'http://saebnp1.azurewebsites.net',
  ekkproduct: 'http://saepdp1.azurewebsites.net',
  blob: 'http://ekkfilest.azurewebsites.net',
  ekkrtc: 'http://sartcp1.azurewebsites.net ',
  ekkorder: 'http://saeodp1.azurewebsites.net',
  ekkhistory: 'https://saehp1.azurewebsites.net',
  ekknotify: 'http://saenp1.azurewebsites.net',
  ekkinventory: 'http://saeip.azurewebsites.net',
  ekkbooking: 'http://saebkp1.azurewebsites.net',
  ekkchat: 'https://saecp1.azurewebsites.net'
};
// prettier-ignore
const LOCAL = {
  ekkpass: 'http://192.168.1.105:3001',
  ekkpass: 'http://192.168.0.124:3000',
  ekkbiz: 'http://192.168.0.124:3000',
  ekkproduct: 'http://192.168.0.183:3000',
  ekkrtc: 'http://192.168.0.124:3000',
  ekkorder: 'http://192.168.0.126:300',
  ekkhistory: '',
  ekknotify: '',
  ekkinventory: '',
  ekkbooking: ''
};

export var baseUrl = DEVELOPMENT;

export const URL = {
  login: baseUrl.ekkpass + "/users/phone",
  set_profile: baseUrl.ekkpass + "/users/set-profile",
  verify_otp: baseUrl.ekkpass + "/users/verify-otp",
  password: baseUrl.ekkpass + "/users/login",
  reset_password: baseUrl.ekkpass + "/users/reset-password",
  resend_token: baseUrl.ekkpass + "/users/resend-otp",
  business_creation: baseUrl.ekkbiz + "/businesses/user/business",
  business_blob: baseUrl.blob + "/businesses/blob",
  token_refresh: baseUrl.ekkpass + "/users/refresh/auth-token",
  product_create: baseUrl.ekkproduct + "/products/create",
  live_search: baseUrl.ekkproduct + "/brands/live/search"
};
