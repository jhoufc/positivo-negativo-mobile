import {View, Text, StyleSheet} from 'react-native'

export default function Header(){
    return(
        <View style={styles.container}>
            <Text>TaskApp</Text>
            <View>
                <Text>Usuário</Text>
                
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0FF', 
        height: 60,        
    }
})