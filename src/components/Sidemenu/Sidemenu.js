import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native';
import { HP, WP } from '../../utils/contants';


const Sidemenu = (props) => {
    return (
        <View style={styles.SideMenu}>
            <View>
                
            <TouchableOpacity style={styles.optActive} onPress={()=> props.navigation.navigate('Home')}>
                <Text style={styles.optActiveName}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opt} onPress={()=> props.navigation.navigate('Orders')}>
                <Text style={styles.optName}>My Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opt} onPress={()=> props.navigation.navigate('Profile')}>
                <Text style={styles.optName}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opt} onPress={()=> props.navigation.navigate('Settings')}>
                <Text style={styles.optName}>Settings</Text>
            </TouchableOpacity>
           
            </View>
            <View>
            <TouchableOpacity style={styles.logout} onPress={()=> props.navigation.navigate('Signout')}>
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