import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { WP, HP } from '../../utils/contants';
import Featured from '../../components/Featured/Featured';
import Categories from '../../components/Categories/Categories';
import BestSell from '../../components/BestSell/BestSell';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../../helper/User';
import { getBestSell, getFeatured } from '../../network/network';

class Home extends Component {
    state = {
        Categories: [
            {
                name: "Woman",
                image: require('../../assets/categories/woman.png')
            },
            {
                name: "Man",
                image: require('../../assets/categories/man.png')
            },
            {
                name: "Kids",
                image: require('../../assets/categories/kids.png')
            }
        ],
        Feature: [],
        BestSell: []
    }
    componentDidMount() {
        AsyncStorage.getItem('user')
            .then((response) => {
                
                let user = JSON.parse(response);
                User.setToken(user.jwt);
                console.log(user.jwt);
                getFeatured(user.jwt)
                    .then((response) => {
                        console.log(response, "!!!!!!!!!!!!!!!!!!!!!!!!!!!11");
                        this.setState({ Feature: response.data.products })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                getBestSell(user.jwt)
                    .then((response) => {
                        console.log(response, "!!!!!!!!!!!!!!!!!!!!!!!!!!!11");
                        this.setState({ BestSell: response.data.products })
                    })
                    .catch((error) => {
                        console.log(error);
                    })


            })




    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>

                    <Categories
                        list={this.state.Categories} />
                    <Featured
                        list={this.state.Feature}
                        name="Featured"
                        onPress={() => {
                            this.props.navigation.navigate('ProductsList', {
                                name: 'Featured', list: this.state.Feature
                            })
                        }}
                        show={(id) => {
                            this.props.navigation.navigate('Product', {
                                id
                            })
                        }}
                    />
                    <BestSell
                        list={this.state.BestSell}
                        name="Bestsell"
                        onPress={() => {
                            this.props.navigation.navigate('ProductsList', {
                                name: "Best Selling", list: this.state.BestSell
                            })
                        }}
                        show={(id) => { this.props.navigation.navigate('Product',{
                            id
                        }) }}
                    />

                </View>
            </ScrollView>

        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },


})