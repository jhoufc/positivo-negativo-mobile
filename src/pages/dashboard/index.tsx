import React, { useState, useContext, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button, TextInput, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { AuthContext } from '../../contexts/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthBaselineNav from '../../components/AuthBasilaneNav';



export default function Dashboard() {
    const [task, setTask] = useState({})
    const { signOut, user } = useContext(AuthContext);
    const [newTask, setNewTask] = useState(false);
    const altura = useRef(new Animated.Value(0)).current;
    const [list, setList] = useState([
        { key: 1, value: 'Just a Task' },
        { key: 2, value: 'Just a Task' },
        { key: 3, value: 'Just a Task' },
        { key: 4, value: 'Just a Task' },
        { key: 5, value: 'Just a Task' },
        { key: 6, value: 'Just a Task' },
        { key: 7, value: 'Just a Task' },
        { key: 8, value: 'Just a Task' },
        { key: 9, value: 'Just a Task' }
    ])

    async function handleNewTask() {
        let date = Date.now();
        alert(date)
        if (newTask) {
            setNewTask(false);
            Animated.timing(altura, {
                toValue: 0,
                useNativeDriver: false
            }).start();
            return;
        }
        setNewTask(true);

        Animated.timing(altura, {
            toValue: 150,
            useNativeDriver: false
        }).start();

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.dayContainer}>
                    <Text style={styles.day}>29</Text>
                    <TouchableOpacity>
                        <FontAwesome name="calendar" style={styles.calendar} />
                    </TouchableOpacity>
                </View>
                <Button title='sair do app' onPress={signOut}></Button>
                <View style={styles.profile}>
                    <Text style={styles.name}>{user.name}</Text>
                    <TouchableOpacity style={styles.avatar}>
                        <FontAwesome name="user-circle-o" style={styles.profileAvatar} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Tarefas</Text>
                <View style={styles.titleButtonContainer}>
                    <Text style={styles.subtitle}>Adicionar</Text>
                    <TouchableOpacity style={styles.squareButton} onPress={handleNewTask}>
                        <FontAwesome name='plus-square' style={styles.square} />
                    </TouchableOpacity>
                </View>
            </View>





            {/* {newTask ? (<Animated.View>
                <Animated.View style={{
                    height: altura,
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}>
                    <TextInput
                        placeholder='Nome da Tarefa'
                        placeholderTextColor={'#888'}
                        style={styles.input}></TextInput>
                </Animated.View>
            </Animated.View>) : (<></>)} */}


            <Animated.View>
                <Animated.View style={{
                    height: altura,
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}>
                    <TextInput
                        placeholder='Nome da Tarefa'
                        placeholderTextColor={'#888'}
                        style={styles.input}></TextInput>
                </Animated.View>
            </Animated.View>




            <FlatList style={{}}
                data={list}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) =>
                    <View style={styles.taskContainer}>
                        <Text>{item.value}</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttonNegative}>
                                <FontAwesome name='calendar-times-o' style={styles.negative} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonPositive}>
                                <FontAwesome name='calendar-check-o' style={styles.positive} />
                            </TouchableOpacity>

                        </View>
                    </View>}
            >

            </FlatList>

            <AuthBaselineNav />

            {/* <View style={styles.taskContainer}>
                <Text>Task One</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonNegative}>
                        <FontAwesome name='thumbs-down' style={styles.negative} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonPositive}>
                        <FontAwesome name='thumbs-up' style={styles.positive} />
                    </TouchableOpacity>

                </View>
            </View> */}


        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
    },
    input: {
        width: '95%',
        height: 40,
        backgroundColor: '#e6e6e6',
        marginBottom: 15,
        borderRadius: 4,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: 10
    },
    header: {
        width: '100%',
        height: 80,
        backgroundColor: '#3862a6',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
        padding: 10
    },
    dayContainer: {
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center'

    },
    day: {
        fontSize: 38,
        color: '#FFF'
    },
    profile: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        padding: 12
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        flex: 1,
        color: '#FFF'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center'
    },
    taskContainer: {
        height: 60,
        width: '100%',
        backgroundColor: '#68d0ed',
        paddingLeft: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 8,
        marginTop: 8
        // left: '50%'
    },
    calendar: {
        fontSize: 30,
        color: '#FFF',
        marginLeft: 8
    },
    profileAvatar: {
        fontSize: 61,
        color: '#FFF',
        opacity: 0.6
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    buttonPositive: {
        height: 60,
        width: 60,
        marginLeft: 8,
        backgroundColor: '#1ac914',
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonNegative: {
        height: 60,
        width: 60,
        marginLeft: 8,
        backgroundColor: '#F00',
        alignItems: 'center',
        justifyContent: 'center'

    },
    positive: {
        fontSize: 28,
        color: '#333'
    },
    negative: {
        fontSize: 28,
        color: '#333'

    },
    titleContainer: {
        height: 50,
        width: '100%',
        backgroundColor: '#264475',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8

    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    },
    titleButtonContainer: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subtitle: {
        marginRight: 8,
        fontSize: 18,
        color: '#fff'
    },
    squareButton: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    square: {
        fontSize: 44,
        color: '#1ac914'
    }

})