import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const Second = (props) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, alignContent: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
        <Text style={{textAlign: 'center'}}>
          Second screen
        </Text>
      </View>
    </View>
  );
};

export default Second;
