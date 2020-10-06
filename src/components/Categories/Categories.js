import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { WP, HP } from '../../utils/contants';
import { FlatList } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

const Categories = (props) => {
    return [
        <View style={styles.subNav}>
            <Text style={styles.subNavTitle}>
                Categories
        </Text>
            <TouchableOpacity style={styles.subNavMore}>
                <Text style={styles.subNavMoreText}>
                    See all
        </Text>
            </TouchableOpacity>
        </View>,
        <View style={styles.category}>
            <FlatList
                ListHeaderComponent={() => <View style={{ marginLeft: 20 }} />}
                ListFooterComponent={() => <View style={{ marginRight: WP(3) }}></View>}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                data={props.list}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.categoryBox} >
                        <ImageBackground style={styles.categoryImageBox} source={item.image} imageStyle={{ borderRadius: 10 }}>
                            <Text style={styles.categoryTitle}>{item.name}</Text>
                        </ImageBackground>
                    </TouchableOpacity>}
            />
        </View>
    ];
}

export default Categories;

const styles = StyleSheet.create({
    subNav: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: WP(5),
        marginTop: 20,
    },
    subNavTitle: {
        fontWeight: "normal",
        color: "#000",
        fontSize: 28,
        textAlign: 'left',
        color: '#434343'
    },
    subNavMoreText: {
        fontSize: 18,
        color: "#656565"
    },
    categoryBox: {
        marginTop: 20,
        marginBottom: 20,
        height: HP(12),
        width: WP(37),
        borderRadius:10,
        backgroundColor: "#fff",
        marginHorizontal: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 10,
    },
    categoryImageBox: {
        justifyContent: "center",
        alignItems: 'center',
        height: "100%",
        width: "100%",
        overflow: 'hidden'
    },
    categoryTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'

    }

})