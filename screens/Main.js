import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    Text,
    Pressable,
} from 'react-native';
import {HelpCrunchWidget, hcwToggle, hcwUserAuth} from 'rn-helpcrunch';

const Main = props => {
    const widgetRef = useRef(null);

    // Use onReady event to user authentication
    const onReady = () => {
        hcwUserAuth({
            user_id: 'test_user'
        })
    };

    const toggleWidget = () => {
        hcwToggle();
    };

    // Unnecessary code, just for example
    const [isWidgetInitialized, setIsWidgetInitialized] = useState(false);

    const onError = (error) => {
        console.log('Error - ' + JSON.stringify(error));
    };

    const onMessage = event => {
        console.log('onMessage event ' + JSON.stringify(event));
    };

    const onCustomerMessage = event => {
        console.log('onCustomerMessage event ' + JSON.stringify(event));
    };

    const onAgentMessage = event => {
        console.log('onAgentMessage event ' + JSON.stringify(event));
    };

    useEffect(() => {
        setTimeout(() => {
            setIsWidgetInitialized(true);
        }, 1000)
    }, [widgetRef])
    // ---------------------------------

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, alignContent: 'center', justifyContent: 'center', backgroundColor: '#cecece'}}>
                <Text style={{textAlign: 'center'}}>
                    Demo app for ReactNative Helpcrunch widget
                </Text>
                <HelpCrunchWidget
                    ref={widgetRef}
                    organization="PASTE_ORGANIZATION_HERE"
                    appId="PASTE_APPID_HERE"
                    onReady={onReady}
                    onError={onError}
                    onMessage={onMessage}
                    onCustomerMessage={onCustomerMessage}
                    onAgentMessage={onAgentMessage}
                />
            </View>
            <View>
                <Pressable onPress={toggleWidget} style={{
                    padding: 20,
                    backgroundColor: isWidgetInitialized ? 'green' : 'red',
                    alignContent: 'center',
                }}
                           disabled={!isWidgetInitialized}
                >
                    <Text style={{textAlign: 'center'}}>{isWidgetInitialized ? 'Press to toggle widget' : 'Waiting widget initialization'}</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Main;
