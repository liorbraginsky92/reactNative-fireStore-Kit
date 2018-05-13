import Dimensions from "Dimensions";

const x = Dimensions.get("window").width,
	y = Dimensions.get("window").height;
const ratioX = x <= 320 ? 0.75 : x < 1024 ? 0.875 : 1.25;
// const ratioY = y <= 480 ? 0.75 : y < 768 ? 0.875 : 1.25;
const base_unit = 16,
	unit = base_unit * ratioX;
const em = value => {
	// console.warn(x + " x " + y);
	// console.warn(ratioX + " x " + ratioY);
	return unit * value;
};

const GlobalStyles = {
	DEVICE_WIDTH: x,
	DEVICE_HEIGHT: y,
	PADDING: em(1), // 12

	COLOR_LIGHT: "#dadada",
	COLOR_LIGHTER: "#eeeeee",
	COLOR_LIGHTEST: "#ffffff",
	COLOR_DARK: "#777777",
	COLOR_DARKER: "#555555",
	COLOR_DARKEST: "#333333",
	COLOR_PRIMARY: "#c94038",
	COLOR_SECONDARY: "#00a651",
	COLOR_TERTIARY: "#1641e2",
	COLOR_QUATERNARY: "#e67e22",

	FONT_SIZE_LARGEST: em(1.75), // 21
	FONT_SIZE_LARGER: em(1.5), // 18
	FONT_SIZE_LARGE: em(1.25), // 15
	FONT_SIZE: em(1), // 12
	FONT_SIZE_SMALL: em(0.875), // 10.5
	FONT_SIZE_SMALLER: em(0.75), // 9
	FONT_SIZE_SMALLEST: em(0.5) // 6
};

export const Font = (style = "normal", weight = "normal", size = GlobalStyles.FONT_SIZE) => {
	let _setStyle = style => {
		switch (style) {
			case "italic":
				return "italic";
			default:
				return "normal";
		}
	};

	let _setWeight = weight => {
		switch (weight) {
			case "light":
				return "300";
			case "normal":
				return "400";
			case "bold":
				return "700";
			default:
				return "400";
		}
	};

	let _setSize = size => {
		switch (size) {
			case "smallest":
				return GlobalStyles.FONT_SIZE_SMALLEST;
			case "smaller":
				return GlobalStyles.FONT_SIZE_SMALLER;
			case "small":
				return GlobalStyles.FONT_SIZE_SMALL;
			case "medium":
				return GlobalStyles.FONT_SIZE;
			case "large":
				return GlobalStyles.FONT_SIZE_LARGE;
			case "larger":
				return GlobalStyles.FONT_SIZE_LARGER;
			default:
				return GlobalStyles.FONT_SIZE;
		}
	};

	return {
		fontStyle: _setStyle(style),

		fontWeight: _setWeight(weight),
		fontSize: _setSize(size)
	};
};

export default GlobalStyles;
