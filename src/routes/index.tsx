import React, {useContext} from "react";
import {View, ActivityIndicator} from 'react-native';

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

import {AuthContext} from '../contexts/AuthContext'
import { SafeAreaView } from "react-native-safe-area-context";

function Routes(){
    const { isAuthenticated, loading } = useContext(AuthContext);
    
    // const force = true;
    // if(force){
   if(loading){
        return(
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: '#3862a6',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <ActivityIndicator size={60} color={'#FFF'}/>
            </SafeAreaView>
        )
    }
    return (
        isAuthenticated ? <AppRoutes /> : <AuthRoutes/>
    );
}


export default Routes;