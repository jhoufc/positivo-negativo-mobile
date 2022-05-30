import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {AuthContext} from '../../contexts/AuthContext';

export default function SignIn() {
    const { signIn, loadingAuth } = useContext(AuthContext);
    const [usuario, setUser] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(){
        // alert(`${usuario} - ${senha}`)
        if(usuario === '' || password === '') return;

        await signIn({usuario, password})
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
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    {loadingAuth ? (
                    <ActivityIndicator size={32} color={'#DEDEDE'}/>

                    ) : (
                        <Text style={styles.textButton}>Entrar</Text>
                    )}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
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

    }
})