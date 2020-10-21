import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, BackHandler } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Buttoncomponent from '../../components/Buttoncomponent/Buttoncomponent';
import Header from '../../components/Header/Header';
import { HP, WP } from '../../utils/contants';
import User from './../../helper/User';
import { getOrderHistory } from '../../network/network';
import Loader from '../../components/Loader/Loader';



class MyOrders extends Component {
    state = {
        loader:true,
        orders: []
    }
    componentDidMount() {
        getOrderHistory(User.getToken())
            .then((response) => {
                console.log(response);
                this.setState({ orders: response.data.orders , 
                loader:false },
                    () => [
                        console.log(this.state)
                    ])
            })
            .catch((error) => {
                alert(error.response.data.payload.message);

            })
            .finally(()=>{
                this.setState({loader:false})
            })
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
                {this.state.loader && <Loader />}

                <View>
                    <Text style={styles.subNav}>
                        My Orders
                    </Text>
                </View>
                <View style={styles.cartMaped}>

                    {this.state.orders?.map((obj, index) => {
                        return (
                            <TouchableOpacity key={obj.index} style={styles.cartItem}
                                onPress={() => this.props.navigation.navigate('orderDetails',{
                                    list: obj.products
                                })}
                            >
                                <Text style={styles.itemName}>Order No. {index + 1}</Text>

                                <Text style={styles.itemDetails}>Item Quantity : {obj.products.length}</Text>

                                <Text style={styles.itemDetails}>Shipped To : {obj.address.city}, {obj.address.country}</Text>
                                <Text style={styles.itemDate}>Date : {obj.createdAt.split("T")[0]}</Text>

                            </TouchableOpacity>
                        )
                    })
                    }

                </View>
            </ScrollView>,

        ];
    }
}

export default MyOrders;

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
        alignItems: 'flex-start'
    },

    itemName: {
        fontSize: 24,
        fontWeight: '100',
        color: 'grey',
        marginBottom: 10
    },
    itemDetails: {
        fontSize: 20,
        fontWeight: '100',
        color: '#000',
        marginBottom: 10
    },
    itemDate: {
        fontSize: 16,
        color: 'grey'
    }




})