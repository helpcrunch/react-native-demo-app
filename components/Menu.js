import React, {useState} from "react";
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {hcwToggleWidget} from 'rn-helpcrunch';
import VectorImage from 'react-native-vector-image';
import { useSignalEffect } from "@preact/signals-react";
import { isWidgetActive } from "../store";

function Menu() {
  const navigation = useNavigation();
  const [widgetReady, setWidgetReady] = useState(false);

  useSignalEffect(() => {
    setWidgetReady(isWidgetActive.value)
  });

  const openHome = () => {
    navigation.navigate('Home');
  };

  const openChat = () => {
    if (!widgetReady) {return;}
    hcwToggleWidget();
  };

  const openSecond = () => {
    navigation.navigate('Second');
  };

  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.navigationButton} onPress={openHome}>
        <VectorImage source={require('../assets/icons/home.svg')} />
        <Text style={styles.navigationButtonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.chatButton, (widgetReady ? null : styles.chatButton_disabled)]} onPress={openChat}>
        <VectorImage source={require('../assets/icons/chat.svg')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navigationButton} onPress={openSecond}>
        <VectorImage source={require('../assets/icons/dots.svg')} />
        <Text style={styles.navigationButtonText}>Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
    boxShadow: '0 -2 5 #ddd',
  },
  navigationButton: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  navigationButtonText: {
    textTransform: 'uppercase',
    color: '#797979',
  },
  chatButton: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    marginTop: -20,
    borderRadius: '50%',
    transform: 'translateY(0px)',
    backgroundColor: '#0061f6',
    boxShadow: '0 2 5 #333',
  },
  chatButton_disabled: {
    backgroundColor: '#ccc',
    opacity: 0.6,
  },
});

export default Menu;
