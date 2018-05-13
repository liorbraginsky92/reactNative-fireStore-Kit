import LocalizedStrings from "react-native-localization";
import { AsyncStorage } from "react-native";
import en from "./en";
import bn from "./bn";

let translations = new LocalizedStrings({
	en: en,
	bn: bn
});

(async () => {
	try {
		const value = await AsyncStorage.getItem("language");
		if (value !== null) {
			translations.setLanguage(value);
		}
	} catch (error) {
		alert("Error: Could not set language preference.");
	}
})();

export default translations;
