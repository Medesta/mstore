import React from 'react';
import { SafeAreaView,TouchableOpacity } from 'react-native';
import Cart from './src/screens/Cart/Cart';
import Home from './src/screens/Home/Home';
import Intro from './src/screens/Introscreen/Intro';
import Login from './src/screens/Login/Login';
import Product from './src/screens/Product/Product';
import ProductsTab from './src/screens/ProductsTab/ProductsTab';
import Register from './src/screens/Register/Register';
import Checkout from './src/screens/Checkout/Checkout';
import Address from './src/screens/Address/Address';
import Profile from './src/screens/Profile/Profile';
import CreateAddress from './src/screens/CreateAddress/CreateAddress';
import Confirmation from './src/screens/Confirmation/Confirmation';



TouchableOpacity.defaultProps = { ...(TouchableOpacity.defaultProps || {}), delayPressIn: 0 };
const App = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
      {/* <Intro/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <Home/> */}
      {/* <ProductsTab/> */}
      {/* <Product/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      {/* <Address/> */}
      {/* <Profile/> */}
      {/* <CreateAddress/> */}
      <Confirmation/>

    </SafeAreaView>
  );
}

export default App;