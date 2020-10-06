import React from 'react';
import { SafeAreaView,TouchableOpacity } from 'react-native';
import AuthStack from './src/routes/AuthStack/AuthStack';
import SwitchStack from './src/routes';


TouchableOpacity.defaultProps = { ...(TouchableOpacity.defaultProps || {}), delayPressIn: 0 };
const App = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
      {/* <AuthStack/>
      <HomeStack/> */}
      <SwitchStack/>
    </SafeAreaView>
  );
}

export default App;