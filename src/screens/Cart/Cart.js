import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Buttoncomponent from '../../components/Buttoncomponent/Buttoncomponent';
import Header from '../../components/Header/Header';
import { HP, WP } from '../../utils/contants';

class Cart extends Component {
    state = {
        cart: [
            {
                name: "Woman T-Shirt",
                price: '55.00',
                company: 'Lotto. LTD',
                quantity: 1,
                image: require('../../assets/featured/p1.png')
            },
            {
                name: "Man T-Shirt",
                price: '34.00',
                company: 'Locoste',
                quantity: 1,
                image: require('../../assets/featured/p2.png')
            },
            {
                name: "Woman Upper",
                price: '45.0',
                company: 'Lotto. LTD',
                quantity: 1,
                image: require('../../assets/featured/p3.png')
            },
            {
                name: "Blezer",
                price: '15.0',
                company: 'Razor',
                quantity: 1,
                image: require('../../assets/featured/p4.png')
            },

            {
                name: "Woman T-Shirt",
                price: '55.00',
                company: 'bata',
                quantity: 1,
                image: require('../../assets/bestsell/p1.png')
            },
            {
                name: "Man T-Shirt",
                price: '34.00',
                company: 'Addidas',
                quantity: 1,
                image: require('../../assets/bestsell/p2.png')
            },
            {
                name: "Woman Upper",
                price: '45.0',
                company: 'Nike',
                quantity: 1,
                image: require('../../assets/bestsell/p3.png')
            },
            {
                name: "Blezer",
                price: '15.0',
                company: 'Maverich',
                quantity: 1,
                image: require('../../assets/bestsell/p4.png')
            }
        ]
    }

    render() {
        return [
            <ScrollView style={styles.container} >
                <View>
                    <Header
                        back={true}
                        ring={true}
                    />
                    <Text style={styles.subNav}>
                        Cart
                    </Text>
                </View>
                <View style={styles.cartMaped}>
                    {
                        (this.state.cart).map((obj, index) => {
                            return (
                                <View key={obj.index} style={styles.cartItem}>
                                    <View style={styles.itemImage}>
                                        <Image
                                            style={styles.imageProduct}
                                            source={obj.image}
                                        />
                                    </View>
                                    <View style={styles.itemDetailsBox}>
                                        <View >
                                            <Text style={styles.itemName}>{obj.name}</Text>
                                            <Text style={styles.itemCompany}>{obj.company}</Text>
                                            <Text style={styles.itemPrice}>${obj.price}</Text>
                                        </View>
                                        <View style={styles.itemQuantity}>
                                            <TouchableOpacity style={styles.itemQuantityBtn}>
                                                <Text style={styles.itemQuantityBtnText}>-</Text>
                                            </TouchableOpacity>
                                            <Text style={styles.itemQuantityText}>{obj.quantity}</Text>
                                            <TouchableOpacity style={styles.itemQuantityBtn} >
                                                <Text style={styles.itemQuantityBtnText}>+</Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                    <View style={styles.itemCross}>
                                        <TouchableOpacity style={styles.Icon}>
                                            <Image
                                                style={styles.menuProp}
                                                source={require('../../assets/cross.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            )
                        })
                    }

                </View>
            </ScrollView>,
            <View style={styles.continueBtn}>
                <Buttoncomponent
                    width={WP(70)}
                    text="Continue"
                    height={60}
                    OnClick="null"
                />
            </View>

        ];
    }
}

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        paddingBottom:WP(22)
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
    continueBtn:{
        paddingBottom:20,
        backgroundColor:'rgba(255,255,255,0.9)',
        position:'absolute',
        bottom:0
    }

})