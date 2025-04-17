import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const Home = (props) => {
  return (
    <View style={{flex: 1, alignContent: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
      <Text style={{textAlign: 'center'}}>
        Home screen
      </Text>
    </View>
  );
};

export default Home;
