import { createAppContainer } from 'react-navigation';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../../screens/Login/Login';
import Intro from '../../screens/Introscreen/Intro';
import Register from '../../screens/Register/Register';
import Header from '../../components/Header/Header';


const AuthStack = createStackNavigator({
    intro:{ 
        screen: Intro
    },
    login:{
        screen:Login,
        navigationOptions: () => ({
            header: (props) => <Header 
            back={true}
            {...props}
    
            />,
        })
    },
    Signup:{
        screen:Register,
        navigationOptions: () => ({
            header: (props) => <Header 
            back={true}
            {...props}
    
            />,
        })
    }
}
, {
    defaultNavigationOptions: {
        headerShown: null,
        header:null
    },
},

);


export default createAppContainer(AuthStack);