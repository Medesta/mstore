import React from 'react';
import { SafeAreaView,TouchableOpacity } from 'react-native';
import Intro from './src/screens/Introscreen/Intro';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register'

TouchableOpacity.defaultProps = { ...(TouchableOpacity.defaultProps || {}), delayPressIn: 0 };
const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <Intro/> */}
      {/* <Login/> */}
      <Register/>

    </SafeAreaView>
  );
}

export default App;