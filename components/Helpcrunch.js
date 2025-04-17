import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {
  HelpCrunchWidget,
  hcwUserAuth,
  hcwLogout,
  hcwOpenKBArticle,
  hcwSendUserMessage,
  hcwSetLocalization,
  hcwTypeUserMessage,
} from 'rn-helpcrunch';
import VectorImage from 'react-native-vector-image';
import { useSignals } from "@preact/signals-react/runtime";
import { isWidgetActive } from "../store";

const Helpcrunch = () => {
  const widgetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMethodsOpen, setIsMethodsOpen] = useState(false);
  useSignals();

  const userAuth = () => {
    hcwUserAuth({
      user_id: 'test_user'
    });
  };

  const logout = () => {hcwLogout();};

  const openKBArticle = () => {hcwOpenKBArticle({ articleId: 1, lang: 'en' });};

  const setLocalization = (localeName) => {hcwSetLocalization(localeName);};

  const typeUserMessage = () => {hcwTypeUserMessage('This is user message');};

  const sendUserMessage = () => {hcwSendUserMessage('This is user message');};

  // Use onReady event to user authentication
  const onReady = () => {
    userAuth();
    isWidgetActive.value = true;
  };

  const onError = (error) => {
    console.log('Error - ' + JSON.stringify(error));
  };

  const onMessage = (event) => {
    console.log('onMessage event ' + JSON.stringify(event));
  };

  const onChatClose = (event) => {
    setIsMethodsOpen(false);

    setTimeout(() => {
      setIsOpen(false);
    }, 250)
  };

  const onChatOpen = () => {
    setIsOpen(true);
  };

  const onCustomerMessage = (event) => {
    console.log('onCustomerMessage event ' + JSON.stringify(event));
  };

  const onAgentMessage = (event) => {
    console.log('onAgentMessage event ' + JSON.stringify(event));
  };

  const methodPress = (methodName) => {
    setIsMethodsOpen(false);

    switch (methodName) {
      case 'hcwLogout': {
        logout();
        break;
      }
      case 'hcwUserAuth': {
        userAuth();
        break;
      }
      case 'hcwOpenKBArticle': {
        openKBArticle();
        break;
      }
      case 'hcwSetLocalizationUK': {
        setLocalization('uk');
        break;
      }
      case 'hcwSetLocalizationEN': {
        setLocalization('en');
        break;
      }
      case 'hcwTypeUserMessage': {
        typeUserMessage();
        break;
      }
      case 'hcwSendUserMessage': {
        sendUserMessage();
        break;
      }
      default: {}
    }

  }

  return (
    <View style={[styles.container, (isOpen ? styles.container_open : null)]}>
      <View style={styles.menu_line}>
        <Text style={styles.menu_line_text}>Press to show available methods of widget &rarr; </Text>
        <Pressable style={styles.menu_line_button} onPress={() => {setIsMethodsOpen(!isMethodsOpen)}}>
          <VectorImage source={require('../assets/icons/burger.svg')} />
        </Pressable>
      </View>
      <View style={{flex: 1}}>
        <HelpCrunchWidget
          ref={widgetRef}
          organization="PASTE_YOUR_ORGANIZATION_HERE"
          appId="PASTE_YOUR_APPID_HERE"
          onReady={onReady}
          onError={onError}
          onMessage={onMessage}
          onChatClose={onChatClose}
          onChatOpen={onChatOpen}
          onCustomerMessage={onCustomerMessage}
          onAgentMessage={onAgentMessage}
        />
        <View style={[styles.methods, (isMethodsOpen ? styles.methods_open : null)]}>
          <View style={[styles.methods_inner]}>
            <Pressable style={styles.method_button} onPress={() => {methodPress('hcwLogout')}}>
              <Text style={styles.method_button_text}>hcwLogout</Text>
            </Pressable>
            <Pressable style={styles.method_button} onPress={() => {methodPress('hcwUserAuth')}}>
              <Text style={styles.method_button_text}>hcwUserAuth</Text>
            </Pressable>
            <Pressable style={styles.method_button} onPress={() => {methodPress('hcwSetLocalizationUK')}}>
              <Text style={styles.method_button_text}>hcwSetLocalization - uk</Text>
            </Pressable>
            <Pressable style={styles.method_button} onPress={() => {methodPress('hcwSetLocalizationEN')}}>
              <Text style={styles.method_button_text}>hcwSetLocalization - en</Text>
            </Pressable>
            <Pressable style={styles.method_button} onPress={() => {methodPress('hcwTypeUserMessage')}}>
              <Text style={styles.method_button_text}>hcwTypeUserMessage</Text>
            </Pressable>
            <Pressable style={styles.method_button} onPress={() => {methodPress('hcwSendUserMessage')}}>
              <Text style={styles.method_button_text}>hcwSendUserMessage</Text>
            </Pressable>
            <Pressable style={styles.method_button} onPress={() => {methodPress('hcwOpenKBArticle')}}>
              <Text style={styles.method_button_text}>hcwOpenKBArticle</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    width: 0,
    height: 0,
    overflow: 'hidden',
  },
  container_open: {
    width: '100%',
    height: '100%',
  },
  menu_line: {
    position: 'relative',
    zIndex: 999888,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
    boxShadow: '0 1 3 #ddd',
  },
  menu_line_text: {
    color: 'gray',
  },
  menu_line_button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    marginLeft: 5,
  },
  methods: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 999887,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.01)',
    transform: 'translateX(700%)',
    overflow: 'hidden',
  },
  methods_open: {
    transform: 'translateX(0)',
  },
  methods_inner: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 100,
    padding: 20,
    backgroundColor: '#fafafa',
    boxShadow: '-2 0 3 #dfdfdf',
  },
  method_button: {
    marginBottom: 12,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    borderRadius: 3,
    backgroundColor: '#5184d8',
  },
  method_button_text: {
    color: '#ffffff'
  },
});

export default Helpcrunch;
