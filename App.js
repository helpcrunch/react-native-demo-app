import {NavigationContainer} from '@react-navigation/native';
import React from 'react';


import Router from './router';
import Menu from './components/Menu';
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";

import Helpcrunch from "./components/Helpcrunch";
import {View} from "react-native";

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, position: 'relative'}}>
        <NavigationContainer>
          <View style={{flex: 1}}>
            <Router />
            <Helpcrunch />
          </View>
          <Menu />
        </NavigationContainer>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
