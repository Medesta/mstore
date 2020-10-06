
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { WP, HP } from '../../utils/contants';
import Buttoncomponent from '../../components/Buttoncomponent/Buttoncomponent';
import Header from '../../components/Header/Header';



const Register = () => {

    const [show, setShow] = useState(true);

    return (
        <View style={styles.container}>
            <View>
               <Header
               back={true}
               />
                <Text style={styles.subNav}>
                    Sign Up
            </Text>
            </View>
            <View style={styles.loginForm}>
                <View style={styles.loginField}>
                    <Text style={styles.fieldLabel}>Name</Text>
                    <TextInput style={styles.username} />
                </View>
                <View style={styles.loginField}>
                    <Text style={styles.fieldLabel}>Email</Text>
                    <TextInput style={styles.username} />
                </View>
                <View style={styles.loginField}>
                    <Text style={styles.fieldLabel}>Password{show}</Text>
                    <TextInput secureTextEntry={show} style={styles.username} />

                    <TouchableOpacity style={styles.eyeIcon} onPress={() => setShow(!show)}>
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
                    OnClick="null"
                />
                <View style={styles.noAccount}>
                    <View>
                        <Text style={styles.noAccountText}>Don't have an account?</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => { }} style={styles.secondaryButton}>
                            <Text style={styles.secondaryButtonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>

        </View>
    );
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