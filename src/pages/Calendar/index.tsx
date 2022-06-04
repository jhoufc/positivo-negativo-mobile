import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import AuthBaselineNav from '../../components/AuthBasilaneNav';
import CustomCalendar from '../../components/CustomCalendar';

export default function MyCalendar() {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Calendário</Text>
                </View>
                <View style={styles.calendar}>
                    <CustomCalendar />
                </View>
            </SafeAreaView>
            <AuthBaselineNav />
        </>

    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    row: { width: '100%', flex: 1, backgroundColor: '#FFF', borderWidth: 1, borderColor: '#ccc', flexDirection: 'row' },
    col: { flexDirection: 'column', flex: 1, borderWidth: 1, borderColor: '#CCC', height: '100%', justifyContent: 'space-between' },
    calendar: {
        width: '96%',
        backgroundColor: '#FF0',
        height: '45%'
    },
    title: {
        fontSize: 26,
        marginBottom: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        fontWeight: '600',
        color: '#666'

    }
})