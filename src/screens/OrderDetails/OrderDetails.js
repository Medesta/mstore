import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, BackHandler } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Buttoncomponent from '../../components/Buttoncomponent/Buttoncomponent';
import Header from '../../components/Header/Header';
import { getOrderHistory } from '../../network/network';
import { HP, WP } from '../../utils/contants';
import User from './../../helper/User'

class OderDetails extends Component {
    state = {
        cart:this.props.navigation.getParam('list')
    }
    componentDidMount(){

       console.log(this.state);
        BackHandler.addEventListener("hardwareBackPress", this.backAction);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backAction);
    }
    
    backAction = () => {
        this.props.navigation.navigate('Home');
        return true;
    }

    
    

    render() {
        return [
            <ScrollView style={styles.container} >
                <View>
                    <Text style={styles.subNav}>
                        My Orders
                    </Text>
                </View>
                <View style={styles.cartMaped}>
                    {
                        (this.state.cart).map((obj, index) => {
                            return (
                                <TouchableOpacity key={obj.index} style={styles.cartItem} onPress={()=>this.props.navigation.push('Product',{
                                    id:obj.product_id
                                })}>
                                    <View style={styles.itemImage}>
                                        <Image
                                            style={styles.imageProduct}
                                        source={{ uri: obj.imageUrl[0] }}
                                            
                                        />
                                    </View>
                                    <View style={styles.itemDetailsBox}>
                                        <View >
                                            <Text style={styles.itemName}>{obj.name}</Text>
                                            <Text style={styles.itemCompany}>{obj.brand}</Text>
                                            <Text style={styles.itemPrice}>${obj.price}</Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity style={styles.againOrder} onPress={()=>this.props.navigation.push('Product',{
                                                id:obj.product_id
                                            })}>
                                                <Text style={styles.againOrderText}>Order Again</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                    <View style={styles.itemCross}>
                                        <View style={styles.itemQuantity}>
                                            <Text style={styles.itemQuantityText}>{obj.quantity}</Text>

                                        </View>
                                    </View>

                                </TouchableOpacity>
                            )
                        })
                    }

                </View>
            </ScrollView>,

        ];
    }
}

export default OderDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30
    },
    subNav: {
        fontWeight: "normal",
        color: "#000",
        fontSize: 34,
        textAlign: 'left',
        paddingLeft: WP(5),
        color: '#000'
    },
    cartMaped: {
        width: '100%',
        paddingTop: 30,
        paddingHorizontal: WP(5),
        paddingBottom: WP(22)
    },
    cartItem: {
        overflow: 'hidden',
        width: '100%',
        height: HP(23),
        flexDirection: "row",
        marginVertical: 15,
        paddingLeft: 20,
        paddingRight: 20,
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        backgroundColor: "#fff",
        alignItems: 'center'
    },
    itemImage: {
        width: WP(32),
        alignItems: 'flex-start',
        marginRight: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 7,
        backgroundColor: '#fff'
    },
    imageProduct: {
        width: '100%',
        height: '100%'
    },
    itemDetailsBox: {
        height: "100%",
        justifyContent: 'space-between',
        width: WP(38),
        overflow: 'hidden'
    },
    itemQuantity: {
        backgroundColor: "#f3f3f3",
        borderRadius: 5,
        width: WP(32),
        flexDirection: 'row',
        alignItems: 'center',

    },
    itemQuantityBtn: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        paddingVertical: 5,

    },
    itemQuantityBtnText: {
        fontSize: 25,
    },
    itemName: {
        fontSize: 20,
        fontWeight: '100',
        color: '#000'
    },
    itemCompany: {
        fontSize: 18,
        fontWeight: '100',
        color: '#a0a0a0',
        paddingVertical: 2
    },
    itemQuantityText: {
        fontSize: 18,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    itemPrice: {
        color: "#667eea",
        fontSize: 18,
        paddingVertical: 3

    },
    itemCross: {
        position: 'relative',
        height: '100%'
    },
    Icon: {
        width: WP(4) * 1.56,
        height: 50,
        position: 'absolute',
        top: 0,
        alignItems: "center"
    },
    menuProp: {
        width: WP(2.5) * 1.56,
        height: WP(3.5)
    },
    continueBtn: {
        paddingBottom: 20,
        backgroundColor: 'rgba(255,255,255,0.9)',
        position: 'absolute',
        bottom: 0
    },
    againOrder:{
        backgroundColor:'#d6d6d6',
        paddingHorizontal:5,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:5

    },
    againOrderText:{
        fontSize:16,
    }


})