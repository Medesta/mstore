
import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { WP, HP } from '../../utils/contants';
import Buttoncomponent from '../../components/Buttoncomponent/Buttoncomponent';
import {  userLogin } from '../../network/network';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../components/Loader/Loader';



class Login extends Component {
    state = {
        loader:false,
        show: true,
        email: '',
        password: '',
        

    }
    toggleShow() {
        const temp = this.state.show
        this.setState({ show: !temp });
    }
    textChange(value, name) {
        this.setState({
            [name]: value
        })
    }
    loginSubmit=()=>{
        this.setState({loader:true});
        const {email,password} = this.state;
        if(!email || !password){
            this.setState({loader:false});
            alert('Please fill all fields');
            return;
        }
        const obj = {'email':email ,"password":password}
        userLogin(obj)
        .then((response)=>{
            console.log(response);
            const user =response.data.user
            AsyncStorage.setItem('user' ,JSON.stringify(user));
            this.props.navigation.navigate('Home');
            this.setState({loader:false});

        })
        .catch((error)=>{
            this.setState({loader:false});

            alert(error.response.data.payload.message);
            
        })
        .finally(()=>{
            this.setState({loader:false});

        })


        // this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={styles.container}>

                <View>
                    <Text style={styles.subNav}>
                        Login
            </Text>
            {this.state.loader && <Loader />}
                </View>
                <View style={styles.loginForm}>
                    <View style={styles.loginField}>
                        <Text style={styles.fieldLabel}>Email</Text>
                        <TextInput style={styles.username} value={this.state.email} onChangeText={(value) => this.textChange(value, 'email')} />
                    </View>
                    <View style={styles.loginField}>
                            <Text style={styles.fieldLabel}>Password</Text>
                            <TextInput secureTextEntry={this.state.show} style={styles.username} value={this.state.password} onChangeText={(value) => this.textChange(value, 'password')} />

                            <TouchableOpacity style={styles.eyeIcon} onPress={() => this.toggleShow()}>
                                <Image
                                    style={styles.eyeProp}
                                    source={require('../../assets/eye.png')}
                                />
                            </TouchableOpacity>
                        </View>
                </View>
                <View>
                    <Buttoncomponent
                        width={WP(70)}
                        text="Log In"
                        height={60}
                        OnClick={() => { this.loginSubmit() }}
                    />
                    <View style={styles.noAccount}>
                        <View>
                            <Text style={styles.noAccountText}>Don't have an account?</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Signup') }} style={styles.secondaryButton}>
                                <Text style={styles.secondaryButtonText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>

            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },

    subNav: {
        fontWeight: "normal",
        color: "#000",
        fontSize: 34,
        textAlign: 'left',
        paddingLeft: WP(5),
        color: '#707070'
    },
    eyeIcon: {
        width: WP(10),
        height: HP(6.5),
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        right: 0,
        top:10

    },
    eyeProp: {
        width: WP(4) * 1.56,
        height: WP(4)

    },
    loginForm: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingBottom: 10,
        paddingTop: HP(5),
        padding: WP(8),


    },
    loginField: {
        width: "100%",
        paddingBottom: 20
    },
    username: {
        width: "100%",
        fontSize: 18,
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        color: "#000",
        padding: 10,
        paddingBottom: 5,
        // lineHeight: 18,

    },
    noAccount: {

        height: HP(7),
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: "center",
        color: '#707070',
        width: WP(100),
        flexDirection: "row",
        position:'relative'
    },
    noAccountText: {
        fontSize: 18,
        color: '#707070',
        textTransform: "capitalize",
        justifyContent: 'center',
        alignItems: "center",

    },
    fieldLabel: {
        fontSize: 16,
        color: '#707070',
        textTransform: "capitalize",
        justifyContent: 'center',
        alignItems: "center",

    },
    secondaryButton: {
        justifyContent: "center",
        alignItems: "center",
        alignItems: 'center',
    },
    secondaryButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 5,
    }
})