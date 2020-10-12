import { createAppContainer } from 'react-navigation';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Header from '../../components/Header/Header';
import Home from '../../screens/Home/Home';
import Product from '../../screens/Product/Product';
import ProductsTab from '../../screens/ProductsTab/ProductsTab';
import Cart from '../../screens/Cart/Cart';
import { createDrawerNavigator } from "react-navigation-drawer";
import { SCREEN_WIDTH } from '../../utils/contants';
import Sidemenu from '../../components/Sidemenu/Sidemenu';
import Checkout from '../../screens/Checkout/Checkout';
import Address from '../../screens/Address/Address';
import CreateAddress from '../../screens/CreateAddress/CreateAddress';
import Confirmation from '../../screens/Confirmation/Confirmation';
import MyOrders from '../../screens/MyOrders/MyOrders';




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
   },
   Cart: { 
    screen: Cart,
    navigationOptions: () => ({
       header: (props) => <Header 
       back={true}
       {...props}

       />,
   })
   },
   Checkout: { 
    screen: Checkout,
    navigationOptions: () => ({
       header: (props) => <Header 
       back={true}
       {...props}

       />,
   })
   },
   Address: { 
    screen: Address,
    navigationOptions: () => ({
       header: (props) => <Header 
       back={true}
       {...props}

       />,
   })
   },
   CreateAddress: { 
    screen: CreateAddress,
    navigationOptions: () => ({
       header: (props) => <Header 
       back={true}
       {...props}

       />,
   })
   },
   Confirmation:{
       screen:Confirmation,
       navigationOptions: () =>({
        
       })

},
MyOrders:{
    screen:MyOrders,
    navigationOptions: () =>({
        
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

export const AppDrawer = createDrawerNavigator({
    Home: HomeStack,
}
    ,
    {
        contentComponent: props => <Sidemenu {...props} />,
        drawerWidth: SCREEN_WIDTH * 0.68,
        drawerType: "front",
        drawerBackgroundColor: "transparent",
        overlayColor: 'rgba(0,0,0, 0.7)',
        // overlayColor: 'transparent',
    },
)
export default AppDrawerContainer = createAppContainer(AppDrawer)

// export default createAppContainer(HomeStack);