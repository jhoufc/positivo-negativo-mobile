import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from '../SignIn';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackPramsList } from '../../routes/auth.routes'
import Alert from '../../components/Alert';
import { ToastConfigParams } from '../../components/Alert';
import { AuthContext } from '../../contexts/AuthContext';


export default function SignUp() {
    const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();
    const [colorBorder, setcolorBorder] = useState(false)
    const { signUp, verify, loadingAuth, exists } = useContext(AuthContext);


    const [cUser, setcUser] = useState(true);
    const [cName, setcName] = useState(true);
    const [cPassword, setcPassword] = useState(true);
    const [cPasswordCheck, setcPasswordCheck] = useState(true);


    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [isMatch, setIsMatch] = useState(true);

    function resetColorsInput() {
        setcUser(true);
        setcName(true);
        setcPassword(true);
        setcPasswordCheck(true);
    }
    async function handleRegister() {
        await handleVerify();
        resetColorsInput()
        if (user === '') setcUser(false);
        if (name === '') setcName(false);
        if (password === '') setcPassword(false);
        if (passwordCheck === '') setcPasswordCheck(false);

        if (user === '' || name === '' || password === '' || passwordCheck === '') {
            const toast: ToastConfigParams = {
                type: 'error',
                text1: `Preencha todos os campos.`,
            }
            Alert(toast);
            return;
        }

        if (password != passwordCheck) {
            Alert({ type: 'error', text1: 'Senhas não conferem' })
            setcPassword(false);
            setcPasswordCheck(false);
            return;
        }
        
        if(exists) return;

        signUp({user,name,password});


    }

    async function handleVerify() {
        if (user === '')
            Alert({ type: 'info', text1: 'Digite um usuário' })
        await verify({ user });
    }

    async function handleSignIn() {
        navigation.navigate('SignIn');
    }

    return (
        <SafeAreaProvider style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/taskApp-logo.png')} />
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Digite seu nome'
                    style={[styles.input, cName ? {} : { borderColor: '#F00' }]}
                    placeholderTextColor={'#474747'}
                    value={name}
                    onChangeText={setName}
                >
                </TextInput>
                <View style={thisStyle.user}>
                    <TextInput
                        placeholder='Crie um usuário'
                        style={[thisStyle.verifyInput, exists ? { borderColor: '#F00' } : {}]}
                        placeholderTextColor={'#474747'}
                        value={user}
                        onChangeText={setUser}
                    >
                    </TextInput>
                    <TouchableOpacity style={thisStyle.verify} onPress={handleVerify}>
                        {loadingAuth ? (
                            <ActivityIndicator size={32} color={'#DEDEDE'} />

                        ) : (
                            <Text style={thisStyle.textButton}>Verificar</Text>
                        )}
                    </TouchableOpacity>
                </View>
                <TextInput
                    placeholder='Digite uma senha'
                    style={[styles.input, cPassword ? {} : { borderColor: '#F00' }]}
                    placeholderTextColor={'#474747'}
                    textContentType={'password'}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                >
                </TextInput>
                <TextInput
                    placeholder='Repita a senha'
                    style={[styles.input, cPasswordCheck ? {} : { borderColor: '#F00' }]}
                    placeholderTextColor={'#474747'}
                    textContentType={'password'}
                    secureTextEntry={true}
                    value={passwordCheck}
                    onChangeText={setPasswordCheck}
                >
                </TextInput>
                {
                    password === passwordCheck ? (
                        <></>
                    ) : (
                        <View style={thisStyle.check}>
                            <Text style={thisStyle.err}>Senhas não conferem</Text>
                        </View>
                    )
                }
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    {loadingAuth ? (
                        <ActivityIndicator size={32} color={'#DEDEDE'} />

                    ) : (
                        <Text style={styles.textButton}>Cadastrar</Text>
                    )}
                </TouchableOpacity>
                <View style={styles.infoContainer}>
                    <Text>Já possui uma conta ? </Text>
                    <TouchableOpacity onPress={handleSignIn}><Text style={styles.infoText}>Faça Login</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaProvider>
    )
}

const thisStyle = StyleSheet.create({
    check: {
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        left: 0,
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 10
    },
    err: {
        fontSize: 12,
        color: 'red'
    },
    user: {
        flexDirection: 'row',
        width: '95%'
    },
    verify: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        height: 40,
        backgroundColor: '#098516',
        width: '24%',
        marginLeft: '2%',
        borderRadius: 4
    },
    verifyInput: {
        width: '74%',
        height: 40,
        backgroundColor: '#e6e6e6',
        marginBottom: 15,
        borderRadius: 4,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    textButton: {
        color: '#DEDEDE',
        fontSize: 14,
        fontWeight: 'bold'
    }
})