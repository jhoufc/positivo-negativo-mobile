import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { AuthProvider, AuthContext } from './src/contexts/AuthContext';
import Toast from 'react-native-toast-message';
import {useContext}from 'react'
import AuthBaselineNav from './src/components/AuthBasilaneNav';


export default function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor={'#d5d5d5'} barStyle={"dark-content"} translucent={false} />
        <Routes />

        <Toast />
      </AuthProvider>
    </NavigationContainer>

  );
}


const styles = StyleSheet.create({

})