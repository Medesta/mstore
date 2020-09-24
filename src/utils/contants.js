import { Dimensions, PixelRatio, Platform, StyleSheet, StatusBar, I18nManager } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { RFValue } from "react-native-responsive-fontsize";
import { isIphoneX } from 'react-native-iphone-x-helper';
// import i18n, { I18n } from '../translation/i18n';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
export const headerHeight = Platform.OS === 'ios' ? 60 : 50;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const IS_IOS = Platform.OS === 'ios';
export const isX = isIphoneX;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight;
// import { showMessage } from "react-native-flash-message";

export const fonts = {
  reg: 'Poppins-Regular',
  light: 'Poppins-Light',
  med: 'Poppins-Medium',
  bold:"Poppins",
  semiBold:"Poppins-SemiBold"
}
export const colors = {
  orange: '#ff4b00',
  black: '#3c4245',
  graphite: '#202020',
  grey: '#919fa4',
  bg: '#151314',
  cardColor: '#ffffff',
  green: '#09a601',
  red: '#ff0000',
  darkgrey: '#d9d9d9',
  greyText: '#a7aeb5',
  darkgrey2: "#393e41",
  darkgrey3: "#575d63",
  searchBar: '#f1f1f1',
  grayishText: "#383838",
  border: "#c1cbda",
  sidemenu: "#fafafa",
  btnGreen: "#38b069",
  grad2: "#ef4269",
  grad1: "#f66b25",
  gradOrange: "#f47347",
  currGrey: "#929ba3",
  backGrey: '#e6e8e9',
  textGreen: "#29c6ab",
  lightGrey:"#545050"
}

export function RF(size) {
  return isIphoneX() ? RFValue(size) - 2 : RFValue(size);
}

export function WP(size) {
  return widthPercentageToDP(size)
}

export function HP(size) {
  return heightPercentageToDP(size)
}

export function CFL(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function floatPad(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

export function CL(key) {
  return I18n(key)
}


export function showAlert(title, message, type, duration, props) {
  showMessage({
    message: title,
    description: message,
    type: type,
    duration: duration ? duration : 3000,
    position: "bottom",
    textStyle: {
      fontFamily: fonts.reg,
      fontSize: RF(14)
    },
    titleStyle: {
      fontFamily: fonts.med,
      fontSize: RF(15)
    },
    ...props
  });
}

