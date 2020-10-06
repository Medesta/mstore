import React from 'react';
import { Text, TouchableOpacity ,StyleSheet, View } from 'react-native';
import {WP} from '../../utils/contants'
import LinearGradient from 'react-native-linear-gradient';


const Buttoncomponent = (props) => {
    return (
        <View style={styles.componentConatiner}>
        <TouchableOpacity onPress={() => { }} style={[styles.primaryButton,props.width&&{width:props.width},props.height&&{height:props.height}]}>
            <LinearGradient
                colors={['#667eea', '#64b5ff']}
                style={styles.linearGradient}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                locations={[0.15, 0.9]}

            >
                <Text style={styles.ButtonText}>{props.text}</Text>

            </LinearGradient>
        </TouchableOpacity>
        </View>
    );
}

export default Buttoncomponent;


const styles= StyleSheet.create({
    componentConatiner:{
        width: WP(100),
        backgroundColor:'transparent',
    },
    primaryButton: {
        width:"70%",
        marginTop: 20,
        height: 60,
        justifyContent: 'center',
        alignSelf: 'center',
        zIndex: 999,


    },
    linearGradient: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,


    },
    ButtonText: {
        fontSize: 18,
        color: '#fff'
    },
})