
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, Picker } from 'react-native';
import { WP, HP } from '../../utils/contants';
import Buttoncomponent from '../../components/Buttoncomponent/Buttoncomponent';
import { userCreate } from '../../network/network';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../components/Loader/Loader';



class Register extends Component {

    state = {
        show: true,
        name: '',
        email: '',
        password: '',
        gender: '',
        loader:false
    }
    toggleShow() {
        const temp = this.state.show
        this.setState({ show: !temp });
    }
    textChange(value, name) {
        this.setState({
            [name]: value
        },()=>{console.log(this.state)})
    }
    signSubmit=()=>{
    this.setState({loader:true});

        const {email,password ,gender , name} = this.state;
        if(!email || !password || !gender || !name){
    this.setState({loader:false});

            alert('Please fill all fields');
            return;
        }
        const firstName= name.split(" ")[0];
        const lastName= name.replace(name.split(" ")[0], "");
        console.log(firstName,lastName)

        const obj = {'email':email ,"password":password , 'gender':gender , 'firstName':firstName , 'lastName':lastName}
        userCreate(obj)
        .then((response)=>{
            console.log(response);
            const user =response.data.user
            AsyncStorage.setItem('user' ,JSON.stringify(user));
            this.props.navigation.navigate('Home');
                    


        })
        .catch((error)=>{
            console.log(error.response)
    this.setState({loader:false});
            alert(error.response.data.payload.message);
            
            
            
        })
        .finally(()=>{

        })
    }

    render() {



        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.subNav}>
                        Sign Up
            </Text>
                </View>
                <View style={styles.loginForm}>
            {this.state.loader && <Loader />}

                    <View style={styles.loginField}>
                        <Text style={styles.fieldLabel}>Name</Text>
                        <TextInput style={styles.username} value={this.state.name} onChangeText={(value) => this.textChange(value, 'name')} />
                    </View>
                    <View style={styles.loginField}>
                        <Text style={styles.fieldLabel}>Email</Text>
                        <TextInput style={styles.username} value={this.state.email} onChangeText={(value) => this.textChange(value, 'email')} />
                    </View>
                    <View style={styles.loginFieldGender}>
                        <Text style={styles.fieldLabel}>Gender</Text>
                        <Picker
                            selectedValue={this.state.gender}
                            style={styles.fieldLabel}
                            onValueChange={(value) => this.textChange(value, 'gender')}
                        >
                             <Picker.Item label="Select Any" value=''  />
                            <Picker.Item label="Other" value="Others" />
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />

                        </Picker>
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
                        text="Signup"
                        height={60}
                        OnClick={() => { this.signSubmit() }}
                    />
                    <View style={styles.noAccount}>
                        <View>
                            <Text style={styles.noAccountText}>Have an account already?</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('login') }} style={styles.secondaryButton}>
                                <Text style={styles.secondaryButtonText}>log in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>

            </View>
        );
    }
}

export default Register;

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
        marginTop: 0,
        paddingLeft: WP(5),
        color: '#707070'
    },
    eyeIcon: {
        width: WP(10),
        height: HP(7),
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: "absolute",
        right: 0



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
    loginFieldGender: {
        width: "100%",
        paddingBottom: 5,
        marginBottom:15,
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        color: "#000",
    },

    username: {
        width: "100%",
        fontSize: 18,
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        color: "#000",
        padding: 10,
        paddingBottom: 5,
        lineHeight: 18

    },
    noAccount: {

        height: HP(7),
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: "center",
        color: '#707070',
        width: WP(100),
        flexDirection: "row"
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