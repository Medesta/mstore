
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { WP, HP } from '../../utils/contants';
import Buttoncomponent from '../../components/Buttoncomponent/Buttoncomponent';
import Header from '../../components/Header/Header';
import { ScrollView } from 'react-native-gesture-handler';



const Profile = () => {

    const [show, setShow] = useState(true);

    return (
        <View style={styles.container}>
            <View>
                <Header
                    back={true}
                    ring={true}
                />
                <Text style={styles.subNav}>
                    Profile
            </Text>
            </View>
            <ScrollView>
            <View style={styles.loginForm}>
                <View style={styles.loginField}>
                    <Text style={styles.fieldLabel}>Name</Text>
                    <TextInput value="Irfan Anwar" style={styles.username} />
                </View>
                <View style={styles.loginField}>
                    <Text style={styles.fieldLabel}>Address Line</Text>
                    <TextInput value="Sample Road" style={styles.username} />
                </View>
                <View style={styles.loginField}>
                    <Text style={styles.fieldLabel}>City</Text>
                    <TextInput value="Sample" style={styles.username} />
                </View>
                <View style={styles.loginField}>
                    <Text style={styles.fieldLabel}>Gender</Text>
                    <TextInput value="Male" style={styles.username} />
                </View>
                <View style={styles.loginField}>
                    <Text style={styles.fieldLabel}>Email</Text>
                    <TextInput value="Isample@gmial.com" style={styles.username} />
                </View>
                <View style={styles.loginField}>
                    <Text style={styles.fieldLabel}>Phone Number</Text>
                    <TextInput value="00000000000" style={styles.username} />
                </View>
                </View>
                <View style={styles.continueBtn}> 
                <Buttoncomponent
                    width={WP(70)}
                    text="Done"
                    height={60}
                    OnClick="null"
                />
            </View>
            </ScrollView>
            
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    continueBtn:{
        paddingVertical:20,
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
        marginTop:20


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