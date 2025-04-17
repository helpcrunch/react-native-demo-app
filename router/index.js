import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "../screens/Home";
import Second from "../screens/Second";


const Router = () => {
  const Root = createStackNavigator();

  return (
    <Root.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <Root.Group>
        <Root.Screen name="Home" component={Home}/>
        <Root.Screen name="Second" component={Second}/>
      </Root.Group>
    </Root.Navigator>
  );
};

export default Router;
