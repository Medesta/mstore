
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ProductsFullView from '../../components/ProductsFullview/PrdocutsFullView';



const ProductsTab =(props)=>{

    return (
        <ScrollView style={styles.container} >
            <ProductsFullView
            name={props.navigation.getParam("name")}
            list={props.navigation.getParam('list')}
            show={(id)=>{props.navigation.navigate('Product',
                {id}
            )}}
                />

        </ScrollView>
    );
}

export default ProductsTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },


})