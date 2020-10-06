import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight, Image, Button } from 'react-native';
import { WP, HP } from '../../utils/contants';
import Buttoncomponent from '../../components/Buttoncomponent/Buttoncomponent';



const Intro = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>
                    Welcome To Mstore
              </Text>
                <Text style={styles.subheading}>
                    Explore Us
            </Text>
            </View>
            <View style={styles.welcomeImage}>
                <Image
                    style={styles.welcomeImageProp}
                    source={require('../../assets/welcome-bg.png')}
                />
            </View>
            <View>
                <Buttoncomponent
                width={WP(70)}
                text="Log In"
                height={60}
                OnClick={()=>{props.navigation.navigate('login')}}
                />
                <TouchableOpacity onPress={() => {props.navigation.navigate('Signup') }} style={styles.secondaryButton}>
                    <Text style={styles.secondaryButtonText}>Sign Up</Text>
                </TouchableOpacity>


            </View>

        </View>
    );
}

export default Intro;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },
    heading: {
        fontWeight: "bold",
        color: "#000",
        fontSize: 26,
        textAlign: 'center',
        marginTop: WP(15),
        color: '#707070'

    },
    subheading: {
        fontWeight: "normal",
        color: "#000",
        fontSize: 24,
        textAlign: 'center',
        marginTop: 10,
        color: '#707070'
    },
    welcomeImage: {
        width: '100%',
        height: HP(40),
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10,


    },
    welcomeImageProp: {
        width: WP(60) * 1.56,
        height: WP(60)

    },
    secondaryButtonText: {
        fontSize: 18
    },
    secondaryButton: {
        marginTop: 0,
        height: WP(15),
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    }
})