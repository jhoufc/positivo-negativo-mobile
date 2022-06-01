import {View, Text, TextInput, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { StackPramsList } from '../../routes/auth.routes';
import { Ionicons } from '@expo/vector-icons';

export default function Forgot(){
    const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();

    async function handleSignIn(){
        navigation.navigate('SignIn');

    }

    async function handleSignUp(){
        navigation.navigate('SignUp');

    }
    return(
        <SafeAreaView style={styles.container}>
            <Ionicons name="construct" style={styles.icon} />
            <Text style={styles.text}>Em construção</Text>
            <TouchableOpacity onPress={handleSignIn} style={styles.voltar}><Text style={styles.voltarText}>VOLTAR</Text></TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    text: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#0745e3',

    },
    voltar: {
        height: 40,
        backgroundColor: '#098516',
        width: '55%',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    voltarText: {
        fontSize: 26,
        color: '#DEDEDE'
    },
    icon: {
        fontSize: 120,
        color: '#444'
    }
})