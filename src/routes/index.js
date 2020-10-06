import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Auth from './AuthStack/AuthStack';
import HomeStack from './HomeStack/HomeStack';
// import Check from '../helpers/Check';

const SwitchStack = createSwitchNavigator({
Auth: Auth,
App: HomeStack
})

export default createAppContainer(SwitchStack)