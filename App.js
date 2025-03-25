import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';

import Router from './router';

function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </View>
  );
}

export default App;
