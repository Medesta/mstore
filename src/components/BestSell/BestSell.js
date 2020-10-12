import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, StyleSheet } from 'react-native';
import { WP, HP } from '../../utils/contants';
import { FlatList } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

const BestSell = (props) => {
    return [
        <View style={styles.subNav}>
            <Text style={styles.subNavTitle}>
               Best Sell
        </Text>
            <TouchableOpacity style={styles.subNavMore} onPress={props.onPress}>
                <Text style={styles.subNavMoreText}>
                    See all
        </Text>
            </TouchableOpacity>
        </View>,
        <View style={styles.feature}>
            <FlatList
                ListHeaderComponent={() => <View style={{ marginLeft: WP(7) }} />}
                ListFooterComponent={() => <View style={{ marginRight: WP(5) }}></View>}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                data={props.list}
                renderItem={({ item }) =>
                    <TouchableOpacity activeOpacity={0.8}  style={styles.featureBox} onPress={()=>props.show(item._id)} >
                        <View style={styles.featureBoxInside}>
                            <Image style={styles.featuredImageBox} source={{uri:item.imageUrl}} />
                        </View>
                        <View style={styles.featuredInfo}>
                            <Text style={styles.featuredText}>${item.price}</Text>
                            <Text style={styles.featuredText}>{item.name}</Text>
                        </View>

                    </TouchableOpacity>}
            />
        </View>
    ];
}

export default BestSell;

const styles = StyleSheet.create({
    subNav: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: WP(5),
        marginTop: 10,
    },
    subNavTitle: {
        fontWeight: "bold",
        color: "#000",
        fontSize: 28,
        textAlign: 'left',
        color: '#434343'
    },
    subNavMoreText: {
        fontSize: 18,
        color: "#656565"
    },
    feature: {
        paddingTop: 20,
        paddingLeft: 0,
        paddingBottom: 20
    },
    featureBox: {
        backgroundColor: "transparent",
        marginRight: 20,
        
    },
    featureBoxInside:{
         shadowColor: "#000",
         borderRadius:7,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        backgroundColor:"#fff",
        height: HP(25),
        width: WP(40),
       

    },
    featuredInfo:{
        paddingTop:15,

    },
    featuredImageBox: {
        justifyContent: "center",
        alignItems: 'center',
        resizeMode:"cover",
        height: "100%",
        width: "100%",
        overflow: 'hidden',
        borderRadius: 7
    },
    featuredText: {
        color: '#000',
        fontSize: 18,
        fontWeight: '400',
        marginBottom:7

    }

})