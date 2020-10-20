import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Auth from './AuthStack/AuthStack';
import HomeStack from './HomeStack/HomeStack';
import Check from '../helper/Check';

const SwitchStack = createSwitchNavigator({

Check,
Auth: Auth,
App: HomeStack

})

export default createAppContainer(SwitchStack)