import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack'

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Forgot from '../pages/Forgot';
export type StackPramsList = {
    SignIn: undefined;
    SignUp: undefined;
    Forgot: undefined;
}
const Stack = createNativeStackNavigator<StackPramsList>();
//const Stack = createStackNavigator();
function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
            <Stack.Screen name="Forgot" component={Forgot} options={{headerShown: false}}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default AuthRoutes;