import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Buttoncomponent from '../../components/Buttoncomponent/Buttoncomponent';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import User from '../../helper/User';
import { getAddress, getCart } from '../../network/network';
import { HP, WP } from '../../utils/contants';

class Checkout extends Component {
    state = {
        loader:true,
       products:{},
       address:{}
    }
    componentDidMount(){
        this.getDataFromEndpoint();
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
                this.setState({ products: response.data.product }) }
            // ,()=>console.log(this.state,"!!!!!!!!!!!!!!!!!")
            )
            .catch((error) => {
                console.log(error.response);
            })
        getAddress(User.getToken())
        .then((response)=>{
            console.log(response);
            // this.setState({address:response})

            this.setState({loader:false ,
             address:response.data.addresses})

        })
        .catch((error)=>{
            console.log(error.response);
            this.setState({address:response.data.addresses})
        })

    }

    render() {
        console.log(this.state , "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1")
        return [

            <View style={styles.navi} >
               
                <Text style={styles.subNav}>
                    Checkout
                    </Text>
            </View>,
            <ScrollView style={styles.container} >
                    {this.state.loader && <Loader />}
                <View style={styles.cartMaped}>
                    {this.state.products?.products_info?.map((obj, index) => {
                            return (
                                <TouchableOpacity key={index} style={styles.cartItem} onPress={() => this.props.navigation.push('Product', {
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
                                       
                                    </View>
                                   

                                </TouchableOpacity>
                            )
                        })
                    }

                </View>
            </ScrollView>,
            <View style={styles.continueBtn}>
                <View style={styles.orderDetails}>

                    <Text style={styles.detailHead}>Address</Text>
                    <View style={styles.orderLine}>
                        <Text style={styles.detailans}>{this.state.address.length?this.state.address[0].name : "Not Selected"}</Text>
                    </View>
                    <View style={styles.orderPricing} >
                        <View style={styles.orderLine}>
                            <Text style={styles.detailHead}>Subtotal</Text>
                            <Text style={styles.detailans}>${this.state.products.order_total ? this.state.products.order_total.subtotal :null}</Text>
                        </View>
                        <View style={styles.orderLine}>
                            <Text style={styles.detailHead}>Discount</Text>
                            <Text style={styles.detailans}>${this.state.products.order_total ? this.state.products.order_total.discount :null}</Text>
                        </View>
                        <View style={styles.orderLine}>
                            <Text style={styles.detailHead}>Shipping</Text>
                            <Text style={styles.detailans}>${this.state.products.order_total ? this.state.products.order_total.shipping :null}</Text>
                        </View>

                    </View>
                    <View style={styles.orderPricing} >
                        <View style={styles.orderLine}>
                            <Text style={styles.detailans}>Total</Text>
                            <Text style={styles.detailans}>${this.state.products.order_total ? this.state.products.order_total.total :null}</Text>
                        </View>
                    </View>

                </View>
                <Buttoncomponent
                    width={WP(80)}
                    text="Select Address"
                    height={60}
                    OnClick={()=>{
                        console.log(this.state.products.order_id);
                        this.props.navigation.navigate('Address' , {
                        order_id : this.state.products.order_id
                    })}}
                />
            </View>

        ];
    }
}

export default Checkout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    orderDetails: {
        paddingHorizontal: WP(5),
        paddingVertical: 20,
        height:HP(35)
      
    },
    detailans:{
        fontSize:20,
        color:"#000"
    },
    detailSelect:{
        fontSize:20,
        color:'blue'
    },
    detailHead:{
        fontSize:20,
        color:'#a0a0a0',
        marginBottom:5
    },
    orderPricing: {
        marginTop: 10,
        paddingVertical:10,
        borderTopColor:"#a0a0a0",
        borderTopWidth:1,
        
    },
    orderLine: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navi: {
        backgroundColor: "#fff",
        paddingBottom: 10
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
        paddingBottom: HP(52)
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
        backgroundColor: 'rgba(255,255,255,1)',
        position: 'absolute',
        bottom: 0
    }

})