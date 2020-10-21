import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import Loader  from '../components/Loader/Loader';
import AsyncStorage from '@react-native-community/async-storage';
const { height } = Dimensions.get('screen');
import SplashScreen from 'react-native-splash-screen'


export default class Check extends Component {
    constructor() {
        super();
        this.state = {
            isToken: ''
        }

    }
    componentDidMount() {
        setTimeout(() => {
            SplashScreen.hide()
        }, 2000)


        AsyncStorage.getItem("user")
            .then(res => {
                console.warn('Token ', res)
                if (res == null) {
                    this.setState({ isToken: false }, () => {
                        console.warn('Erorr', this.state.isToken)
                    })
                    this.props.navigation.navigate('Auth')
                }
                else {
                    this.setState({ isToken: true }, () => {
                        console.warn('Success ', this.state.isToken)
                    })
                    this.props.navigation.navigate('App')
                }
            })
    }
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', height: height / 1.2 }}>
                <Loader />
            </View>
        )
    }
}