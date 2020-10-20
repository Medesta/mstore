import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Buttoncomponent from '../../components/Buttoncomponent/Buttoncomponent';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import User from '../../helper/User';
import { getCart, postToCartDecreament, postToCartIncreament, postToCartZero } from '../../network/network';
import { HP, WP } from '../../utils/contants';

class Cart extends Component {

    state = {
        loader: true,
        products: {},
        empty: false
    }
    componentDidMount() {
        this.getDataFromEndpoint()
        this.didFocusListener = this.props.navigation.addListener(
            'didFocus',
            () => {
                if (this.state.products.products_info) {
                    this.getDataFromEndpoint()
                }
            }
        );

    }

    getDataFromEndpoint = () => {
        getCart(User.getToken())
            .then((response) => {
                console.log(response);
                this.setState({
                    products: response.data.product,
                    loader: false,
                    empty: response.data.product.products_info.length < 1
                })
            })
            .catch((error) => {
                console.log(error.response);
            })

    }

    componentWillUnmount() {
        this.didFocusListener.remove();
    }

    removeProduct(id, size) {
        this.setState({ loader: true })
        console.log(id, size, "Zero");
        let data = {
            "product_id": id,
            "size": size
        }
        postToCartZero(data, User.getToken())
            .then((response) => {
                console.log(response);
                let temp = response.data.order;
                console.log(temp);
                this.setState({
                    products: {
                        products_info: temp.order_info.products,
                        order_total: temp.order_total
                    },
                    loader: false
                });
                console.log(this.state);
            })
            .catch((error) => {
                console.log(error.response);
                alert(error.response.data.payload.message);

            })
    }
    increamentProduct(id, size) {
        this.setState({ loader: true })
        console.log(id, size, "Zero");
        let data = {
            "product_id": id,
            "size": size
        }
        postToCartIncreament(data, User.getToken())
            .then((response) => {
                console.log(response);
                let temp = response.data.order;
                console.log(temp);
                this.setState({
                    products: {
                        products_info: temp.order_info.products,
                        order_total: temp.order_total
                    },
                    loader: false
                });
                console.log(this.state);
            })
            .catch((error) => {
                console.log(error.response);
                alert(error.response.data.payload.message);

            })
    }

    decreamentProduct(id, size) {
        this.setState({ loader: true })
        console.log(id, size, "Zero");
        let data = {
            "product_id": id,
            "size": size
        }
        postToCartDecreament(data, User.getToken())
            .then((response) => {
                console.log(response);
                let temp = response.data.order;
                console.log(temp);
                this.setState({
                    products: {
                        products_info: temp.order_info.products,
                        order_total: temp.order_total
                    },
                    loader: false
                });
                console.log(this.state);
            })
            .catch((error) => {
                console.log(error.response);
                alert(error.response.data.payload.message);

            })
    }

    render() {
        return [
            <ScrollView style={styles.container} >
                <View>
                    <Text style={styles.subNav}>
                        Cart
                    </Text>
                </View>
                <View style={styles.cartMaped}>
                    {this.state.products?.products_info?.map((obj, index) => {
                        return (
                            <TouchableOpacity key={obj.index} style={styles.cartItem} onPress={() => this.props.navigation.push('Product', {
                                id: obj.product_id

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
                                    <View style={styles.itemQuantity}>
                                        <TouchableOpacity style={styles.itemQuantityBtn} onPress={() => { this.decreamentProduct(obj.product_id, obj.size) }}>
                                            <Text style={styles.itemQuantityBtnText}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.itemQuantityText}>{obj.quantity}</Text>
                                        <TouchableOpacity style={styles.itemQuantityBtn} onPress={() => { this.increamentProduct(obj.product_id, obj.size) }} >
                                            <Text style={styles.itemQuantityBtnText}>+</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                                <View style={styles.itemCross}>
                                    <TouchableOpacity style={styles.Icon} onPress={() => { this.removeProduct(obj.product_id, obj.size) }}>
                                        <Image
                                            style={styles.menuProp}
                                            source={require('../../assets/cross.png')}
                                        />
                                    </TouchableOpacity>
                                </View>

                            </TouchableOpacity>
                        )
                    })
                    }
                    {this.state.products?.products_info?.length < 1 && <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={styles.itemName} > Cart Empty
                    </Text></View>
                    }


                </View>
                {this.state.loader && <Loader />}
            </ScrollView>,
            <View style={styles.continueBtn}>
                {!this.state.products?.products_info?.length < 1 &&  <Buttoncomponent
                    width={WP(70)}
                    text="Check Out"
                    height={60}
                    OnClick={() => {
                        if (!this.state.products.products_info) {
                            alert('Cart Empty');
                            return
                        }
                        this.props.navigation.navigate('Checkout')
                    }}
                />}
               
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
    }

})