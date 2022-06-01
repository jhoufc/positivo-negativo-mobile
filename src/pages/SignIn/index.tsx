import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {AuthContext} from '../../contexts/AuthContext';
import {useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackPramsList} from '../../routes/auth.routes'

export default function SignIn() {
    const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();
    const { signIn, loadingAuth } = useContext(AuthContext);
    const [usuario, setUser] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(){
        // alert(`${usuario} - ${senha}`)
        if(usuario === '' || password === '') return;

        await signIn({usuario, password})
    }

    async function handleSignUp(){
        navigation.navigate('SignUp');
    }
    async function handleForgot(){
        navigation.navigate('Forgot');
    }
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/taskApp-logo.png')} />
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Usuário'
                    style={styles.input}
                    placeholderTextColor={'#474747'}
                    value={usuario}
                    onChangeText={setUser}
                    >
                </TextInput>
                <TextInput
                    placeholder='Senha'
                    style={styles.input}
                    placeholderTextColor={'#474747'}
                    textContentType={'password'}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    >
                </TextInput>
                <View style={styles.forgot}>
                    <TouchableOpacity style={styles.forgotLink} onPress={handleForgot}>
                        <Text style={styles.infoText}>Esqueceu sua senha ?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    {loadingAuth ? (
                    <ActivityIndicator size={32} color={'#DEDEDE'}/>

                    ) : (
                        <Text style={styles.textButton}>Entrar</Text>
                    )}
                </TouchableOpacity>
                <View style={styles.infoContainer}>
                    <Text>Não possui cadastro ? </Text>
                    <TouchableOpacity onPress={handleSignUp}><Text style={styles.infoText}>Cadastre-se</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dedede'
    },
    logo: {
        marginBottom: 5
    },
    inputContainer: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 15
    },
    input: {
        width: '95%',
        height: 40,
        backgroundColor: '#e6e6e6',
        marginBottom: 15,
        borderRadius: 4,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc'

    },
    button: {
        backgroundColor: '#098516',
        width: '95%',
        height: 45,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: '#DEDEDE',
        fontSize: 18,
        fontWeight: 'bold'

    },
    infoContainer: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center'
    },
    infoText: {
        color: '#0745e3'
    },
    forgot: {
        width: '95%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        flexDirection: 'row',
        padding: 2
    },
    forgotLink: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    }    
})