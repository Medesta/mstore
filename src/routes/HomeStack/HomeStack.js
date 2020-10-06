import { createAppContainer } from 'react-navigation';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Header from '../../components/Header/Header';
import Home from '../../screens/Home/Home';
import Product from '../../screens/Product/Product';
import ProductsTab from '../../screens/ProductsTab/ProductsTab';

const HomeStack = createStackNavigator({
 Home:{ 
     screen: Home,
     navigationOptions: () => ({
        header: (props) => <Header 
        menu={true}
        search={true}
        ring={true}

        />,
    })
    },
 ProductsList: { 
    screen: ProductsTab,
    navigationOptions: () => ({
       header: (props) => <Header 
       back={true}
       ring={true}
       {...props}

       />,
   })
   },
 Product: { 
    screen: Product,
    navigationOptions: () => ({
       header: (props) => <Header 
       back={true}
       ring={true}
       {...props}

       />,
   })
   }

}
, {
    defaultNavigationOptions: {
        headerShown: null,
        header:null
    },
},

);


export default createAppContainer(HomeStack);