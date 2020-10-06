import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { WP, HP } from '../../utils/contants';
import Featured from '../../components/Featured/Featured';
import Categories from '../../components/Categories/Categories';
import BestSell from '../../components/BestSell/BestSell';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Header/Header';
import ProductsFullView from '../../components/ProductsFullview/PrdocutsFullView';

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
        Feature:[
            {
                name:"Woman T-Shirt",
                price:'55.00',
                image:require('../../assets/featured/p1.png')
            },
            {
                name:"Man T-Shirt",
                price:'34.00',
                image:require('../../assets/featured/p2.png')
            },
            {
                name:"Woman Upper",
                price:'45.0',
                image:require('../../assets/featured/p3.png')
            },
            {
                name:"Blezer",
                price:'15.0',
                image:require('../../assets/featured/p4.png')
            }
        ],
        BestSell:[
            {
                name:"Woman T-Shirt",
                price:'55.00',
                image:require('../../assets/bestsell/p1.png')
            },
            {
                name:"Man T-Shirt",
                price:'34.00',
                image:require('../../assets/bestsell/p2.png')
            },
            {
                name:"Woman Upper",
                price:'45.0',
                image:require('../../assets/bestsell/p3.png')
            },
            {
                name:"Blezer",
                price:'15.0',
                image:require('../../assets/bestsell/p4.png')
            }
        ]
    }
    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <Header
                back={false}
                menu={true}
                ring={true}
                search={false}
                filter={true}
                searchBar={true}
                />
                <Categories
                list={this.state.Categories}/>
                <Featured
                list={this.state.Feature}
                />
                <BestSell
                list={this.state.BestSell}
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