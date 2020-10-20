
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { WP, HP } from '../../utils/contants';
import Buttoncomponent from '../../components/Buttoncomponent/Buttoncomponent';
import Header from '../../components/Header/Header';
import { ScrollView } from 'react-native-gesture-handler';
import User from '../../helper/User';
import {postAddress} from "../../network/network"
import Loader from '../../components/Loader/Loader';



class CreateAddress extends Component {
    state = {
        loader:false,
        name: '',
        lane: '',
        city: '',
        postalcode: '',
        phone: ''
    }

    textChange(value, name) {
        this.setState({
            [name]: value
        })
    }
    submitAddress = () => {
        this.setState({loader:true});
        const { name, lane, city, postalcode, phone } = this.state;
        if (!name || !lane || !city || !postalcode || !phone) {
            alert('Please fill all fields');
        this.setState({loader:false});

            return;
        }
        const data = {
            "name": name,
            "lane": lane,
            "city": city,
            "postalCode": postalcode,
            'phone': phone
        }
        postAddress(data,User.getToken())
        .then((response)=>{
            console.log(response);
            props.navigation.pop();
        })
        .catch((error)=>{
           alert(error.response.data.payload.message);
        })

    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.subNav}>
                        Create Address
            </Text>
                </View>
                <ScrollView>
                {this.state.loader && <Loader />}
                    <View style={styles.loginForm}>
                        <View style={styles.loginField}>
                            <Text style={styles.fieldLabel}>Name</Text>
                            <TextInput placeholder="Home" style={styles.username} value={this.state.name} onChangeText={(value) => this.textChange(value, 'name')} />
                        </View>
                        <View style={styles.loginField}>
                            <Text style={styles.fieldLabel}>Address Line</Text>
                            <TextInput placeholder="Sample Road" style={styles.username} value={this.state.lane} onChangeText={(value) => this.textChange(value, 'lane')} />
                        </View>
                        <View style={styles.loginField}>
                            <Text style={styles.fieldLabel}>City</Text>
                            <TextInput placeholder="Sample" style={styles.username} value={this.state.city} onChangeText={(value) => this.textChange(value, 'city')} />
                        </View>
                        <View style={styles.loginField}>
                            <Text style={styles.fieldLabel}>Postal Code</Text>
                            <TextInput placeholder="0000" maxLength={5} keyboardType='numeric' style={styles.username} value={this.state.postalcode} onChangeText={(value) => this.textChange(value, 'postalcode')} />
                        </View>
                        <View style={styles.loginField}>
                            <Text style={styles.fieldLabel}>Phone Number</Text>
                            <TextInput placeholder="00000000000" maxLength={12} keyboardType='numeric' style={styles.username} value={this.state.phone} onChangeText={(value) => this.textChange(value, 'phone')} />
                        </View>
                    </View>

                </ScrollView>
                <View style={styles.continueBtn}>
                    <Buttoncomponent
                        width={WP(90)}
                        text="Add Address"
                        height={60}
                        // OnClick={()=>{props.navigation.pop()}}
                        OnClick={this.submitAddress}
                    />
                </View>

            </View>
        );
    }
}

export default CreateAddress;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    continueBtn: {
        paddingVertical: 20,
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
        borderBottomWidth: StyleSheet.hairlineWidth,
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