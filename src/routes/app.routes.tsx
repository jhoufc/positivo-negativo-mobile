import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../pages/Dashboard';
import Calendar from '../pages/Calendar';

export type StackPramsList = {
    Dashboard: undefined;
    Calendar: undefined;
}


const Stack = createNativeStackNavigator<StackPramsList>();

function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
            <Stack.Screen name="Calendar" component={Calendar} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default AppRoutes;