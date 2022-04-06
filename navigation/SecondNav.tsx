import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import TabOneScreen from '../screens/TabOneScreen';

export default function SecondNav() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login">
                {props => <Login {...props} />}
                </Stack.Screen>
                <Stack.Screen name="TabOneScreen" component={TabOneScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}