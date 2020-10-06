import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const Radio = (props) => {
    return (
        <TouchableOpacity style={styles.border} onPress={props.onPress}>
            {(props.active)?
            <View style={styles.innerBox}></View> :
            null
            }
            
        </TouchableOpacity>
    );
}

export default Radio;

const styles = StyleSheet.create({
    border:{
        height:25,
        width:25,
        borderRadius:50,
        borderWidth:2,
        borderColor:"blue",
        padding:2
    },
    innerBox:{
        width:"100%",
        height:"100%",
        backgroundColor:'blue',
        borderRadius:50,
    }
    
})