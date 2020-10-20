import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native';
import User from '../../helper/User';
import { doLogout } from '../../network/network';
import { HP, WP } from '../../utils/contants';


const Sidemenu = (props) => {
    const logout = () => {
        // this.setState({ loader: true })
        doLogout(User.getToken())
            .then(res => {
                // this.setState({ loader: false })
                AsyncStorage.removeItem('user');
                // console.warn('Response from logout ', res.data.response)
                props.navigation.navigate('login')
            })
            .catch(err => {
                // this.setState({ loader: false })
                // console.warn('Error from logout ', err.response.data)
                AsyncStorage.removeItem('user')
                props.navigation.navigate('login')
            })
    }
    let{activeItemKey} = props;
    return (
        <View style={styles.SideMenu}>
            <View>
                
            <TouchableOpacity style={activeItemKey == "Home" ? styles.optActive :styles.opt } onPress={()=> props.navigation.navigate('Home')}>
                <Text style={activeItemKey == "Home" ?styles.optActiveName : styles.optName}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={activeItemKey == "Cart" ? styles.optActive :styles.opt} onPress={()=> props.navigation.navigate('Cart')}>
                <Text style={activeItemKey == "Cart" ?styles.optActiveName : styles.optName}>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={activeItemKey == "MyOrders" ? styles.optActive :styles.opt} onPress={()=> props.navigation.navigate('MyOrders')}>
                <Text style={activeItemKey == "MyOrders" ?styles.optActiveName : styles.optName}>My Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={activeItemKey == "Profile" ? styles.optActive :styles.opt} onPress={()=> props.navigation.navigate('Profile')}>
                <Text style={activeItemKey == "Profile" ?styles.optActiveName : styles.optName}>Profile</Text>
            </TouchableOpacity>
           
           
            </View>
            <View>
            <TouchableOpacity style={styles.logout} onPress={()=> logout()}>
                <Text style={styles.optActiveName}>Signout</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

export default Sidemenu;


const styles = StyleSheet.create({

    SideMenu: {
        flex:1,
        paddingTop:HP(20),
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        overflow:"hidden",
        backgroundColor:"#fff",
        justifyContent:'space-between'

    },
    optActive:{
        width:"90%",
        paddingVertical:WP(5),
        paddingHorizontal:WP(10),
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:"#000",
        marginBottom:10
    },
    opt:{
        width:"90%",
        paddingVertical:WP(5),
        paddingHorizontal:WP(10),
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:"transparent",
        marginBottom:10
    },
    optActiveName:{
        color:"#fff",
        fontSize:18,
    },
    optName:{
        color:"#000",
        fontSize:18,
    },
    logout:{
        width:"100%",
        paddingVertical:WP(5),
        paddingHorizontal:WP(10),
        backgroundColor:"#000",
        justifyContent:'center',
        alignItems:'center'

    }
})