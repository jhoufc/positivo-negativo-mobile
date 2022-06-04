import React, { useState, createContext, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast, { ToastProps } from 'react-native-toast-message';
import Alert, { ToastConfigParams } from '../components/Alert';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { StackPramsList } from '../routes/auth.routes';

import { api } from '../services/api'
import AuthBaselineNav from '../components/AuthBasilaneNav';


type UserBdInfo = {
    token: string;
    user: UserProps;
}


type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    loadingAuth: boolean;
    loading: boolean;
    signOut: () => Promise<void>;
    signUp: (credentials: SignUpProps) => Promise<void>;
    verify: (credentials: VerifyProps) => Promise<void>;
    exists: boolean;
}

type UserProps = {
    _id: string;
    name: string;
    user: string;
    token: string;
}

type AuthProvider = {
    children: ReactNode;
}

type SignInProps = {
    usuario: string;
    password: string;
}

type SignUpProps = {
    name: string;
    user: string;
    password: string;
}

type VerifyProps = {
    user: string;
}
export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProvider) {

    const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();

    const [user, setUser] = useState<UserProps>({
        _id: '',
        name: '',
        user: '',
        token: ''
    });
    const [exists, setExists] = useState(false);

    async function asyncSetExists(exist: boolean) {
        setExists(exist);
    }
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        async function getUser() {

            //const userInfo = null;
            const userInfo = await AsyncStorage.getItem('@taskAppUser');
            let hasUser: UserBdInfo = JSON.parse(userInfo || '{}');

            if (Object.keys(hasUser).length > 0) {
                api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`;

                setUser({
                    _id: hasUser.user._id,
                    name: hasUser.user.name,
                    user: hasUser.user.user,
                    token: hasUser.token
                })
            }


            setLoading(false);


        }

        getUser();

    }, []);

    const isAuthenticated = !!user._id;
    const [loadingAuth, setLoadingAuth] = useState(false)

    async function signIn({ usuario, password }: SignInProps) {
        //CHAMADA API  

        setLoadingAuth(true);

        try {
            const response = await api.post('/auth-user', { usuario, password });
            const token = response.data.token;

            const { _id, name, user }: UserProps = response.data.user;

            const data = {
                ...response.data
            }

            await AsyncStorage.setItem('@taskAppUser', JSON.stringify(data));

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setUser({ _id, name, user, token });
            setLoadingAuth(false);

            const toast: ToastConfigParams = {
                type: 'info',
                text1: `Seja bem vindo ${name} !`
            }

            Alert(toast);



        }
        catch (err) {
            console.log('erro ao acessar', err);
            setLoadingAuth(false);
        }
    }

    async function signOut() {
        await AsyncStorage.clear()
            .then(() => {
                setUser({
                    _id: '',
                    name: '',
                    user: '',
                    token: ''
                })
                const toast: ToastConfigParams = {
                    type: 'info',
                    text1: `Até logo`
                }

                Alert(toast);
            })
    }

    async function signUp({ name, user, password }: SignUpProps) {
        setLoadingAuth(true)

        try {
            await api.post('/create-user', { name, user, password })
                .then((res) => {
                    Alert({ type: 'success', text1: `Usuário ${res.data.user.user} cadastrado com sucesso` });
                    navigation.navigate('SignIn');

                })
            setLoadingAuth(false)

        } catch (err) {
            Alert({ type: 'error', text1: 'Algo deu errado', text2: err })
            setLoadingAuth(false)
        }
    }

    async function verify({ user }: VerifyProps) {
        setLoadingAuth(true)
        try {
            const response = await api.get(`/verify?user=${user}`)
                .then((res) => {
                    console.log(res.data.exists);
                    setExists(res.data.exists);
                    console.log(`existis no then ${exists}`);
                    if (res.data.exists)
                        Alert({ type: 'error', text1: 'Usuário indisponível' });
                    else
                        Alert({ type: 'success', text1: 'Usuário disponível para cadastro' });

                });

            setLoadingAuth(false);

        } catch (err) {
            setLoadingAuth(false);
            console.log(err)
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, loading, loadingAuth, signOut, signUp, verify, exists }}>
            {children}

        </AuthContext.Provider>
    );
}