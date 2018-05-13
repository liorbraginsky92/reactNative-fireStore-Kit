import GlobalStyles, { Font } from "../styles";
/**
 * navigation option define here
 * @param {String} title
 * @param {function} headerLeft
 * @param {function} headerRight
 */
export const navigationOptions = (title = "", headerLeft = null, headerRight = null) => ({
  title: title,
  headerStyle: { backgroundColor: GlobalStyles.COLOR_PRIMARY },
  headerTitleStyle: [Font("normal", "bold", "medium"), { color: GlobalStyles.COLOR_LIGHTEST }],
  headerLeft: headerLeft,
  headerRight: headerRight
});
