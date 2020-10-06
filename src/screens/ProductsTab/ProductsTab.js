
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ProductsFullView from '../../components/ProductsFullview/PrdocutsFullView';



class ProductsTab extends Component{
    state={ Feature:[
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
        },
   
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
    ]}

render(){
    return (
        <ScrollView style={styles.container} >
            <ProductsFullView
            name={this.props.navigation.getParam("name")}
            list={this.state.Feature}
            onPress={()=>{this.props.navigation.navigate('Product')}}
                />

        </ScrollView>
    );
}
}

export default ProductsTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },


})