/**
 * all imported lib here
 */
import React, { Component } from "react";
import { Platform, ScrollView, View, Text, Image } from "react-native";
import { StackNavigator, DrawerNavigator, TabNavigator, NavigationAction } from "react-navigation";
import { NavigationBarIcon } from "../modules/common";
import GlobalStyles, { Font } from "../config/styles";
/**
 * all imported container here
 */
import LoginContainer from "../modules/authentications/containers/LoginContainer";
import TokenContainer from "../modules/authentications/containers/TokenContainer";
import PasswordContainer from "../modules/authentications/containers/PasswordContainer";
import SignupContainer from "../modules/authentications/containers/SignupContainer";

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

export default (Root = StackNavigator(
	{
		auth: {
			screen: LoginStack
		}
	},
	{
		headerMode: "none"
	}
));
