import React, { useState, createContext, ReactNode,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {api} from '../services/api'
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

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProvider) {
    

    const [user, setUser] = useState<UserProps>({
        _id: '',
        name: '',
        user: '',
        token: ''
    });

    const [loading, setLoading] = useState(true);
    useEffect(() => {

        async function getUser(){
            
            //const userInfo = null;
            const userInfo = await AsyncStorage.getItem('@taskAppUser');
            let hasUser: UserBdInfo = JSON.parse(userInfo || '{}');

            if(Object.keys(hasUser).length > 0){
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

    async function signIn({usuario, password}: SignInProps){
        //CHAMADA API  
        
        setLoadingAuth(true);

        try{
            const response = await api.post('/auth-user',{usuario, password});
            const token = response.data.token;

            const {_id, name, user}: UserProps = response.data.user;

            const data = {
                ...response.data
            }

            await AsyncStorage.setItem('@taskAppUser', JSON.stringify(data));

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setUser({_id, name, user, token});
            setLoadingAuth(false);
        }
        catch(err){
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
        })
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, loading, loadingAuth, signOut }}>
            { children }
        </AuthContext.Provider>
    );
}