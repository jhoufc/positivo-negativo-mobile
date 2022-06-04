import {View, Text, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { StackPramsList } from '../../routes/app.routes';

export default function AuthBaselineNav(){
    const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();

    function handleCalendar(){
        navigation.push('Calendar');
    }
    function handleTasks(){
        navigation.push('Dashboard');

    }
    function handleOptions(){

    }

    return(
        <View style={{
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            bottom: 0,

        }}>
            <TouchableOpacity onPress={handleCalendar}style={{
                height: 60,
                backgroundColor: '#37c8f0',
                width: '35%',
                justifyContent: 'center',
                alignItems: 'center',
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
            }}>
                <FontAwesome name="calendar-o" size={38} color='#333' />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleTasks} style={{
                height: 60,
                backgroundColor: '#333',
                width: '30%',
                justifyContent: 'center',
                alignItems: 'center',
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,


            }}>
                <FontAwesome name="tasks" size={44} color="black" style={{
                    color: '#37c8f0',
                }} />
            </TouchableOpacity>
            <TouchableOpacity style={{
                height: 60,
                backgroundColor: '#37c8f0',
                width: '35%',
                justifyContent: 'center',
                alignItems: 'center',
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,

            }}>
                <FontAwesome name="commenting-o" size={38} color="black" />
            </TouchableOpacity>
        </View>
    )
}