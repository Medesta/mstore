import React, { useEffect } from 'react';
import {BackHandler, Image, StyleSheet, Text, View  } from 'react-native';
import { abs } from 'react-native-reanimated';
import { WP, HP } from '../../utils/contants';
import Buttoncomponent from '../../components/Buttoncomponent/Buttoncomponent';

const Confirmation = (props) => {
    useEffect(()=>{
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return ()=> {
            BackHandler.removeEventListener("hardwareBackPress", backAction)
        }
    }, [])
    const backAction = () => {
       props.navigation.navigate('Home');
       return true;
    }
    return [
        <View style={styles.container}>
            <View style={styles.confirmationImg} >
                <Image 
                style={styles.confirmationImgProp}
                  source={require('../../assets/like.png')}
                  />
                  <Text style={styles.confirmationHead}>
                      Confiramtion
                  </Text>
                  <Text style={styles.confirmationPara}>You have successfully completed your payment procedure</Text>

            </View>
        </View>,
        <View style={styles.continueBtn}> 
        <Buttoncomponent
            width={WP(90)}
            text="Done"
            height={60}
            OnClick={()=>props.navigation.navigate('MyOrders')}
        />
    </View>
    ];
}

export default Confirmation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems:'center'
    },
    continueBtn:{
        position:'absolute',
        bottom:0,
        marginBottom:20
    },
    confirmationImg:{
        width:WP(70),
        alignSelf:"center",
        justifyContent:'center',
        alignItems:'center',
        marginTop:HP(10)
    },
    confirmationImgProp:{
        width:WP(69),
        height:HP(38)
    },
    confirmationHead:{
        textAlign:'center',
        fontSize:35,
        color:"#000",
        marginTop:40
    },
    confirmationPara:{
        textAlign:'center',
        fontSize:18,
        color:'#656565',
        marginTop:10
    }
    
})