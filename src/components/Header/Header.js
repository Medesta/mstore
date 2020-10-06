import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { WP, HP } from '../../utils/contants';

const Header = (props) => {
    return (
        <View>
            <View style={styles.header}>
                <View style={styles.headerContainer}>
                    {props.back ?
                        <View>
                            <TouchableOpacity style={styles.Icon} onPress={()=>{props.navigation.pop()}}>
                                <Image
                                    style={styles.backProp}
                                    source={require('../../assets/back.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        :
                        null
                    }
                    {
                        props.menu ?
                            <View>
                                <TouchableOpacity style={styles.Icon}>
                                    <Image
                                        style={styles.menuProp}
                                        source={require('../../assets/menu.png')}
                                    />
                                </TouchableOpacity>
                            </View> :
                            null

                    }
                </View>
                <View style={styles.headerContainer}>
                    {props.search ?
                        <View>
                            <TouchableOpacity style={styles.Icon}>
                                <Image
                                    style={styles.searchProp}
                                    source={require('../../assets/search-dark.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        :
                        null
                    }
                    {
                        props.ring ?
                            <View>
                                <TouchableOpacity style={styles.Icon}>
                                    <Image
                                        style={styles.ringProp}
                                        source={require('../../assets/ring.png')}
                                    />
                                </TouchableOpacity>
                            </View> :
                            null

                    }
                    {
                        props.filter ?
                            <View>
                                <TouchableOpacity style={styles.Icon}>
                                    <Image
                                        style={styles.filterProp}
                                        source={require('../../assets/filter.png')}
                                    />
                                </TouchableOpacity>
                            </View> :
                            null

                    }

                </View>
            </View>
           {props.searchBar?
            <View style={styles.searchBar}>
            <View style={styles.InputIconBox}>
                <TouchableOpacity style={styles.InputIcon}>
                    <Image
                        style={styles.searchInputProp}
                        source={require('../../assets/search.png')}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TextInput style={styles.search} placeholder="Search Your Product" />
            </View>
        </View>:
        null}
        </View >
    );
}

export default Header;

const styles = StyleSheet.create({

    Icon: {
        width: WP(7) * 1.56,
        height: 50,
        justifyContent: "center",
        alignItems: 'center'
    },
    InputIconBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,

    },
    searchInputProp: {
        width: WP(4) * 1.56,
        height: WP(6),
    },
    backProp: {
        width: WP(5) * 1.56,
        height: HP(2)
    },

    menuProp: {
        width: WP(4) * 1.56,
        height: WP(6)
    },

    ringProp: {
        width: WP(3) * 1.56,
        height: WP(6),
    },

    filterProp: {
        width: WP(3) * 1.56,
        height: WP(6),
    },
    searchProp: {
        width: WP(3) * 1.65,
        height: WP(5),
    },
    header: {
        marginTop: HP(0),
        width: WP(100),
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor: "#fff",
        padding: WP(4),
        paddingBottom:0
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'center'
    },
    searchBar: {

        width: WP(94),
        alignSelf: "center",
        elevation: 8,
        shadowColor: '#f6f6f6',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.65,
        shadowRadius: 5.66,
        backgroundColor: "#fff",
        borderRadius: 5,
        flexDirection:'row',
        padding:5,
        overflow:"hidden"
    },
    search:{
        fontSize:18,
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        maxWidth:WP(75)
    }


})