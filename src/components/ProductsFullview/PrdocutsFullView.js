import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, StyleSheet } from 'react-native';
import { WP, HP } from '../../utils/contants';



const ProductsFullView = (props) => {
    if (props.list) {

        return [
            <View style={styles.subNav}>
                <Text style={styles.subNavTitle}>
                {props.name}
                </Text>
            </View>,
            <View style={styles.feature}>
                <View
                    style={styles.tabView}
                >
                    {(props.list).map((item) => {
                        return (
                            <TouchableOpacity key={props.list.index} activeOpacity={0.8} style={styles.featureBox} onPress={()=>props.show(item._id)}>
                                <View style={styles.featureBoxInside}>
                                    <Image style={styles.featuredImageBox} source={{uri:item.imageUrl[0]}} />
                                </View>
                                <View style={styles.featuredInfo}>
                                    <Text style={styles.featuredText}>${item.price}</Text>
                                    <Text style={styles.featuredText}>{item.name}</Text>
                                </View>

                            </TouchableOpacity>
                        )
                    })}

                </View>
            </View>
        ];
    }
    else {
        return [
            <View style={styles.subNav}>
                <Text style={styles.subNavTitle}>
                    {props.name}
                </Text>
            </View>,
            <View >
                <Text style={styles.errorMessage}>
                    Nothing To show
                </Text>
            </View>
        ];

    }
}

export default ProductsFullView;

const styles = StyleSheet.create({
    subNav: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: WP(5),
        marginTop: 0,
    },
    
    tabView: {
        paddingHorizontal: WP(6),
        paddingBottom:0,
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    subNavTitle: {
        fontWeight: "normal",
        color: "#000",
        fontSize: 42,
        textAlign: 'left',
        color: '#434343'
    },
    feature: {
        paddingTop: 20,
        paddingLeft: 0,
        paddingBottom: 20
    },
    featureBox: {
        backgroundColor: "transparent",
        marginBottom: 20,

    },
    featureBoxInside: {
        shadowColor: "#000",
        borderRadius: 7,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        backgroundColor: "#fff",
        height: HP(30),
        width: WP(40),


    },
    featuredInfo: {
        paddingTop: 15,

    },
    featuredImageBox: {
        justifyContent: "center",
        alignItems: 'center',
        resizeMode:'cover',
        height: "100%",
        width: "100%",
        overflow: 'hidden',
        borderRadius: 7
    },
    featuredText: {
        color: '#000',
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 7

    },
    errorMessage:{
        marginHorizontal:50,
        marginTop:20,
        marginBottom:40,
        fontSize:24,
        color:"#c9c9c9"



    },

})