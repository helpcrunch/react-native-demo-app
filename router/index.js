import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../screens/Main';

const Root = createStackNavigator();

const Router = () => {
  return (
    <Root.Navigator initialRouteName='Main'>
      <Root.Screen name="Main" component={Main} />
    </Root.Navigator>
  );
};

export default Router;
