
import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, Picker } from 'react-native';
import { WP, HP } from '../../utils/contants';
import Buttoncomponent from '../../components/Buttoncomponent/Buttoncomponent';
import Header from '../../components/Header/Header';
import { ScrollView } from 'react-native-gesture-handler';
import { doProfile, getProfile } from '../../network/network';
import User from '../../helper/User';
import Loader from '../../components/Loader/Loader';



class Profile extends Component {
    state = {
        name: '',
        city: '',
        gender: '',
        email: '',
        phone: '',
        loader: true
    }
    textChange(value, name) {
        this.setState({
            [name]: value
        }, () => { console.log(this.state) })
    }
    componentDidMount() {
        getProfile(User.getToken())
            .then((response) => {
                console.log(response);
                this.setState({
                    name: (response.data.users.firstName) + ' ' + (response.data.users.lastName),
                    city: response.data.users.city,
                    gender: response.data.users.gender,
                    email: response.data.users.email,
                    phone: response.data.users.phone,
                    loader: false
                }

                )
            })
            .catch((error) => {
                console.log(error);
                alert(error.response.data.payload.message);

            })

    }
    doneProfile = () => {
        this.setState({ loader: true });
        const { email, city, gender, name, phone } = this.state;
        if (!email || !city || !gender || !name || !phone) {
            alert('Please fill all fields');
            return;
        }
        const firstName = name.split(" ")[0];
        const lastName = name.replace(name.split(" ")[0], "");
        console.log(firstName, lastName)

        const obj = { 'email': email, "city": city, 'gender': gender, 'firstName': firstName, 'lastName': lastName, "phone": phone }
        doProfile(obj, User.getToken())
            .then((response) => {
                console.log(response);
                // this.props.navigation.navigate('Home');
                alert('User updated')
                this.setState({ loader: false });




            })
            .catch((error) => {
                console.log(error.response)
                this.setState({ loader: false });

                alert(error.response.data.payload.message);


            })


    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.subNav}>
                        Profile
            </Text>
                </View>
                <ScrollView>
                    {this.state.loader && <Loader />}
                    <View style={styles.loginForm}>
                        <View style={styles.loginField}>
                            <Text style={styles.fieldLabel}>Name</Text>
                            <TextInput style={styles.username} value={this.state.name} onChangeText={(value) => this.textChange(value, 'name')} />
                        </View>
                        <View style={styles.loginField}>
                            <Text style={styles.fieldLabel}>City</Text>
                            <TextInput style={styles.username} value={this.state.city} onChangeText={(value) => this.textChange(value, 'city')} />
                        </View>
                        <View style={styles.loginFieldGender}>
                            <Text style={styles.fieldLabel}>Gender</Text>
                            <Picker
                                selectedValue={this.state.gender}
                                style={styles.fieldLabel}
                                itemStyle={IS_IOS ? {
                                    width: WP(70),
                                    height: 100,
                                    // borderWidth:0.2
                                } : {}}
                                onValueChange={(value) => this.textChange(value, 'gender')}
                            >
                                <Picker.Item label="Select Any" value='' />
                                <Picker.Item label="Other" value="Others" />
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />

                            </Picker>
                        </View>
                        <View style={styles.loginField}>
                            <Text style={styles.fieldLabel}>Email</Text>
                            <TextInput style={styles.username} value={this.state.email} onChangeText={(value) => this.textChange(value, 'email')} />
                        </View>
                        <View style={styles.loginField}>
                            <Text style={styles.fieldLabel}>Phone Number</Text>
                            <TextInput style={styles.username} value={this.state.phone} onChangeText={(value) => this.textChange(value, 'phone')} />
                        </View>
                    </View>

                </ScrollView>
                <View style={styles.continueBtn}>
                    <Buttoncomponent
                        width={WP(70)}
                        text="Done"
                        height={60}
                        OnClick={this.doneProfile}
                    />
                </View>

            </View>
        );
    }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    continueBtn: {
        paddingVertical: 20,
    },
    loginFieldGender: {
        width: "100%",
        paddingBottom: 5,
        marginBottom: 15,
        borderBottomColor: "#000",
        borderBottomWidth: StyleSheet.hairlineWidth,
        color: "#000",
    },
    subNav: {
        fontWeight: "normal",
        color: "#000",
        fontSize: 34,
        textAlign: 'left',
        marginTop: 0,
        paddingLeft: WP(5),
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
        paddingHorizontal: WP(8),
        marginTop: 20


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