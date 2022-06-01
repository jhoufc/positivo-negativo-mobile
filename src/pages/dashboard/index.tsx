import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { AuthContext } from '../../contexts/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context';
import Alert, { ToastConfigParams } from '../../components/Alert';




export default function Dashboard() {
    const [task, setTask] = useState({})
    const { signOut, user } = useContext(AuthContext);
    const [newTask, setNewTask] = useState(false);

    async function handleNewTask() {
        if (newTask) {
            setNewTask(false);
            const toast: ToastConfigParams = {
                type: 'info',
                text1: `haha ${newTask}`,
                position: 'top',
                isVisible: false
            }

            Alert({...toast});
            return;
        }
        setNewTask(true);
        const toast: ToastConfigParams = {
            type: 'info',
            text1: `ihul ${newTask}`,
            position: 'top',
            isVisible: false
        }

        Alert({...toast});
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


            <View style={styles.teste}>
                {newTask ? (
                    <View style={styles.newTask}>
                        <TextInput placeholder='Nome da Tarefa'>
                            
                        </TextInput>
                    </View>
                ) : (<></>)}

            </View>
            <View style={styles.taskContainer}>
                <Text>Task One</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonNegative}>
                        <FontAwesome name='thumbs-down' style={styles.negative} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonPositive}>
                        <FontAwesome name='thumbs-up' style={styles.positive} />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.taskContainer}>
                <Text>Task One</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonNegative}>
                        <FontAwesome name='thumbs-down' style={styles.negative} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonPositive}>
                        <FontAwesome name='thumbs-up' style={styles.positive} />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.taskContainer}>
                <Text>Task One</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonNegative}>
                        <FontAwesome name='thumbs-down' style={styles.negative} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonPositive}>
                        <FontAwesome name='thumbs-up' style={styles.positive} />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.taskContainer}>
                <Text>Task One</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonNegative}>
                        <FontAwesome name='thumbs-down' style={styles.negative} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonPositive}>
                        <FontAwesome name='thumbs-up' style={styles.positive} />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.taskContainer}>
                <Text>Task One</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonNegative}>
                        <FontAwesome name='thumbs-down' style={styles.negative} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonPositive}>
                        <FontAwesome name='thumbs-up' style={styles.positive} />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.taskContainer}>
                <Text>Task One</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonNegative}>
                        <FontAwesome name='thumbs-down' style={styles.negative} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonPositive}>
                        <FontAwesome name='thumbs-up' style={styles.positive} />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.taskContainer}>
                <Text>Task One</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonNegative}>
                        <FontAwesome name='thumbs-down' style={styles.negative} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonPositive}>
                        <FontAwesome name='thumbs-up' style={styles.positive} />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.taskContainer}>
                <Text>Task One</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonNegative}>
                        <FontAwesome name='thumbs-down' style={styles.negative} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonPositive}>
                        <FontAwesome name='thumbs-up' style={styles.positive} />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.taskContainer}>
                <Text>Task One</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonNegative}>
                        <FontAwesome name='thumbs-down' style={styles.negative} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonPositive}>
                        <FontAwesome name='thumbs-up' style={styles.positive} />
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
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
        backgroundColor: '#b5b5b5',
        paddingLeft: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 8
        // left: '50%'
    },
    calendar: {
        fontSize: 30,
        color: '#FFF',
        marginLeft: 8
    },
    profileAvatar: {
        fontSize: 61,
        color: '#999',
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
        color: '#b5b5b5'
    },
    negative: {
        fontSize: 28,
        color: '#b5b5b5'

    },
    titleContainer: {
        height: 50,
        width: '100%',
        backgroundColor: '#264475',
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8

    },
    title: {
        color: '#d5d5d5',
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
        color: '#d5d5d5'
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
    },
    newTask: {
        height: 540,
        transitionDelay: '2000ms',
        transitionDuration: '2000ms',
        transitionProperty: 'height',
        transitionTimingFunction: 'linear'
    }

})