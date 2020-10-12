import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Buttoncomponent from '../../components/Buttoncomponent/Buttoncomponent';
import Header from '../../components/Header/Header';
import Radio from '../../components/Radio/Radio';
import { HP, WP } from '../../utils/contants';


class Address extends Component {
    state = {
        address: [
            {
                name: "Sample Address",
                address: '123 Main Street, New York, NY',
                city: 'New York',
                pobox: "10030",
                additional: ''
            },
            {
                name: "Address No.1",
                address: '123 Main Street, New York, NY',
                city: 'New York',
                pobox: "10030",
                additional: ''
            },

        ],
        selectedAddress:0
    }

    render() {
        return [

            <View style={styles.navi} >
                <Text style={styles.subNav}>
                    Address
                    </Text>
            </View>,
            <ScrollView style={styles.container}>
                {
                    (this.state.address).map((obj, index) => {
                        let prop= false;
                        if(index == this.state.selectedAddress){
                            prop = true;
                        }
                        return (
                            <View key={obj.index} style={styles.addressBox}>
                                <View style={styles.addressHead}>
                                    <Text style={styles.head}>{obj.name}</Text>
                                    <Radio
                                active={prop}
                                onPress={()=>{this.setState({selectedAddress:index})}}
                                />
                                </View>
                                <Text style={styles.para}>
                                    {obj.address}
                                </Text>
                                
                               
                            </View>

                        )
                    })
                }

            </ScrollView>
            , <View style={styles.continueBtn}>
                <TouchableOpacity style={styles.newAddress} onPress={()=>this.props.navigation.navigate('CreateAddress')}>
                    <Text style={styles.newAdd}>Add Address</Text>

                </TouchableOpacity>
                <Buttoncomponent
                    width={WP(90)}
                    text="Continue To Payment"
                    height={60}
                    OnClick={()=>{this.props.navigation.navigate('Confirmation')}}
                />
            </View>

        ];
    }
}

export default Address;

const styles = StyleSheet.create({
    navi: {
        backgroundColor: "#fff",
        paddingBottom: 10
    },
    container: {
        paddingHorizontal: WP(5),
    },
    subNav: {
        fontWeight: "normal",
        color: "#000",
        fontSize: 34,
        textAlign: 'left',
        paddingLeft: WP(5),
        color: '#000'
    },
    continueBtn: {
        paddingVertical: 20,
    },
    addressHead:{
        marginVertical:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },
    addressBox:{
        marginVertical:10
    },
    head:{
        fontSize:24,
        color:"#000"

    },
    para:{
        fontSize:18,
        color:'#a0a0a0'
    },
    newAddress:{
        width:WP(90),
        alignSelf:"center",
        justifyContent:'center',
        alignItems:"center",
        borderColor:'blue',
        borderWidth:3,
        borderRadius:1,
        borderStyle:'dotted',
        paddingVertical:10
    },
    newAdd:{
        fontSize:20,
        color:'blue'
    }

})